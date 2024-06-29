alert("Please download latest version. You can download latest version by click on version in right bottom");

let buttons = document.querySelectorAll('.button');
let main = document.querySelector("main");

buttons.forEach( function(button){
    // console.log(button);
    button.addEventListener("click", function(e){
        // console.log(e.target);
        // console.log(e.target.id);
        if(e.target.id == "red"){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == "yellowgreen"){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == "yellow"){
            main.style.backgroundColor = e.target.id
        }
        if(e.target.id == "pink"){
            main.style.backgroundColor = e.target.id
        }
    })
} )
