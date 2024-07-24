const switcher = document.getElementById("switch");
const burger = document.querySelector(".header__burger");
const inner = document.querySelector(".header__inner");
let burger_active = false;
let switch_active = true;

switcher.addEventListener("click", () => {
  if (switch_active) {
    // Это при активации темной темы
    document.documentElement.style.setProperty("--main-text", "#FFFFFF");
    document.documentElement.style.setProperty("--background", "#1D1E25");
    document.documentElement.style.setProperty("--icon-circle", "#343542");
    switch_active = false;
  } else {
    // Это при активации белой темы
    document.documentElement.style.setProperty("--main-text", "#1D1E25");
    document.documentElement.style.setProperty("--background", "#FFFFFF");
    document.documentElement.style.setProperty("--icon-circle", "#1D1E25");
    switch_active = true;
  }
});

burger.addEventListener('click', () => {
  if(burger_active) {
    inner.classList.remove('header__inner--active')
    burger.classList.remove('burger--active')
    document.body.style.overflowY = 'auto'
    burger_active = false
  } else {
    inner.classList.add('header__inner--active')
    burger.classList.add('burger--active')
    document.body.style.overflowY = 'hidden'
    burger_active = true
  }
})
