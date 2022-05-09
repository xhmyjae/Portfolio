const anchors = document.querySelectorAll('.anchors a');

anchors.forEach(anchor => {
  anchor.addEventListener('mouseover', e => {
      let hovering = e.target;
      let anchorsLineDiv = hovering.parentElement;
      let anchorsLine = anchorsLineDiv.querySelector('.line-hover');
      anchorsLine.classList.toggle('show');
  });

  anchor.addEventListener('mouseout', e => {
      let hovering = e.target;
      let anchorsLineDiv = hovering.parentElement;
      let anchorsLine = anchorsLineDiv.querySelector('.line-hover');
      anchorsLine.classList.toggle('show');
  });
});