const logoElement = document.querySelector(".js-header__logo");
const buttonElement = document.querySelector(".js-header__button");
const logoRightPosition = document.querySelector(".logoRightPosition");


buttonElement.addEventListener("click", () => { 
    logoElement.classList.toggle("js-header__logo--position");
});