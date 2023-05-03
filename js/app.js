// const plus=document.querySelectorAll(".plus");
// const minus=document.querySelectorAll(".minus");
// const answer=document.querySelectorAll(".answer-box");
const q1Plus=document.getElementById("q1-plus");
const q2Plus=document.getElementById("q2-plus");
const q3Plus=document.getElementById("q3-plus");
const q4Plus=document.getElementById("q4-plus");
const q5Plus=document.getElementById("q5-plus");
const a1=document.getElementById("a1");
const a2=document.getElementById("a2");
const a3=document.getElementById("a3");
const a4=document.getElementById("a4");
const a5=document.getElementById("a5");
const q1Minus=document.getElementById("q1-minus");
const q2Minus=document.getElementById("q2-minus");
const q3Minus=document.getElementById("q3-minus");
const q4Minus=document.getElementById("q4-minus");
const q5Minus=document.getElementById("q5-minus");



q1Plus.addEventListener("click", function(){
    
   
    a1.style.display="flex";
    q1Minus.style.display="initial";
    q1Plus.style.display="none";
    console.log("a1 expanded");
});

q2Plus.addEventListener("click", function(){
    
    a2.style.display="flex";
    q2Minus.style.display="initial";
    q2Plus.style.display="none";
    console.log("a2 expanded");
});

q3Plus.addEventListener("click", function(){
    
    a3.style.display="flex";
    q3Minus.style.display="initial";
    q3Plus.style.display="none";
    console.log("a3 expanded");
});

q4Plus.addEventListener("click", function(){
    
    a4.style.display="flex";
    q4Minus.style.display="initial";
    q4Plus.style.display="none";
    console.log("a4 expanded");
});

q5Plus.addEventListener("click", function(){
    
    a5.style.display="flex";
    q5Minus.style.display="initial";
    q5Plus.style.display="none";
    console.log("a5 expanded");
});

q1Minus.addEventListener("click", function(){
    
    a1.style.display="none";
    q1Minus.style.display="none";
    q1Plus.style.display="initial";
    console.log("a1 hidden");
});

q2Minus.addEventListener("click", function(){
    
    a2.style.display="none";
    q2Minus.style.display="none";
    q2Plus.style.display="initial";
    console.log("a2 hidden");
});

q3Minus.addEventListener("click", function(){
    
    a3.style.display="none";
    q3Minus.style.display="none";
    q3Plus.style.display="initial";
    console.log("a3 hidden");
});

q4Minus.addEventListener("click", function(){
    
    a4.style.display="none";
    q4Minus.style.display="none";
    q4Plus.style.display="initial";
    console.log("a4 hidden");
});

q5Minus.addEventListener("click", function(){
    
    a5.style.display="none";
    q5Minus.style.display="none";
    q5Plus.style.display="initial";
    console.log("a5 hidden");
});



const menu=document.querySelector(".menu");
const cross=document.querySelector(".cross");
const mobileMenu=document.querySelector(".nav-ul-mobile");

function openMenu()
{
    menu.style.display="none";
    cross.style.display="initial";
    mobileMenu.style.display="flex";

}

function closeMenu()
{
    menu.style.display="initial";
    cross.style.display="none";
    mobileMenu.style.display="none";

}

menu.addEventListener("click", openMenu);
cross.addEventListener("click", closeMenu);