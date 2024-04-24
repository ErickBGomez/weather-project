import "../style.css";
import * as page from "./design/page";
import * as forecast from "./design/forecast";
import getConditionIcon from "./parse/conditions";
import * as settings from "./app/settings";

settings.checkDefaultSettings();

page.renderHeader();
page.renderMain();
forecast.setWeather();
page.renderFooter();

getConditionIcon(1000).then((res) => console.log(res));
