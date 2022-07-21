'use strict';

document.querySelectorAll('.show-modal').forEach(el =>
  el.addEventListener('click', function () {
    openClick();
  })
);

let openClick = function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};

let closeClick = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

document.querySelector('.close-modal').addEventListener('click', function () {
  closeClick();
});

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !document.querySelector('.modal').classList.contains('hidden')
  ) {
    closeClick();
  }
});
