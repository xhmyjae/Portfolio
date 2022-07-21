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