import "./style.css";
import renderHeader from "./header";
import * as forecast from "./forecast";
import renderFooter from "./footer";
import * as settings from "./settings";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
renderFooter();

// console.log(getConditionIcon(1000, 1));
// console.log(getConditionIcon(1135, 0));
