import * as time from "./time";

function getSunPositionIndex(sunrise, sunset, currentTime) {
  // Parse all time values to decimal number
  sunrise = time.parseTimeToNumber(sunrise);
  sunset = time.parseTimeToNumber(sunset);
  currentTime = time.parseTimeToNumber(currentTime);

  const percentage = (currentTime - sunrise) / (sunset - sunrise);

  if (percentage < 0.4) return 1; // Sunrise
  if (percentage >= 0.4 && percentage <= 0.6) return 2; // Noon
  if (percentage > 0.6) return 3; // Sunset
  return 0; // Night
}

async function getSunPositionIcon(sunrise, sunset, currentTime) {
  const path = "./img/sun-positions/";
  const index = getSunPositionIndex(sunrise, sunset, currentTime);

  const currentSunIcon = await import(`${path}sun-${index}.svg`);

  return currentSunIcon.default;
}

export default getSunPositionIcon;
