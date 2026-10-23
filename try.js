const menu=document.getElementById("menu")
const close=document.getElementById("close")
const nav=document.getElementById("navlinks")
menu.addEventListener("click",()=>{
    nav.classList.add("open")
});
close.addEventListener("click",()=>{
    nav.classList.remove("open")
})
nav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("open")
    })
})
const slides = document.querySelectorAll(".slide")
let currentSlide= 0
document.querySelector(".next").addEventListener("click",(e)=>{
    e.preventDefault()
    slides[currentSlide].classList.remove("active")
    currentSlide++
    if(currentSlide>=slides.length){
        currentSlide=0
    }
    slides[currentSlide].classList.add("active")
})
document.querySelector(".prev").addEventListener("click",()=>{
    slides[currentSlide].classList.remove("active")
    currentSlide--
    if(currentSlide<0){
        currentSlide=slides.length-1
    }
    slides[currentSlide].classList.add("active")
})