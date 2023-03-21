console.log("Hello world")

const bouton = document.querySelector("button")
const paragraphe = document.querySelector(".img-hidden")

bouton.addEventListener("click",()=>{
    paragraphe.style.display = (paragraphe.style.display == "block" ? "none" : "block")
})

