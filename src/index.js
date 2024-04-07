import "./style.css";
import renderHeader from "./design/header";
import * as forecast from "./forecast";
import renderFooter from "./design/footer";
import * as settings from "./settings";
import getConditionIcon from "./forecast-icons";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
renderFooter();

// console.log(getConditionIcon(1000, 1));
// console.log(getConditionIcon(1135, 0));
