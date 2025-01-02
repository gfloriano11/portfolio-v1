const startButton = document.querySelector('#start_button');
const start = document.querySelector('#top_space');

startButton.addEventListener('click', scrollTop);

function scrollTop(){
    console.log('hello!');
    start.scrollIntoView({ behavior: 'smooth'});
}