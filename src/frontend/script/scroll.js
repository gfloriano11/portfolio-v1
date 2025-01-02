const startButton = document.querySelector('#start_button');
const homeButton = document.querySelectorAll('#home');
const skillsButton = document.querySelectorAll('#skill');
const projectsButton = document.querySelectorAll('#project');
const contactButton = document.querySelectorAll('#contact');
const contactLink = document.querySelector('#contact_me');

const start = document.querySelector('#top_space');
const skills = document.querySelector('#skills_container');
const projects = document.querySelector('#projects_container');
const contactMe = document.querySelector('#contacts_container');

startButton.addEventListener('click', scrollTop);

homeButton.forEach((home) => {

    home.addEventListener('click', scrollTop);
});

skillsButton.forEach((skills) => {

    skills.addEventListener('click', scrollSkills);
});

projectsButton.forEach((projects) => {

    projects.addEventListener('click', scrollProjects);

});

contactButton.forEach((contact) => {


    contact.addEventListener('click', scrollContact);
});

contactLink.addEventListener('click', scrollContact);




function scrollTop(){
    start.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollSkills(){
    console.log('kk')
    skills.scrollIntoView({behavior: 'smooth', block: 'center'})
}

function scrollProjects(){
    projects.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollContact(){
    contactMe.scrollIntoView({behavior: 'smooth', block: 'center'});
}