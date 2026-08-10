document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const originalText = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Nokopēts';
      button.classList.add('copied');
      window.setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('copied');
      }, 1800);
    } catch {
      button.textContent = 'Iezīmē tekstu';
      window.setTimeout(() => { button.textContent = originalText; }, 1800);
    }
  });
});
