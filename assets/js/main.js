const menu = document.querySelector("#menu");
const links = document.querySelector(".links");

menu.addEventListener("click",()=> links.classList.toggle("show"));

window.addEventListener("scroll", ()=> links.classList.remove("show"));
