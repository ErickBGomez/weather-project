import "./style.css";
import renderHeader from "./design/header";
import * as forecast from "./forecast";
import renderFooter from "./design/footer";

const defaultLocation = "San Salvador";

renderHeader();
forecast.renderMain();
forecast.renderForecast(defaultLocation);
renderFooter();
