let buttons = document.querySelectorAll('.button');
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let audio = new Audio("./sound.wav");


buttons.forEach( function(button){
    // console.log(button);
    button.addEventListener("click", function(e){
        // console.log(e.target);
        // console.log(e.target.id);
        audio.play();
        if(e.target.id == "red"){
            main.style.backgroundColor = e.target.id;
            footer.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "yellowgreen"){
            main.style.backgroundColor = e.target.id;
            footer.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "yellow"){
            main.style.backgroundColor = e.target.id;
            footer.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "pink"){
            main.style.backgroundColor = e.target.id;
            footer.style.backgroundColor = e.target.id;
        }
    })
} )





let reload = document.querySelector("#reload");

reload.addEventListener("click", function(){
    window.location.replace("./project_1.html");
})




let home = document.querySelector("#home");

home.addEventListener("click",function(){
    window.location.replace("./index.html");
})