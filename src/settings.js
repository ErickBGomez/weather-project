import clearInputSvg from "./img/clear-input.svg";

// Events
function writeSettings(settings = { property: "value" }) {
  localStorage.setItem("settings", JSON.stringify(settings));
}

function addWriteSettingsEvent(form) {
  const inputs = Array.from(form.querySelectorAll("select"));
  const settings = {};

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
      settings[input.name] = input.value;
    });

    writeSettings(settings);
  });
}

function addInputChangeEvent(form) {
  const inputs = Array.from(form.querySelectorAll("select"));

  inputs.forEach((input) => {
    input.addEventListener("change", () => form.requestSubmit());
  });
}

function createSettingField(
  inputId,
  label,
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

    selectInput.appendChild(optionElement);
  });

  container.appendChild(fieldLabel);
  container.appendChild(selectInput);

  return container;
}

function renderSettingsDialog() {
  const dialog = document.createElement("dialog");
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const closeDialog = document.createElement("button");
  const form = document.createElement("form");
  const units = createSettingField("units", "Display units", [
    { name: "°C", value: "c" },
    { name: "°F", value: "f" },
  ]);
  const hourFormat = createSettingField("hour-format", "Hour format", [
    { name: "12 hours", value: "12h" },
    { name: "24 hours", value: "24h" },
  ]);
  const autorefresh = createSettingField("autorefresh", "Auto refresh", [
    { name: "1 hour", value: "1" },
    { name: "3 hours", value: "3" },
    { name: "5 hours", value: "5" },
    { name: "12 hours", value: "12" },
    { name: "24 hours", value: "24" },
  ]);
  const sourceCode = document.createElement("div");
  const sourceCodeLink = document.createElement("a");

  dialog.id = "settings-dialog";

  titleContainer.className = "title-container";
  title.className = "title";
  title.textContent = "Settings";
  closeDialog.className = "close-dialog";
  closeDialog.innerHTML = clearInputSvg;

  titleContainer.appendChild(title);
  titleContainer.appendChild(closeDialog);

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

  // add events
  addInputChangeEvent(form);
  addWriteSettingsEvent(form);

  document.body.appendChild(dialog);

  dialog.showModal();
}

export default renderSettingsDialog;
