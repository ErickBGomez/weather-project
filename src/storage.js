function setLastLocation(location) {
  localStorage.setItem("lastLocation", location);
}

function getLastLocation() {
  return localStorage.getItem("lastLocation");
}

function checkLastLocation() {
  return Boolean(getLastLocation());
}

export { setLastLocation, getLastLocation, checkLastLocation };
