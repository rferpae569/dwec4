window.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('boton1').addEventListener('click',()=>{
        document.getElementById('imagen').src="img/ovni.jpg";
    })

    document.getElementById('boton2').addEventListener('click',()=>{
        document.getElementById('imagen').src="img/paisaje.jpg";
    })

    document.getElementById('boton3').addEventListener('click',()=>{
        document.getElementById('imagen').src="img/araña.jpg";
    })
});
