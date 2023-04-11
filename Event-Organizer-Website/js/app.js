const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

if("ServiceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker registered"))
            .catch(err => console.log("Service Worker not registered", err))
    })
}

window.addEventListener('beforeinstallprompt', (event) => {
    // Impedir que o mini-infobar apareça no celular.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Esconder o evento para que possa ser acionado mais tarde.
    window.deferredPrompt = event;
    // Remover a classe 'oculta' do contêiner do botão de instalação.
    divInstall.classList.toggle('hidden', false);
  });
  butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
  window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Limpa o deferredPrompt para que possa ser coletado como lixo
    window.deferredPrompt = null;
  });
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
