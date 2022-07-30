var myNav = document.getElementById('menu');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400 ) {
        myNav.classList.add("scrolled");
        myNav.classList.remove("fixed");
    }
    else {
        myNav.classList.add("fixed");
        myNav.classList.remove("scrolled");
    }
};


// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]:not(#introduction)");
console.log(sections);

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        // Original:
        // const sectionTop = current.offsetTop - 50;
        //
        // Alex Turnwall's update:
        // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
        // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
        //
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        let sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            // Add .active class to corresponding navigation link
            // console.log(document.querySelector(`a[href="#${sectionId}"]`));
            // document.querySelector(`a[href="#${sectionId}"]`).classList.add("active");
            //
            // console.log(sectionId);
            document.querySelector(`.anchors a[href="#${sectionId}"]`).classList.add("active");
            // document.querySelector(".anchors a[href*=" + sectionId + "]").classList.add("active");
        } else {
            // console.log(sectionId);
            // console.log(document.querySelector(`a[href="#${sectionId}"]`));
            // Remove .active class from corresponding navigation link
            document.querySelector(`a[href="#${sectionId}"]`).classList.remove("active");}
    });
}