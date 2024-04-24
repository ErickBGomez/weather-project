import "../style.css";
import * as page from "./design/page";
import * as forecast from "./design/forecast";
import * as settings from "./app/settings";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather();
page.renderFooter();
