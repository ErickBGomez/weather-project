import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather();
page.renderFooter();
