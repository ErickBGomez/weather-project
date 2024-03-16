function renderFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Made by ";

  const credits = document.createElement("a");
  credits.className = "credits";
  credits.href = "https://www.github.com/ErickBGomez";
  credits.textContent = "Erick B. Gómez";

  footer.appendChild(credits);

  document.body.appendChild(footer);
}

export default renderFooter;
