
let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () => {
    Navbar.classList.toggle("active");
}

var swiper = new Swiper(".home-slide", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper('.customer-slider', {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "0":{
            slidesPerView:1,
            autoplay:{
                delay:700,
                disableOnInteraction:false,
            },
        },
        // when window width is <= 600px
        "768": {
            slidesPerView: 2,
        },
        // when window width is <= 850px
        "1020": {
            slidesPerView: 3,
        }
    }
});