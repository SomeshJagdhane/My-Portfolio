`use strict`;

const closeMenuBtn = document.getElementById(`close-menu-btn`);
const openMenuBtn = document.getElementById(`menu-btn`);
const menuBar = document.getElementById(`nav-links`);

// -------- Open / Close Menu -----
openMenuBtn.addEventListener(`click`,openMenu);
closeMenuBtn.addEventListener(`click`,closeMenu);
function openMenu(){
    menuBar.classList.add(`active-menu-bar`);
}
function closeMenu(){
    menuBar.classList.remove(`active-menu-bar`);
}
