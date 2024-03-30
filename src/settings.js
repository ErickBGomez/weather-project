import closeSvg from "./img/close.svg";
import { renderForecast } from "./forecast";

// Events
function writeSettings(inputs) {
  const settings = {};

  inputs.forEach((input) => {
    settings[input.name] = input.value;
  });

  localStorage.setItem("settings", JSON.stringify(settings));
}

function readSettings() {
  return JSON.parse(localStorage.getItem("settings"));
}

function checkDefaultSettings() {
  if (!localStorage.getItem("settings")) {
    const inputs = Array.from(document.querySelectorAll("#settings select"));
    writeSettings(inputs);
  }
}

function addWriteSettingsEvent(form) {
  const inputs = Array.from(form.querySelectorAll("select"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    writeSettings(inputs);
    renderForecast("San Salvador");
  });
}

function addCloseDialogEvent(dialog, dialogButtons) {
  const closeButtons = Array.from(dialogButtons.querySelectorAll("button"));

  closeButtons.forEach((button) =>
    button.addEventListener("click", () => {
      dialog.close();
      document.body.removeChild(dialog);
    }),
  );
}

function addSubmitSettingsEvent(form, submitButton) {
  submitButton.addEventListener("click", () => {
    form.requestSubmit();
  });
}

// DOM Methods

function createSettingField(
  inputId,
  label,
  settingsValue,
  selectOptions = [{ name: "option-name", value: "option-value" }],
) {
  const container = document.createElement("div");
  const fieldLabel = document.createElement("label");
  const selectInput = document.createElement("select");

  container.className = "settings-field";
  fieldLabel.className = "title";
  fieldLabel.setAttribute("for", inputId);
  fieldLabel.textContent = label;

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

  container.appendChild(fieldLabel);
  container.appendChild(selectInput);

  return container;
}

function createDialogButtons(primaryLabel, secondaryLabel) {
  const container = document.createElement("div");
  const primary = document.createElement("button");
  const secondary = document.createElement("button");

  primary.className = "primary";
  primary.type = "submit";
  primary.textContent = primaryLabel;

  secondary.className = "secondary";
  secondary.type = "button";
  secondary.textContent = secondaryLabel;

  container.appendChild(primary);
  container.appendChild(secondary);

  return container;
}

function renderSettingsDialog() {
  const settings = readSettings();
  const dialog = document.createElement("dialog");
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const dialogButtons = createDialogButtons("Save changes", "Cancel");
  const submitButton = dialogButtons.querySelector("button.primary");
  const closeButton = dialogButtons.querySelector("button.secondary");
  const form = document.createElement("form");
  const units = createSettingField("units", "Display units", settings.units, [
    { name: "°C", value: "c" },
    { name: "°F", value: "f" },
  ]);
  const hourFormat = createSettingField(
    "time-format",
    "Time format",
    settings["time-format"],
    [
      { name: "24 hours", value: "24h" },
      { name: "12 hours", value: "12h" },
    ],
  );
  const autorefresh = createSettingField(
    "autorefresh",
    "Auto refresh",
    settings.autorefresh,
    [
      { name: "1 hour", value: "1" },
      { name: "3 hours", value: "3" },
      { name: "5 hours", value: "5" },
      { name: "12 hours", value: "12" },
      { name: "24 hours", value: "24" },
    ],
  );
  const sourceCode = document.createElement("div");
  const sourceCodeLink = document.createElement("a");

  dialog.id = "settings-dialog";

  titleContainer.className = "title-container";
  title.className = "title";
  title.textContent = "Settings";

  titleContainer.appendChild(title);

  form.id = "settings";

  sourceCode.className = "source-code";
  sourceCodeLink.textContent = "Open project source code";
  sourceCodeLink.target = "_blank";
  sourceCodeLink.href = "https://github.com/ErickBGomez/weather-project";

  sourceCode.appendChild(sourceCodeLink);

  form.appendChild(units);
  form.appendChild(hourFormat);
  form.appendChild(autorefresh);

  dialog.appendChild(titleContainer);
  dialog.appendChild(form);
  dialog.appendChild(sourceCode);
  dialog.appendChild(dialogButtons);

  // add events
  addWriteSettingsEvent(form);
  addSubmitSettingsEvent(form, submitButton);
  addCloseDialogEvent(dialog, dialogButtons);

  document.body.appendChild(dialog);

  dialog.showModal();
}

export { checkDefaultSettings, readSettings, renderSettingsDialog };
