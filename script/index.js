if (window.matchMedia("(min-width: 1200px)").matches) {
    ScrollReveal().reveal('.header', {
        opacity: 0,
        duration: 1000,
        easing: 'ease',
        distance: '100px',
        origin: 'bottom'
    })
} else {
    ScrollReveal().reveal('.header', {
        opacity: 0,
        duration: 1000,
        easing: 'ease',
    })
}
ScrollReveal().reveal('.about__service', {
    scale: 0.85,
    easing: 'ease-in',
});
ScrollReveal().reveal('.about__description', {
    delay: 300,
    scale: 0.85,
    easing: 'ease-in'
});
ScrollReveal().reveal('.bulding', {
    duration: 1500,
    easing: 'ease-in'
});