let box1 =  document.querySelector(".intro .subgrid>.column:nth-child(1)");
let box2 =  document.querySelector(".intro .subgrid>.column:nth-child(2)");
let box3 =  document.querySelector(".intro .subgrid>.column:nth-child(3)");
let box4 =  document.querySelector(".intro .subgrid>.column:nth-child(4)");
let video =  document.querySelector(".intro .subgrid>.column:nth-child(5)");


window.addEventListener('scroll', ()=>{
  box1.style.bottom = 0.5 * window.scrollY + "px";
  box4.style.bottom = 0.5 * window.scrollY + "px";
  box2.style.bottom = 0.2 * window.scrollY + "px";
  box3.style.bottom = 1 * window.scrollY + "px";
  video.style.bottom = 0.5 * window.scrollY + "px";
})

let testbox1 =  document.querySelector(".Testimonials .subgrid>.column:nth-child(1)");
let testbox2 =  document.querySelector(".Testimonials .subgrid>.column:nth-child(2)");
let testbox3 =  document.querySelector(".Testimonials .subgrid>.column:nth-child(3)");
let testbox4 =  document.querySelector(".Testimonials .subgrid>.column:nth-child(4)")
let Testimonials = document.querySelector(".Testimonials");

window.addEventListener('scroll', ()=>{
  if(Testimonials.offsetTop - window.scrollY <=0){
    let value = (window.scrollY - Testimonials.offsetTop) 
    testbox1.style.bottom = 0.5 * value + "px";
    testbox4.style.bottom = 0.5 * value + "px";
    testbox2.style.bottom = 0.2 * value + "px";
    testbox3.style.bottom = 1 * value + "px";
  }
})

let ViewButton = document.querySelectorAll(".card .imgContainer button");
let cards = document.querySelectorAll(".cards .card");

for (let index = 0; index < 4; index++) {
  cards[index].addEventListener('mouseover', ()=>{
    ViewButton[index].classList.add('active');
  })
}

for (let index = 0; index < 4; index++) {
  cards[index].addEventListener('mouseleave', ()=>{
    ViewButton[index].classList.remove('active');
  })
}

let menu = document.querySelector(".menuIcon");
let hamburger = document.querySelector(".hamburgerNav");
let close = document.querySelector(".close");

menu.addEventListener("click", ()=>{
  hamburger.classList.add("active");
  menu.classList.add("active");
  document.body.style.overflow = 'hidden';
})

close.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  document.body.style.overflow = 'initial';
})

// form validation
let form = document.querySelector('.contact-form');
let inputs = document.querySelectorAll(".contact-form input");
let spans = document.querySelectorAll(".contact-form span");

form.addEventListener('submit', (e)=>{
  let message = 0;
  for (let index = 0; index < 4; index++) {
      if(inputs[index].value==[]){
        console.log("Hello");
        message = 1;
        break;
      }
    
  }

  if(inputs[0].value==[]){
    spans[0].innerHTML = 'First Name <span> *First Name is required </span>'
  }
  else{
    spans[0].innerHTML = 'First Name'
  }

  if(inputs[1].value==[]){
    spans[1].innerHTML = 'Last Name <span> *Last Name is required </span>'
  }
  else{
    spans[1].innerHTML = 'Last Name'
  }

  if(inputs[3].value==[]){
    spans[3].innerHTML = 'Message <span> *Message is required </span>'
  }
  else{
    spans[3].innerHTML = 'Message'
  }

  if(inputs[2].value==[]){
    spans[2].innerHTML = 'Email<span> *Email is required </span>'
  }
  else{
    spans[2].innerHTML = 'Email'
  }


  if(message==1){
    e.preventDefault();
  }
})