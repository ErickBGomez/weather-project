import searchSvg from "../img/search.svg";
import configSvg from "../img/config.svg";
import clearInputSvg from "../img/clear-input.svg";
import { addSearchEvent } from "../forecast";

// Fetch methods
async function fetchSearchSuggestions(query) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=d9bcc94c28e04844af1222420240303&q=${query}`,
  );

  return responseFetch.json();
}

// Events
function addClearInputEvent(clear, input) {
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
  });
}

function addSearchSuggestionsEvent(input, searchSuggestions) {
  input.addEventListener("change", async () => {
    searchSuggestions.innerHTML = "";

    const suggestions = await fetchSearchSuggestions(input.value);

    suggestions.forEach((suggestion) => {
      console.log(suggestion);
      const suggestionContainer = document.createElement("div");
      const location = document.createElement("p");
      const country = document.createElement("p");

      suggestionContainer.className = "suggestion";
      location.className = "location small-text";
      location.textContent = suggestion.name;
      country.className = "country very-small-text";
      country.textContent = `${suggestion.region}, ${suggestion.country}`;

      suggestionContainer.appendChild(location);
      suggestionContainer.appendChild(country);

      searchSuggestions.appendChild(suggestionContainer);
    });
  });
}

// DOM Elements

function createAppTitle() {
  const title = document.createElement("h1");
  title.id = "app-title";
  title.textContent = "The Weather App";

  return title;
}

function createChooseAreaInput(id, placeholder) {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  const input = document.createElement("input");
  const clearInput = document.createElement("span");
  const searchSuggestions = document.createElement("div");
  const button = document.createElement("button");

  inputContainer.className = "input-container";

  input.type = "search";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;

  clearInput.className = "clear-input";
  clearInput.innerHTML = clearInputSvg;

  searchSuggestions.className = "search-suggestions";

  button.id = "choose-area-button";
  button.innerHTML = searchSvg;

  inputContainer.appendChild(input);
  inputContainer.appendChild(clearInput);
  inputContainer.appendChild(searchSuggestions);

  form.appendChild(inputContainer);
  form.appendChild(button);

  addClearInputEvent(clearInput, input);
  addSearchEvent(form, input);
  addSearchSuggestionsEvent(input, searchSuggestions);

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
