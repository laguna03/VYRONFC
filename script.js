/* =============================================
   LANDING PAGE VYRON FITNESS — script.js
   ============================================= */

const translations = {
    es: {
        'vyron.nav.services': 'Servicios',
        'vyron.nav.about': 'Sobre Mí',
        'vyron.nav.results': 'Resultados',
        'vyron.nav.cta': 'Empieza Hoy',
        'vyron.hero.title1': 'Transforma tu cuerpo.',
        'vyron.hero.title2': 'Construye disciplina y resultados',
        'vyron.hero.sub': 'Entrenamiento 100% personalizado para tu estilo de vida. Ya sea presencial en Puerto Rico u online, te guiamos hacia tu mejor versión.',
        'vyron.hero.cta': 'Obtener Evaluación Gratis',
        'vyron.hero.whatsapp': 'Hablar por WhatsApp',
        'vyron.services.tag': 'Programas',
        'vyron.services.title': 'Entrenamiento ',
        'vyron.services.title2': 'Personalizado',
        'vyron.services.sub': 'No creemos en rutinas genéricas. Cada plan está diseñado exclusivamente para tus metas.',
        'vyron.services.s1.title': '1 a 1 Presencial',
        'vyron.services.s1.desc': 'Sesiones privadas en Puerto Rico con supervisión directa y corrección de técnica.',
        'vyron.services.s2.title': 'Coaching Online',
        'vyron.services.s2.desc': 'Planes de entrenamiento, videos y seguimiento semanal para que entrenes donde quieras.',
        'vyron.services.s3.title': 'Pérdida de Grasa',
        'vyron.services.s3.desc': 'Programas basados en déficit calórico y hábitos sostenibles.',
        'vyron.services.s4.title': 'Ganancia Muscular',
        'vyron.services.s4.desc': 'Planes de hipertrofia con progresión de cargas y nutrición estratégica.',
        'vyron.services.s5.title': 'Evaluaciones Físicas',
        'vyron.services.s5.desc': 'Análisis de composición corporal y diseño de plan de acción a corto y largo plazo.',
        'vyron.services.s6.title': 'Seguimiento Semanal',
        'vyron.services.s6.desc': 'Acompañamiento constante, ajuste de cargas y asesoría de hábitos saludables.',
        'vyron.about.tag': 'Entrenador',
        'vyron.about.title': 'Comprometido con tus ',
        'vyron.about.title2': 'Resultados Reales',
        'vyron.about.subtitle': 'No soy un entrenador cualquiera',
        'vyron.about.desc1': 'Mi enfoque no es vender rutinas genéricas, sino crear planes personalizados que desarrollen fuerza, disciplina, salud y una transformación física sostenible.',
        'vyron.about.desc2': 'Con certificación ISSA CPT, trabajo con hombres y mujeres de 18 a 50 años que buscan perder grasa, ganar masa muscular o mejorar su condición física, con el nivel de compromiso que merecen.',
        'vyron.about.clients': 'Clientes transformados',
        'vyron.about.commitment': 'Compromiso garantizado',
        'vyron.results.tag': 'Transformaciones',
        'vyron.results.title': 'Resultados que ',
        'vyron.results.title2': 'Hablan por sí solos',
        'vyron.contact.tag': 'Empieza Hoy',
        'vyron.contact.title': '¿Listo para transformar ',
        'vyron.contact.title2': 'tu físico y tu salud?',
        'vyron.contact.sub': 'Llena el formulario para una evaluación física gratuita y sin compromiso. Te responderé en menos de 24 horas.',
        'vyron.contact.perk1': 'Evaluación gratuita',
        'vyron.contact.perk2': 'Plan personalizado en 24h',
        'vyron.contact.perk3': 'Sin compromiso',
        'vyron.contact.whatsapp': 'Escríbeme por WhatsApp',
        'vyron.f.name': 'Tu Nombre',
        'vyron.f.phone': 'Teléfono / WhatsApp',
        'vyron.f.email': 'Email',
        'vyron.f.age': 'Edad',
        'vyron.f.service': 'Servicio de Interés',
        'vyron.f.s1': 'Entrenamiento 1 a 1 Presencial',
        'vyron.f.s2': 'Coaching Online',
        'vyron.f.s3': 'Pérdida de Grasa',
        'vyron.f.s4': 'Ganancia Muscular',
        'vyron.f.s5': 'Evaluación Física',
        'vyron.f.goal': '¿Cuál es tu objetivo principal?',
        'vyron.f.g1': 'Perder grasa',
        'vyron.f.g2': 'Ganar masa muscular',
        'vyron.f.g3': 'Mejorar condición física',
        'vyron.f.g4': 'Entrenamiento deportivo',
        'vyron.f.g5': 'Otro',
        'vyron.f.message': 'Mensaje (cuéntame sobre ti)',
        'vyron.f.send': 'Enviar y obtener evaluación',
        'vyron.footer.tagline': 'Transformación física real con planes 100% personalizados.',
        'vyron.footer.nav': 'Navegación',
        'vyron.footer.nav.services': 'Servicios',
        'vyron.footer.nav.about': 'Sobre Mí',
        'vyron.footer.nav.results': 'Resultados',
        'vyron.footer.nav.contact': 'Contacto',
        'vyron.footer.contact': 'Contáctame',
        'vyron.footer.rights': '© 2026 VYRON Fitness Coaching. Todos los derechos reservados.',
        'vyron.footer.credit': 'Powered by LAGVNSoftware.',
        'vyron.contact.success': '¡Mensaje enviado! En menos de 24 horas recibirás tu evaluación personalizada.',
        'vyron.contact.sending': 'Enviando...',
        'vyron.site.title': 'VYRON Fitness Coaching | Transformación Física Personalizada'
    },
    en: {
        'vyron.nav.services': 'Services',
        'vyron.nav.about': 'About Me',
        'vyron.nav.results': 'Results',
        'vyron.nav.cta': 'Start Today',
        'vyron.hero.title1': 'Transform your body.',
        'vyron.hero.title2': 'Build discipline and results',
        'vyron.hero.sub': '100% personalized training for your lifestyle. Whether in-person in Puerto Rico or online, we guide you to your best version.',
        'vyron.hero.cta': 'Get a Free Assessment',
        'vyron.hero.whatsapp': 'Chat on WhatsApp',
        'vyron.services.tag': 'Programs',
        'vyron.services.title': 'Personalized ',
        'vyron.services.title2': 'Training',
        'vyron.services.sub': 'We don\'t believe in generic routines. Every plan is designed exclusively for your goals.',
        'vyron.services.s1.title': '1-on-1 In-Person',
        'vyron.services.s1.desc': 'Private sessions in Puerto Rico with direct supervision and technique correction.',
        'vyron.services.s2.title': 'Online Coaching',
        'vyron.services.s2.desc': 'Training plans, videos and weekly check-ins so you can train wherever you are.',
        'vyron.services.s3.title': 'Fat Loss',
        'vyron.services.s3.desc': 'Programs based on caloric deficit and sustainable habits.',
        'vyron.services.s4.title': 'Muscle Gain',
        'vyron.services.s4.desc': 'Hypertrophy plans with progressive overload and strategic nutrition.',
        'vyron.services.s5.title': 'Physical Assessments',
        'vyron.services.s5.desc': 'Body composition analysis and short/long-term action plans.',
        'vyron.services.s6.title': 'Weekly Follow-up',
        'vyron.services.s6.desc': 'Constant support, load adjustments, and healthy habit coaching.',
        'vyron.about.tag': 'Trainer',
        'vyron.about.title': 'Committed to Your ',
        'vyron.about.title2': 'Real Results',
        'vyron.about.subtitle': 'I am not just any trainer',
        'vyron.about.desc1': 'My focus is not to sell generic routines, but to create personalized plans that build strength, discipline, health, and sustainable physical transformation.',
        'vyron.about.desc2': 'With ISSA CPT certification, I work with men and women aged 18 to 50 looking to lose fat, gain muscle or improve fitness, with the commitment they deserve.',
        'vyron.about.clients': 'Clients transformed',
        'vyron.about.commitment': 'Guaranteed commitment',
        'vyron.results.tag': 'Transformations',
        'vyron.results.title': 'Results that ',
        'vyron.results.title2': 'Speak for themselves',
        'vyron.contact.tag': 'Start Today',
        'vyron.contact.title': 'Ready to transform ',
        'vyron.contact.title2': 'your body and health?',
        'vyron.contact.sub': 'Fill out the form for a free physical assessment with no commitment. I will reply within 24 hours.',
        'vyron.contact.perk1': 'Free assessment',
        'vyron.contact.perk2': 'Custom plan in 24h',
        'vyron.contact.perk3': 'No commitment',
        'vyron.contact.whatsapp': 'Text me on WhatsApp',
        'vyron.f.name': 'Your Name',
        'vyron.f.phone': 'Phone / WhatsApp',
        'vyron.f.email': 'Email',
        'vyron.f.age': 'Age',
        'vyron.f.service': 'Service of Interest',
        'vyron.f.s1': '1-on-1 In-Person Training',
        'vyron.f.s2': 'Online Coaching',
        'vyron.f.s3': 'Fat Loss',
        'vyron.f.s4': 'Muscle Gain',
        'vyron.f.s5': 'Physical Assessment',
        'vyron.f.goal': 'What is your main goal?',
        'vyron.f.g1': 'Lose fat',
        'vyron.f.g2': 'Build muscle',
        'vyron.f.g3': 'Improve fitness',
        'vyron.f.g4': 'Sports training',
        'vyron.f.g5': 'Other',
        'vyron.f.message': 'Message (tell me about you)',
        'vyron.f.send': 'Send & get your assessment',
        'vyron.footer.tagline': 'Real physical transformation with 100% personalized plans.',
        'vyron.footer.nav': 'Quick Links',
        'vyron.footer.nav.services': 'Services',
        'vyron.footer.nav.about': 'About Me',
        'vyron.footer.nav.results': 'Results',
        'vyron.footer.nav.contact': 'Contact',
        'vyron.footer.contact': 'Get In Touch',
        'vyron.footer.rights': '© 2026 VYRON Fitness Coaching. All rights reserved.',
        'vyron.footer.credit': 'Powered by LAGVNSoftware.',
        'vyron.contact.success': 'Message sent! Within 24 hours you will receive your personalized assessment.',
        'vyron.contact.sending': 'Sending...',
        'vyron.site.title': 'VYRON Fitness Coaching | Personalized Physical Transformation'
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = lang;
    if (t['vyron.site.title']) document.title = t['vyron.site.title'];
}

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                const index = siblings.indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    /* -------------------------------------------
       CONTACT FORM — VYRON SPECIFIC
       ⚠️ REEMPLAZA ESTOS IDs CON TUS NUEVOS IDs PARA VYRON
    ------------------------------------------- */
    const EMAILJS_SERVICE_ID          = '[PONER_AQUÍ_TU_SERVICE_ID_VYRON]';
    const EMAILJS_TEMPLATE_ID         = '[PONER_AQUÍ_TU_TEMPLATE_ID_VYRON]';
    const EMAILJS_WELCOME_TEMPLATE_ID = '[PONER_AQUÍ_TU_WELCOME_TEMPLATE_ID_VYRON]';

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (typeof emailjs === 'undefined') {
                alert('Error: EmailJS no se cargó. Verifica tu conexión a internet.');
                return;
            }

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;
            const sendingLabel = translations[currentLang]['vyron.contact.sending'] || 'Enviando...';
            submitBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.9s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> ${sendingLabel}`;
            submitBtn.disabled = true;

            const formData = {
                from_name : contactForm.querySelector('[name="from_name"]').value.trim(),
                phone     : contactForm.querySelector('[name="phone"]').value.trim(),
                reply_to  : contactForm.querySelector('[name="reply_to"]').value.trim(),
                age       : contactForm.querySelector('[name="age"]').value.trim(),
                service   : contactForm.querySelector('[name="service"]').value,
                goal      : contactForm.querySelector('[name="goal"]').value,
                message   : contactForm.querySelector('[name="message"]').value.trim()
            };

            const notifParams = {
                ...formData,
                to_email : 'lagvnsoftware@gmail.com',
                to_name  : 'Pedro',
            };

            const welcomeParams = {
                ...formData,
                to_email : formData.reply_to,
                to_name  : formData.from_name,
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, notifParams)
                .then(() => {
                    if (formData.reply_to) {
                        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_WELCOME_TEMPLATE_ID, welcomeParams);
                    }
                    return Promise.resolve();
                })
                .then(() => {
                    const successMsg = translations[currentLang]['vyron.contact.success'] || '¡Mensaje enviado!';
                    contactForm.innerHTML = `<div class="form-success" style="display:block; text-align:center;">${successMsg}</div>`;
                })
                .catch((error) => {
                    console.error(error);
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    alert('Hubo un error enviando el mensaje. Por favor, intenta de nuevo.');
                });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
});

const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
