const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');
/*toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
}
*/
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
})
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    //themeToggler.classList.remove('active');
}
if("ServiceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker registered"))
            .catch(err => console.log("Service Worker not registered", err))
    })
}
var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnIteration: false,
    }
});
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnIteration: false,
    }
});