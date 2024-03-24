import searchSvg from "../img/search.svg";
import configSvg from "../img/config.svg";
import clearInputSvg from "../img/clear-input.svg";
import { addSearchEvent } from "../forecast";

// Events
function addClearInputEvent(clear, input) {
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
  });
}

function createAppTitle() {
  const title = document.createElement("h1");
  title.id = "app-title";
  title.textContent = "The Weather App";

  return title;
}

function createChooseAreaInput(id, placeholder) {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  const clearInput = document.createElement("span");
  inputContainer.className = "input-container";

  const input = document.createElement("input");
  input.type = "search";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;

  clearInput.className = "clear-input";
  clearInput.innerHTML = clearInputSvg;

  const button = document.createElement("button");
  button.id = "choose-area-button";
  button.innerHTML = searchSvg;

  inputContainer.appendChild(input);
  inputContainer.appendChild(clearInput);

  form.appendChild(inputContainer);
  form.appendChild(button);

  addClearInputEvent(clearInput, input);
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
