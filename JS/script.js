function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

$("#down-arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#work").offset().top
    }, 2000);
});

const menuButton = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menuButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})