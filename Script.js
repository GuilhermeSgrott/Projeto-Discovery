function togglemode() {
  const html = document.documentElement;
  const switchButton = document.querySelector("#switch button");

  html.classList.toggle("light");
  switchButton.classList.toggle("active");

  // Salva a preferência no localStorage
  if (html.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// Quando a página carrega, aplica o tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
    document.querySelector("#switch button").classList.add("active");
  }
});