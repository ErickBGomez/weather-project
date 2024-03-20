import searchSvg from "../img/search.svg";
import configSvg from "../img/config.svg";
import { addSearchEvent } from "../forecast";

// Events

function createAppTitle() {
  const title = document.createElement("h1");
  title.id = "app-title";
  title.textContent = "The Weather App";

  return title;
}

function createChooseAreaInput(id, placeholder) {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  inputContainer.className = "input-container";

  const input = document.createElement("input");
  input.type = "text";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;

  const button = document.createElement("button");
  button.id = "choose-area-button";
  button.innerHTML = searchSvg;

  inputContainer.appendChild(input);
  inputContainer.appendChild(button);

  form.appendChild(inputContainer);

  addSearchEvent(form, input);

  return form;
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

export default renderHeader;
