import "./style.css";
import renderHeader from "./design/header";
import renderFooter from "./design/footer";

const currentLocation = "San Salvador";
let forecastInfo;

async function fetchForecast() {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d9bcc94c28e04844af1222420240303&q=${currentLocation}&days=3&aqi=no&alerts=no`,
  );
  return responseFetch.json();
}

forecastInfo = await fetchForecast();

console.log(forecastInfo);

renderHeader();
renderFooter();
