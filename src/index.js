import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import Dialog from "./dialogs";

const defaultLocation = "London";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather(defaultLocation);
page.renderFooter();

const newDialog = new Dialog("my-dialog");

newDialog.setContent(
  (() => {
    const text = document.createElement("p");
    text.textContent = "Text example";
    return text;
  })(),
  [
    { classes: "ok primary", type: "button", label: "Ok" },
    { classes: "close secondary", type: "button", label: "Close" },
  ],
);

// newDialog.showDialog();
