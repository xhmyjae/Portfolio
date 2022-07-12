let projects = document.querySelectorAll('.project');
let modals = document.querySelectorAll('.modal-template');
let body = document.querySelector('body');
let contentSections = document.querySelectorAll('.content section');

projects.forEach(project => {
    project.addEventListener('click', function() {
        let projectId = project.id;
        let modal = document.getElementById(projectId.replace('project-', 'modal-'));

        modal.setAttribute('aria-hidden', 'false');
        body.classList.toggle('no-scroll', true);
        contentSections.forEach(section => {
            section.classList.add('fade');
        });

        modal.scrollTop = 0;

        let closeButton = modal.querySelector('.fa-times');

        closeButton.addEventListener('click', function() {
            modal.setAttribute('aria-hidden', 'true');
            body.classList.toggle('no-scroll', false);
            contentSections.forEach(section => {
                section.classList.remove('fade');
            });
        });
    });
});


// disable scroll in background when modal is opened and enable it when modal is closed, allow modal's scroll when opened