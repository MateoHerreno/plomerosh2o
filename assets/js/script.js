
// componente nav
fetch('includes/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el navbar:', error));

//componente header
fetch('includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el header:', error));

//boton wpp
fetch('includes/btnwpp.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('btnwpp').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el footer:', error));

//componente footer
fetch('includes/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error cargando el footer:', error));

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

//galeria de imagenes
function crearGaleria() {
    let contenedor = document.getElementById("gallery");
    for (let i = 1; i <= 52; i++) {
        let div = document.createElement("div");
        div.className = "col-custom";
        div.innerHTML = `
            <div class="gallery-item">
                <img src="./assets/img/galeria/${i}.jpg" alt="Imagen ${i}" class="img-fluid">
            </div>
        `;
        contenedor.appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", crearGaleria);

const servicios = [
    {
        "id": 1,
        "nombre": "Instalación de desagües",
        "descripcion": "Realización de montaje en tuberías PVC en redes de aguas residuales.",
        "imagen": "./assets/img/servicio1.jpg"
    },
    {
        "id": 2,
        "nombre": "Instalación de ventilación en desagües",
        "descripcion": "Control de malos olores de una red de agua residual mediante instalación de ductos de ventilación.",
        "imagen": "./assets/img/servicio2.webp"
    },
    {
        "id": 3,
        "nombre": "Destaqueo sin romper",
        "descripcion": "Desobstrucciones de redes sanitaria sin destrucciones de muro o lozas.",
        "imagen": "./assets/img/servicio3.webp"
    },
    {
        "id": 4,
        "nombre": "Modificaciones de red sanitarias",
        "descripcion": "Reformas de redes de aguas residuales o potables",
        "imagen": "./assets/img/servicio4.webp"
    },
    {
        "id": 5,
        "nombre": "Redes hidráulicas",
        "descripcion": "Instalación de aguas potables, Instalaciones de redes y abastos de aguas potables",
        "imagen": "./assets/img/servicio5.webp"
    },
    {
        "id": 6,
        "nombre": "Posos sépticos",
        "descripcion": "Instalación y mantenimiento de posos sépticos",
        "imagen": "./assets/img/servicio6.webp"
    },
    {
        "id": 7,
        "nombre": "Trampas de grasa",
        "descripcion": "Instalación y mantenimiento de trampas de grasa",
        "imagen": "./assets/img/servicio7.webp"
    },
    {
        "id": 8,
        "nombre": "Instalación de pozuelos",
        "descripcion": "Montaje y desmontaje de pozuelos con conexiones a aguas potables",
        "imagen": "./assets/img/servicio8.webp"
    },
    {
        "id": 9,
        "nombre": "Grifería",
        "descripcion": "Instalación de llaves de lujo o estándar de lavamanos, cocinas, duchas, orinales, sanitarios...",
        "imagen": "./assets/img/servicio9.webp"
    },
    {
        "id": 10,
        "nombre": "Conexiones a electrodomésticos con agua potable",
        "descripcion": "Instalación de lavaplatos eléctricos, nevecones, cafeterías, dispensadores de gaseosa, cavas....",
        "imagen": "./assets/img/servicio10.jpg"
    },
    {
        "id": 11,
        "nombre": "Conexiones a electrodomésticos con gas",
        "descripcion": "Instalación de todo tipo de electrodomesticos con coneccion a gas como: calentadores, secadoras, cubiertas...",
        "imagen": "./assets/img/servicio12.webp"
    },
    {
        "id": 12,
        "nombre": "Reparación de gas domestico",
        "descripcion": "Reparación de válvulas de gas, ejecución de reformas y certificación de redes domesticas de gas.",
        "imagen": "./assets/img/servicio11.jpg"
    },
    {
        "id": 13,
        "nombre": "Instalación de equipo sanitario",
        "descripcion": "Cambio e instalación de duchas, lavamanos, sanitarios, orinales...",
        "imagen": "./assets/img/galeria/2.jpg"
    },
    {
        "id": 14,
        "nombre": "Reparación de fugas",
        "descripcion": "Reparación de goteos, tubos reventados, humedades de acueductos.",
        "imagen": "./assets/img/servicio14.jpg"
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
servicios.forEach(servicio => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("col-md-3", "mb-3"); // 4 tarjetas por fila en pantallas medianas y grandes
    tarjeta.innerHTML = `
        <div class="card shadow text-light border border-white text-center h-100" style="background-color: rgb(16, 16, 16);">
            <img src="${servicio.imagen}" class="card-img-top" alt="${servicio.nombre}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${servicio.nombre}</h5>
                <p class="card-text text-light flex-grow-1">${servicio.descripcion}</p>
                <a href="https://wa.me/3507226700?text=Hola,+deseo+el+servicio+de+${servicio.nombre}" target="_blank" style="background-color:#1bdfda;" class="btn btn-primary btn-lg mt-auto">Solicitar Servicio</a>
            </div>
        </div>
    `;
    contenedor.appendChild(tarjeta);
});



