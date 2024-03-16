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

function renderMain() {
  const main = document.createElement("main");

  document.body.appendChild(main);
}

function renderForecast() {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  container.id = "forecast";

  main.appendChild(container);
}

export { renderMain, renderForecast };
