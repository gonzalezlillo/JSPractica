const expRegCorreo =/^\w+@(\w+\.)+\w{2,4}$/;
const expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

const formulario = document.getElementById("formulario");
formulario.addEventListener('submit',enviar);

const nombre = document.querySelector("#nombre");
const asunto = document.querySelector("#asunto");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const validacion_nombre = document.getElementById("validacion_nombre");
const validacion_correo = document.getElementById("validacion_correo");
const validacion_asunto = document.getElementById("validacion_asunto");
const validacion_mensaje = document.getElementById("validacion_mensaje");

const resultado = document.getElementById("resultado");


function enviar(event){

   event.preventDefault();

   let isValidMessage = validacionMensaje();
   let isValidSubject = validacionAsunto();
   let isValidMail = validacionCorreo();
   let isValidName = validacionNombre();

   if (isValidName && isValidMail && isValidSubject && isValidMessage) {
      resultado.innerText = "¡Mensaje enviado exitosamente!";
   }
};


let validacionNombre = () => {
   
   if(!nombre.value) {
      resultado.innerText = "";
      validacion_nombre.innerText =  "El nombre es requerido";
      nombre.focus();
      return false;
   } else {
      validacion_nombre.innerText =  "";
   }

   if (!expRegNombre.exec(nombre.value)) {
      resultado.innerText = "";
      validacion_nombre.innerText = "El nombre solo admite letras y espacios";
      nombre.focus();
      return false;
   } else {
      return true; 
   }

    
}

let validacionCorreo = () => {
   
   if(!email.value) {
      resultado.innerText = "";
      validacion_correo.innerText =  "El correo es requerido";
      email.focus();
      return false;
   } else {
      validacion_correo.innerText =  "";
   }

   if (!expRegCorreo.exec(email.value)) {
      resultado.innerText = "";
      validacion_correo.innerText = "El correo tiene un formato incorrecto";
      email.focus();
      return false;
   } else {
      return true; 
   }
}

let validacionAsunto = () => {
   
   if(!asunto.value) {
      resultado.innerText = "";
      validacion_asunto.innerText =  "El asunto es requerido";
      asunto.focus();
      return false;
   } else {
      validacion_asunto.innerText =  "";
      return true;
   }
}

let validacionMensaje = () => {
   
   if(!mensaje.value) {
      resultado.innerText = "";
      validacion_mensaje.innerText =  "El mensaje es requerido";
      mensaje.focus();
      return false;
   } else {
      validacion_mensaje.innerText =  "";
      return true;
   }
}