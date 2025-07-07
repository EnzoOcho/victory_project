function abrirWhatsapp() {
  const numero = "5491144029294"; 
  const mensaje = "Hola, buen dia! Me gustaria más información";
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank"); 
}


const headerBtn = document.querySelector("#header-btn")

function displayHeader() {
  const header = document.querySelector("header")
  const botonera = document.querySelector(".botonera")
  header.classList.toggle("displayed")
  botonera.classList.toggle("show-btns")
}
//lele
headerBtn.addEventListener("click", displayHeader)

const botonera = document.querySelector(".botonera")
const botones = botonera.children
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", scrollASeccion)
}

function scrollASeccion(e) {
  const seccion = e.target.innerText

  const destino = document.getElementById(seccion);

  destino.scrollIntoView({ behavior: "smooth" });
}
/*sdsdsdsdsd */
let lastScroll = 0;
let openedByButton = false;

const whatBtn = document.querySelector(".what-btn")

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if(currentScroll<100){
    whatBtn.classList.add("active")
  } else{
    whatBtn.classList.remove("active")
  }


  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("hidden");
    //  headerBtn.style.display = "flex"; // Mostrar botón cuando se oculta el header
  } else {
    header.classList.remove("hidden");
    //  headerBtn.style.display = ""; // Ocultar botón cuando se muestra el header
  }

  lastScroll = currentScroll;
});

headerBtn.addEventListener("click", () => {
  header.classList.remove("hidden");


  openedByButton = true;
});

function openGoogle() {
  let url = "https://play.google.com/store/apps/details?id=com.turnosweb.lite&hl=es_AR"
  window.open(url, "blank")
  console.log("lelel")
}

function openApple() {
  let url = "https://apps.apple.com/us/app/turnosweb-app-2-0/id1169566678?l=es&ls=1"
  window.open(url, "blank")
  console.log("lelel")
}

function openIg() {
  let url = "https://www.instagram.com/victory.cf/"
  window.open(url, "blank")
  console.log("lelel")
}

function openMaps() {
  let url = "https://www.google.com/maps/place/Victory+CrossFuncional/@-34.644335,-58.587656,15z/data=!4m6!3m5!1s0x95bcc70f296a1c7f:0x7834fb1faa251b32!8m2!3d-34.6443352!4d-58.5876557!16s%2Fg%2F11htkltr_v?hl=es-419&entry=ttu&g_ep=EgoyMDI1MDYyOS4wIKXMDSoASAFQAw%3D%3D"
  window.open(url, "blank")
  console.log("lelel")
}

const ubiBtn = document.querySelector(".ubi")
const phoneBtn = document.querySelector(".tel")
const igBtn = document.querySelector(".ig")
const googleBtn = document.querySelector(".google-btn")
const appleBtn = document.querySelector(".apple-btn")
appleBtn.addEventListener("click", openApple)
googleBtn.addEventListener("click", openGoogle)
igBtn.addEventListener("click", openIg)
phoneBtn.addEventListener("click", abrirWhatsapp)
ubiBtn.addEventListener("click",openMaps)