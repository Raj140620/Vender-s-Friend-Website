


// ##### Counter Design #####
document.addEventListener("DOMContentLoaded",() =>{
  function counter(id,start,end,duration){
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() =>{
          current += increment;
          obj.textContent = current;
          if(current == end){
              clearInterval(timer);
          }
      }, step);
  }
  counter("count1",0,100,10000);
  counter("count2",0,50,10000);
  counter("count3",0,20,10000);
  counter("count4",0,30,10000);
})

// #### Navbar Menu Design #####

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  menu.classList.remove('active');
}




