const expRegCorreo =/^\w+@(\w+\.)+\w{2,4}$/;
const expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

var formulario = document.getElementById("formulario");
formulario.addEventListener('submit',enviar);


function enviar(){
    
    var email = document.querySelector(".asunto");
    var correo = document.querySelector(".correo");
    var clave = document.querySelector(".clave");
    alert(`Hola ${nombre.value}, tu correo electrónico es:
    ${correo.value} y tu clave es ${clave.value}, Bienvenido`);
};


let validacionNombre = () => {
    var nombre = document.getElementById("nombre");
    
    if(!nombre.value)
     {
      alert("El campo nombre es requerido");
      nombre.focus();
      return false;
     }
     if (!expRegNombre.exec(nombre.value))
     {
        alert("El campo nombre solo admite letras y espacios.")
        nombre.focus();
        return false;
     }

    return nombre; 
}