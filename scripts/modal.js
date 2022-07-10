// show modal on project click
let project = document.getElementById('project-1');
let modal = document.querySelector('.modal-template');
let body = document.querySelector('body');
let contentSections = document.querySelectorAll('.content section');
console.log(contentSections);

project.addEventListener('click', function() {
    //modal.classList.add('modal-display');

    modal.setAttribute('aria-hidden', 'false');
    body.classList.toggle('no-scroll', true);
    contentSections.forEach(section => {
        section.classList.add('fade');
    });

    modal.scrollTop = 0;
});

// close modal on fa-times click or on background click or esc key press, javascript
let closeBtn = document.querySelector('.fa-times');

closeBtn.addEventListener('click', function() {
    //modal.classList.remove('modal-display');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.toggle('no-scroll', false);
    contentSections.forEach(section => {
        section.classList.remove('fade');
    });
});

// disable scroll in background when modal is opened and enable it when modal is closed, allow modal's scroll when opened