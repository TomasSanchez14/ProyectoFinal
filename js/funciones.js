function cambiarTexto(idBoton, textoNuevo) {
  const boton = document.getElementById(idBoton),
        texto = document.getElementById('txt-nuevo');
              
        boton.addEventListener('click', () => {
          texto.innerText = textoNuevo;
        });
}

cambiarTexto('user', 'Edad: 24 años');
cambiarTexto('calendar', 'Fec. Nac.: 21/09/1999');
cambiarTexto('card', 'DNI: 41.708.254');
cambiarTexto('group', 'Estado Civil: Soltero');
cambiarTexto('map', 'Ubicacion: Buenos Aires, Argentina');

