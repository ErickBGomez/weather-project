import searchSvg from "../img/search.svg";
import configSvg from "../img/config.svg";

function createAppTitle() {
  const title = document.createElement("h1");
  title.id = "app-title";
  title.textContent = "The Weather App";

  return title;
}

function createChooseAreaInput(id, placeholder) {
  const container = document.createElement("div");
  container.className = "input-container";

  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;

  const button = document.createElement("button");
  button.id = "choose-area-button";
  button.innerHTML = searchSvg;

  container.appendChild(input);
  container.appendChild(button);

  return container;
}

function createHeaderButtons() {
  const container = document.createElement("div");
  container.className = "header-buttons";

  const configButton = document.createElement("button");
  configButton.className = "config-button";
  configButton.innerHTML = configSvg;

  container.appendChild(configButton);

  return container;
}

function renderHeader() {
  const header = document.createElement("header");
  header.appendChild(createAppTitle());
  header.appendChild(createChooseAreaInput("choose-area", "Choose area..."));
  header.appendChild(createHeaderButtons());

  document.body.appendChild(header);
}

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

export { renderHeader, renderFooter };
