console.log('hola');
const menu = document.querySelector('.hamburguesa');
console.log(menu);
const navegacion =document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img'); /* selecciona todas las imagenes que esten y que se agreguen */

document.addEventListener('DOMContentLoaded',()=> {
    eventos();
 
})

const eventos = ()=> {
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('P');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

imagenes.forEach(imagen=> {
   imagen.src = imagen.dataset.src; /* en el html se agrega el data-src */
});

const cerrarMenu = (boton,overlay) => {
    boton.addEventListener('click',() => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.addEventListener('click',() => {
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });
}

