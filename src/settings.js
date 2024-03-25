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

  dialog.id = "settings-dialog";

  title.className = "title";
  title.textContent = "Settings";

  fields.className = "fields";

  fields.appendChild(temperature);
  fields.appendChild(hour);

  dialog.appendChild(title);
  dialog.appendChild(fields);

  document.body.appendChild(dialog);

  dialog.showModal();
}

export default renderSettingsDialog;
