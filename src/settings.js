import Storage from "./storage";

const settingsMemory = new Storage("settings");

const defaultSettings = {
  units: "c",
  timeFormat: "12h",
  autorefresh: "1",
};

// Events
function writeSettings(settings) {
  settingsMemory.saveItem(settings);
}

function writeInputSettings(inputs) {
  const settings = {};

  inputs.forEach((input) => {
    settings[input.name] = input.value;
  });

  writeSettings(settings);
}

function readSettings() {
  return JSON.parse(localStorage.getItem("settings"));
}

function checkDefaultSettings() {
  if (!localStorage.getItem("settings")) {
    writeSettings(defaultSettings);
  }
}

export { checkDefaultSettings, readSettings, writeInputSettings };
