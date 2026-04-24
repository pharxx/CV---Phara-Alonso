document.getElementById("year").textContent = new Date().getFullYear();

const word = "Estudiante de Ingeniería en Sistemas";
let index = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing");

  if (!isDeleting) {
    el.textContent = word.substring(0, index);
    index++;

    if (index > word.length) {
      isDeleting = true;
      setTimeout(typeEffect, 800); 
      return;
    }

  } else {
    el.textContent = word.substring(0, index);
    index--;

    if (index < 0) {
      isDeleting = false;
      index = 0; 
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

window.onload = typeEffect;

const button = document.querySelectorAll(".filtro");
const projects = document.querySelectorAll(".project");

button.forEach(function(boton){
    boton.addEventListener("click", function(){

        const category = boton.dataset.cat;

        button.forEach(function(b) {b.classList.remove("activo");})
        boton.classList.add("activo");

        projects.forEach(function(project) {
            if (category==="todos" || project.dataset.cat=== category) {
                project.style.display = "inline-block";
            } else {
                project.style.display = "none";
            }
        })
    })
})