"use strict";

const closeMenuBtn = document.getElementById(`close-menu-btn`);
const openMenuBtn = document.getElementById(`menu-btn`);
const menuBar = document.getElementById(`nav-links`);
const navEl = document.querySelector(`nav`);

const contactBtn = document.getElementById(`btn-contact`);
const contactSection = document.getElementById(`contact`);

const allSections = document.querySelectorAll(`section`);

const projectGallary = document.getElementById(`project-gallary`);
const allProjects = document.querySelectorAll(`.project`);
const allDots = document.querySelectorAll(`.indicator-dot`);
const dotContainer = document.getElementById(`indicator-dots`);
const btnLeft = document.getElementById(`btn-left`);
const btnRight = document.getElementById(`btn-right`);

const themeBtn = document.getElementById(`theme-btn`);

// -------- Open / Close Menu -----
openMenuBtn.addEventListener(`click`, openMenu);
closeMenuBtn.addEventListener(`click`, closeMenu);
function openMenu() {
  menuBar.classList.add(`active-menu-bar`);
}
function closeMenu() {
  menuBar.classList.remove(`active-menu-bar`);
}

// ---------- Navigation ---------
menuBar.addEventListener(`click`, (event) => {
  if (event.target.classList.contains(`nav-link`)) closeMenu();
});

contactBtn.addEventListener(`click`,()=>{
  contactSection.scrollIntoView({behavior:`smooth`});
})

//-------- Hide nav on scroll down ----------

let oldScrollPos = window.scrollY;
window.onscroll = function () {
  const homeSection = document.getElementById(`home`);

  if(window.scrollY < homeSection.offsetHeight)return;
  const navHeight = navEl.offsetHeight;
  let newScrollPos = window.scrollY;
  if (newScrollPos > oldScrollPos) navEl.style.top = `-${navHeight}px`;
  else navEl.style.top = 0;

  oldScrollPos = newScrollPos;
  
};
// --------- My Work ----------------

let currentProj = 1;
const totalProj = allProjects.length;

function goToProject(projectNum) {
  allProjects.forEach((project, i) => {
    project.style.transform = `translateX(${100 * (i - projectNum)}%)`;
  });
}
function nextProj() {
  let project = currentProj;
  project++;
  return (project = project > totalProj - 1 ? 0 : project);
}
function prevProj() {
  let project = currentProj;
  project--;
  return (project = project < 0 ? totalProj - 1 : project);
}
function switchProj(proj) {
  allProjects.forEach((project) => project.classList.remove(`active-project`));
  document.querySelector(`.project-${proj}`).classList.add(`active-project`);
}
function switchDot(dotNum) {
  allDots.forEach((dot) => dot.classList.remove(`active-dot`));
  document.getElementById(`dot-${dotNum}`).classList.add(`active-dot`);
}
function changeProject(project) {
  goToProject(project);
  switchProj(project);
  switchDot(project);
}
btnRight.addEventListener(`click`, function () {
  currentProj = nextProj();
  changeProject(currentProj);
});

btnLeft.addEventListener(`click`, function () {
  currentProj = prevProj();
  changeProject(currentProj);
});



dotContainer.addEventListener(`click`, function (e) {
  const targetDot = e.target;
  if (!targetDot.classList.contains(`indicator-dot`)) return;
  const project = targetDot.dataset.dot;
  currentProj = project;
  changeProject(project);
});

changeProject(currentProj);

// ---- Change Theme -----------
let themeLight = JSON.parse(localStorage.getItem(`themeLight`)) || false;
changeTheme();
themeBtn.addEventListener(`click`, (e) => {
  themeLight=!themeLight;
  localStorage.setItem(`themeLight`,JSON.stringify(themeLight));
  changeTheme();
});
function changeTheme(){
  if (themeLight) {
    themeBtn.querySelector(`.fa-solid`).classList.remove(`fa-moon`);
    themeBtn.querySelector(`.fa-solid`).classList.add(`fa-sun`);
    document.querySelector(":root").classList.remove("light-theme");
    
  }
  else{
    themeBtn.querySelector(`.fa-solid`).classList.add(`fa-moon`);
    themeBtn.querySelector(`.fa-solid`).classList.remove(`fa-sun`);
    document.querySelector(":root").classList.add("light-theme");
  }
}


// ------- Reveal Section on scroll -------

function revealSection(entries,observer){
  
 entries.forEach(entry =>{
  if(entry.isIntersecting)
   entry.target.classList.remove(`hidden-section`);
  
  else
    entry.target.classList.add(`hidden-section`);
  });

}
const sectionObserver = new IntersectionObserver(revealSection,{root:null,threshold:0.1});

allSections.forEach(section => {
  sectionObserver.observe(section)
  section.classList.add('hidden-section');
});

// ----- Reveal skills -------
const allSkills = document.querySelectorAll(`.skill`);
function revealSkills(entries,observer){
  
  entries.forEach(entry=>{
    if(entry.isIntersecting)
      allSkills.forEach(skill=>skill.classList.remove(`hidden-skill`));
    else
      allSkills.forEach(skill=>skill.classList.add(`hidden-skill`));

  })
}
const skillObserver = new IntersectionObserver(revealSkills,{root:null,threshold:1});
skillObserver.observe(document.getElementById(`skills`));

allSkills.forEach((skill,index)=>{
  const sec=((index+1)*40)/100;
  skill.style.transition = `all ${sec}s`;
  skill.classList.add(`hidden-skill`);
})


// Receive input cridentials from contact form to the google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbww3EZuvL6VdV6mKxqdgMpoIPrKT0PJJqmCm9ZMB78aZkWuyWIXmju7hfY_ybQcqL1zYw/exec'
const form = document.forms['submit-to-google-sheet']
const sumbitMsg = document.querySelector(`.msg-sent`);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      sumbitMsg.innerHTML=`Your message sent successfully!`;
      form.reset();
      setTimeout(()=>sumbitMsg.innerHTML=``,7000);
  })
    .catch(error => console.error('Error!', error.message))
})
