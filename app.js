/* Villa Mona Lisa — application des hôtes */
(function () {
  'use strict';
  const V = window.VILLA, UIT = window.UI, S = window.SERVICES, CATS = window.CATS, INFO = window.VILLA_INFOS, GUIDE = window.GUIDE;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = { get(k, d) { try { const v = localStorage.getItem('mona_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('mona_' + k, JSON.stringify(v)); } catch (e) { } } };

  /* Hôte et dates : lien personnalisé ?nom=Famille%20Durand&du=2026-11-12&au=2026-11-19&lang=en */
  const qs = new URLSearchParams(location.search);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const addD = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const parseD = s => { const d = s ? new Date(s + 'T00:00:00') : null; return d && !isNaN(d) ? d : null; };
  const guest = { nom: qs.get('nom') || store.get('nom', 'Famille Durand'), du: parseD(qs.get('du')) || addD(today, -1), au: parseD(qs.get('au')) || addD(today, 6) };
  if (qs.get('nom')) store.set('nom', guest.nom);
  let lang = qs.get('lang') || store.get('lang', (navigator.language || 'fr').slice(0, 2));
  if (!UIT[lang]) lang = 'fr';
  let view = 'accueil', cat = 'tout';
  let cart = store.get('cart', []), resas = store.get('resas', []);
  const t = k => (UIT[lang] || UIT.fr)[k] || UIT.fr[k] || k;
  const L = o => (o && typeof o === 'object') ? (o[lang] || o.fr) : o;
  const locale = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', ar: 'ar-MA' }[lang];
  const dfmt = (d, o) => d.toLocaleDateString(locale, o || { day: 'numeric', month: 'long' });
  const mad = n => n.toLocaleString(locale) + ' ' + (lang === 'ar' ? 'درهم' : 'MAD');
  const eur = n => '≈ ' + Math.round(n / V.tauxEur).toLocaleString(locale) + ' €';
  const uniteTxt = u => ({ pers: t('par_pers'), sejour: t('sejour_entier'), trajet: t('par_trajet'), heure: t('par_heure') }[u] || '');

  /* Icônes */
  const P = {
    chef: '<path d="M7 21h10M8 21v-6M16 21v-6M6 15h12M6 15a4 4 0 0 1-1-7.9A4.5 4.5 0 0 1 12 4a4.5 4.5 0 0 1 7 3.1A4 4 0 0 1 18 15"/>',
    cafe: '<path d="M4 10h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3c0 1.5 1.5 1.5 1.5 3M12 3c0 1.5 1.5 1.5 1.5 3"/>',
    panier: '<path d="M4 9h16l-1.5 10a2 2 0 0 1-2 1.7h-9a2 2 0 0 1-2-1.7zM8 9l3-5M16 9l-3-5M9 13v4M15 13v4"/>',
    spa: '<path d="M12 21c-4.5 0-8-3-8-7 3 0 6 1.5 8 4 2-2.5 5-4 8-4 0 4-3.5 7-8 7zM12 18c0-4 0-8 0-8M12 10c-2-1.5-2.5-4-1-6.5 1.5 2.5 1 5-1 6.5M12 10c2-1.5 2.5-4 1-6.5"/>',
    mains: '<path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V11M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M7 11a2 2 0 0 0-3 1.7l2.5 5A5 5 0 0 0 11 21h1a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 0 0-3 0"/>',
    soleil: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    avion: '<path d="M10.5 13.5 3 11l1.5-1.5 8 1L17 6a2.1 2.1 0 0 1 3 3l-4.5 4.5 1 8L15 23l-2.5-7.5L9 19v3l-1.5 1L6 19l-4-1.5L3 16h3z"/>',
    voiture: '<path d="M5 17h14v-4.5L17 7H7L5 12.5zM5 17v2M19 17v2M5 12.5h14"/><circle cx="8" cy="14.5" r="1"/><circle cx="16" cy="14.5" r="1"/>',
    dune: '<path d="M2 18c4-5 8-7 12-5 3 1.5 5 1 8-1M2 21h20M17 5a2 2 0 1 0 0 .01"/>',
    ballon: '<path d="M12 2a7 7 0 0 0-7 7c0 4 3.5 7 5 8h4c1.5-1 5-4 5-8a7 7 0 0 0-7-7zM10 17l.5 3h3l.5-3M12 2c-2 2-3 4.5-3 7s1 5 1 8M12 2c2 2 3 4.5 3 7s-1 5-1 8"/>',
    etoile: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    eclat: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    piscine: '<path d="M2 18c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M2 21c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0M8 9h8M8 12.5h8"/>',
    lit: '<path d="M3 18V8M3 14h18v4M21 14v-2.5a3 3 0 0 0-3-3h-7v5.5M7 11.5a1.5 1.5 0 1 0 0 .01"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1"/>',
    cle: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M18 5l2 2"/>',
    wa: '<path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.6zM8.5 9c.3 2.8 3.4 5.9 6.3 6.3l1.3-1.6-2-1-1 .8a5 5 0 0 1-2.6-2.6l.8-1-1-2z"/>',
    tel: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
    home: '<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
    villa: '<path d="M4 21V10a8 8 0 0 1 16 0v11M2 21h20M9 21v-6a3 3 0 0 1 6 0v6"/>',
    services: '<path d="M4 17h16M6 17a6 6 0 0 1 12 0M12 8V6M10 6h4M3 20h18"/>',
    guide: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    moi: '<path d="M7 3h10a2 2 0 0 1 2 2v16l-7-3-7 3V5a2 2 0 0 1 2-2zM9 8h6M9 12h4"/>',
    cadenas: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    ok: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    sac: '<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>'
  };
  const ic = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k] || P.etoile}</svg>`;

  function toast(m) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = m; document.body.appendChild(d); setTimeout(() => d.remove(), 2300); }
  const waLink = msg => `https://wa.me/${V.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* Illustration de l'en-tête : arche, palmiers, coucher de soleil, zellige */
  const SCENE = `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs><linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B4C40"/><stop offset=".55" stop-color="#B4552D" stop-opacity=".75"/><stop offset="1" stop-color="#D9B87F"/></linearGradient>
    <pattern id="zel" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M12 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="none" stroke="#D9B87F" stroke-opacity=".18"/></pattern>
    <clipPath id="arche"><path d="M120 250V120a80 80 0 0 1 160 0v130z"/></clipPath></defs>
    <rect width="400" height="250" fill="url(#zel)"/>
    <g transform="translate(110 0)"><g clip-path="url(#arche)"><rect x="100" y="30" width="200" height="230" fill="url(#ciel)"/>
      <circle cx="200" cy="168" r="30" fill="#F6D9A8" opacity=".9"/>
      <path d="M100 196c40-12 80-14 120-6s60 8 80 4v66H100z" fill="#1E3A31" opacity=".55"/>
      <path d="M100 214h200v46H100z" fill="#7FA7A0" opacity=".55"/><path d="M110 222h60M190 230h70M130 238h50" stroke="#F6EEDF" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
      <g fill="#14271F"><path d="M150 214c2-30 4-50 10-70 1 22-2 44-4 70z"/><path d="M158 146c-14-8-30-6-40 2 14-2 26 0 40-2zm2 0c10-12 26-16 40-12-14 2-26 6-40 12zm-2 0c-10-14-12-28-6-38 0 12 2 24 6 38zm2 0c14-2 28 4 34 14-12-6-22-10-34-14z"/>
      <path d="M262 214c-2-24-6-40-12-56 0 18 4 36 6 56z"/><path d="M250 158c12-6 26-4 34 4-12-2-22-2-34-4zm-1 0c-8-10-20-12-30-8 10 0 20 4 30 8zm1 0c6-12 6-22 0-30 2 10 1 20 0 30z"/></g></g>
    <path d="M120 250V120a80 80 0 0 1 160 0v130" fill="none" stroke="#D9B87F" stroke-width="2.5"/>
    <path d="M108 250V120a92 92 0 0 1 184 0v130" fill="none" stroke="#D9B87F" stroke-opacity=".35"/></g>
  </svg>`;


  const SCN = {
    piscine: ['#2B4C40', '#7FA7A0', '<rect x="0" y="120" width="320" height="80" fill="#7FA7A0"/><path d="M20 140h80M140 152h90M60 166h70" stroke="#F6EEDF" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/><path d="M0 120h320" stroke="#D9B87F" stroke-width="3"/><path d="M40 120V60a30 30 0 0 1 60 0v60M130 120V60a30 30 0 0 1 60 0v60M220 120V60a30 30 0 0 1 60 0v60" fill="#B4552D" fill-opacity=".55" stroke="#D9B87F" stroke-width="2"/>'],
    suite: ['#EADCC6', '#B8935A', '<rect x="40" y="110" width="240" height="50" rx="8" fill="#FFFBF4"/><rect x="40" y="80" width="240" height="40" rx="10" fill="#F4EBDD" stroke="#B8935A"/><rect x="70" y="92" width="70" height="22" rx="8" fill="#FFFBF4"/><rect x="180" y="92" width="70" height="22" rx="8" fill="#FFFBF4"/><path d="M130 20v40M160 14v46M190 20v40" stroke="#B4552D" stroke-width="3"/><circle cx="130" cy="62" r="6" fill="#D9B87F"/><circle cx="160" cy="62" r="6" fill="#D9B87F"/><circle cx="190" cy="62" r="6" fill="#D9B87F"/>'],
    rooftop: ['#B4552D', '#D9B87F', '<circle cx="230" cy="90" r="34" fill="#F6D9A8"/><path d="M0 130l60-40 50 30 70-50 60 40 80-30v120H0z" fill="#2B4C40" opacity=".7"/><path d="M0 150h320v50H0z" fill="#1E3A31"/><path d="M30 150v-20h60v20M200 150v-14h80v14" fill="#F4EBDD"/>'],
    hammam: ['#5A6B5F', '#C9BDA7', '<path d="M60 200V90a100 100 0 0 1 200 0v110" fill="#EADCC6" opacity=".8"/><circle cx="110" cy="80" r="5" fill="#FFF8EC"/><circle cx="160" cy="60" r="5" fill="#FFF8EC"/><circle cx="210" cy="80" r="5" fill="#FFF8EC"/><circle cx="135" cy="105" r="4" fill="#FFF8EC"/><circle cx="185" cy="105" r="4" fill="#FFF8EC"/><rect x="100" y="150" width="120" height="16" rx="6" fill="#B8935A"/><path d="M130 140c-6-10 6-14 0-24M160 140c-6-10 6-14 0-24M190 140c-6-10 6-14 0-24" stroke="#FFF8EC" stroke-width="2.5" fill="none" stroke-linecap="round"/>']
  };
  const scene = k => { const [a, b, d] = SCN[k]; return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="320" height="200" fill="url(#g${k})"/>${d}</svg>`; };

  function nuits() { return Math.max(1, Math.round((guest.au - guest.du) / 864e5)); }

  /* ---------- Rendu ---------- */
  function render() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const app = $('#app');
    const heroTitle = view === 'accueil' ? t('bienvenue') : t('tab_' + view);
    app.innerHTML = `<header class="hero"><div class="top"><span class="logo">Mona Lisa</span>
      <div class="lang" role="group" aria-label="${t('langue')}">${['fr', 'en', 'es', 'ar'].map(l => `<button data-l="${l}" class="${l === lang ? 'on' : ''}" aria-pressed="${l === lang}">${{ fr: 'FR', en: 'EN', es: 'ES', ar: 'ع' }[l]}</button>`).join('')}</div></div>
      <div class="scene">${SCENE}<div class="txt"><p>${view === 'accueil' ? esc(guest.nom) : 'Villa Mona Lisa'}</p><h1>${esc(heroTitle)}</h1>${view === 'accueil' ? `<div class="sub">${t('chez')}</div>` : ''}</div></div></header>
      <main id="main"></main>`;
    $$('.lang button').forEach(b => b.onclick = () => { lang = b.dataset.l; store.set('lang', lang); render(); });
    ({ accueil: vAccueil, villa: vVilla, services: vServices, guide: vGuide, moi: vMoi }[view])();
    tabs();
  }
  function tabs() {
    const items = [['accueil', 'home'], ['villa', 'villa'], ['services', 'services'], ['guide', 'guide'], ['moi', 'moi']];
    $('#tabs').innerHTML = `<div class="in">${items.map(([k, i]) => `<button data-v="${k}" class="${view === k ? 'on' : ''}" ${view === k ? 'aria-current="page"' : ''}>${ic(i)}<span>${t('tab_' + k)}</span>${k === 'moi' && cart.length ? `<span class="badge">${cart.length}</span>` : ''}</button>`).join('')}</div>`;
    $$('#tabs button').forEach(b => b.onclick = () => { view = b.dataset.v; render(); window.scrollTo(0, 0); });
  }

  function vAccueil() {
    const n = nuits(), jour = Math.floor((today - guest.du) / 864e5) + 1;
    const avant = jour < 1, fini = jour > n + 1;
    const pct = avant ? 0 : Math.min(100, Math.max(4, (jour / (n + 1)) * 100));
    const stayTxt = avant ? `${Math.ceil((guest.du - today) / 864e5)} ${t('jours_restants')}` : fini ? '' : `${t('jour_x')} ${jour} ${t('sur')} ${n + 1}`;
    $('#main').innerHTML = `
      <div class="card stay"><div class="row"><div><p class="label">${t('sejour')}</p><b>${dfmt(guest.du, { day: 'numeric', month: 'short' })} – ${dfmt(guest.au, { day: 'numeric', month: 'short' })}</b></div><span class="muted small">${n} ${t('nuits')}</span></div>
        ${stayTxt ? `<div class="prog" aria-hidden="true"><i style="width:${pct}%"></i></div><span class="small muted">${stayTxt}</span>` : ''}</div>
      <section class="sec card mot"><p class="label">${t('mot')}</p><p style="margin:0 0 14px;font-size:15.5px">« ${esc(L(V.mot))} »</p><div style="display:flex;align-items:center;gap:12px"><span class="avatar">${esc(V.majordome[0])}</span><span><b>${esc(V.majordome)}</b><br><span class="small muted">${esc(L(V.role))}</span></span></div></section>
      <section class="sec"><p class="label">${t('raccourcis')}</p><div class="tiles">
        <button class="tile" id="wifiT"><span class="ic">${ic('wifi')}</span><b>${t('wifi')}</b><span>${esc(V.wifi.reseau)}<br>${esc(V.wifi.mdp)}</span></button>
        <button class="tile" id="horT"><span class="ic">${ic('cle')}</span><b>${t('arrivee')} · ${t('depart')}</b><span>${V.arrivee} · ${V.depart}</span></button>
        <a class="tile dark" href="${waLink((lang === 'fr' ? 'Bonjour, ici ' : 'Hello, this is ') + guest.nom + ' (Villa Mona Lisa).')}" target="_blank" rel="noopener"><span class="ic">${ic('wa')}</span><b>${t('concierge')}</b><span>${t('ecrire')}</span></a>
        <a class="tile" href="${V.gps}" target="_blank" rel="noopener"><span class="ic">${ic('map')}</span><b>${esc(V.adresse)}</b><span>${t('ouvrir_plan')}</span></a>
      </div></section>
      <section class="sec"><div style="display:flex;justify-content:space-between;align-items:baseline"><h2>${t('tab_services')}</h2><button class="btn small ghost" id="allS">${t('toutes')}</button></div>
        ${['chef', 'hammam', 'agafay'].map(id => svcCard(S.find(s => s.id === id))).join('')}</section>
      <section class="sec card"><h2 style="font-size:26px">${t('avis')}</h2><p class="muted" style="margin:6px 0 14px">${t('avis_txt')}</p><a class="btn or" href="${waLink('⭐ ' + t('avis') + ' — Villa Mona Lisa')}" target="_blank" rel="noopener">${t('laisser_avis')}</a></section>
      <p class="demo">${t('demo')}</p>`;
    $('#wifiT').onclick = () => { navigator.clipboard && navigator.clipboard.writeText(V.wifi.mdp).then(() => toast(t('copie')), () => toast(V.wifi.mdp)); };
    $('#horT').onclick = () => { view = 'villa'; render(); };
    $('#allS').onclick = () => { view = 'services'; render(); };
    bindSvc();
  }

  function svcCard(s) {
    return `<button class="svc" data-s="${s.id}"><span class="ic">${ic(s.icon)}</span><span><h3>${esc(L(s.nom))}</h3><p>${esc(L(s.desc))}</p>
      <span class="price">${mad(s.prix)} <small>${uniteTxt(s.unite)} · ${eur(s.prix)}</small></span></span></button>`;
  }
  function bindSvc() { $$('[data-s]').forEach(b => b.onclick = () => ouvrirService(S.find(s => s.id === b.dataset.s))); }

  function vServices() {
    const list = S.filter(s => cat === 'tout' || s.cat === cat);
    $('#main').innerHTML = `<section class="sec"><div class="chips" role="tablist">${[['tout', t('toutes')]].concat(Object.entries(CATS).map(([k, v]) => [k, L(v)])).map(([k, l]) => `<button data-c="${k}" class="${cat === k ? 'on' : ''}" role="tab" aria-selected="${cat === k}">${esc(l)}</button>`).join('')}</div>
      ${list.map(svcCard).join('')}</section><p class="demo">${t('demo')}</p>`;
    $$('[data-c]').forEach(b => b.onclick = () => { cat = b.dataset.c; vServices(); });
    bindSvc();
  }

  /* Feuille de réservation d'un service */
  function sheet(html, onReady) {
    const v = document.createElement('div'); v.className = 'veil';
    const s = document.createElement('div'); s.className = 'sheet'; s.setAttribute('role', 'dialog'); s.setAttribute('aria-modal', 'true');
    s.innerHTML = '<div class="grip"></div>' + html;
    const close = () => { v.remove(); s.remove(); };
    v.onclick = close; document.body.append(v, s); onReady && onReady(s, close);
  }
  function ouvrirService(s) {
    let pers = Math.max(s.min || 1, 2);
    if (s.unite !== 'pers') pers = 1;
    const tomorrow = addD(today, 1).toISOString().slice(0, 10);
    const f = s.champs;
    sheet(`<p class="label">${esc(L(CATS[s.cat]))}</p><h2>${esc(L(s.nom))}</h2><p class="muted">${esc(L(s.desc))}</p>
      <div class="form">
        ${f.includes('date') || f.includes('heure') ? `<div class="two">${f.includes('date') ? `<label>${t('date')}<input type="date" id="fd" value="${tomorrow}" min="${today.toISOString().slice(0, 10)}"></label>` : ''}${f.includes('heure') ? `<label>${t('heure')}<input type="time" id="fh" value="20:00"></label>` : ''}</div>` : ''}
        ${f.includes('pers') ? `<label>${t('personnes')}<div class="step"><button type="button" id="m" aria-label="−">−</button><b id="pv">${pers}</b><button type="button" id="p" aria-label="+">+</button></div></label>` : ''}
        <label>${t('note')}<textarea id="fn"></textarea></label></div>
      <div class="tot"><span class="muted">${t('total')}</span><span><b id="tt"></b></span></div>
      <button class="btn terre" id="add">${ic('sac')}${t('ajouter')}</button>`, (el, close) => {
      const tot = () => { const n = s.unite === 'pers' ? pers : 1; $('#tt', el).textContent = mad(s.prix * n); };
      tot();
      const pm = (d) => { pers = Math.min(16, Math.max(s.min || 1, pers + d)); $('#pv', el).textContent = pers; tot(); };
      if ($('#m', el)) { $('#m', el).onclick = () => pm(-1); $('#p', el).onclick = () => pm(1); }
      $('#add', el).onclick = () => {
        const n = s.unite === 'pers' ? pers : 1;
        cart.push({ id: s.id, pers: n, date: $('#fd', el) ? $('#fd', el).value : '', heure: $('#fh', el) ? $('#fh', el).value : '', note: $('#fn', el).value.trim(), total: s.prix * n });
        store.set('cart', cart); close(); tabs(); toast('✓ ' + L(s.nom));
      };
    });
  }

  /* Panier et paiement */
  function ouvrirPanier() {
    const total = cart.reduce((a, c) => a + c.total, 0);
    sheet(`<h2>${t('panier')}</h2>${cart.length ? cart.map((c, i) => { const s = S.find(x => x.id === c.id); return `<div class="cart-li"><div><b>${esc(L(s.nom))}</b><div class="small muted">${[c.date && dfmt(new Date(c.date + 'T00:00:00'), { day: 'numeric', month: 'short' }), c.heure, s.unite === 'pers' ? c.pers + ' ' + t('personnes').toLowerCase() : ''].filter(Boolean).join(' · ')}</div></div><div style="text-align:end"><b>${mad(c.total)}</b><br><button data-rm="${i}">${t('retirer')}</button></div></div>`; }).join('') +
      `<div class="tot" style="margin-top:14px"><span class="muted">${t('total')}</span><span><b>${mad(total)}</b><br><span class="small muted">${eur(total)}</span></span></div>
      <div class="paybox"><b>${t('paiement')}</b><div class="sec-row">${ic('cadenas')}Stripe · Visa · Mastercard · Apple Pay</div><p class="small muted" style="margin:0">${t('demo_pay')}</p></div>
      <button class="btn" id="pay">${ic('cadenas')}${t('payer')}</button>` : `<p class="muted">${t('vide')}</p>`}`, (el, close) => {
      $$('[data-rm]', el).forEach(b => b.onclick = () => { cart.splice(+b.dataset.rm, 1); store.set('cart', cart); close(); tabs(); vMoi(); if (cart.length) ouvrirPanier(); });
      const pay = $('#pay', el);
      if (pay) pay.onclick = () => {
        pay.disabled = true; pay.textContent = '…';
        setTimeout(() => {
          const now = new Date().toISOString();
          resas = resas.concat(cart.map(c => ({ ...c, le: now })));
          cart = []; store.set('cart', cart); store.set('resas', resas);
          el.innerHTML = `<div class="grip"></div><div class="center"><div class="check">${ic('ok')}</div><h2>${t('confirme')}</h2><p class="muted">${t('confirme_txt')}</p></div><button class="btn" id="cl" style="margin-top:14px">${t('fermer')}</button>`;
          $('#cl', el).onclick = () => { close(); view = 'moi'; render(); };
        }, 1100);
      };
    });
  }

  function vMoi() {
    const total = cart.reduce((a, c) => a + c.total, 0);
    $('#main').innerHTML = `<section class="sec">${cart.length ? `<div class="card" style="display:grid;gap:12px"><div style="display:flex;justify-content:space-between;align-items:center"><b>${t('panier')} · ${cart.length}</b><b>${mad(total)}</b></div><button class="btn terre" id="cart">${ic('cadenas')}${t('payer')}</button></div>` : ''}</section>
      <section class="sec"><h2>${t('mes_resa')}</h2>${resas.length ? resas.slice().reverse().map(r => { const s = S.find(x => x.id === r.id); return `<div class="resa"><div><b>${esc(L(s.nom))}</b><div class="small muted">${[r.date && dfmt(new Date(r.date + 'T00:00:00'), { weekday: 'short', day: 'numeric', month: 'short' }), r.heure].filter(Boolean).join(' · ')}</div></div><div style="text-align:end"><span class="ok">${t('statut_conf')}</span><div class="small muted">${mad(r.total)}</div></div></div>`; }).join('') : `<div class="card muted">${t('aucune_resa')}</div>`}</section>
      <section class="sec card" style="display:grid;gap:10px"><b>${t('concierge')}</b><a class="btn" href="${waLink('Villa Mona Lisa — ' + guest.nom)}" target="_blank" rel="noopener">${ic('wa')}${t('ecrire')}</a><a class="btn ghost" href="tel:${V.tel.replace(/\s/g, '')}">${ic('tel')}${t('appeler')} · <span dir="ltr">${esc(V.tel)}</span></a></section>
      <p class="demo">${t('demo')}</p>`;
    const c = $('#cart'); if (c) c.onclick = ouvrirPanier;
  }

  function vVilla() {
    $('#main').innerHTML = `
      <section class="sec"><div class="card" style="display:flex;justify-content:space-around;text-align:center"><div><p class="label">${t('arrivee')}</p><b style="font:400 30px var(--f-t)">${V.arrivee}</b></div><div><p class="label">${t('depart')}</p><b style="font:400 30px var(--f-t)">${V.depart}</b></div></div></section>
      <section class="sec"><div class="facts">${V.chiffres.map(c => `<div><b>${esc(c.v)}</b><span>${esc(L(c.t))}</span></div>`).join('')}</div></section>
      <section class="sec"><h2>${t('galerie')}</h2><div class="gal">${INFO.espaces.map(e => `<figure>${scene({ piscine: 'piscine', lit: 'suite', soleil: 'rooftop', spa: 'hammam' }[e.icon] || 'piscine')}<figcaption>${esc(L(e.t))}</figcaption></figure>`).join('')}</div></section>
      <section class="sec"><h2>${t('equipe')}</h2><div class="list">${V.equipe.map(m => `<div class="li"><span class="avatar">${esc(m.n[0])}</span><div><b>${esc(m.n)}</b><p>${esc(L(m.r))}</p></div></div>`).join('')}</div></section>
      <section class="sec"><h2>${t('equipements')}</h2><div class="list">${INFO.espaces.map(e => `<div class="li"><span class="ic">${ic(e.icon)}</span><div><b>${esc(L(e.t))}</b><p>${esc(L(e.d))}</p></div></div>`).join('')}</div></section>
      <section class="sec"><h2>${t('modes')}</h2>${INFO.modes.map(m => `<details class="acc"><summary>${esc(L(m.t))}</summary><p>${esc(L(m.d))}</p></details>`).join('')}</section>
      <section class="sec"><h2>${t('consignes')}</h2><div class="card"><ul class="rules">${INFO.consignes.map(c => `<li>${esc(L(c))}</li>`).join('')}</ul></div></section>
      <section class="sec"><h2>${t('urgences')}</h2><div class="card">${INFO.urgences.map(u => { const v = L(u.v); const isNum = /^[+\d\s]+$/.test(v); return `<div class="ur"><span>${esc(L(u.t))}</span>${isNum ? `<a href="tel:${v.replace(/\s/g, '')}" dir="ltr">${esc(v)}</a>` : `<span class="muted">${esc(v)}</span>`}</div>`; }).join('')}</div></section>
      <section class="sec"><h2>${t('depart_check')}</h2><div class="card"><ul class="rules">${INFO.depart.map(c => `<li>${esc(L(c))}</li>`).join('')}</ul></div></section>
      <p class="demo">${t('demo')}</p>`;
  }

  function vGuide() {
    const motif = '<svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid slice"><defs><pattern id="z2" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M15 0l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" fill="none" stroke="#fff"/></pattern></defs><rect width="120" height="120" fill="url(#z2)"/></svg>';
    $('#main').innerHTML = `<section class="sec"><p class="label">${t('selection_concierge')}</p>${GUIDE.map(g => `<article class="spot"><div class="vis">${motif}<span>${esc(L(g.cat))}</span></div><div class="bd"><h3>${esc(g.nom)}</h3><p>${esc(L(g.t))}</p>
      <div class="row"><a class="btn small" href="${waLink(t('reserver_concierge') + ' : ' + g.nom + ' — ' + guest.nom)}" target="_blank" rel="noopener">${ic('wa')}${t('reserver_concierge')}</a><a class="btn small ghost" href="https://maps.google.com/?q=${encodeURIComponent(g.q)}" target="_blank" rel="noopener">${ic('map')}</a></div></div></article>`).join('')}</section><p class="demo">${t('demo')}</p>`;
  }

  /* Accès au panier depuis l'onglet « Mon séjour » */
  render();
})();
