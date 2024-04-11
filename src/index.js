import "./style.css";
import * as page from "./page";
import * as forecast from "./forecast";
import * as settings from "./settings";
import { parseTimeToNumber } from "./time";
import { sunPositionIndex } from "./sun-position";

const defaultLocation = "San Salvador";

settings.checkDefaultSettings();

page.renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
page.renderFooter();

// console.log(getConditionIcon(1000, 1));
// console.log(getConditionIcon(1135, 0));

console.log(parseTimeToNumber("16:00"));
console.log(parseTimeToNumber("16:50"));
console.log(parseTimeToNumber("18:59"));

console.log(sunPositionIndex("05:00", "18:00", "12:00"));
console.log(sunPositionIndex("5:47 AM", "6:12 PM", "1:00 PM"));
