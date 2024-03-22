import clearSunSvg from "./img/forecast/clear-sun.svg";
import clearMoonSvg from "./img/forecast/clear-moon.svg";
import rainSvg from "./img/forecast/rain.svg";
import rainOverlaySvg from "./img/forecast/rain-overlay.svg";
import uvOverlaySvg from "./img/forecast/uv-overlay.svg";
import dewPointSvg from "./img/forecast/dew-point.svg";
import windSvg from "./img/forecast/wind.svg";
import visibilitySvg from "./img/forecast/visibility.svg";
import pressureSvg from "./img/forecast/pressure.svg";
import sunPositionSvg from "./img/forecast/sun-position.svg";
import moonPhaseSvg from "./img/forecast/moon-phase.svg";

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
  container.className = current.is_day ? "day" : "night";

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
  conditionIcon.innerHTML = current.is_day ? clearSunSvg : clearMoonSvg;

  container.appendChild(locationContainer);
  container.appendChild(currentTempContainer);
  container.appendChild(otherTempsContainer);
  container.appendChild(conditionIcon);

  return container;
}

function createHourElement(hour, timeValue) {
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
  conditionIcon.innerHTML =
    timeValue >= "06:00" && timeValue <= "18:00" ? clearSunSvg : clearMoonSvg;

  temperature.className = "temperature small-text";
  temperature.textContent = `${Math.trunc(hour.temp_c)}°`;

  precipitationContainer.className = "precipitation";
  precipitationIcon.className = "icon";
  precipitationIcon.innerHTML = rainSvg;
  precipitationValue.className = "value very-small-text";
  precipitationValue.textContent = `${hour.chance_of_rain}%`;

  precipitationContainer.appendChild(precipitationIcon);
  precipitationContainer.appendChild(precipitationValue);

  hourContainer.appendChild(timeElement);
  hourContainer.appendChild(conditionIcon);
  hourContainer.appendChild(temperature);
  hourContainer.appendChild(precipitationContainer);

  return hourContainer;
}

function createHourForecast(current, todayHourForecast, tomorrowHourForecast) {
  const currentTime = current.last_updated.split(" ")[1];
  const container = document.createElement("section");
  let hourElements = 24;

  container.id = "hour-forecast";

  // Display forecast based in current time
  todayHourForecast.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    if (timeValue >= currentTime) {
      const hourContainer = createHourElement(hour, timeValue);
      container.appendChild(hourContainer);

      hourElements--;
    }
  });

  // If current day display less than 24 hour elements, add forecast of tomorrow
  tomorrowHourForecast.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    if (hourElements > 0) {
      const hourContainer = createHourElement(hour, timeValue);
      container.appendChild(hourContainer);

      hourElements--;
    }
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
    conditionIcon.className = "icon";
    conditionIcon.innerHTML = clearSunSvg;
    conditionValue.className = "value small-text";
    conditionValue.textContent = day.day.condition.text;

    conditionContainer.appendChild(conditionIcon);
    conditionContainer.appendChild(conditionValue);

    precipitationContainer.className = "precipitation";
    precipitationIcon.className = "icon";
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
  const doubleContainer = document.createElement("div");
  doubleContainer.className = "double-section-container";

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
  humidityTextContainer.className = "title-container";
  humidityIcon.className = "icon";
  humidityIcon.innerHTML = rainOverlaySvg;
  humidityTitle.className = "title";
  humidityTitle.textContent = "Humidity";

  humidityTextContainer.appendChild(humidityIcon);
  humidityTextContainer.appendChild(humidityTitle);
  humiditySection.appendChild(humidityValue);
  humiditySection.appendChild(humidityTextContainer);

  uvSection.id = "uv";
  uvValue.className = "value";
  uvValue.textContent = Math.trunc(current.uv);
  uvTextContainer.className = "title-container";
  uvIcon.className = "icon";
  uvIcon.innerHTML = uvOverlaySvg;
  uvTitle.className = "title";
  uvTitle.textContent = "UV Index";

  uvTextContainer.appendChild(uvIcon);
  uvTextContainer.appendChild(uvTitle);
  uvSection.appendChild(uvValue);
  uvSection.appendChild(uvTextContainer);

  doubleContainer.appendChild(humiditySection);
  doubleContainer.appendChild(uvSection);

  return doubleContainer;
}

function createInformation(icon, elementClass, label, value, valueUnits) {
  const container = document.createElement("div");
  const titleElement = document.createElement("div");
  const iconElement = document.createElement("span");
  const labelElement = document.createElement("p");
  const valueElement = document.createElement("span");

  container.className = elementClass;
  titleElement.className = "title";
  iconElement.className = "icon";
  iconElement.innerHTML = icon;
  labelElement.className = "label";
  labelElement.textContent = label;
  valueElement.className = "value small-text";
  valueElement.textContent = `${value}${valueUnits}`;

  titleElement.appendChild(iconElement);
  titleElement.appendChild(labelElement);

  container.appendChild(titleElement);
  container.appendChild(valueElement);

  return container;
}

function createMoreWeatherInfo(current) {
  const container = document.createElement("section");
  const leftSide = document.createElement("div");
  const dewPoint = createInformation(
    dewPointSvg,
    "dew-point",
    "Dew point",
    0,
    "°",
  );
  const wind = createInformation(
    windSvg,
    "wind",
    "Wind",
    current.wind_kph,
    " km/h",
  );
  const rightSide = document.createElement("div");
  const visibility = createInformation(
    visibilitySvg,
    "visibility",
    "Visibility",
    current.vis_km,
    " km",
  );
  const pressure = createInformation(
    pressureSvg,
    "pressure",
    "Pressure",
    current.pressure_mb,
    " mb",
  );

  container.id = "more-weather-info";
  leftSide.className = "left-side";
  rightSide.className = "right-side";

  leftSide.appendChild(dewPoint);
  leftSide.appendChild(wind);
  rightSide.appendChild(visibility);
  rightSide.appendChild(pressure);

  container.appendChild(leftSide);
  container.appendChild(rightSide);

  return container;
}

function createSunAndMoonInfo(astro) {
  const doubleContainer = document.createElement("div");

  const sunSection = document.createElement("section");
  const sunIcon = document.createElement("span");
  const sunriseValue = document.createElement("span");
  const sunriseLabel = document.createElement("p");
  const sunsetValue = document.createElement("span");
  const sunsetLabel = document.createElement("p");
  const moonSection = document.createElement("section");
  const moonIcon = document.createElement("span");
  const moonPhaseValue = document.createElement("p");
  const moonPhaseLabel = document.createElement("p");

  doubleContainer.className = "double-section-container";

  sunSection.id = "sun-position";
  sunIcon.className = "icon";
  sunIcon.innerHTML = sunPositionSvg;
  sunriseValue.className = "sunrise-vale";
  sunriseValue.textContent = astro.sunrise;
  sunriseLabel.className = "sunrise-label small-text";
  sunriseLabel.textContent = "Sunrise";
  sunsetValue.className = "sunset-value";
  sunsetValue.textContent = astro.sunset;
  sunsetLabel.className = "sunset-label small-text";
  sunsetLabel.textContent = "Sunset";

  sunSection.appendChild(sunIcon);
  sunSection.appendChild(sunriseValue);
  sunSection.appendChild(sunriseLabel);
  sunSection.appendChild(sunsetValue);
  sunSection.appendChild(sunsetLabel);

  moonSection.id = "moon-phase";
  moonIcon.className = "icon";
  moonIcon.innerHTML = moonPhaseSvg;
  moonPhaseValue.className = "moon-phase-value";
  moonPhaseValue.textContent = astro.moon_phase;
  moonPhaseLabel.className = "moon-phase-label small-text";
  moonPhaseLabel.textContent = "Moon phase";

  moonSection.appendChild(moonIcon);
  moonSection.appendChild(moonPhaseValue);
  moonSection.appendChild(moonPhaseLabel);

  doubleContainer.appendChild(sunSection);
  doubleContainer.appendChild(moonSection);

  return doubleContainer;
}

async function renderForecast(location) {
  try {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.id = "forecast";

    weather = await fetchWeather(location);
    console.log(weather);

    container.appendChild(
      createCurrentWeather(
        weather.location,
        weather.current,
        weather.forecast.forecastday[0],
      ),
    );
    container.appendChild(
      createHourForecast(
        weather.current,
        weather.forecast.forecastday[0].hour,
        weather.forecast.forecastday[1].hour,
      ),
    );
    container.appendChild(createDayForecast(weather.forecast.forecastday));
    container.appendChild(createHumidityUv(weather.current));
    container.appendChild(createMoreWeatherInfo(weather.current));
    container.appendChild(
      createSunAndMoonInfo(weather.forecast.forecastday[0].astro),
    );

    // Reset main and add forecast information
    main.innerHTML = "";
    main.appendChild(container);
  } catch (error) {
    alert(`${location} not found!`);
    console.error(error);
  }
}

function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

// Events
function addSearchEvent(form, input) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderForecast(input.value);
  });
}

export { renderForecast, renderMain, addSearchEvent };
