const startButton = document.querySelector('#start_button');
const homeButton = document.querySelector('#home');
const skillsButton = document.querySelector('#skill');

const start = document.querySelector('#top_space');
const skills = document.querySelector('#skills_container')

startButton.addEventListener('click', scrollTop);
homeButton.addEventListener('click', scrollTop);

skillsButton.addEventListener('click', scrollSkills);

function scrollTop(){
    start.scrollIntoView({behavior: 'smooth'});
}

function scrollSkills(){
    skills.scrollIntoView({behavior: 'smooth'})
}