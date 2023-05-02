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
    console.log("a1 expanded");
});

q2Plus.addEventListener("click", function(){
    
    a2.style.display="flex";
    console.log("a2 expanded");
});

q3Plus.addEventListener("click", function(){
    
    a3.style.display="flex";
    console.log("a3 expanded");
});

q4Plus.addEventListener("click", function(){
    
    a4.style.display="flex";
    console.log("a4 expanded");
});

q5Plus.addEventListener("click", function(){
    
    a5.style.display="flex";
    console.log("a5 expanded");
});

q1Minus.addEventListener("click", function(){
    
    a1.style.display="none";
    console.log("a1 hidden");
});

q2Minus.addEventListener("click", function(){
    
    a2.style.display="none";
    console.log("a2 hidden");
});

q3Minus.addEventListener("click", function(){
    
    a3.style.display="none";
    console.log("a3 hidden");
});

q4Minus.addEventListener("click", function(){
    
    a4.style.display="none";
    console.log("a4 hidden");
});

q5Minus.addEventListener("click", function(){
    
    a5.style.display="none";
    console.log("a5 hidden");
});