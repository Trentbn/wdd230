let count = localStorage.getItem('formSubmitCount') || 0;

document.querySelector('form').addEventListener('submit', () => {
  count++;
  localStorage.setItem('formSubmitCount', count);
});