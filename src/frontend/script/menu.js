const menuIcon = document.querySelector('#menu_icon');
const menu = document.querySelector('.menu_options');

menuIcon.addEventListener('click', () => {

    if(menu.classList == 'menu_options hide'){
        menu.classList.remove('hide')
    } else {
        menu.classList.add('hide');
    }
    
});