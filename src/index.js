import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import Dialog from "./dialogs";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather(defaultLocation);
page.renderFooter();

const newDialog = new Dialog("my-dialog");

newDialog.setDialogContent(() => {
  const text = document.createElement("p");
  text.textContent = "Text example";
  return text;
}, [{ name: "close", type: "button", label: "Close dialog" }]);

newDialog.showDialog();
