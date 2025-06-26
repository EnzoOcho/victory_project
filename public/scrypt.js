function abrirWhatsapp(){
    const numero = "5491123475077"; // Reemplazá con tu número
    const mensaje = "Hola, quiero más información";
    const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank"); // Abre en nueva pestaña/ventana
}
// const header = document.querySelector(".coisto")

// function resize(){
//     if(window.innerWidth<800){
//         console.log("mermelada")
//         header.classList.add("hidden")
//     }

//     console.log(window.innerWidth)
// }

// window.addEventListener("resize",resize)

const headerBtn = document.querySelector("#header-btn")

function displayHeader(){
    const header = document.querySelector("header")
    const botonera = document.querySelector(".botonera")
    header.classList.toggle("displayed")
    botonera.classList.toggle("show-btns")
}

headerBtn.addEventListener("click",displayHeader)

const botonera = document.querySelector(".botonera")
const botones= botonera.children
for(let i = 0;i<botones.length;i++){
    botones[i].addEventListener("click",scrollASeccion)
}

function scrollASeccion(e) {
    const seccion = e.target.innerText
    
    const destino = document.getElementById(seccion);
    
    destino.scrollIntoView({ behavior: "smooth" });
  }
/*sdsdsdsdsd */
 let lastScroll = 0;
 let openedByButton = false;


   window.addEventListener("scroll", () => {
   const currentScroll = window.scrollY;

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

