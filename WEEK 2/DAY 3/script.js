const themeBtn = document.getElementById("theme-btn");
const themeStatus = document.getElementById("theme-status");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

const savedTheme = localStorage.getItem("app-theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  themeStatus.textContent = "Current Theme: Dark";
  themeIcon.textContent = "🌙";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    themeStatus.textContent = "Current Theme: Dark";
    themeIcon.textContent = "🌙";
    localStorage.setItem("app-theme", "dark");
  } else {
    themeStatus.textContent = "Current Theme: Light";
    themeIcon.textContent = "☀️";
    localStorage.setItem("app-theme", "light");
  }
});
