const startingTime = performance.now();
 
const nav=document.querySelector(".navbar__menu");
nav.style.cssText='display:flex; justify-content: flex-end;';


const ul=document.getElementById("navbar__list");

const navbar= ()=>{
  for(let i=1;i<5;i++){
    let n=`Section ${i}`;
    let c=`section${i}`;
    let a =`<a class="menu__link" href="#${c}" >${n}</a>`;
    let li=document.createElement("li");
    li.setAttribute('class',`nav__item ${c}`);
    ul.appendChild(li);
    let s = document.querySelector(`.${c}`);
    s.innerHTML=a;
    };
   
  };
  
  
  navbar();



const nav_link =document.querySelectorAll('.menu__link');
const sectionels =document.querySelectorAll('section');

function makeActive(){ 
let current='section1';
console.log(current);
window.addEventListener('scroll',()=>{
  sectionels.forEach(sectionel => {
    if(window.scrollY >=sectionel.offsetTop){
      current = sectionel.id;
     
    }
  }); 
  nav_link.forEach(navlink => {
    console.log(current);
    if(navlink.href.includes(current)){console.log(current);
      for(let i=0;i<sectionels.length;i++){
        sectionels[i].classList.remove('active');}

      let sec=document.getElementById(`${current}`);
      sec.classList.add('active');console.log(sec);
    }
  });


});};

makeActive();



const endingTime = performance.now();

//time of preformance
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
