import "./style.css";
import renderHeader from "./design/header";
import * as forecast from "./forecast";
import renderFooter from "./design/footer";

renderHeader();
forecast.renderMain();
forecast.renderForecast();
renderFooter();
