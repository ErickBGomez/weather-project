import clearSunSvg from "./img/forecast/clear-sun.svg";

let weather;

async function fetchWeather(location) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d9bcc94c28e04844af1222420240303&q=${location}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  return responseFetch.json();
}

function createCurrentWeather(location, current, firstForecastDay) {
  const container = document.createElement("section");
  const locationContainer = document.createElement("div");
  const locationName = document.createElement("p");
  const locationCountry = document.createElement("span");
  const currentTempContainer = document.createElement("div");
  const temperatureValue = document.createElement("span");
  const condition = document.createElement("p");
  const otherTempsContainer = document.createElement("div");
  const highLowTemps = document.createElement("div");
  const highTemp = document.createElement("span");
  const tempDivider = document.createElement("span");
  const lowTemp = document.createElement("span");
  const feelsLikeTemp = document.createElement("span");
  const conditionIcon = document.createElement("span");

  container.id = "current-weather";

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
  temperatureValue.textContent = `${Math.trunc(current.temp_c)}°C`;
  condition.className = "condition";
  condition.textContent = current.condition.text;

  currentTempContainer.appendChild(temperatureValue);
  currentTempContainer.appendChild(condition);

  // High low temperatures
  otherTempsContainer.className = "other-temps";
  highLowTemps.className = "high-low-temp";
  highTemp.className = "high-value";
  highTemp.textContent = `${Math.trunc(firstForecastDay.day.maxtemp_c)}°C`;
  tempDivider.className = "temp-divider";
  tempDivider.textContent = " | ";
  lowTemp.className = "low-value";
  lowTemp.textContent = `${Math.trunc(firstForecastDay.day.mintemp_c)}°C`;
  feelsLikeTemp.className = "feelslike-temp small-text";
  feelsLikeTemp.textContent = `Feels like ${Math.trunc(current.feelslike_c)}°C`;

  highLowTemps.appendChild(highTemp);
  highLowTemps.appendChild(tempDivider);
  highLowTemps.appendChild(lowTemp);
  otherTempsContainer.appendChild(highLowTemps);
  otherTempsContainer.appendChild(feelsLikeTemp);

  // Condition icon
  conditionIcon.className = "condition-icon";
  conditionIcon.innerHTML = clearSunSvg;

  container.appendChild(locationContainer);
  container.appendChild(currentTempContainer);
  container.appendChild(otherTempsContainer);
  container.appendChild(conditionIcon);

  return container;
}

function createHourForecast(forecastHour) {
  const container = document.createElement("section");

  container.id = "hour-forecast";

  forecastHour.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    const hourContainer = document.createElement("div");
    const timeElement = document.createElement("span");
    const conditionIcon = document.createElement("span");
    const temperature = document.createElement("span");
    const precipitationContainer = document.createElement("div");
    const precipitationIcon = document.createElement("span");
    const precipitationValue = document.createElement("span");

    hourContainer.className = "hour-container";
    timeElement.className = "time";
    timeElement.textContent = timeValue;

    conditionIcon.className = "condition-icon";
    conditionIcon.innerHTML = clearSunSvg;

    temperature.className = "temperature";
    temperature.textContent = `${Math.trunc(hour.temp_c)}°C`;

    precipitationContainer.className = "precipitation";
    precipitationIcon.className = "precipitation-icon";
    precipitationIcon.innerHTML = clearSunSvg;
    precipitationValue.className = "value";
    precipitationValue.textContent = `${hour.chance_of_rain}%`;

    precipitationContainer.appendChild(precipitationIcon);
    precipitationContainer.appendChild(precipitationValue);

    hourContainer.appendChild(timeElement);
    hourContainer.appendChild(conditionIcon);
    hourContainer.appendChild(temperature);
    hourContainer.appendChild(precipitationContainer);

    container.appendChild(hourContainer);
  });

  return container;
}

async function renderForecast() {
  const main = document.querySelector("main");
  const container = document.createElement("div");
  weather = await fetchWeather("San Salvador");

  container.id = "forecast";

  container.appendChild(
    createCurrentWeather(
      weather.location,
      weather.current,
      weather.forecast.forecastday[0],
    ),
  );
  container.appendChild(
    createHourForecast(weather.forecast.forecastday[0].hour),
  );

  main.appendChild(container);
}

function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

export { renderForecast, renderMain };
