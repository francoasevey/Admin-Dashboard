const menuBtn = document.querySelector("#menu-btn");
const slideMenu = document.querySelector("aside");
const closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", ()=>{
    slideMenu.style.display = "block";
})

closeBtn.addEventListener("click", ()=>{
    slideMenu.style.display = "none";
})