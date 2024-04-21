import searchErrorSvg from "./img/ui/search-error.svg";
import rainSvg from "./img/ui/rain.svg";
import humidityOverlaySvg from "./img/ui/humidity-overlay.svg";
import uvOverlaySvg from "./img/ui/uv-overlay.svg";
import precipitationSvg from "./img/ui/precipitation.svg";
import windSvg from "./img/ui/wind.svg";
import windDirectionSvg from "./img/ui/wind-direction.svg";
import visibilitySvg from "./img/ui/visibility.svg";
import pressureSvg from "./img/ui/pressure.svg";
import arcPercentageSvg from "./img/ui/arc-percentage.svg";
import loadingSvg from "./img/ui/loading.svg";

import { readSettings } from "./settings";
import getConditionIcon from "./conditions";
import getMoonPhaseIcon from "./moon-phases";
import getSunPositionIcon from "./sun-position";
import * as time from "./time";
import { fetchSearchSuggestions } from "./page";
import Dialog from "./dialogs";

let lastLocation;

const alertBox = new Dialog("alert-box");

// Fetch methods
async function fetchWeather(query) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=d9bcc94c28e04844af1222420240303&q=${query}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  return responseFetch.json();
}

function setAlertBoxContent() {
  const content = document.createElement("div");
  const title = document.createElement("h1");
  const icon = document.createElement("span");
  const description = document.createElement("p");

  content.className = "content";

  title.className = "title";
  title.textContent = "Oops! Error";

  icon.className = "icon";
  icon.innerHTML = searchErrorSvg;

  description.className = "description small-text";
  // eslint-disable-next-line operator-linebreak
  description.textContent =
    "It seems like the location you entered doesn't exist. Please try again with a different location.";

  content.appendChild(title);
  content.appendChild(icon);
  content.appendChild(description);

  return content;
}

// Events
function addSearchEvent(form, input) {
  alertBox.setContent(setAlertBoxContent(input.value), [
    { classes: "primary", type: "button", label: "Ok" },
  ]);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!input.value) return;
    // Check suggestions first before fetching an incorrect value to get the weather info
    const suggestions = await fetchSearchSuggestions(input.value);
    if (!suggestions.length) {
      alertBox.showDialog();
      return;
    }
    setWeather(input.value);
    input.blur();
  });
}

// Settings methods
function getTemperature(
  celsius,
  fahrenheit,
  unitsSettings,
  displayUnits = true,
) {
  let value;
  let units;

  if (unitsSettings === "c") {
    value = celsius;
    units = "C";
  } else {
    value = fahrenheit;
    units = "F";
  }

  return `${Math.trunc(value)}°${displayUnits ? units : ""}`;
}

// Return correct magnitude measurement based on user settings
// Example: if unitsSettings === "c", then show precipitation: mm, wind speed: km/h, etc...
// but if unitsSettings === "f", then show precipitation: in, wind speed: mph, ...
function getMagnitude(
  cMagnitude = { value: "", units: "" },
  fMagnitude = { value: "", units: "" },
  unitsSettings = "",
) {
  const selectedMagnitude = unitsSettings === "c" ? cMagnitude : fMagnitude;

  return `${selectedMagnitude.value} ${selectedMagnitude.units}`;
}

function getTime(timeValue, timeSettings) {
  let convertedTime;

  if (timeSettings === "12h") {
    convertedTime = time.convertTo12Hour(timeValue);
  } else if (timeSettings === "24h") {
    convertedTime = time.convertTo24Hour(timeValue);
  }

  return convertedTime;
}

// DOM Elements

function createCurrentWeather(
  location,
  current,
  firstForecastDay,
  unitsSettings,
) {
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
  temperatureValue.textContent = getTemperature(
    current.temp_c,
    current.temp_f,
    unitsSettings,
  );
  condition.className = "condition";
  condition.textContent = current.condition.text;

  currentTempContainer.appendChild(temperatureValue);
  currentTempContainer.appendChild(condition);

  // High low temperatures
  otherTempsContainer.className = "other-temps";
  highLowTemps.className = "high-low-temp";
  highTemp.className = "high-value";
  highTemp.textContent = getTemperature(
    firstForecastDay.day.maxtemp_c,
    firstForecastDay.day.maxtemp_f,
    unitsSettings,
  );
  tempDivider.className = "temp-divider";
  tempDivider.textContent = " | ";
  lowTemp.className = "low-value";
  lowTemp.textContent = getTemperature(
    firstForecastDay.day.mintemp_c,
    firstForecastDay.day.mintemp_f,
    unitsSettings,
  );
  feelsLikeTemp.className = "feelslike-temp small-text";
  feelsLikeTemp.textContent = `Feels like ${getTemperature(current.feelslike_c, current.feelslike_f, unitsSettings)}`;

  highLowTemps.appendChild(highTemp);
  highLowTemps.appendChild(tempDivider);
  highLowTemps.appendChild(lowTemp);
  otherTempsContainer.appendChild(highLowTemps);
  otherTempsContainer.appendChild(feelsLikeTemp);

  // Condition icon
  conditionIcon.className = "condition-icon";
  getConditionIcon(current.condition.code, current.is_day).then((icon) => {
    conditionIcon.innerHTML = icon;
  });

  container.appendChild(locationContainer);
  container.appendChild(currentTempContainer);
  container.appendChild(otherTempsContainer);
  container.appendChild(conditionIcon);

  return container;
}

function createHourElement(hour, timeValue, settings) {
  const hourContainer = document.createElement("div");
  const timeElement = document.createElement("span");
  const conditionIcon = document.createElement("span");
  const temperature = document.createElement("span");
  const precipitationContainer = document.createElement("div");
  const precipitationIcon = document.createElement("span");
  const precipitationValue = document.createElement("span");

  hourContainer.className = "hour-container";
  timeElement.className = "time very-small-text";
  timeElement.textContent = getTime(timeValue, settings.timeFormat);

  conditionIcon.className = "condition-icon";
  getConditionIcon(hour.condition.code, hour.is_day).then((icon) => {
    conditionIcon.innerHTML = icon;
  });

  temperature.className = "temperature small-text";
  temperature.textContent = getTemperature(
    hour.temp_c,
    hour.temp_f,
    settings.units,
    false,
  );

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

function createHourForecast(
  current,
  todayHourForecast,
  tomorrowHourForecast,
  settings,
) {
  const currentTime = current.last_updated.split(" ")[1];
  const container = document.createElement("section");
  let hourElements = 24;

  container.id = "hour-forecast";

  // Display forecast based in current time
  todayHourForecast.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    if (timeValue >= currentTime) {
      const hourContainer = createHourElement(hour, timeValue, settings);
      container.appendChild(hourContainer);

      hourElements--;
    }
  });

  // If current day display less than 24 hour elements, add forecast of tomorrow
  tomorrowHourForecast.forEach((hour) => {
    const timeValue = hour.time.split(" ")[1];

    if (hourElements > 0) {
      const hourContainer = createHourElement(hour, timeValue, settings);
      container.appendChild(hourContainer);

      hourElements--;
    }
  });

  return container;
}

function convertDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

function createDayForecast(dayForecast, unitsSettings) {
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
    dayElement.textContent = !index ? "Today" : convertDate(day.date);

    temperatures.className = "temperatures small-text";
    temperatures.textContent = `${getTemperature(day.day.maxtemp_c, day.day.maxtemp_f, unitsSettings, false)} | ${getTemperature(day.day.mintemp_c, day.day.mintemp_f, unitsSettings, false)}`;

    conditionContainer.className = "condition";
    conditionIcon.className = "icon";
    getConditionIcon(day.day.condition.code).then((icon) => {
      conditionIcon.innerHTML = icon;
    });
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
    humidityOverlaySvg,
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
  magnitude,
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
  valueElement.textContent = magnitude;

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

function createMoreWeatherInfo(current, unitsSettings) {
  const container = document.createElement("section");
  const leftSide = document.createElement("div");
  const precipitation = createInformation(
    precipitationSvg,
    "precipitation",
    "Precipitation",
    getMagnitude(
      { value: current.precip_mm, units: "mm" },
      { value: current.precip_in, units: "in" },
      unitsSettings,
    ),
  );
  const wind = createInformation(
    windSvg,
    "wind",
    "Wind",
    getMagnitude(
      { value: current.wind_kph, units: "km/h" },
      { value: current.wind_mph, units: "mph" },
      unitsSettings,
    ),
    { class: "direction", icon: windDirectionSvg, value: current.wind_degree },
  );
  const rightSide = document.createElement("div");
  const visibility = createInformation(
    visibilitySvg,
    "visibility",
    "Visibility",
    getMagnitude(
      { value: current.vis_km, units: "km" },
      { value: current.vis_miles, units: "mi" },
      unitsSettings,
    ),
  );
  const pressure = createInformation(
    pressureSvg,
    "pressure",
    "Pressure",
    getMagnitude(
      { value: current.pressure_mb, units: "mb" },
      { value: current.pressure_in, units: "in" },
      unitsSettings,
    ),
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

async function createSunAndMoonInfo(astro, lastTimeUpdated, timeSettings) {
  const sunIcon = await getSunPositionIcon(
    astro.sunrise,
    astro.sunset,
    lastTimeUpdated.split(" ")[1],
  );
  const moonIcon = await getMoonPhaseIcon(astro.moon_phase);

  const sun = createAstroInfo("sun-position", sunIcon, [
    { label: "Sunrise", value: getTime(astro.sunrise, timeSettings) },
    { label: "Sunset", value: getTime(astro.sunset, timeSettings) },
  ]);

  const moon = createAstroInfo("moon-phase", moonIcon, [
    { label: "Moon phase", value: astro.moon_phase },
  ]);

  return setDoubleSection(sun, moon);
}

function renderLoadingScreen() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const container = document.createElement("section");
  const icon = document.createElement("span");
  const label = document.createElement("p");

  container.id = "loading-screen";
  icon.className = "icon";
  icon.innerHTML = loadingSvg;
  label.className = "label";
  label.textContent = "Loading...";

  container.appendChild(icon);
  container.appendChild(label);

  main.appendChild(container);
}

async function renderForecast(location) {
  try {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.id = "forecast";

    renderLoadingScreen();

    const weather = await fetchWeather(location);
    console.log(weather);

    const settings = readSettings();

    container.appendChild(
      createCurrentWeather(
        weather.location,
        weather.current,
        weather.forecast.forecastday[0],
        settings.units,
      ),
    );
    container.appendChild(
      createHourForecast(
        weather.current,
        weather.forecast.forecastday[0].hour,
        weather.forecast.forecastday[1].hour,
        settings,
      ),
    );
    container.appendChild(
      createDayForecast(weather.forecast.forecastday, settings.units),
    );
    container.appendChild(createHumidityUv(weather.current));
    container.appendChild(
      createMoreWeatherInfo(weather.current, settings.units),
    );
    container.appendChild(
      await createSunAndMoonInfo(
        weather.forecast.forecastday[0].astro,
        weather.current.last_updated,
        settings.timeFormat,
      ),
    );

    // Reset main and add forecast information
    main.innerHTML = "";
    main.appendChild(container);
  } catch (error) {
    alert("An error has ocurred");
    console.error(error);
  }
}

function setWeather(location = lastLocation) {
  // Save last location on every invocation
  lastLocation = location;

  let forecastRefresh;
  // Interval from hours to miliseconds
  const autorefresh = parseInt(readSettings().autorefresh, 10) * 3600000;

  // Reset interval each time function is invoked
  clearInterval(forecastRefresh);

  renderForecast(location);
  setInterval(renderForecast, autorefresh, location);
}

export { setWeather, addSearchEvent, renderLoadingScreen };
