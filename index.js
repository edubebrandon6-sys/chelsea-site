const menu=document.getElementById("menu")
const close= document.getElementById("close")
const nav = document.getElementById("navlinks")
menu.addEventListener('click',()=>{
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
const heading=document.getElementById("text")
const text=heading.textContent
heading.textContent=""
heading.style.opacity="1"
heading.style.transform="translateY(0)"
let index= 0
function typing(){
    if(index<text.length){
        index++
        heading.textContent+=text.charAt(index)
        setTimeout(typing,200)
    }
}
window.addEventListener("load",()=>{
    setTimeout(typing,1200)
})
const viewAll=document.getElementById("viewAll")
const card = document.getElementById("card")
viewAll.addEventListener("click",(e)=>{
    e.preventDefault()
    card.classList.toggle("show-all")
    if(card.classList.contains("show-all")){
        viewAll.textContent="Show less"
    }else{
        viewAll.textContent="View All Players"
    }
})
const newsCard=document.getElementById("newsCard")
const viewNews=document.getElementById("ViewNews")
viewNews.addEventListener("click",(e)=>{
e.preventDefault()
newsCard.classList.toggle("show")
if(newsCard.classList.contains("show")){
    viewNews.textContent="showless"
}else{
    viewNews.textContent="showAll"
}
})
const arrow= document.querySelectorAll(".rows")
arrow.forEach(arrows=>{
    arrows.addEventListener("click",(e)=>{
        e.preventDefault()
        alert("chelsea News Article Coming Soon!")

    }) 
})
const darkBtn = document.querySelector(".dark-btn")
darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
})