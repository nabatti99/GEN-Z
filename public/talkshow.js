window.addEventListener("load", () => {
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerElement) {
    return new bootstrap.Tooltip(tooltipTriggerElement)
  });
});