const form = document.querySelector('#quote-form');
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service-select').value = link.dataset.service;
  form.elements.type.value = link.dataset.service === 'Cat coat care' ? 'Cat' : 'Dog';
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  const result = document.querySelector('#form-result');
  result.textContent = 'Demo complete! Your sample request passed validation. Nothing was sent or saved. In a live site, this is where you would see confirmation that the groomer received your request.';
  result.hidden = false;
  result.focus();
});
form.addEventListener('input', () => { document.querySelector('#form-result').hidden = true; });
