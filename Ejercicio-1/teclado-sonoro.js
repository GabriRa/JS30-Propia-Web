const teclas = document.querySelectorAll(".tecla");
console.log(teclas);
teclas.forEach(tecla=>{
    tecla.addEventListener("keydown", function(e){
        console.log(e);
    });
});