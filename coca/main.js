const switcher = document.getElementById("switch");
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
