const toggleButton = document.getElementById("mode-toggle");
const body = document.body;
const header = document.querySelector("header");
const section = document.querySelector("section");

const userPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
console.log(userPrefersDark);

if (userPrefersDark) {
  body.classList.add("dark-mode");
  header.classList.add("dark-mode");
  toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  toggleButton.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>' // Sun icon for light mode
    : '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
});
