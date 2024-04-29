function toggleTheme() {
    var body = document.body;
    body.classList.toggle("bg-black");
    body.classList.toggle("bg-white");
    
    var navBack = document.getElementById("navbar");
    navBack.classList.toggle("bg-black");
    navBack.classList.toggle("bg-white");
    
    var elements = document.querySelectorAll('.text-light');    
    elements.forEach(function(element) {
        element.classList.toggle("text-dark");
    });

    var background = document.getElementById("backgroundChange"); 
    background.classList.toggle("bg-custom-dark");
    background.classList.toggle("btn-gradient-pink-purple"); 

    var text = document.getElementById("textWhite");
    text.classList.toggle("text-light");
    text.classList.toggle("text-dark");
}
function toggleTheme2() {
    var body = document.body;
    body.classList.toggle("bg-black");
    body.classList.toggle("bg-white");
   

    var background = document.getElementById("backgroundChange"); 
    background.classList.toggle("bg-custom-dark");
    background.classList.toggle("btn-gradient-pink-purple"); 

    var text = document.getElementById("textWhite");
    text.classList.toggle("text-light");
    text.classList.toggle("text-dark"); 
    
    var elements = document.querySelectorAll('.text-light');    
    elements.forEach(function(element) {
        element.classList.toggle("text-dark");
    });
}
