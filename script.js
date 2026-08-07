const amountButtons = [...document.querySelectorAll('[data-amount]')];
const customAmount = document.querySelector('#custom-amount');
const submitButton = document.querySelector('.donation-submit');
const donationForm = document.querySelector('#donation-form');
const dialog = document.querySelector('#demo-dialog');

function chooseAmount(value, sourceButton = null) {
  amountButtons.forEach((button) => button.classList.toggle('selected', button === sourceButton));
  submitButton.textContent = value ? `Ziedot €${value}` : 'Ziedot';
}

amountButtons.forEach((button) => button.addEventListener('click', () => {
  customAmount.value = '';
  chooseAmount(button.dataset.amount, button);
}));

customAmount.addEventListener('input', () => {
  const value = customAmount.value.replace(/[^0-9.,]/g, '');
  customAmount.value = value;
  chooseAmount(value);
});

donationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  dialog.showModal();
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-ok').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
