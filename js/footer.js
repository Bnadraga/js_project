const refs = {
  openModalBtn: document.querySelector('[footer-modal-open]'),
  closeModalBtn: document.querySelector('[footer-modal-close]'),
  closeModalBackdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('[footer-modal]'),
};

refs.closeModalBtn.addEventListener('click', toggleModalFooter);

function toggleModalFooter() {
  refs.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

const footerForm = document.querySelector('.footer__form');
footerForm.addEventListener('submit', event => {
  event.preventDefault();
  const footerInput = document.getElementById('footer-input').value;

  if (isNaN(footerInput) && footerInput.length > 5) {
    toggleModalFooter();
  } else {
    alert('Значення має бути не числом та довше 5 символів!');
  }
});
