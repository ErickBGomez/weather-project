import * as time from "./time";

function getSunPositionIndex(sunrise, sunset, currentTime) {
  // Parse all time values to decimal number
  sunrise = time.parseTimeToNumber(sunrise);
  sunset = time.parseTimeToNumber(sunset);
  currentTime = time.parseTimeToNumber(currentTime);

  const percentage = (currentTime - sunrise) / (sunset - sunrise);

  console.log(sunrise);
  console.log(sunset);
  console.log(currentTime);
  console.log(percentage);

  if (percentage < 0 || percentage > 1) return 0; // Night
  if (percentage < 0.4) return 1; // Sunrise
  if (percentage >= 0.4 && percentage <= 0.6) return 2; // Noon
  return 3; // Sunset
}

async function getSunPositionIcon(sunrise, sunset, currentTime) {
  const path = "./img/sun-positions/";
  const index = getSunPositionIndex(sunrise, sunset, currentTime);

  const currentSunIcon = await import(`${path}sun-${index}.svg`);

  return currentSunIcon.default;
}

export default getSunPositionIcon;
