import * as time from "./time";

function getSunPositionPercentage(sunrise, sunset, currentTime) {
  // Parse all time values to decimal number
  sunrise = time.parseTimeToNumber(sunrise);
  sunset = time.parseTimeToNumber(sunset);
  currentTime = time.parseTimeToNumber(currentTime);

  // Return percentage of current position of the sun between sunrise and sunset
  return (currentTime - sunrise) / (sunset - sunrise);
}

function sunPositionIcon(sunrise, sunset, currentTime) {
  const percentage = getSunPositionPercentage(sunrise, sunset, currentTime);

  // ...
}

export { sunPositionIcon as sunPositionIndex };
