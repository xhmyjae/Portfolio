// show modal on project click
let project = document.getElementById('project-1');
project.addEventListener('click', function() {
    modal.classList.add('modal-display');
});

// close modal on fa-times click or on background click or esc key press, javascript
let closeBtn = document.querySelector('.fa-times');
let modal = document.querySelector('.modal');

closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-display');
});

// disable scroll in background when modal is opened and enable it when modal is closed, allow modal's scroll when opened