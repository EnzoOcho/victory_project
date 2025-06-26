const updateButton = document.querySelector(".update")
updateButton.addEventListener("click", updateJson)

const editButton = document.querySelector(".edit")

let boxes = undefined

function updateBoxes() {
    boxes = document.querySelectorAll(".box")
    boxes.forEach(element => {
        element.addEventListener("click", agregarDropdown(element, ["(Vacio)", "Openbox", "Funcional", "Crossfit", "Funcional y Crossfit"]))
    });

}



editButton.addEventListener("click", updateBoxes)

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado"]

async function updateJson() {
    let datos = {

    }

    for (let i = 0; i < dias.length; i++) {
        let clasesBox = document.querySelectorAll(`.${dias[i]}`)
        let data = []
        clasesBox.forEach(element => {
            data.push(element.innerHTML.trim())

            datos[dias[i]] = data
            
        })

    }

     console.log(datos)
     console.log("lelel", JSON.stringify(datos))

    await fetch("/prueba-update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    // alert("pepeñato")

}


//dropdown menus.............

function agregarDropdown(boton, opciones) {
    let menuAbierto = null;

    boton.addEventListener('click', () => {
        // Si ya hay un menú abierto, lo cerramos
        if (menuAbierto) {
            menuAbierto.remove();
            menuAbierto = null;
            return;
        }

        // Crear el menú
        const menu = document.createElement('div');
        menu.classList.add('dropdown-menu');

        opciones.forEach(opcionTexto => {
            const btn = document.createElement('button');
            btn.textContent = opcionTexto;
            btn.classList.add('option');

            btn.addEventListener('click', () => {
                if (btn.textContent === "(Vacio)") {
                    boton.textContent = ""
                    menu.remove()
                    menuAbierto = null
                    return
                }
                boton.textContent = opcionTexto;
                menu.remove();
                menuAbierto = null;
            });

            menu.appendChild(btn);
        });

        // Posicionar debajo del botón
        const rect = boton.getBoundingClientRect();
        menu.style.left = `${rect.left}px`;
        menu.style.top = `${rect.bottom + window.scrollY}px`;
        menu.style.position = 'absolute';

        document.body.appendChild(menu);
        menuAbierto = menu;
    });

    // Cerrar si se hace clic afuera
    document.addEventListener('click', (e) => {
        if (menuAbierto && !boton.contains(e.target) && !menuAbierto.contains(e.target)) {
            menuAbierto.remove();
            menuAbierto = null;
        }
    });
}

// 👉 Aplicar a varios botones


// agregarDropdown(botones[0], ['Manzana', 'Banana', 'Pera']);
// agregarDropdown(botones[1], ['Rojo', 'Azul', 'Verde']);s