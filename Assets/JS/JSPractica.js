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
    do {
        var nombre = document.querySelector(".nombre");
        var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        var expRegMail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]/;

        
        if(nombre.match(expRegNombre)) {
            alert('Nombre ingresado correctamente.');
        }
        else {
            alert('Nombre invalido.');      
        }

    }while (!nombre.match(expRegNombre));
    return nombre; 
}