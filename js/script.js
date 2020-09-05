// For sticy header
window.addEventListener('scroll', function () {
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

// For toggle Menu bar
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

// For scrolling animation
gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll_section",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=2000", // end after scrolling 500px beyond the start
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});

t1.from(".services", { xPercent: -100 })
    .from(".projects", { xPercent: 100 })
    // .from(".testimonial", { yPercent: -100 })
    .from(".contact", { yPercent: 100 })


// For Message modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// For owl carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        // margin: 10,
        // autoplay: true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // items: 3,
        dots: true,
        nav: true,
        // center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                // nav: true
            },
            600: {
                items: 2,
                // nav: true
            },
            1000: {
                items: 3,
                // nav: true,
                // loop: true
            }
        }
    });
});