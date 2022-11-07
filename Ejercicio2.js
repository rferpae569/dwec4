window.addEventListener('DOMContentLoaded', () => {
    var color;
    document.getElementById('boton1').addEventListener('click',()=>{
        color='grey';
        document.body.style.background=color;
        document.getElementById('parrafo').style.color="white";
    })

    document.getElementById('boton2').addEventListener('click',()=>{
        color='green';
        document.body.style.background=color;
        document.getElementById('parrafo').style.color="white";
    })

    document.getElementById('boton3').addEventListener('click',()=>{
        color='orange';
        document.body.style.background=color;
        document.getElementById('parrafo').style.color="white";
    })
});
