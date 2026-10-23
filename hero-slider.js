const slides =document.querySelectorAll(".slide")
let currentSlide = 0
document.querySelector(".next").addEventListener("click",()=>{
    slides[currentSlide].classList.remove("active")
    currentSlide++
    if(currentSlide>=slides.length){
        currentSlide=0
    }
    slides[currentSlide].classList.add("active")
})
document.querySelector(".prev").addEventListener("click",()=>{
    slides[currentSlide].classList.remove("active");
    currentSlide--
    if(currentSlide<0){
        currentSlide=slides.length-1
    }
    slides[currentSlide].classList.add("active")
})