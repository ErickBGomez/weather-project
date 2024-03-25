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
  const title = document.createElement("h2");
  const fields = document.createElement("div");
  const temperature = createSettingField(
    "temperature-units",
    "Temperature units",
    [
      { name: "°C", value: "c" },
      { name: "°F", value: "f" },
    ],
  );
  const hour = createSettingField("hour-display", "Hour Display", [
    { name: "24 hours", value: "24h" },
    { name: "12 hours", value: "12h" },
  ]);
  const distanceSpeed = createSettingField(
    "distance-speed-units",
    "Distance and speed units",
    [
      { name: "Miles and mph", value: "m" },
      { name: "Kilometers and km/h", value: "km" },
    ],
  );
  const pressure = createSettingField("pressure-units", "Pressure units", [
    { name: "Inch (in)", value: "in" },
    { name: "Millibar (mb)", value: "mb" },
  ]);
  const autorefresh = createSettingField("autorefresh-rate", "Autorefresh", [
    { name: "1 hour", value: "1" },
    { name: "3 hours", value: "3" },
    { name: "5 hours", value: "5" },
    { name: "12 hours", value: "12" },
    { name: "24 hours", value: "24" },
  ]);
  const sourceCode = document.createElement("div");
  const sourceCodeLink = document.createElement("a");

  dialog.id = "settings-dialog";

  title.className = "title";
  title.textContent = "Settings";

  fields.className = "fields";

  sourceCode.className = "source-code";
  sourceCodeLink.textContent = "Open project source code";
  sourceCodeLink.target = "_blank";
  sourceCodeLink.href = "https://github.com/ErickBGomez/weather-project";

  sourceCode.appendChild(sourceCodeLink);

  fields.appendChild(temperature);
  fields.appendChild(hour);
  fields.appendChild(distanceSpeed);
  fields.appendChild(pressure);
  fields.appendChild(autorefresh);

  dialog.appendChild(title);
  dialog.appendChild(fields);
  dialog.appendChild(sourceCode);

  document.body.appendChild(dialog);

  dialog.showModal();
}

export default renderSettingsDialog;
