var myNav = document.getElementById('menu');
let menuName = document.querySelector(".menu-name");
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400 ) {
        myNav.classList.add("scrolled");
        myNav.classList.remove("fixed");
        menuName.classList.remove("invisible");
    }
    else {
        myNav.classList.add("fixed");
        myNav.classList.remove("scrolled");
        menuName.classList.add("invisible");
    }
};

const sections = document.querySelectorAll("section[id]:not(#introduction)");
console.log(sections);

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        let sectionId = current.getAttribute("id");

        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            document.querySelector(`.anchors a[href="#${sectionId}"]`).classList.add("active");
        } else {
            document.querySelector(`a[href="#${sectionId}"]`).classList.remove("active");}
    });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active2");
        }
    }
}

window.addEventListener("scroll", reveal);
