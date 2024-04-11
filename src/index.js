import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

page.renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
page.renderFooter();
