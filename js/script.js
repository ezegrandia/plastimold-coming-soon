//--------------------------
// Cambio de Idioma
//--------------------------

// Obtenemos los elementos que deseamos traducir
const textElements = document.querySelectorAll("[data-es][data-en]");

// Obtenemos los botones de idioma
const btnEs = document.getElementById("btn-es");
const btnEn = document.getElementById("btn-en");

// Función que cambia el idioma
function changeLanguage(lang) {
    // Recorremos todos los elementos a traducir
    textElements.forEach((textElement) => {
        // Obtenemos el texto correspondiente al idioma seleccionado
        const text = lang === "es" ? textElement.dataset.es : textElement.dataset.en;
        // Asignamos el texto al elemento
        textElement.textContent = text;
    });
}

// Evento de clic en el botón ES
btnEs.addEventListener("click", function () {
    changeLanguage("es");
});

// Evento de clic en el botón EN
btnEn.addEventListener("click", function () {
    changeLanguage("en");
});

//--------------------------
// Favicon segun thema usuario
//--------------------------

// Detecta si el usuario está usando un tema claro u oscuro
const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// Cambia el favicon según el tema
const favicon = document.querySelector('link[rel="shortcut icon"]');
if (prefersDarkMode) {
    favicon.href = "./assets/img/favicon-dark-mode.ico";
} else {
    favicon.href = "./assets/img/favicon.ico";
}

//--------------------------
// Precarga de Iconos
//--------------------------

// Captura de Iconos
const iconoFacebook = document.getElementById("logo-facebook");
const iconoInstagram = document.getElementById("logo-instagram");
const iconoWp = document.getElementById("logo-wp");
const iconoMaps = document.getElementById("logo-maps");

// Precargar Iconos
const imgFacebook = new Image();
imgFacebook.src = "./assets/img/logo-facebook-white.svg";
const imgInstagarm = new Image();
imgInstagarm.src = "./assets/img/logo-instagram-white.svg";
const imgWp = new Image();
imgWp.src = "./assets/img/logo-wp-white.svg";
const imgMaps = new Image();
imgMaps.src = "./assets/img/logo-maps-white.svg";

// Precargar Iconos Hover
const imgFacebookHover = new Image();
imgFacebookHover.src = "./assets/img/logo-facebook-hover.svg";
const imgInstagarmHover = new Image();
imgInstagarmHover.src = "./assets/img/logo-instagram-hover.svg";
const imgWpHover = new Image();
imgWpHover.src = "./assets/img/logo-wp-hover.svg";
const imgMapsHover = new Image();
imgMapsHover.src = "./assets/img/logo-maps-hover.svg";

function efectoHover() {
    // Efecto Hover Facebook
    iconoFacebook.addEventListener("mouseenter", () => {
        iconoFacebook.src = imgFacebookHover.src;
    });
    iconoFacebook.addEventListener("mouseleave", () => {
        iconoFacebook.src = imgFacebook.src;
    });

    // Efecto Hover Instagram
    iconoInstagram.addEventListener("mouseenter", () => {
        iconoInstagram.src = imgInstagarmHover.src;
    });
    iconoInstagram.addEventListener("mouseleave", () => {
        iconoInstagram.src = imgInstagarm.src;
    });

    // Efecto Hover WhatsApp
    iconoWp.addEventListener("mouseenter", () => {
        iconoWp.src = imgWpHover.src;
    });
    iconoWp.addEventListener("mouseleave", () => {
        iconoWp.src = imgWp.src;
    });

    // Efecto Hover Maps
    iconoMaps.addEventListener("mouseenter", () => {
        iconoMaps.src = imgMapsHover.src;
    });
    iconoMaps.addEventListener("mouseleave", () => {
        iconoMaps.src = imgMaps.src;
    });
}

//--------------------------
// Contador
//--------------------------

let endDate = new Date("2023-07-28T00:00:00"); //Fecha de finalización

function countdown() {
    const now = new Date();
    let remainingTime = endDate.getTime() - now.getTime();

    if (remainingTime <= 0) {
        // El contador ha terminado
        if (now.getDate() === endDate.getDate()) {
            // Es el mismo día, establecer la fecha de finalización en el día siguiente
            endDate.setDate(endDate.getDate() + 1);
        } else {
            // Es un día diferente, reiniciar el contador a 30 días
            endDate.setDate(now.getDate() + 30);
        }
        remainingTime = endDate.getTime() - now.getTime(); // Establecer el tiempo restante al nuevo tiempo restante
    }

    // Calcular los días, horas, minutos y segundos restantes
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    // Actualizar los valores en los elementos HTML correspondientes
    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;
}

// Ejecutar la función de contador cada segundo
setInterval(countdown, 1000);

//--------------------------
// Background Aleatorio
//--------------------------

// Crea los arrays de imágenes para cada fondo
const imagenesFondo1 = [
    "../assets/img/haas.jpg",
    "../assets/img/tupper.jpg",
    "../assets/img/exportacion.jpg",
    "../assets/img/sampi.jpg",
];

const imagenesFondo2 = [
    "../assets/img/pulseras.jpg",
    "../assets/img/giul.jpg",
    "../assets/img/separador.jpg",
    "../assets/img/conos.jpg",
];

// Genera un número aleatorio para elegir el fondo
const fondoAleatorio = Math.floor(Math.random() * 2) + 1; // Genera un número aleatorio entre 1 y 2

// Configura el fondo aleatorio
const cajas = document.querySelectorAll(".box");
if (fondoAleatorio === 1) {
    // Configura el fondo 1
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundImage = `url(${imagenesFondo1[i]})`;
    }
} else {
    // Configura el fondo 2
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundImage = `url(${imagenesFondo2[i]})`;
    }
}

//--------------------------
// Llamadas onload Page
//--------------------------

window.onload = function () {
    countdown();
    efectoHover();
};
