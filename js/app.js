console.log('hola'); // Imprime un mensaje de saludo en la consola
const menu = document.querySelector('.hamburguesa'); // Selecciona el botón del menú (icono de hamburguesa)
console.log(menu);
const navegacion = document.querySelector('.navegacion'); // Selecciona el menú de navegación
const imagenes = document.querySelectorAll('img'); // Selecciona todas las imágenes en el documento
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnPasta = document.querySelector('.pasta');
const btnPostres = document.querySelector('.postres');
const btnPizza = document.querySelector('.pizza');
const contenedorPlatillos = document.querySelector('.platillos');

// Escucha el evento cuando el contenido del DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => { 
    eventos(); // Inicializa los oyentes de eventos
    platillos(); // Inicializa la funcionalidad relacionada con los platillos
});

// Función para configurar los oyentes de eventos
const eventos = () => { 
    menu.addEventListener('click', abrirMenu); // Agrega un evento de clic al botón del menú para abrir el menú
}

// Función para abrir el menú de navegación
const abrirMenu = () => { 
    navegacion.classList.remove('ocultar'); // Elimina la clase 'ocultar' para mostrar el menú de navegación
    botonCerrar(); // Llama a la función para crear el botón de cerrar
}

// Función para crear un botón de cerrar y una superposición
const botonCerrar = () => { 
    const btnCerrar = document.createElement('P'); // Crea un nuevo elemento de párrafo para el botón de cerrar
    const overlay = document.createElement('div'); // Crea un nuevo elemento div para la superposición
    overlay.classList.add('pantalla-completa'); // Agrega clase a la superposición para el estilo
    const body = document.querySelector('body'); // Selecciona el elemento body
    if (document.querySelectorAll('.pantalla-completa').length > 0) return; // Evita agregar múltiples superposiciones
    body.appendChild(overlay); // Agrega la superposición al body
    btnCerrar.textContent = 'x'; // Establece el contenido de texto del botón de cerrar
    btnCerrar.classList.add('btn-cerrar'); // Agrega clase al botón de cerrar para el estilo

    navegacion.appendChild(btnCerrar); // Agrega el botón de cerrar al menú de navegación
    cerrarMenu(btnCerrar, overlay); // Llama a la función para manejar el cierre del menú
}

// Observador de intersección para cargar imágenes de forma perezosa
const observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Verifica si la imagen está en el viewport
            const imagen = entry.target; // Obtiene la imagen que intersecta
            observer.unobserve(imagen); // Deja de observar la imagen
        }
    });
});

// Establece la fuente de las imágenes y las observa para la carga perezosa
imagenes.forEach(imagen => { //recorre todas las imagenes
    imagen.src = imagen.dataset.src; // Establece la fuente de la imagen desde el atributo data-src
    observer.observe(imagen); // Comienza a observar la imagen para la intersección
});

// Función para cerrar el menú de navegación
const cerrarMenu = (boton, overlay) => { // Recibe el botón de cerrar y la superposición
    boton.addEventListener('click', () => { // Agrega un evento de clic al botón de cerrar
        navegacion.classList.add('ocultar'); // Agrega la clase 'ocultar' para ocultar el menú de navegación
        overlay.remove(); // Elimina la superposición
        boton.remove(); // Elimina el botón de cerrar
    });

    overlay.addEventListener('click', () => { // Agrega un evento de clic a la superposición
        navegacion.classList.add('ocultar'); // Agrega la clase 'ocultar' para ocultar el menú de navegación
        overlay.remove(); // Elimina la superposición
        boton.remove(); // Elimina el botón de cerrar
    });
}

// Función para manejar los platillos
const platillos = () => { // Función para manejar los platillos
    let platillosArreglo = []; // Inicializa un arreglo para contener los platillos
    const platillos = document.querySelector('.platillo'); // Selecciona el elemento platillo
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]); // Agrega cada platillo al arreglo


    //se generan un nuevo arreglo para cada tipo de platillo (ensalada, pasta, pizza, postres)

    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo') === 'ensalada'); // Filtra los platillos de ensalada
    const pasta = platillosArreglo.filter(pasta=> pasta.getAttribute('data-platillo') === 'pasta'); // Filtra los platillos de pasta
    const pizza = platillosArreglo.filter(pizza=> pizza.getAttribute('data-platillo') === 'pizza'); // Filtra los platillos de pizza
    const postres = platillosArreglo.filter(postres=> postres.getAttribute('data-platillo') === 'postres'); // Filtra los platillos de postres

    mostrarPlatillos(ensaladas, pastas, pizzas, postres, platillosArreglo);
}

const mostrarPlatillos = (ensaladas, pastas, pizzas, postres, todos) => { // Función para mostrar los platillos
    btnEnsaladas.addEventListener('click', ()=> {
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
        console.log(ensaladas);
    });
    btnPastas.addEventListener('click', ()=> {
        limpiarHtml(contenedorPlatillos);
        pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
        console.log(ensaladas);
    });
    btnPizzas.addEventListener('click', ()=> {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
        console.log(ensaladas);
    });
    btnPostres.addEventListener('click', ()=> {
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
        console.log(ensaladas);
    });
    btnTodos.addEventListener('click',()=> {
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=>contenedorPlatillos.appendChild(todo));
    });
}
const limpiarHtml = (contenedor) => {
     while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
     }
}
/* 3:07 */