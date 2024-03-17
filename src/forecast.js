import clearSunSvg from "./img/forecast/clear-sun.svg";
import rainSvg from "./img/forecast/rain.svg";
import rainOverlaySvg from "./img/forecast/rain-overlay.svg";
import uvOverlaySvg from "./img/forecast/uv-overlay.svg";

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

function createHourForecast(hourForecast) {
  const container = document.createElement("section");

  container.id = "hour-forecast";

  hourForecast.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    const hourContainer = document.createElement("div");
    const timeElement = document.createElement("span");
    const conditionIcon = document.createElement("span");
    const temperature = document.createElement("span");
    const precipitationContainer = document.createElement("div");
    const precipitationIcon = document.createElement("span");
    const precipitationValue = document.createElement("span");

    hourContainer.className = "hour-container";
    timeElement.className = "time very-small-text";
    timeElement.textContent = timeValue;

    conditionIcon.className = "condition-icon";
    conditionIcon.innerHTML = clearSunSvg;

    temperature.className = "temperature small-text";
    temperature.textContent = `${Math.trunc(hour.temp_c)}°`;

    precipitationContainer.className = "precipitation";
    precipitationIcon.className = "precipitation-icon";
    precipitationIcon.innerHTML = rainSvg;
    precipitationValue.className = "value very-small-text";
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

function createDayForecast(dayForecast) {
  const container = document.createElement("section");

  container.id = "day-forecast";

  dayForecast.forEach((day, index) => {
    const dayContainer = document.createElement("div");
    const dayElement = document.createElement("p");
    const temperatures = document.createElement("span");
    const conditionContainer = document.createElement("div");
    const conditionIcon = document.createElement("span");
    const conditionValue = document.createElement("p");
    const precipitationContainer = document.createElement("div");
    const precipitationIcon = document.createElement("span");
    const precipitationValue = document.createElement("span");

    dayContainer.className = "day-container";
    dayElement.className = "day";
    dayElement.textContent = !index ? "Today" : day.date;

    temperatures.className = "temperatures small-text";
    temperatures.textContent = `${Math.trunc(day.day.maxtemp_c)}° | ${Math.trunc(day.day.mintemp_c)}°`;

    conditionContainer.className = "condition";
    conditionIcon.className = "condition-icon";
    conditionIcon.innerHTML = clearSunSvg;
    conditionValue.className = "value small-text";
    conditionValue.textContent = day.day.condition.text;

    conditionContainer.appendChild(conditionIcon);
    conditionContainer.appendChild(conditionValue);

    precipitationContainer.className = "precipitation";
    precipitationIcon.className = "precipitation-icon";
    precipitationIcon.innerHTML = rainSvg;
    precipitationValue.className = "value small-text";
    precipitationValue.textContent = `${day.day.daily_chance_of_rain}%`;

    precipitationContainer.appendChild(precipitationIcon);
    precipitationContainer.appendChild(precipitationValue);

    container.appendChild(dayElement);
    container.appendChild(temperatures);
    container.appendChild(conditionContainer);
    container.appendChild(precipitationContainer);
  });

  return container;
}

function createHumidityUv(current) {
  const container = document.createElement("div");
  container.className = "humidity-uv-container";

  const humiditySection = document.createElement("section");
  const humidityValue = document.createElement("span");
  const humidityTextContainer = document.createElement("div");
  const humidityIcon = document.createElement("span");
  const humidityTitle = document.createElement("p");
  const uvSection = document.createElement("section");
  const uvValue = document.createElement("span");
  const uvTextContainer = document.createElement("div");
  const uvIcon = document.createElement("span");
  const uvTitle = document.createElement("p");

  humiditySection.id = "humidity";
  humidityValue.className = "value";
  humidityValue.textContent = `${current.humidity}%`;
  humidityTextContainer.className = "title";
  humidityIcon.className = "humidity-icon";
  humidityIcon.innerHTML = rainOverlaySvg;
  humidityTitle.className = "humidity-title";
  humidityTitle.textContent = "Humidity";

  humidityTextContainer.appendChild(humidityIcon);
  humidityTextContainer.appendChild(humidityTitle);
  humiditySection.appendChild(humidityValue);
  humiditySection.appendChild(humidityTextContainer);

  uvSection.id = "uv";
  uvValue.className = "value";
  uvValue.textContent = Math.trunc(current.uv);
  uvTextContainer.className = "title";
  uvIcon.className = "uv-icon";
  uvIcon.innerHTML = uvOverlaySvg;
  uvTitle.className = "uv-title";
  uvTitle.textContent = "UV Index";

  uvTextContainer.appendChild(uvIcon);
  uvTextContainer.appendChild(uvTitle);
  uvSection.appendChild(uvValue);
  uvSection.appendChild(uvTextContainer);

  container.appendChild(humiditySection);
  container.appendChild(uvSection);

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
  container.appendChild(createDayForecast(weather.forecast.forecastday));
  container.appendChild(createHumidityUv(weather.current));

  main.appendChild(container);
}

function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

export { renderForecast, renderMain };
