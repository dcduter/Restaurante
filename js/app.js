console.log('hola');
const menu = document.querySelector('.hamburguesa');
console.log(menu);
const navegacion =document.querySelector('.navegacion');

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
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    console.log(btnCerrar);
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar);
}

const cerrarMenu = () => {
    botton.addEventListener('click',() => {
        navegacion.classList.add('ocultar');
    })
}

// minuto 1:22