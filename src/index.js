import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import * as storage from "./storage";

const defaultLocation = !storage.checkLastLocation()
  ? "London"
  : storage.getLastLocation();

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather(defaultLocation);
page.renderFooter();
