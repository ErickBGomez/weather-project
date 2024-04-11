const timePattern = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;

// From 24 hours to 12 hours
function convertTo12Hour(time) {
  // Avoid if time is already 24 hours format
  if (timePattern.test(time)) return time;

  // eslint-disable-next-line prefer-const
  let [hours, minutes] = time.split(":");
  const modifier = hours < "12" ? "AM" : "PM";

  if (hours === "00") hours = "12";
  else if (hours > "12") hours = +hours - 12;

  if (hours < 10) hours = `0${+hours}`; // Add extra 0 from 1:00 to 9:00

  return `${hours}:${minutes} ${modifier}`;
}

// From 12 hours to 24 hours
function convertTo24Hour(time) {
  // Avoid if time is already 12 hours format
  if (!timePattern.test(time)) return time;

  const [timeValue, modifier] = time.split(" ");
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = timeValue.split(":");

  if (modifier === "AM" && hours === "12") {
    hours = 0;
  } else if (modifier === "PM") {
    if (hours !== "12") hours = +hours + 12;
  }

  return `${hours}:${minutes}`;
}

function parseTimeToNumber(time) {
  const [hours, minutes] = time.split(":");
  return parseInt(hours, 10) + parseInt(minutes, 10) / 60;
}

export { convertTo12Hour, convertTo24Hour, parseTimeToNumber };
