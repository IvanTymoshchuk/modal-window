const btnShow = document.querySelectorAll('.show-modal-window');
const btnClose = document.querySelector('.close-modal-window');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function closeModalWindows() {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnClose.addEventListener('click', closeModalWindows);
overlay.addEventListener('click', closeModalWindows);
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindows();
  }
});
