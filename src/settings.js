import clearInputSvg from "./img/clear-input.svg";

function createSettingField(
  inputId,
  title,
  selectOptions = [{ name: "option-name", value: "option-value" }],
) {
  const container = document.createElement("div");
  const fieldTitle = document.createElement("p");
  const selectInput = document.createElement("select");

  container.className = "settings-field";
  fieldTitle.className = "title";
  fieldTitle.textContent = title;

  selectInput.id = inputId;
  selectInput.name = inputId;

  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.name;
    optionElement.value = option.value;

    selectInput.appendChild(optionElement);
  });

  container.appendChild(fieldTitle);
  container.appendChild(selectInput);

  return container;
}

function renderSettingsDialog() {
  const dialog = document.createElement("dialog");
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const closeDialog = document.createElement("span");
  const fields = document.createElement("div");
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

  fields.className = "fields";

  sourceCode.className = "source-code";
  sourceCodeLink.textContent = "Open project source code";
  sourceCodeLink.target = "_blank";
  sourceCodeLink.href = "https://github.com/ErickBGomez/weather-project";

  sourceCode.appendChild(sourceCodeLink);

  fields.appendChild(units);
  fields.appendChild(hourFormat);
  fields.appendChild(autorefresh);

  dialog.appendChild(titleContainer);
  dialog.appendChild(fields);
  dialog.appendChild(sourceCode);

  document.body.appendChild(dialog);

  dialog.showModal();
}

export default renderSettingsDialog;
