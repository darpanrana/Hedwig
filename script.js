const giftBox = document.getElementById('giftBox');
const wishes = document.getElementById('wishes');

giftBox.addEventListener('click', () => {
  giftBox.style.display = 'none';
  wishes.classList.remove('hidden');

  // Redirect to wishes.html after 5 seconds
  setTimeout(() => {
    window.location.href = 'wishes.html';
  }, 3000);
});
