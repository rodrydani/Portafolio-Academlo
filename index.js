const navToggle = document.querySelector(".nav-toogle");
const navMenu= document.querySelector(".nav-menu");

navToggle.addEventListener ("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
});
