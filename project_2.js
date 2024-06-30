let input = document.querySelector('#text');
let output = document.querySelector('.output-text');
let submit = document.querySelector('.submit');
let reset = document.querySelector('.reset');
// let body = document.querySelector('body');
let audio = new Audio("./sound.wav");


submit.addEventListener("click",function(e){
    // let inputText = input.value;
    output.textContent = input.value;
    audio.play();
})

reset.addEventListener("click", function(){
    // history.go(0);
    input.value="";
    output.textContent="";
    input.focus();
    audio.play();
})

input.addEventListener("click",function(e){
    audio.play();
})