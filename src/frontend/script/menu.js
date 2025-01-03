const body = document.querySelector('body');

const menuIcon = document.querySelector('#menu_icon');
const menu = document.querySelector('.menu_options');
const removeBar = document.querySelector('.remove_bar');
const leftBar = document.querySelector('.left_bar');
const rightBar = document.querySelector('.right_bar');

menu.style.transform = 'translateY(-100%)';

menuIcon.addEventListener('click', () => {


    if(menu.style.transform == 'translateY(-100%)'){

        body.style.overflow = 'hidden';

        
        menu.style.transform = 'translateY(50px)';
        removeBar.style.opacity = '0%';
        
        leftBar.style.transform = 'rotate(45deg) translateY(5px) translateX(7px)';
        
        rightBar.style.transform = 'rotate(-45deg) translateY(-5px) translateX(7px)';
        
        menuIcon.style.height = '25px';
    } else {

        body.style.overflow = '';

        
        menu.style.transform = 'translateY(-100%)';
        removeBar.style.opacity = '100%';
        leftBar.style.transform = 'rotate(0)';
        rightBar.style.transform = 'rotate(0)';

        menuIcon.style.height = '28px';
    }
    
});