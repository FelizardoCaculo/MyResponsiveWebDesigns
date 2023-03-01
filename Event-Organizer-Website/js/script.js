let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    console.log('fiz toogle');
    navbar.classList.toggle('active');
    console.log('Activei');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.toggle('active');
}