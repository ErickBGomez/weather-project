import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import getMoonPhaseIcon from "./moon-phases";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

page.renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
page.renderFooter();

// console.log(getConditionIcon(1000, 1));
// console.log(getConditionIcon(1135, 0));

getMoonPhaseIcon("Full Moon");
