import searchSvg from "./img/ui/search.svg";
import settingsSvg from "./img/ui/settings.svg";
import closeSvg from "./img/ui/close.svg";
import { addSearchEvent } from "./forecast";
import * as settings from "./settings";

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

function addSuggestionsBehaviorEvent(input, searchSuggestions) {
  let searchTimeout;

  input.addEventListener("input", () => {
    // Reset timer when input event triggers
    clearTimeout(searchTimeout);

    removeSuggestions();

    // Wait 0.5s to fetch search suggestions
    if (!input.value) return;
    searchTimeout = setTimeout(
      () => addSuggestions(input, searchSuggestions),
      500,
    );
  });

  // input.addEventListener("blur", () => {
  //   // Remove suggestion cooldown when blurring input and still waiting the suggestion fetch
  //   clearTimeout(searchTimeout);

  //   removeSuggestionsEvent(searchSuggestions);
  // });

  input.addEventListener("focus", async () => {
    removeSuggestions();

    if (!input.value) return;
    addSuggestions(input, searchSuggestions);
  });
}

function addChooseSuggestionEvent(input, suggestion) {
  const form = document.querySelector("#search-form");

  suggestion.addEventListener("click", () => {
    input.value = suggestion.dataset.value;
    removeSuggestions();
    form.requestSubmit(); // Trigger submit event
  });
}

function addOpenSettingsDialogEvent(settingsButton) {
  settingsButton.addEventListener("click", settings.renderSettingsDialog);
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

  form.id = "search-form";
  inputContainer.className = "input-container";

  input.type = "search";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.autocomplete = "off";

  clearInput.className = "clear-input";
  clearInput.innerHTML = closeSvg;

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
  addSuggestionsBehaviorEvent(input, searchSuggestions);

  return form;
}

function createEmptySuggestion(label) {
  const suggestionContainer = document.createElement("div");
  const suggestionLabel = document.createElement("p");

  suggestionContainer.className = "suggestion empty";
  suggestionLabel.className = "location small-text";
  suggestionLabel.textContent = label;

  suggestionContainer.appendChild(suggestionLabel);

  return suggestionContainer;
}

function createSuggestion(input, suggestion) {
  const suggestionContainer = document.createElement("div");
  const location = document.createElement("p");
  const country = document.createElement("p");

  suggestionContainer.className = "suggestion";
  suggestionContainer.dataset.value = `${suggestion.name}, ${suggestion.country}`;
  location.className = "location small-text";
  location.textContent = suggestion.name;
  country.className = "country very-small-text";
  country.textContent = suggestion.country;

  suggestionContainer.appendChild(location);
  suggestionContainer.appendChild(country);

  addChooseSuggestionEvent(input, suggestionContainer);

  return suggestionContainer;
}

async function addSuggestions(input, searchSuggestions) {
  const suggestions = await fetchSearchSuggestions(input.value);

  if (!suggestions.length) {
    const emptySuggestions = createEmptySuggestion(
      "Location cannot be found...",
    );
    searchSuggestions.appendChild(emptySuggestions);
    return;
  }

  suggestions.forEach((suggestion) => {
    const suggestionElement = createSuggestion(input, suggestion);
    searchSuggestions.appendChild(suggestionElement);
  });
}

function removeSuggestions() {
  const searchSuggestions = document.querySelector(".search-suggestions");

  searchSuggestions.innerHTML = "";
}

function createHeaderButtons() {
  const container = document.createElement("div");
  container.className = "header-buttons";

  const settingsButton = document.createElement("button");
  settingsButton.className = "settings-button";
  settingsButton.innerHTML = settingsSvg;

  addOpenSettingsDialogEvent(settingsButton);

  container.appendChild(settingsButton);

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
