import clearSunSvg from "./img/forecast/clear-sun.svg";
import clearMoonSvg from "./img/forecast/clear-moon.svg";
import rainSvg from "./img/forecast/rain.svg";
import rainOverlaySvg from "./img/forecast/rain-overlay.svg";
import uvOverlaySvg from "./img/forecast/uv-overlay.svg";
import precipitationSvg from "./img/forecast/precipitation.svg";
import windSvg from "./img/forecast/wind.svg";
import windDirectionSvg from "./img/forecast/wind-direction.svg";
import visibilitySvg from "./img/forecast/visibility.svg";
import pressureSvg from "./img/forecast/pressure.svg";
import sunPositionSvg from "./img/forecast/sun-position.svg";
import moonPhaseSvg from "./img/forecast/moon-phase.svg";
import arcPercentageSvg from "./img/arc-percentage.svg";

// Events
function addSearchEvent(form, input) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderForecast(input.value);
    input.blur();
  });
}

async function fetchWeather(query) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d9bcc94c28e04844af1222420240303&q=${query}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  return responseFetch.json();
}

// DOM Elements

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

function setDoubleSection(sectionOne, sectionTwo) {
  const sections = document.createElement("div");
  sections.className = "double-section-container";

  sections.appendChild(sectionOne);
  sections.appendChild(sectionTwo);

  return sections;
}

// Functions to draw percentage arcs
// Based on this post from Stack Exchange: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function drawArc(xPosition, yPosition, radius, startAngle, arcPercentage) {
  // Transform percentage to angle (in degrees)
  // Approximate 360° when percentage is >= 100%
  const endAngle = arcPercentage < 1 ? 360 * arcPercentage : 359.999;

  const start = polarToCartesian(xPosition, yPosition, radius, endAngle);
  const end = polarToCartesian(xPosition, yPosition, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function createArcPercentage(value, maxValue, units = "") {
  const container = document.createElement("div");
  const valueElement = document.createElement("span");
  const arcPercentage = document.createElement("span");

  container.className = "value-container";
  valueElement.className = "value";
  valueElement.textContent = `${value}${units}`;
  arcPercentage.className = "arc-percentage";
  arcPercentage.innerHTML = arcPercentageSvg;

  const arc = arcPercentage.querySelector(".arc-path");
  arc.setAttribute("d", drawArc(50, 50, 44, 0, value / maxValue));

  container.appendChild(valueElement);
  container.appendChild(arcPercentage);

  return container;
}

function createArcSection(sectionId, title, icon, value, maxValue, units = "") {
  const section = document.createElement("section");
  const arcValue = createArcPercentage(value, maxValue, units);
  const titleContainer = document.createElement("div");
  const titleElement = document.createElement("p");
  const titleIcon = document.createElement("span");

  section.id = sectionId;
  titleContainer.className = "title-container";
  titleElement.className = "title";
  titleElement.textContent = title;
  titleIcon.className = "icon";
  titleIcon.innerHTML = icon;

  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(titleElement);

  section.appendChild(arcValue);
  section.appendChild(titleContainer);

  return section;
}

function createHumidityUv(current) {
  const humidity = createArcSection(
    "humidity",
    "Humidity",
    rainOverlaySvg,
    current.humidity,
    100,
    "%",
  );
  const uv = createArcSection("uv", "UV Index", uvOverlaySvg, current.uv, 11);

  return setDoubleSection(humidity, uv);
}

function createInformation(
  icon,
  elementClass,
  label,
  value,
  valueUnits,
  moreInfo = { class: "", icon: "", value: "" },
) {
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

  if (moreInfo.value) {
    const valueContainer = document.createElement("div");
    valueContainer.className = "value-container";

    const moreInfoElement = document.createElement("span");
    moreInfoElement.className = moreInfo.class;
    moreInfoElement.innerHTML = moreInfo.icon;
    moreInfoElement.style.transform = `rotate(${moreInfo.value}deg)`;

    valueContainer.appendChild(moreInfoElement);
    valueContainer.appendChild(valueElement);

    container.appendChild(valueContainer);
  } else {
    container.appendChild(valueElement);
  }

  return container;
}

function createMoreWeatherInfo(current) {
  const container = document.createElement("section");
  const leftSide = document.createElement("div");
  const precipitation = createInformation(
    precipitationSvg,
    "precipitation",
    "Precipitation",
    current.precip_mm,
    " mm",
  );
  const wind = createInformation(
    windSvg,
    "wind",
    "Wind",
    current.wind_kph,
    " km/h",
    { class: "direction", icon: windDirectionSvg, value: current.wind_degree },
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

  leftSide.appendChild(precipitation);
  leftSide.appendChild(wind);
  rightSide.appendChild(visibility);
  rightSide.appendChild(pressure);

  container.appendChild(leftSide);
  container.appendChild(rightSide);

  return container;
}

function createAstroInfo(
  sectionId,
  icon,
  information = [{ label: "", value: "" }],
) {
  const section = document.createElement("section");
  const iconElement = document.createElement("span");

  section.id = sectionId;
  iconElement.className = "icon";
  iconElement.innerHTML = icon;

  section.appendChild(iconElement);

  information.forEach((info) => {
    const astroValue = document.createElement("div");
    const valueElement = document.createElement("span");
    const valueLabel = document.createElement("p");

    astroValue.className = "astro-value";
    valueElement.className = "value";
    valueElement.textContent = info.value;

    valueLabel.className = "label small-text";
    valueLabel.textContent = info.label;

    astroValue.appendChild(valueElement);
    astroValue.appendChild(valueLabel);

    section.appendChild(astroValue);
  });

  return section;
}

function createSunAndMoonInfo(astro) {
  const sun = createAstroInfo("sun-position", sunPositionSvg, [
    { label: "Sunrise", value: astro.sunrise },
    { label: "Sunset", value: astro.sunset },
  ]);

  const moon = createAstroInfo("moon-phase", moonPhaseSvg, [
    { label: "Moon phase", value: astro.moon_phase },
  ]);

  return setDoubleSection(sun, moon);
}

async function renderForecast(location) {
  try {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.id = "forecast";

    const weather = await fetchWeather(location);
    const autocomplete = await fetchSearchSuggestions(location);

    console.log(weather);
    console.log(autocomplete);

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

export { renderForecast, renderMain, addSearchEvent };
