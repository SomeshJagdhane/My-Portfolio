'use strict';

const closeMenuBtn = document.getElementById(`close-menu-btn`);
const openMenuBtn = document.getElementById(`menu-btn`);
const menuBar = document.getElementById(`nav-links`);

const projectGallary = document.getElementById(`project-gallary`);
const allProjects = document.querySelectorAll(`.project`);
const allDots = document.querySelectorAll(`.indicator-dot`);
const dotContainer = document.getElementById(`indicator-dots`);
const btnLeft = document.getElementById(`btn-left`);
const btnRight = document.getElementById(`btn-right`);

const themeBtn = document.getElementById(`theme-btn`);
// -------- Open / Close Menu -----
openMenuBtn.addEventListener(`click`,openMenu);
closeMenuBtn.addEventListener(`click`,closeMenu);
function openMenu(){
    menuBar.classList.add(`active-menu-bar`);
}
function closeMenu(){
    menuBar.classList.remove(`active-menu-bar`);
}


// --------- My Work ----------------

// let currentProj = 1;
// const totalProj = allProjects.length;

// function goToProject(projectNum){
//     allProjects.forEach((project, i)=>{
//         project.style.transform = `translateX(${100*(i-projectNum)}%)`;
//     }); 
// }
// function nextProj(){
//     let project =currentProj;
//     project++;
//     return project = project > totalProj-1 ? 0 : project;
// }
// function prevProj(){
//     let project = currentProj;
//     project--;
//     return project = project < 0 ? totalProj-1 : project;
// }
// function switchProj(proj){
//     allProjects.forEach(project=> project.classList.remove(`active-project`));
//     document.querySelector(`.project-${proj}`).classList.add(`active-project`);
// }
// function switchDot(dotNum){
//     allDots.forEach(dot=> dot.classList.remove(`active-dot`));
//     document.getElementById(`dot-${dotNum}`).classList.add(`active-dot`);
// }
// function changeProject(project){
//     goToProject(project);
//     switchProj(project);
//     switchDot(project);
// }
// btnRight.addEventListener(`click`,function(){
//     currentProj = nextProj();
//     changeProject(currentProj);
// });

// btnLeft.addEventListener(`click`,function(){
//     currentProj=prevProj();
//     changeProject(currentProj);
   
// });

// dotContainer.addEventListener(`click`,function(e){
//     const targetDot = e.target;
//     if(!targetDot.classList.contains(`indicator-dot`)) return;
//     const project = targetDot.dataset.dot;
//     currentProj=project;
//     changeProject(project);
// })

// changeProject(currentProj);

let themeLight = false;
themeBtn.addEventListener(`click`,e=>{
    themeBtn.querySelector(`.fa-solid`).classList.toggle(`fa-moon`);
    themeBtn.querySelector(`.fa-solid`).classList.toggle(`fa-sun`);
    document.querySelector(':root').classList.toggle('light-theme');
});
