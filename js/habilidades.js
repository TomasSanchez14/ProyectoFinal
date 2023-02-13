function agregarImg(idBoton, imgNueva, contenedor) {
  const boton = document.getElementById(idBoton),
        img = document.getElementById(contenedor);
              
        boton.addEventListener('click', () => {
            img.innerHTML = imgNueva;
        });
}

let texto = "../"
agregarImg('flecha','<img src="'+ texto +'images/logitos.png" alt="">', 'cont-1');
agregarImg('flecha-1', '<img src="'+ texto +'images/backend.png" alt="">', 'cont-2');
agregarImg('flecha-2', '<img src="'+ texto +'images/programacion1.png" alt="">','cont-3');
agregarImg('flecha-3', '<img src="'+ texto +'images/git.png" alt="">','cont-4');
