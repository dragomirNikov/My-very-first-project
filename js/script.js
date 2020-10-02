//carousel-slide
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,

    });
});

$('#second-slider').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: true,
            loop: true
        }
    }
})




//hamburger btn
var hamburgerPanel = document.getElementById('sideMenu');
var hamburgerBtn = document.getElementById('openBtn');
var navLinks = document.querySelectorAll('.side-nav a');




function openSlideMenu() {
    document.getElementById('sideMenu').style.width = '250px';
    document.getElementById('sideMenu').style.height = '100vh';

    document.body.classList.add('home-page');

}


function CloseSlideMenu() {
    document.getElementById('sideMenu').style.width = '0';
    document.getElementById('sideMenu').style.height = '0';

    document.body.classList.remove('home-page');
}

function closeHamburger(e) {
    if (document.body.classList.contains('home-page') && e.target !== hamburgerPanel) {
        if (e.target !== hamburgerBtn && e.target.parentNode !== hamburgerBtn) {
            document.body.classList.remove('home-page');
        }
    }
}

window.addEventListener('click', closeHamburger);








//validation form
$(document).ready(function() {
    $("#basic-form").validate();
});