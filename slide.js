const menu=document.getElementById("menu")
const close=document.getElementById("close")
const nav=document.getElementById("navlinks")
menu.addEventListener("click",()=>{
    nav.classList.add("open")
})
close.addEventListener("click",()=>{
    nav.classList.remove("open")
})
nav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("open")
    })
})
const slides = document.querySelectorAll(".slide")
let currentSlides=0
document.querySelector(".next").addEventListener("click",(e)=>{
    e.preventDefault()
    slides[currentSlides].classList.remove("active")
    currentSlides++
    if(currentSlides>=slides.length){
        currentSlides=0
    }
    slides[currentSlides].classList.add("active")
})
document.querySelector(".prev").addEventListener("click",()=>{
    slides[currentSlides].classList.remove("active")
    currentSlides--
    if(currentSlides=0){
        currentSlides=slides.length-1
    }
    slides[currentSlides].classList.add("active")
})