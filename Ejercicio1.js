window.addEventListener('DOMContentLoaded', () => {
    var color;
    var mensaje=prompt("Introduzca un color: ");

    if(mensaje== null || mensaje==""){
        mensaje=prompt("Lo siento, no has escrito ningun color");
    }else{
        color=mensaje;
        document.getElementById('parrafo').style.color=color;
    }
});
