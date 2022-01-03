var backdrop = document.querySelector(`.backdrop`);
var modal = document.querySelector(`.modal`);
var selectButton = document.querySelectorAll(`.plan button`);
var noButton = document.querySelector(`.modal__action--negative`);
var toggleButton = document.querySelector(`.toggle-button`);
var mobileNav = document.querySelector(`.mobile-nav`);
var ctaButton = document.querySelector(`.main-nav__item--cta`);

const closeModal = () => {
  backdrop.classList.remove(`open`);
  mobileNav.classList.remove(`open`);
  setTimeout(() => {
    backdrop.style.display = "none";
    mobileNav.style.transform = "translateX(-100%)";
  }, 350);
  if (modal) {
    modal.classList.remove(`open`);
  }
};

if (noButton) {
  for (var i = 0; i < selectButton.length; i++) {
    selectButton[i].addEventListener(`click`, function () {
      modal.classList.add(`open`);
      backdrop.style.display = "block";
      setTimeout(() => {
        backdrop.classList.add(`open`);
      }, 200);
    });
  }
  noButton.addEventListener(`click`, closeModal);
}

backdrop.addEventListener(`click`, closeModal);

toggleButton.addEventListener(`click`, function () {
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add(`open`);
  }, 10);
  mobileNav.classList.add(`open`);
});
