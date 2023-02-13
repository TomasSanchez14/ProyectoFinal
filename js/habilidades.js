function agregarImg(idBoton, imgNueva, contenedor) {
  const boton = document.getElementById(idBoton),
        img = document.getElementById(contenedor);
              
        boton.addEventListener('click', () => {
            img.innerHTML = imgNueva;
        });
}

agregarImg('flecha','<img src="../images/logitos.png" alt="">', 'cont-1');
agregarImg('flecha-1', '<img src="../images/backend.png" alt="">', 'cont-2');
agregarImg('flecha-2', '<img src="../images/programacion1.png" alt="">','cont-3');
agregarImg('flecha-3', '<img src="../images/git.png" alt="">','cont-4');
