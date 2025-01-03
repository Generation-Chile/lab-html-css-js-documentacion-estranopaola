


  //se crea la funcion para  aplicar desplazamiento al hacer click en el boton
    function scrollToPosition() {
    window.scrollTo({
        top: 1000,  // Distancia desde la parte superior de la página
        behavior: 'smooth'  // Desplazamiento suave
    });
  }
  //llamar al boton y aplicarle la funcion creada antes al clickear
  document.getElementById('sabermas').addEventListener('click', scrollToPosition);




  function presionarBoton() {
    // capturar los valores de los inputs
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let mensaje = document.getElementById('mensaje').value;
    // envia los valores en un objeto a la consola cuando se presione boton
    


    if(nombre === '' || email === '' || mensaje === '') {
      alert('Por favor, complete todos los campos');
      return;
    } //alertar cuando algun campo esta vacio

    // Se crea una alerta para notificar al usuario que su mensaje fue enviado 
    alert('Formulario enviado, verificalo en la consola');
    console.log({nombre, email, mensaje});
    // limpiar los inputs
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
    }
    
