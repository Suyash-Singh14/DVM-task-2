let base = document.getElementsByClassName("base");
// let box1 =document.getElementById("#box1");
let box2 = document.getElementById("box2");
// let box3 =document.getElementById("#box3");
// let box4 =document.getElementById("#box4");
let spacer = document.getElementsByClassName("spacer");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    base.style.marginBottom = value * 0.5 + "px";
})