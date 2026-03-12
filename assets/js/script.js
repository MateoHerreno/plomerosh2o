
// ─── Componentes renderizados desde config.js ────────────────────────────────
// El header, footer y botón WA se construyen dinámicamente desde SITE_CONFIG.
// Para cambiar teléfono, WhatsApp o redes sociales: edita assets/js/config.js

function renderHeader() {
    const el = document.getElementById('header');
    if (!el) return;
    const { redes, whatsapp } = SITE_CONFIG;
    el.innerHTML = `
    <div class="container-fluid">
        <header id="miHeader" class="py-1">
            <div class="container d-flex justify-content-end pe-1">
                <div class="redes-sociales d-flex gap-3">
                    <a href="${redes.facebook}" target="_blank" rel="noopener" aria-label="Facebook Plomeros H2O">
                        <i class="fa-brands fa-facebook"></i></a>
                    <a href="${redes.instagram}" target="_blank" rel="noopener" aria-label="Instagram Plomeros H2O">
                        <i class="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/${whatsapp.completo}" target="_blank" rel="noopener" aria-label="WhatsApp Plomeros H2O">
                        <i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </header>
    </div>`;
}

function renderBtnWpp() {
    const el = document.getElementById('btnwpp');
    if (!el) return;
    const { whatsapp } = SITE_CONFIG;
    el.innerHTML = `
    <a href="https://wa.me/${whatsapp.completo}?text=${whatsapp.msgInfo}"
       target="_blank" rel="noopener" class="whatsapp-btn" aria-label="Contactar por WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </a>`;
}

function renderFooter() {
    const el = document.getElementById('footer');
    if (!el) return;
    const { contacto, whatsapp, redes } = SITE_CONFIG;
    el.innerHTML = `
    <div class="container-fluid">
        <div class="container-fluid d-flex justify-content-end miFooter">
            <div class="contenido text-start pe-5">
                <h2 class="pe-3 pb-2">📌 Contáctenos</h2>
                <p><i class="fa-solid fa-phone"></i>
                    <a href="tel:+${whatsapp.completo}" style="color:gainsboro;text-decoration:none;">
                        ${contacto.telefono}</a></p>
                <p><i class="fa-solid fa-envelope"></i>
                    <a href="mailto:${contacto.email}" style="color:gainsboro;text-decoration:none;">
                        ${contacto.email}</a></p>
                <p><i class="fa-brands fa-whatsapp"></i>
                    <a href="https://wa.me/${whatsapp.completo}" target="_blank" rel="noopener"
                       style="color:gainsboro;text-decoration:none;">WhatsApp 24/7</a></p>
                <p><i class="fa-solid fa-location-dot"></i> ${contacto.direccion}</p>
                <div class="d-flex gap-3 mt-2">
                    <a href="${redes.facebook}" target="_blank" rel="noopener"
                       style="color:gainsboro;font-size:1.4rem;" aria-label="Facebook">
                        <i class="fa-brands fa-facebook"></i></a>
                    <a href="${redes.instagram}" target="_blank" rel="noopener"
                       style="color:gainsboro;font-size:1.4rem;" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i></a>
                </div>
                <p class="small mt-2" style="color:#aaa;">Plomeros H2O © ${new Date().getFullYear()} | Servicio 24/7</p>
            </div>
        </div>
    </div>`;
}

// ─── Navbar (renderizado dinámico — funciona desde cualquier subdirectorio) ──
function renderNavbar() {
    const el = document.getElementById('navbar');
    if (!el) return;

    // Detectar si estamos en un subdirectorio conocido (blog/, etc.)
    // Se compara por nombre de carpeta, no por profundidad, para funcionar correctamente
    // tanto con file:// en Windows como con un servidor web.
    const knownSubDirs = ['blog'];
    const path = window.location.pathname.replace(/\\/g, '/');
    const inSubDir = knownSubDirs.some(dir => path.includes('/' + dir + '/') || path.endsWith('/' + dir));
    const base = inSubDir ? '../' : '';

    el.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand" href="${base || '/'}"><img class="icono-nav" src="${base}assets/img/favicon-nav.webp" width="60" height="60" alt="Plomeros H2O Medellín - Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="${base || '/'}">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="${base}servicios.html">Servicios</a></li>
            <li class="nav-item"><a class="nav-link" href="${base}nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="${base}blog/">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>`;

    // Marcar enlace activo
    const segments = path.split('/');
    const currentPage = segments[segments.length - 1] || 'index.html';
    const currentDir  = segments[segments.length - 2] || '';
    document.querySelectorAll('#navbar .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        const hrefPage = href.replace(/\/$/, '').split('/').pop() || 'index.html';
        const isBlogActive = currentDir === 'blog' && href.endsWith('blog/');
        if (hrefPage === currentPage || isBlogActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

//scripts paneles deslizables inicio
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

//galeria de imagenes con lazy loading + GLightbox
function crearGaleria() {
    let contenedor = document.getElementById("gallery");
    if (!contenedor) return;
    for (let i = 1; i <= 52; i++) {
        let div = document.createElement("div");
        div.className = "col-custom";
        div.innerHTML = `
            <div class="gallery-item">
                <a href="assets/img/galeria/${i}.webp"
                   class="glightbox"
                   data-gallery="galeria-h2o"
                   data-description="Trabajo de plomería en Medellín — Plomeros H2O"
                   aria-label="Ver imagen de trabajo de plomería ${i}">
                    <img src="assets/img/galeria/${i}.webp" alt="Trabajo de plomería en Medellín número ${i}" class="img-fluid" loading="lazy">
                </a>
            </div>
        `;
        contenedor.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Renderizar componentes desde config.js
    renderHeader();
    renderNavbar();
    renderBtnWpp();
    renderFooter();

    // Actualizar botón de emergencia con el número centralizado
    const btnEmergencia = document.getElementById('btn-emergencia');
    if (btnEmergencia) {
        btnEmergencia.href = `https://wa.me/${SITE_CONFIG.whatsapp.completo}?text=${SITE_CONFIG.whatsapp.msgEmergencia}`;
    }

    // Actualizar botón "Llamar ahora" desde config
    const btnLlamar = document.getElementById('btn-llamar');
    if (btnLlamar) {
        btnLlamar.href = `tel:+${SITE_CONFIG.whatsapp.completo}`;
    }

    crearGaleria();

    // Inicializar GLightbox en la galería (nosotros.html)
    if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
    }

    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .catch(err => console.warn('Service Worker:', err));
    }
});

const servicios = [
    {
        "id": 1,
        "nombre": "Instalación de desagüe",
        "descripcion": "Montaje de tuberías PVC sanitarias para redes de aguas residuales en hogares y comercios. Pendientes técnicas correctas y prueba de flujo incluidas.",
        "imagen": "./assets/img/servicio1.webp",
        "pagina": "instalacion-tuberias-medellin.html"
    },
    {
        "id": 2,
        "nombre": "Ventilación de desagüe",
        "descripcion": "Control de malos olores en redes de aguas residuales mediante instalación de ductos de ventilación y válvulas de aireación.",
        "imagen": "./assets/img/servicio2.webp"
    },
    {
        "id": 3,
        "nombre": "Destaqueo sin romper",
        "descripcion": "Desobstrucción de redes sanitarias con técnica mecánica y de presión, sin demoler muros ni losas. Solución definitiva para baños, cocinas e industria.",
        "imagen": "./assets/img/servicio3.webp",
        "pagina": "destape-drenajes-medellin.html"
    },
    {
        "id": 4,
        "nombre": "Modificaciones de red sanitaria",
        "descripcion": "Reformas y adecuaciones de redes de aguas residuales o potables en remodelaciones. Adaptamos puntos existentes a los nuevos diseños de baño o cocina.",
        "imagen": "./assets/img/servicio4.webp"
    },
    {
        "id": 5,
        "nombre": "Redes hidráulicas",
        "descripcion": "Instalación y montaje de redes de agua potable en CPVC y PVC de presión. Incluye abastos fríos y calientes, válvulas de corte y prueba de hermeticidad.",
        "imagen": "./assets/img/servicio5.webp",
        "pagina": "instalacion-tuberias-medellin.html"
    },
    {
        "id": 6,
        "nombre": "Pozos sépticos",
        "descripcion": "Instalación y mantenimiento de pozos sépticos para propiedades sin conexión a red de alcantarillado. Diseño según volumen de descarga y tipo de suelo.",
        "imagen": "./assets/img/servicio6.webp"
    },
    {
        "id": 7,
        "nombre": "Trampas de grasa",
        "descripcion": "Instalación y mantenimiento de trampas de grasa para cocinas industriales y restaurantes. Cumplimiento de normas sanitarias del distrito.",
        "imagen": "./assets/img/servicio7.webp",
        "pagina": "plomeria-comercial-medellin.html"
    },
    {
        "id": 8,
        "nombre": "Instalación de pozuelos",
        "descripcion": "Montaje y desmontaje de lavaplatos, lavamanos y pozuelos con conexión a agua potable y desagüe. Incluye sifones y griferías.",
        "imagen": "./assets/img/servicio8.webp"
    },
    {
        "id": 9,
        "nombre": "Grifería",
        "descripcion": "Instalación de llaves de paso, mezcladores y griferías de lujo o estándar para lavamanos, cocinas, duchas y sanitarios. Todas las marcas y referencias.",
        "imagen": "./assets/img/servicio9.webp"
    },
    {
        "id": 10,
        "nombre": "Electrodomésticos — agua potable",
        "descripcion": "Instalación de lavaplatos eléctricos, nevecones con dispensador, cafeterías, cavas y equipos que requieran conexión a red de agua potable.",
        "imagen": "./assets/img/servicio10.webp"
    },
    {
        "id": 11,
        "nombre": "Electrodomésticos — gas",
        "descripcion": "Instalación certificada de calentadores, secadoras, cubiertas y hornos a gas. Prueba de hermeticidad y ventilación adecuada incluidas en cada conexión.",
        "imagen": "./assets/img/servicio12.webp",
        "pagina": "redes-gas-medellin.html"
    },
    {
        "id": 12,
        "nombre": "Reparación de red de gas",
        "descripcion": "Reparación de válvulas, fugas y certificación de redes de gas doméstico. Emitimos certificado de conformidad para reconexiones según normativa NTC.",
        "imagen": "./assets/img/servicio11.webp",
        "pagina": "redes-gas-medellin.html"
    },
    {
        "id": 13,
        "nombre": "Instalación de equipo sanitario",
        "descripcion": "Cambio e instalación de duchas, lavamanos, sanitarios y orinales. Incluye conexiones de agua fría y caliente, válvulas de corte y revisión de desagüe.",
        "imagen": "./assets/img/galeria/2.webp"
    },
    {
        "id": 14,
        "nombre": "Reparación de fugas",
        "descripcion": "Detección y reparación de goteos, tubos reventados y humedades por fuga de acueducto. Usamos técnica sin demoler para localizar el punto exacto de la fuga.",
        "imagen": "./assets/img/servicio14.webp",
        "pagina": "reparacion-fugas-medellin.html"
    },
];

const tyc = [
    { "id": 1, "descripcion": "Servicios 24 horas" },
    { "id": 2, "descripcion": "Todo servicio tiene garantía referida por el técnico" },
    { "id": 3, "descripcion": "La visita al ser ejecutada tiene costo de 30 mil (2025)" },
    { "id": 4, "descripcion": "Al ejecutar el servicio el costo de la visita será descontado del valor total" }
];
//añadir tyc a servicios pag
document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("tyc-lista");
    tyc.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = item.descripcion;
        lista.appendChild(li);
    });
});

// Seleccionar el contenedor donde se agregarán las tarjetas
const contenedor = document.getElementById("servicios-container");

// Generar dinámicamente las tarjetas
if (contenedor) {
    servicios.forEach(servicio => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-3", "mb-3");
        tarjeta.innerHTML = `
            <div class="card shadow text-light border border-white text-center h-100" style="background-color: rgb(16, 16, 16);">
                <img src="${servicio.imagen}" class="card-img-top" alt="${servicio.nombre} en Medellín — Plomeros H2O" loading="lazy">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title fs-5">${servicio.nombre}</h3>
                    <p class="card-text text-light flex-grow-1">${servicio.descripcion}</p>
                    <div class="d-flex gap-2 mt-auto flex-wrap justify-content-center">
                        ${servicio.pagina ? `<a href="${servicio.pagina}" class="btn btn-outline-light btn-sm">Ver más</a>` : ''}
                        <a href="https://wa.me/${SITE_CONFIG.whatsapp.completo}?text=Hola,+deseo+el+servicio+de+${encodeURIComponent(servicio.nombre)}" target="_blank" rel="noopener" style="background-color:#1bdfda;" class="btn btn-primary btn-sm">Solicitar</a>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}



