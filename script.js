
let myTitle = document.querySelector("h1");
let buttonRed = document.getElementById("buttonRed");
let buttonG = document.getElementById("buttonGreen");
let buttonF = document.getElementById("buttonFont");



buttonG.addEventListener("click", function(){
    //debugger;   
    
    myTitle.classList.remove('tituloRed');
    myTitle.classList.add('tituloGreen');

});

buttonRed.addEventListener("click", function(){
    //debugger;   
    myTitle.classList.add('tituloRed');
    myTitle.classList.remove('tituloGreen');

});

buttonF.addEventListener("click", function(){
    
    myTitle.classList.toggle('tituloItalic');

});