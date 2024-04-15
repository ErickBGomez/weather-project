import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";

const defaultLocation = "London";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather(defaultLocation);
page.renderFooter();
