
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

var x = document.getElementsByClassName("swiper");
var slideIndex = 0;
var slidesPerView = 4;
var slidesToSlide = 1;

function swipeDivs() {
    slideIndex += slidesToSlide;
    if (slideIndex > x.length - slidesPerView) {
        slideIndex = 0;
    }
    else if (slideIndex < 0) {
        slideIndex = x.length - slidesPerView;
    }
    showDivs(slideIndex);
}

function showDivs(n) {
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = n; i < n + slidesPerView; i++) {
        x[i].style.display = "block";
    }
}

function plusDivs(n) {
    swipeDivs();
}
showDivs(slideIndex);



