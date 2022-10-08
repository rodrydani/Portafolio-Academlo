/*const navToggle = document.querySelector(".nav-toogle");
const navMenu= document.querySelector(".nav-menu");

   
        navToggle.addEventListener ("click", () =>{
             
            navMenu.classList.toggle("nav-menu-visible");
        });*/

        const navMenu = document.getElementById("nav-menu");
        const navToggle= document.getElementById("nav-toogle");

       navToggle.addEventListener("click",()=>{
            if(navMenu.classList.contains("visible")){
                navMenu.classList.remove("visible");
            }else{
                navMenu.classList.add("visible");
            }
           });

    

