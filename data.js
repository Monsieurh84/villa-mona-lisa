/* Villa Mona Lisa — contenu (démo : à remplacer par les vraies informations) */
window.VILLA = {
  nom: 'Villa Mona Lisa',
  whatsapp: '212600000000',       // numéro du concierge (démo)
  tel: '+212 6 00 00 00 00',
  wifi: { reseau: 'MonaLisa_Guests', mdp: 'Bienvenue2026' },
  arrivee: '15:00', depart: '11:00',
  adresse: 'Palmeraie, Marrakech',
  gps: 'https://maps.google.com/?q=Palmeraie+Marrakech',
  devise: 'MAD', tauxEur: 10.8
};

/* Textes de l'interface */
window.UI = {
  fr: {
    bienvenue: 'Bienvenue', chez: 'à la Villa Mona Lisa', hote: 'Cher hôte', sejour: 'Votre séjour', nuits: 'nuits', jours_restants: 'jours avant votre arrivée', jour_x: 'Jour', sur: 'sur',
    tab_accueil: 'Accueil', tab_villa: 'La villa', tab_services: 'Services', tab_guide: 'Marrakech', tab_moi: 'Mon séjour',
    wifi: 'Wi-Fi', copier: 'Copier le mot de passe', copie: 'Copié', arrivee: 'Arrivée', depart: 'Départ', concierge: 'Votre concierge', ecrire: 'Écrire sur WhatsApp', appeler: 'Appeler',
    raccourcis: 'En un geste', reserver: 'Réserver', ajouter: 'Ajouter', personnes: 'Personnes', date: 'Date', heure: 'Heure', note: 'Une demande particulière ?', total: 'Total', panier: 'Ma sélection', vide: 'Aucun service sélectionné pour le moment.',
    payer: 'Payer et confirmer', paiement: 'Paiement sécurisé', demo_pay: 'Démonstration : le paiement est simulé. Dans la version finale, le règlement se fait par carte via Stripe, en toute sécurité.',
    confirme: 'C’est confirmé', confirme_txt: 'Votre concierge a bien reçu votre demande et s’occupe de tout. Vous recevrez une confirmation sur WhatsApp.',
    mes_resa: 'Mes réservations', aucune_resa: 'Vos services réservés apparaîtront ici.', statut_conf: 'Confirmé', par: 'par', sejour_entier: 'pour le séjour', par_pers: 'par personne', par_trajet: 'par trajet', par_heure: 'par heure', fermer: 'Fermer', retirer: 'Retirer',
    consignes: 'Consignes de la maison', equipements: 'La villa, pièce par pièce', modes: 'Modes d’emploi', urgences: 'Urgences et infos utiles', depart_check: 'Avant votre départ',
    selection_concierge: 'La sélection du concierge', reserver_concierge: 'Demander une réservation', ouvrir_plan: 'Ouvrir le plan', toutes: 'Tout', avis: 'Votre avis compte', avis_txt: 'Un mot sur votre séjour ? Il nous aide à rendre chaque visite inoubliable.', laisser_avis: 'Laisser un avis', langue: 'Langue', demo: 'Version de démonstration'
  },
  en: {
    bienvenue: 'Welcome', chez: 'to Villa Mona Lisa', hote: 'Dear guest', sejour: 'Your stay', nuits: 'nights', jours_restants: 'days until your arrival', jour_x: 'Day', sur: 'of',
    tab_accueil: 'Home', tab_villa: 'The villa', tab_services: 'Services', tab_guide: 'Marrakech', tab_moi: 'My stay',
    wifi: 'Wi-Fi', copier: 'Copy password', copie: 'Copied', arrivee: 'Check-in', depart: 'Check-out', concierge: 'Your concierge', ecrire: 'Message on WhatsApp', appeler: 'Call',
    raccourcis: 'At a glance', reserver: 'Book', ajouter: 'Add', personnes: 'Guests', date: 'Date', heure: 'Time', note: 'Any special request?', total: 'Total', panier: 'My selection', vide: 'No service selected yet.',
    payer: 'Pay & confirm', paiement: 'Secure payment', demo_pay: 'Demo: payment is simulated. In the final version, payment is made by card through Stripe, fully secured.',
    confirme: 'Confirmed', confirme_txt: 'Your concierge has received your request and is taking care of everything. You will get a confirmation on WhatsApp.',
    mes_resa: 'My bookings', aucune_resa: 'Your booked services will appear here.', statut_conf: 'Confirmed', par: 'per', sejour_entier: 'per stay', par_pers: 'per person', par_trajet: 'per transfer', par_heure: 'per hour', fermer: 'Close', retirer: 'Remove',
    consignes: 'House rules', equipements: 'The villa, room by room', modes: 'How-to guides', urgences: 'Emergencies & useful info', depart_check: 'Before you leave',
    selection_concierge: 'The concierge’s selection', reserver_concierge: 'Request a booking', ouvrir_plan: 'Open map', toutes: 'All', avis: 'Your opinion matters', avis_txt: 'A word about your stay? It helps us make every visit unforgettable.', laisser_avis: 'Leave a review', langue: 'Language', demo: 'Demo version'
  },
  es: {
    bienvenue: 'Bienvenidos', chez: 'a Villa Mona Lisa', hote: 'Querido huésped', sejour: 'Su estancia', nuits: 'noches', jours_restants: 'días para su llegada', jour_x: 'Día', sur: 'de',
    tab_accueil: 'Inicio', tab_villa: 'La villa', tab_services: 'Servicios', tab_guide: 'Marrakech', tab_moi: 'Mi estancia',
    wifi: 'Wi-Fi', copier: 'Copiar contraseña', copie: 'Copiado', arrivee: 'Llegada', depart: 'Salida', concierge: 'Su conserje', ecrire: 'Escribir por WhatsApp', appeler: 'Llamar',
    raccourcis: 'De un vistazo', reserver: 'Reservar', ajouter: 'Añadir', personnes: 'Personas', date: 'Fecha', heure: 'Hora', note: '¿Alguna petición especial?', total: 'Total', panier: 'Mi selección', vide: 'Ningún servicio seleccionado.',
    payer: 'Pagar y confirmar', paiement: 'Pago seguro', demo_pay: 'Demostración: el pago es simulado. En la versión final, el pago se realiza con tarjeta a través de Stripe, con total seguridad.',
    confirme: 'Confirmado', confirme_txt: 'Su conserje ha recibido su solicitud y se encarga de todo. Recibirá una confirmación por WhatsApp.',
    mes_resa: 'Mis reservas', aucune_resa: 'Sus servicios reservados aparecerán aquí.', statut_conf: 'Confirmado', par: 'por', sejour_entier: 'por estancia', par_pers: 'por persona', par_trajet: 'por trayecto', par_heure: 'por hora', fermer: 'Cerrar', retirer: 'Quitar',
    consignes: 'Normas de la casa', equipements: 'La villa, estancia por estancia', modes: 'Instrucciones', urgences: 'Urgencias e información útil', depart_check: 'Antes de su salida',
    selection_concierge: 'La selección del conserje', reserver_concierge: 'Solicitar una reserva', ouvrir_plan: 'Abrir el mapa', toutes: 'Todo', avis: 'Su opinión importa', avis_txt: '¿Unas palabras sobre su estancia? Nos ayudan a que cada visita sea inolvidable.', laisser_avis: 'Dejar una opinión', langue: 'Idioma', demo: 'Versión de demostración'
  },
  ar: {
    bienvenue: 'أهلاً وسهلاً', chez: 'في فيلا موناليزا', hote: 'ضيفنا العزيز', sejour: 'إقامتكم', nuits: 'ليالٍ', jours_restants: 'أيام قبل وصولكم', jour_x: 'اليوم', sur: 'من',
    tab_accueil: 'الرئيسية', tab_villa: 'الفيلا', tab_services: 'الخدمات', tab_guide: 'مراكش', tab_moi: 'إقامتي',
    wifi: 'واي فاي', copier: 'نسخ كلمة المرور', copie: 'تم النسخ', arrivee: 'الوصول', depart: 'المغادرة', concierge: 'الكونسيرج الخاص بكم', ecrire: 'راسلونا على واتساب', appeler: 'اتصال',
    raccourcis: 'بلمسة واحدة', reserver: 'احجز', ajouter: 'أضف', personnes: 'الأشخاص', date: 'التاريخ', heure: 'الساعة', note: 'طلب خاص؟', total: 'المجموع', panier: 'اختياراتي', vide: 'لم تختاروا أي خدمة بعد.',
    payer: 'ادفع وأكّد', paiement: 'دفع آمن', demo_pay: 'نسخة تجريبية: الدفع محاكاة. في النسخة النهائية يتم الدفع بالبطاقة عبر Stripe بأمان تام.',
    confirme: 'تم التأكيد', confirme_txt: 'استلم الكونسيرج طلبكم وسيتكفّل بكل شيء. ستصلكم رسالة تأكيد على واتساب.',
    mes_resa: 'حجوزاتي', aucune_resa: 'ستظهر هنا الخدمات التي حجزتموها.', statut_conf: 'مؤكَّد', par: 'لكل', sejour_entier: 'للإقامة', par_pers: 'للشخص', par_trajet: 'للرحلة', par_heure: 'للساعة', fermer: 'إغلاق', retirer: 'حذف',
    consignes: 'قواعد المنزل', equipements: 'الفيلا غرفةً غرفة', modes: 'طريقة الاستعمال', urgences: 'الطوارئ ومعلومات مفيدة', depart_check: 'قبل المغادرة',
    selection_concierge: 'اختيارات الكونسيرج', reserver_concierge: 'طلب حجز', ouvrir_plan: 'فتح الخريطة', toutes: 'الكل', avis: 'رأيكم يهمّنا', avis_txt: 'كلمة عن إقامتكم؟ تساعدنا على جعل كل زيارة لا تُنسى.', laisser_avis: 'اترك تقييماً', langue: 'اللغة', demo: 'نسخة تجريبية'
  }
};

/* Catégories de services */
window.CATS = {
  table: { fr: 'À table', en: 'Dining', es: 'Gastronomía', ar: 'المائدة' },
  bienetre: { fr: 'Bien-être', en: 'Wellness', es: 'Bienestar', ar: 'العافية' },
  transport: { fr: 'Transferts', en: 'Transfers', es: 'Traslados', ar: 'التنقّل' },
  experiences: { fr: 'Expériences', en: 'Experiences', es: 'Experiencias', ar: 'تجارب' },
  confort: { fr: 'Confort', en: 'Comfort', es: 'Confort', ar: 'الراحة' }
};

/* Services et options (prix en dirhams, démo) */
window.SERVICES = [
  { id: 'chef', cat: 'table', icon: 'chef', prix: 950, unite: 'pers', min: 2, champs: ['date', 'heure', 'pers'],
    nom: { fr: 'Dîner marocain par notre chef', en: 'Moroccan dinner by our chef', es: 'Cena marroquí de nuestro chef', ar: 'عشاء مغربي من إعداد طاهينا' },
    desc: { fr: 'Pastilla, tajine d’agneau aux pruneaux, couscous royal et pâtisseries, servis au bord de la piscine aux chandelles.', en: 'Pastilla, lamb tagine with prunes, royal couscous and pastries, served by candlelight by the pool.', es: 'Pastela, tajín de cordero con ciruelas, cuscús real y pasteles, servidos a la luz de las velas junto a la piscina.', ar: 'بسطيلة، طاجين لحم بالبرقوق، كسكس ملكي وحلويات، تُقدَّم على ضوء الشموع بجانب المسبح.' } },
  { id: 'petitdej', cat: 'table', icon: 'cafe', prix: 220, unite: 'pers', min: 1, champs: ['date', 'heure', 'pers'],
    nom: { fr: 'Petit-déjeuner berbère servi', en: 'Berber breakfast served', es: 'Desayuno bereber servido', ar: 'فطور أمازيغي يُقدَّم لكم' },
    desc: { fr: 'Msemen, baghrir, amlou, jus d’orange pressé et thé à la menthe, servis sur la terrasse.', en: 'Msemen, baghrir, amlou, fresh orange juice and mint tea, served on the terrace.', es: 'Msemen, baghrir, amlou, zumo de naranja natural y té a la menta, servidos en la terraza.', ar: 'مسمن، بغرير، أملو، عصير برتقال طازج وأتاي بالنعناع، على السطح.' } },
  { id: 'courses', cat: 'table', icon: 'panier', prix: 300, unite: 'sejour', min: 1, champs: ['date', 'note'],
    nom: { fr: 'Réfrigérateur rempli avant votre arrivée', en: 'Fridge stocked before arrival', es: 'Nevera llena antes de su llegada', ar: 'ثلاجة ممتلئة قبل وصولكم' },
    desc: { fr: 'Dites-nous vos envies : nous faisons les courses pour vous (frais de service, courses facturées au réel).', en: 'Tell us what you like: we shop for you (service fee, groceries charged at cost).', es: 'Díganos sus gustos: hacemos la compra por usted (gastos de servicio, compra al precio real).', ar: 'أخبرونا بما تحبون ونتكفّل بالتسوّق (رسوم خدمة، والمشتريات بسعرها الحقيقي).' } },
  { id: 'hammam', cat: 'bienetre', icon: 'spa', prix: 650, unite: 'pers', min: 1, champs: ['date', 'heure', 'pers'],
    nom: { fr: 'Hammam & gommage traditionnel', en: 'Hammam & traditional scrub', es: 'Hammam y exfoliación tradicional', ar: 'حمّام وتقشير تقليدي' },
    desc: { fr: 'Savon noir, gant de kessa et enveloppement au rhassoul dans le hammam privé de la villa (1 h).', en: 'Black soap, kessa glove and rhassoul wrap in the villa’s private hammam (1 h).', es: 'Jabón negro, guante kessa y envoltura de rhassoul en el hammam privado de la villa (1 h).', ar: 'صابون بلدي، كيس وغسول في الحمّام الخاص بالفيلا (ساعة).' } },
  { id: 'massage', cat: 'bienetre', icon: 'mains', prix: 750, unite: 'pers', min: 1, champs: ['date', 'heure', 'pers'],
    nom: { fr: 'Massage à l’huile d’argan', en: 'Argan oil massage', es: 'Masaje con aceite de argán', ar: 'تدليك بزيت الأركان' },
    desc: { fr: 'Massage relaxant d’une heure par une thérapeute diplômée, dans votre suite ou au bord de l’eau.', en: 'One-hour relaxing massage by a certified therapist, in your suite or by the pool.', es: 'Masaje relajante de una hora por una terapeuta titulada, en su suite o junto al agua.', ar: 'تدليك مريح لمدة ساعة على يد معالجة مختصّة، في جناحكم أو بجانب الماء.' } },
  { id: 'yoga', cat: 'bienetre', icon: 'soleil', prix: 500, unite: 'sejour', min: 1, champs: ['date', 'heure'],
    nom: { fr: 'Yoga au lever du soleil', en: 'Sunrise yoga', es: 'Yoga al amanecer', ar: 'يوغا عند شروق الشمس' },
    desc: { fr: 'Séance privée de 1 h sur le rooftop, face à l’Atlas, pour tout le groupe.', en: 'Private 1-hour session on the rooftop facing the Atlas, for the whole group.', es: 'Sesión privada de 1 h en la azotea frente al Atlas, para todo el grupo.', ar: 'حصة خاصة لمدة ساعة على السطح أمام جبال الأطلس، لكل المجموعة.' } },
  { id: 'aeroport', cat: 'transport', icon: 'avion', prix: 400, unite: 'trajet', min: 1, champs: ['date', 'heure', 'note'],
    nom: { fr: 'Transfert aéroport en van privé', en: 'Private van airport transfer', es: 'Traslado al aeropuerto en van privado', ar: 'نقل خاص من وإلى المطار' },
    desc: { fr: 'Accueil avec pancarte, eau fraîche et serviettes parfumées, jusqu’à 7 personnes et bagages.', en: 'Meet & greet with a sign, cold water and scented towels, up to 7 guests with luggage.', es: 'Recepción con cartel, agua fresca y toallitas perfumadas, hasta 7 personas con equipaje.', ar: 'استقبال بلافتة، ماء بارد ومناديل معطّرة، حتى 7 أشخاص مع الأمتعة.' } },
  { id: 'chauffeur', cat: 'transport', icon: 'voiture', prix: 1500, unite: 'sejour', min: 1, champs: ['date', 'note'],
    nom: { fr: 'Chauffeur privé à la journée', en: 'Private driver for the day', es: 'Chófer privado por un día', ar: 'سائق خاص ليوم كامل' },
    desc: { fr: 'Votre chauffeur et sa voiture premium à disposition de 10 h à 20 h, dans Marrakech et alentours.', en: 'Your driver and premium car at your disposal from 10 am to 8 pm, in and around Marrakech.', es: 'Su chófer y coche premium a su disposición de 10 h a 20 h, en Marrakech y alrededores.', ar: 'سائقكم وسيارته الفاخرة رهن إشارتكم من 10 صباحاً إلى 8 مساءً داخل مراكش ونواحيها.' } },
  { id: 'agafay', cat: 'experiences', icon: 'dune', prix: 1100, unite: 'pers', min: 2, champs: ['date', 'pers'],
    nom: { fr: 'Coucher de soleil & dîner au désert d’Agafay', en: 'Agafay desert sunset & dinner', es: 'Atardecer y cena en el desierto de Agafay', ar: 'غروب الشمس وعشاء في صحراء أكفاي' },
    desc: { fr: 'Balade à dos de dromadaire, dîner sous les étoiles et musique gnaoua, transfert inclus.', en: 'Camel ride, dinner under the stars and Gnawa music, transfer included.', es: 'Paseo en dromedario, cena bajo las estrellas y música gnawa, traslado incluido.', ar: 'جولة على الجمال، عشاء تحت النجوم وموسيقى كناوة، مع النقل.' } },
  { id: 'montgolfiere', cat: 'experiences', icon: 'ballon', prix: 2300, unite: 'pers', min: 1, champs: ['date', 'pers'],
    nom: { fr: 'Vol en montgolfière à l’aube', en: 'Hot-air balloon at dawn', es: 'Vuelo en globo al amanecer', ar: 'رحلة منطاد عند الفجر' },
    desc: { fr: 'Survol de la palmeraie et des villages berbères, petit-déjeuner et certificat de vol.', en: 'Fly over the palm grove and Berber villages, breakfast and flight certificate.', es: 'Sobrevuelo del palmeral y de pueblos bereberes, desayuno y certificado de vuelo.', ar: 'تحليق فوق واحة النخيل والقرى الأمازيغية، مع فطور وشهادة طيران.' } },
  { id: 'deco', cat: 'experiences', icon: 'etoile', prix: 1200, unite: 'sejour', min: 1, champs: ['date', 'note'],
    nom: { fr: 'Décoration surprise (anniversaire, demande en mariage)', en: 'Surprise decoration (birthday, proposal)', es: 'Decoración sorpresa (cumpleaños, pedida de mano)', ar: 'تزيين مفاجئ (عيد ميلاد، طلب زواج)' },
    desc: { fr: 'Pétales de roses, bougies, ballons et gâteau : on prépare tout pendant votre absence.', en: 'Rose petals, candles, balloons and cake: we set everything up while you are out.', es: 'Pétalos de rosa, velas, globos y tarta: lo preparamos todo durante su ausencia.', ar: 'بتلات الورد، شموع، بالونات وكعكة: نحضّر كل شيء أثناء غيابكم.' } },
  { id: 'menage', cat: 'confort', icon: 'eclat', prix: 350, unite: 'sejour', min: 1, champs: ['date', 'heure'],
    nom: { fr: 'Ménage et linge supplémentaires', en: 'Extra housekeeping & linen', es: 'Limpieza y ropa de cama adicionales', ar: 'تنظيف وتغيير مفروشات إضافي' },
    desc: { fr: 'Passage complet de l’équipe, changement des draps et serviettes.', en: 'Full visit from the team, change of sheets and towels.', es: 'Servicio completo del equipo, cambio de sábanas y toallas.', ar: 'زيارة كاملة للفريق مع تغيير الأغطية والمناشف.' } },
  { id: 'late', cat: 'confort', icon: 'horloge', prix: 600, unite: 'sejour', min: 1, champs: ['note'],
    nom: { fr: 'Départ tardif jusqu’à 16 h', en: 'Late check-out until 4 pm', es: 'Salida tardía hasta las 16 h', ar: 'مغادرة متأخرة حتى الرابعة مساءً' },
    desc: { fr: 'Profitez de la piscine jusqu’à votre vol (sous réserve de disponibilité).', en: 'Enjoy the pool until your flight (subject to availability).', es: 'Disfrute de la piscina hasta su vuelo (sujeto a disponibilidad).', ar: 'استمتعوا بالمسبح حتى موعد رحلتكم (حسب التوفر).' } }
];

/* La villa */
window.VILLA_INFOS = {
  espaces: [
    { icon: 'piscine', t: { fr: 'Piscine chauffée 12 × 5 m', en: 'Heated pool 12 × 5 m', es: 'Piscina climatizada 12 × 5 m', ar: 'مسبح مُدفّأ 12 × 5 م' }, d: { fr: 'Chauffée à 28 °C de novembre à avril. Transats et serviettes à disposition.', en: 'Heated to 28 °C from November to April. Loungers and towels provided.', es: 'Climatizada a 28 °C de noviembre a abril. Tumbonas y toallas disponibles.', ar: 'مُدفّأ إلى 28 درجة من نونبر إلى أبريل. أسرّة شمسية ومناشف متوفّرة.' } },
    { icon: 'lit', t: { fr: '5 suites avec salle de bain', en: '5 en-suite bedrooms', es: '5 suites con baño', ar: '5 أجنحة بحمّامات خاصة' }, d: { fr: 'Literie king size, climatisation réversible, coffre-fort et peignoirs.', en: 'King-size beds, reversible air conditioning, safe and bathrobes.', es: 'Camas king size, aire acondicionado reversible, caja fuerte y albornoces.', ar: 'أسرّة كبيرة، تكييف بارد وساخن، خزنة وأرواب حمّام.' } },
    { icon: 'spa', t: { fr: 'Hammam privé', en: 'Private hammam', es: 'Hammam privado', ar: 'حمّام خاص' }, d: { fr: 'Prêt en 45 minutes : demandez-le à votre concierge.', en: 'Ready in 45 minutes: just ask your concierge.', es: 'Listo en 45 minutos: pídalo a su conserje.', ar: 'جاهز خلال 45 دقيقة: اطلبوه من الكونسيرج.' } },
    { icon: 'soleil', t: { fr: 'Rooftop vue Atlas', en: 'Rooftop with Atlas views', es: 'Azotea con vistas al Atlas', ar: 'سطح بإطلالة على الأطلس' }, d: { fr: 'Salon lounge, douche extérieure et le plus beau coucher de soleil de la palmeraie.', en: 'Lounge area, outdoor shower and the finest sunset in the palm grove.', es: 'Zona lounge, ducha exterior y la mejor puesta de sol del palmeral.', ar: 'صالون خارجي، دش في الهواء الطلق وأجمل غروب في واحة النخيل.' } }
  ],
  consignes: [
    { fr: 'Pas de fête ni de musique amplifiée après 23 h.', en: 'No parties or amplified music after 11 pm.', es: 'Sin fiestas ni música amplificada después de las 23 h.', ar: 'لا حفلات ولا موسيقى مرتفعة بعد الساعة 11 ليلاً.' },
    { fr: 'Villa non-fumeur à l’intérieur ; cendriers sur les terrasses.', en: 'No smoking indoors; ashtrays on the terraces.', es: 'Prohibido fumar en el interior; ceniceros en las terrazas.', ar: 'التدخين ممنوع داخل الفيلا؛ المنافض متوفّرة في الشرفات.' },
    { fr: 'Piscine non surveillée : les enfants restent sous la responsabilité des parents.', en: 'Unsupervised pool: children remain under their parents’ responsibility.', es: 'Piscina sin vigilancia: los niños quedan bajo la responsabilidad de sus padres.', ar: 'المسبح بدون حراسة: الأطفال تحت مسؤولية والديهم.' },
    { fr: 'Merci de fermer les baies vitrées quand la climatisation fonctionne.', en: 'Please close the glass doors when the air conditioning is on.', es: 'Cierre los ventanales cuando el aire acondicionado esté encendido.', ar: 'يرجى إغلاق الواجهات الزجاجية عند تشغيل التكييف.' },
    { fr: 'Les visiteurs extérieurs sont à signaler au concierge.', en: 'Outside visitors must be announced to the concierge.', es: 'Los visitantes externos deben comunicarse al conserje.', ar: 'يرجى إخبار الكونسيرج بأي زائر من الخارج.' }
  ],
  modes: [
    { t: { fr: 'Climatisation', en: 'Air conditioning', es: 'Aire acondicionado', ar: 'التكييف' }, d: { fr: 'Télécommande blanche sur la table de nuit : mode ❄ ou ☀, 22 à 24 °C recommandé.', en: 'White remote on the bedside table: ❄ or ☀ mode, 22–24 °C recommended.', es: 'Mando blanco en la mesilla: modo ❄ o ☀, se recomiendan 22–24 °C.', ar: 'جهاز التحكم الأبيض على طاولة السرير: وضع ❄ أو ☀، يُنصح بـ 22 إلى 24 درجة.' } },
    { t: { fr: 'Télévision & Netflix', en: 'TV & Netflix', es: 'Televisión y Netflix', ar: 'التلفاز ونتفليكس' }, d: { fr: 'Bouton « Home » puis l’application Netflix : connectez votre propre compte, déconnexion automatique à votre départ.', en: 'Press “Home” then open Netflix: sign in with your own account, logged out automatically when you leave.', es: 'Pulse «Home» y abra Netflix: inicie sesión con su cuenta, se cierra automáticamente a su salida.', ar: 'اضغطوا «Home» ثم تطبيق نتفليكس: سجّلوا بحسابكم، ويتم الخروج تلقائياً عند مغادرتكم.' } },
    { t: { fr: 'Éclairage de la piscine', en: 'Pool lights', es: 'Iluminación de la piscina', ar: 'إنارة المسبح' }, d: { fr: 'Interrupteur à gauche de la porte du salon d’été.', en: 'Switch to the left of the summer lounge door.', es: 'Interruptor a la izquierda de la puerta del salón de verano.', ar: 'المفتاح على يسار باب الصالون الصيفي.' } },
    { t: { fr: 'Eau chaude', en: 'Hot water', es: 'Agua caliente', ar: 'الماء الساخن' }, d: { fr: 'Eau chaude solaire : laissez couler 30 secondes le matin.', en: 'Solar hot water: let it run for 30 seconds in the morning.', es: 'Agua caliente solar: déjela correr 30 segundos por la mañana.', ar: 'ماء ساخن بالطاقة الشمسية: اتركوه يجري 30 ثانية صباحاً.' } }
  ],
  urgences: [
    { t: { fr: 'Police', en: 'Police', es: 'Policía', ar: 'الشرطة' }, v: '19' },
    { t: { fr: 'Pompiers & ambulance', en: 'Fire & ambulance', es: 'Bomberos y ambulancia', ar: 'الوقاية المدنية والإسعاف' }, v: '15' },
    { t: { fr: 'Médecin à domicile (24 h/24)', en: 'Doctor on call (24/7)', es: 'Médico a domicilio (24 h)', ar: 'طبيب منزلي (24/24)' }, v: '+212 5 24 00 00 00' },
    { t: { fr: 'Pharmacie de garde', en: 'On-duty pharmacy', es: 'Farmacia de guardia', ar: 'صيدلية الحراسة' }, v: { fr: 'Demandez au concierge', en: 'Ask your concierge', es: 'Pregunte al conserje', ar: 'اسألوا الكونسيرج' } }
  ],
  depart: [
    { fr: 'Laissez les clés sur la console de l’entrée.', en: 'Leave the keys on the entrance console.', es: 'Deje las llaves en la consola de la entrada.', ar: 'اتركوا المفاتيح على طاولة المدخل.' },
    { fr: 'Éteignez la climatisation et fermez les baies.', en: 'Turn off the air conditioning and close the glass doors.', es: 'Apague el aire acondicionado y cierre los ventanales.', ar: 'أطفئوا التكييف وأغلقوا الواجهات الزجاجية.' },
    { fr: 'Pas besoin de faire la vaisselle ni les lits.', en: 'No need to do the dishes or make the beds.', es: 'No hace falta fregar ni hacer las camas.', ar: 'لا حاجة لغسل الأواني أو ترتيب الأسرّة.' }
  ]
};

/* Guide de Marrakech */
window.GUIDE = [
  { cat: { fr: 'Restaurant', en: 'Restaurant', es: 'Restaurante', ar: 'مطعم' }, nom: 'Le Jardin Secret', t: { fr: 'Jardins historiques au cœur de la médina, idéal le matin.', en: 'Historic gardens in the heart of the medina, best in the morning.', es: 'Jardines históricos en el corazón de la medina, ideal por la mañana.', ar: 'حدائق تاريخية في قلب المدينة القديمة، مثالية صباحاً.' }, q: 'Le Jardin Secret Marrakech' },
  { cat: { fr: 'Incontournable', en: 'Must-see', es: 'Imprescindible', ar: 'لا يُفوَّت' }, nom: 'Jardin Majorelle', t: { fr: 'Le bleu Majorelle et le musée Yves Saint Laurent. Réservez le créneau de 8 h.', en: 'Majorelle blue and the Yves Saint Laurent museum. Book the 8 am slot.', es: 'El azul Majorelle y el museo Yves Saint Laurent. Reserve a las 8 h.', ar: 'أزرق ماجوريل ومتحف إيف سان لوران. احجزوا موعد الثامنة صباحاً.' }, q: 'Jardin Majorelle' },
  { cat: { fr: 'Souks', en: 'Souks', es: 'Zocos', ar: 'الأسواق' }, nom: 'Souk Semmarine', t: { fr: 'Babouches, lanternes et épices : votre concierge peut vous accompagner pour bien négocier.', en: 'Slippers, lanterns and spices: your concierge can come along to help you bargain.', es: 'Babuchas, faroles y especias: su conserje puede acompañarle para negociar.', ar: 'بلغة، فوانيس وتوابل: يمكن للكونسيرج مرافقتكم للتفاوض.' }, q: 'Souk Semmarine Marrakech' },
  { cat: { fr: 'Rooftop', en: 'Rooftop', es: 'Azotea', ar: 'سطح' }, nom: 'Place Jemaa el-Fna', t: { fr: 'À voir au coucher du soleil depuis une terrasse, puis dîner dans les stands.', en: 'See it at sunset from a terrace, then dine at the food stalls.', es: 'Para verla al atardecer desde una terraza y cenar en los puestos.', ar: 'شاهدوها عند الغروب من إحدى الشرفات ثم تناولوا العشاء في الأكشاك.' }, q: 'Jemaa el-Fna' }
];
