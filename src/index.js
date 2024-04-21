import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import Storage from "./storage";

const storage = new Storage("lastLocation");

const defaultLocation = storage.checkSavedItem() ? storage.getItem() : "London";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather(defaultLocation);
page.renderFooter();
