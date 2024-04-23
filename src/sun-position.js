import sunPositions from "./json/sun-positions.json";
import * as time from "./time";

function getSunPositionIndex(sunrise, sunset, currentTime) {
  // Parse all time values to decimal number
  sunrise = time.parseTimeToNumber(sunrise);
  sunset = time.parseTimeToNumber(sunset);
  currentTime = time.parseTimeToNumber(currentTime);

  const percentage = (currentTime - sunrise) / (sunset - sunrise);

  if (percentage < 0 || percentage > 1) return 0; // Night
  if (percentage < 0.2) return 1; // Sunrise
  if (percentage >= 0.2 && percentage <= 0.8) return 2; // Noon
  return 3; // Sunset
}
function getSunPositionIcon(sunrise, sunset, currentTime) {
  const currentIndex = getSunPositionIndex(sunrise, sunset, currentTime);

  // eslint-disable-next-line arrow-body-style
  const currentPosition = sunPositions.find((position, index) => {
    return index === currentIndex;
  });

  if (!currentPosition) return "";

  return currentPosition.icon;
}

export default getSunPositionIcon;
