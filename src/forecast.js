let forecastInfo;

async function fetchForecast(location) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d9bcc94c28e04844af1222420240303&q=${location}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  return responseFetch.json();
}

function createCurrentWeather(location, current, firstForecastDay) {
  const container = document.createElement("section");
  container.id = "current-weather";

  const locationContainer = document.createElement("div");
  const locationName = document.createElement("p");
  const locationCountry = document.createElement("span");

  const currentTempContainer = document.createElement("div");
  const temperatureValue = document.createElement("span");
  const condition = document.createElement("p");

  const highLowTempContainer = document.createElement("div");
  const highTemp = document.createElement("span");
  const tempDivider = document.createElement("span");
  const lowTemp = document.createElement("span");

  // Location
  locationContainer.className = "location";
  locationName.className = "name";
  locationName.textContent = location.name;
  locationCountry.className = "country small-text";
  locationCountry.textContent = location.country;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(locationCountry);

  // Current Temperature and Condition
  currentTempContainer.className = "current-temp";
  temperatureValue.className = "value";
  temperatureValue.textContent = `${current.temp_c}°C`;
  condition.className = "condition";
  condition.textContent = current.condition.text;

  currentTempContainer.appendChild(temperatureValue);
  currentTempContainer.appendChild(condition);

  // High low temperatures
  highLowTempContainer.className = "high-low-temp";
  highTemp.className = "high-value";
  highTemp.textContent = firstForecastDay.day.maxtemp_c;

  highLowTempContainer.appendChild(highTemp);

  container.appendChild(locationContainer);
  container.appendChild(currentTempContainer);
  container.appendChild(highLowTempContainer);

  return container;
}

async function renderForecast() {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  forecastInfo = await fetchForecast("San Salvador");

  container.id = "forecast";

  container.appendChild(
    createCurrentWeather(
      forecastInfo.location,
      forecastInfo.current,
      forecastInfo.forecast.forecastday[0],
    ),
  );

  main.appendChild(container);
}

function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

export { renderForecast, renderMain };
