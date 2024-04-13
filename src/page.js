import searchSvg from "./img/ui/search.svg";
import settingsSvg from "./img/ui/settings.svg";
import closeSvg from "./img/ui/close.svg";
import unitsSvg from "./img/ui/units.svg";
import timeFormatSvg from "./img/ui/time-format.svg";
import autorefreshSvg from "./img/ui/autorefresh.svg";
import { addSearchEvent, setWeather } from "./forecast";
import { writeInputSettings, readSettings } from "./settings";
import Dialog from "./dialogs";

const settingsDialog = new Dialog("settings-dialog");

// Fetch methods
async function fetchSearchSuggestions(query) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=d9bcc94c28e04844af1222420240303&q=${query}`,
  );

  return responseFetch.json();
}

// Events:
// - Search events
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
  settingsButton.addEventListener("click", () => {
    settingsDialog.showDialog();
  });
}

// - Settings dialog events
function addWriteSettingsEvent(form) {
  const inputs = Array.from(form.querySelectorAll("select"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    writeInputSettings(inputs);
    setWeather(); // Refresh weather
  });
}

function addSubmitSettingsEvent(form, submitButton) {
  submitButton.addEventListener("click", () => {
    form.requestSubmit();
  });
}

// Header
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

function createSettingField(
  inputId,
  label,
  icon,
  settingsValue,
  selectOptions = [{ name: "option-name", value: "option-value" }],
) {
  const container = document.createElement("div");
  const fieldTitleContainer = document.createElement("div");
  const fieldLabel = document.createElement("label");
  const fieldIcon = document.createElement("span");
  const selectInput = document.createElement("select");

  container.className = "settings-field";
  fieldTitleContainer.className = "field-title";
  fieldLabel.className = "title";
  fieldLabel.setAttribute("for", inputId);
  fieldLabel.textContent = label;
  fieldIcon.className = "icon";
  fieldIcon.innerHTML = icon;

  selectInput.id = inputId;
  selectInput.name = inputId;

  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.name;
    optionElement.value = option.value;
    if (option.value === settingsValue) {
      optionElement.setAttribute("selected", "selected");
    }

    selectInput.appendChild(optionElement);
  });

  fieldTitleContainer.appendChild(fieldIcon);
  fieldTitleContainer.appendChild(fieldLabel);

  container.appendChild(fieldTitleContainer);
  container.appendChild(selectInput);

  return container;
}

function setupSettingsDialogContent() {
  const settings = readSettings();
  const content = document.createElement("div");
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const form = document.createElement("form");
  const units = createSettingField(
    "units",
    "Display units",
    unitsSvg,
    settings.units,
    [
      { name: "°C", value: "c" },
      { name: "°F", value: "f" },
    ],
  );
  const hourFormat = createSettingField(
    "timeFormat",
    "Time format",
    timeFormatSvg,
    settings.timeFormat,
    [
      { name: "24 hours", value: "24h" },
      { name: "12 hours", value: "12h" },
    ],
  );
  const autorefresh = createSettingField(
    "autorefresh",
    "Auto refresh",
    autorefreshSvg,
    settings.autorefresh,
    [
      { name: "1 hour", value: "1" },
      { name: "3 hours", value: "3" },
      { name: "5 hours", value: "5" },
      { name: "12 hours", value: "12" },
      { name: "24 hours", value: "24" },
    ],
  );

  content.className = "content";

  titleContainer.className = "title-container";
  title.className = "title";
  title.textContent = "Settings";

  titleContainer.appendChild(title);

  form.id = "settings";

  form.appendChild(units);
  form.appendChild(hourFormat);
  form.appendChild(autorefresh);

  content.appendChild(titleContainer);
  content.appendChild(form);

  // add events
  addWriteSettingsEvent(form);

  return content;
}

function renderHeader() {
  const header = document.createElement("header");
  header.appendChild(createAppTitle());
  header.appendChild(createChooseAreaInput("choose-area", "Choose area..."));
  header.appendChild(createHeaderButtons());

  settingsDialog.setContent(setupSettingsDialogContent(), [
    { classes: "primary", type: "submit", label: "Save changes" },
    { classes: "secondary", type: "button", label: "Close" },
  ]);
  addSubmitSettingsEvent(
    settingsDialog.getForm,
    settingsDialog.getPrimaryButton,
  );

  document.body.appendChild(header);
}

// Main
function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

// Footer
function renderFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Made by ";

  const credits = document.createElement("a");
  credits.className = "credits";
  credits.href = "https://www.github.com/ErickBGomez";
  credits.target = "_blank";
  credits.textContent = "Erick B. Gómez";

  footer.appendChild(credits);

  document.body.appendChild(footer);
}

export { renderHeader, renderMain, renderFooter };
