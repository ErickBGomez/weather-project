/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  /* Typography */
  font-size: 24px;
  font-family: "Outfit", sans-serif;

  /* Colors */
  --Black: #292a2e;
  --White: #f4f4f4;
  --Primary: #3a94e8;
  --PrimaryHover: #75b0e7;
  --PrimaryActive: #267ccc;
  --SmallTextBlack: #3e4755;
  --SmallTextWhite: #c0c8d1;
  --GrayText: #97a1ae;
  --Divider: #d0d7e0;
  --Rain: #3981c5;
  --Snow: #d6eff7;
  --RainContrast: #68b1f5;
  --SnowContrast: #a2c8d6;
  --UvIndex: #9967da;
  --Footer: #232629;
  --Background: #283454;
  --SuggestionHover: #d4e5f3;
  --DayBackground: linear-gradient(to right, #95bdda 0%, #2a80be 100%);
  --NightBackground: linear-gradient(to right, #1d2130 0%, #121936 100%);
}

body {
  color: var(--Black);
  background-color: var(--Background);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

p,
h1,
h2,
h3 {
  margin: 0;
}

input {
  display: block;
  font-size: 0.8rem;
  font-family: inherit;
  padding: 10px 32px 10px 18px;
  color: var(--SmallTextBlack);
  border: 1px solid var(--SmallTextBlack);
  border-radius: 8px 0 0 8px;
  border-right: none;
  width: 100%;
  background-color: var(--White);
}

input::placeholder {
  color: var(--GrayText);
  font-weight: 300;
}

input:focus,
button:focus,
select:focus,
a:focus {
  border-color: var(--White);
  outline: 1.5px solid var(--Primary);
  box-shadow: 0 0 10px 0 var(--Primary);
}

button:focus,
a:focus {
  outline-offset: 2px;
  border-width: 5px;
  box-shadow: 0 0 10px 1px var(--Primary);
}

a:focus {
  border-radius: 4px;
}

select {
  font-family: inherit;
  font-size: 0.7rem;
  border-radius: 8px;
  background-color: var(--White);
  color: var(--Black);
  padding: 6px 8px;
  max-width: 110px;
  width: 100%;
}

button {
  font-family: inherit;
  font-size: 0.7rem;
  padding: 0;
  display: block;
  border: none;
  cursor: pointer;
  background: none;
  border-radius: 8px;
  font-weight: 600;
  user-select: none;
}

button.primary {
  background-color: var(--Primary);
  color: var(--White);
  transition: background-color 200ms;
}

button.primary:hover {
  background-color: var(--PrimaryHover);
}

button.primary:active {
  background-color: var(--PrimaryActive);
}

button.secondary {
  border: 2px solid var(--Primary);
  color: var(--Primary);
  transition:
    border-color 200ms,
    color 200ms;
}

button.secondary:hover {
  border-color: var(--PrimaryHover);
  color: var(--PrimaryHover);
}

button.secondary:active {
  border-color: var(--PrimaryActive);
  color: var(--PrimaryActive);
}

svg {
  display: block;
}

.small-text {
  font-size: 0.8rem;
  font-weight: 300;
}

.very-small-text {
  font-size: 0.583rem;
  font-weight: 300;
}

/* Header */

header {
  display: grid;
  grid-template-columns: 1fr minmax(0px, 325px) 1fr;
  justify-content: space-between;
  align-items: center;
  background-color: var(--White);
  padding: 16px clamp(16px, 4.3vw, 32px);
  column-gap: 24px;
}

#app-title {
  display: flex;
  gap: 12px;
  align-items: center;
}

#app-title .label {
  font-size: 1rem;
  font-weight: 600;
}

#app-title .icon {
  padding: 0 6px;
}

#app-title .icon svg {
  max-width: 40px;
  min-height: 40px;
}

header form {
  display: flex;
  align-items: center;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.input-container {
  position: relative;
  width: 100%;
}

.clear-input {
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 2px;
  right: 9px;
  top: 11px;
  cursor: pointer;
}

input[type="search"]:placeholder-shown + .clear-input {
  visibility: hidden;
}

input[type="search"]:not(:placeholder-shown) + .clear-input {
  visibility: show;
}

.clear-input > svg {
  fill: var(--GrayText);
}

.clear-input:hover > svg {
  fill: var(--Primary);
}

.search-suggestions {
  position: absolute;
  z-index: 1;
  top: 50px;
  background-color: #fff;
  width: 100%;
  border-radius: 16px;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.363));
}

.suggestion {
  padding: 10px 12px;
  cursor: pointer;
}

.suggestion:first-child {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.suggestion:last-child {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.suggestion:hover {
  background-color: var(--SuggestionHover);
}

.suggestion:not(:last-child) {
  border-bottom: 1px solid var(--Divider);
}

.suggestion .location {
  font-weight: 400;
}

.suggestion .country {
  font-weight: 400;
}

.suggestion.empty {
  color: var(--GrayText);
}

#search-location-button {
  padding: 11px;
  border-radius: 0 8px 8px 0;
}

#search-location-button > svg {
  width: 24px;
  height: 24px;
  fill: var(--White);
}

.header-buttons {
  justify-self: end;
}

.settings-button {
  background: none;
  padding: 6px;
  border-radius: 8px;
  transition: background-color 200ms;
}

.settings-button:hover {
  background-color: #00000017;
}

.settings-button > svg {
  width: 34px;
  height: 34px;
  fill: black;
}

/* Main body and general forecast */
main {
  flex: 1;
}

#forecast {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 0;
}

#forecast > * {
  margin: 0 auto;
  max-width: 750px;
  width: 100%;
}

#forecast section {
  border-radius: 16px;
}

#forecast section:not(#current-weather) {
  padding: 24px;
  background-color: white;
}

/* 1. Current weather */
#current-weather {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: minmax(min-content, 320px) min-content;
  align-items: center;
  justify-content: space-between;
  row-gap: 32px;
  column-gap: 50px;
  padding: 45px clamp(25px, 12vw, 90px);
}

#current-weather.day {
  background: var(--DayBackground);
  color: var(--Black);
}

#current-weather.night {
  background: var(--NightBackground);
  color: var(--White);
}

.current-temp .value {
  font-size: 2.917rem;
}

#current-weather .condition {
  overflow-wrap: break-word;
}

.day .location .country,
.day .other-temps .temp-divider,
.day .other-temps .low-value,
.day .other-temps .feelslike-temp {
  color: var(--SmallTextBlack);
}

.night .location .country,
.night .other-temps .temp-divider,
.night .other-temps .low-value,
.night .other-temps .feelslike-temp {
  color: var(--SmallTextWhite);
}

#current-weather .condition-icon {
  grid-column: 2 / 3;
  grid-row: 1 / -1;
}

#current-weather .condition-icon svg {
  max-width: clamp(90px, 33.3vw, 250px);
  min-height: clamp(90px, 33.3vw, 250px);
}

#current-weather.day .condition-icon > svg {
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.17));
}

#current-weather.night .condition-icon > svg {
  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.41));
}

/* 2. Hour forecast */
#hour-forecast {
  display: flex;
  overflow-x: scroll;
}

.hour-container {
  display: flex;
  gap: 12px;
  padding: 8px 18px;
  flex-direction: column;
  align-items: center;
}

.hour-container:not(:last-child) {
  border-right: 1px solid var(--Divider);
}

.hour-container:first-child {
  padding-left: 0;
}

.hour-container:last-child {
  padding-right: 0;
}

#hour-forecast .time {
  color: var(--SmallTextBlack);
  text-wrap: nowrap;
}

#hour-forecast .condition-icon > svg {
  max-width: 60px;
  min-height: 60px;
}

#hour-forecast .precipitation {
  display: flex;
  gap: 4px;
}

#hour-forecast .precipitation .value {
  color: var(--GrayText);
}

#hour-forecast .precipitation .icon > svg {
  fill: var(--GrayText);
  max-width: 16px;
  min-height: 16px;
}

/* 3. Day forecast */

#day-forecast {
  display: grid;
  grid-template-columns: 1fr repeat(3, max-content);
  align-items: center;
  column-gap: 24px;
  row-gap: 20px;
}

#day-forecast .condition,
#day-forecast .precipitation {
  display: flex;
  gap: 8px;
  align-items: center;
}

#day-forecast .condition {
  gap: 8px;
}

#day-forecast .precipitation {
  gap: 4px;
}

#day-forecast .condition .icon > svg {
  max-width: 35px;
  min-height: 35px;
}

#day-forecast .precipitation .icon > svg {
  fill: var(--Rain);
  max-width: 24px;
  min-height: 24px;
}

/* 4. Humidity and UV Index */
.double-section-container {
  display: flex;
  gap: 32px;
}

.double-section-container > section {
  width: 100%;
}

#humidity,
#uv {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

#humidity .value-container,
#uv .value-container {
  position: relative;
}

#humidity .value,
#uv .value {
  display: flex;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  font-size: 1.042rem;
  font-weight: 600;
}

#humidity .value {
  color: var(--Rain);
}

#uv .value {
  color: var(--UvIndex);
}

.arc-percentage {
  position: absolute;
  display: block;
  max-width: 120px;
  min-width: 120px;
  transform: rotate(180deg);
}

#humidity .arc-path {
  stroke: var(--Rain);
}

#uv .arc-path {
  stroke: var(--UvIndex);
}

#humidity .title-container,
#uv .title-container {
  display: flex;
  gap: 8px;
  align-items: center;
}

#humidity .icon > svg,
#uv .icon > svg {
  fill: var(--Black);
  max-width: 24px;
  min-height: 24px;
}

/* 5. More weather fnfo */

#more-weather-info {
  display: flex;
}

.left-side,
.right-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left-side {
  border-right: 1px solid var(--Divider);
  padding-right: 32px;
  margin-right: 32px;
}

.left-side > div,
.right-side > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.left-side .title,
.right-side .title {
  display: flex;
  gap: 8px;
  align-items: center;
}

#more-weather-info .icon > svg {
  max-width: 24px;
  min-width: 24px;
  fill: var(--Black);
}

#more-weather-info .direction > svg {
  max-width: 16px;
  min-width: 16px;
  fill: var(--SmallTextBlack);
}

.value-container {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* 6. Sun position and moon phase */

.astro-value {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#sun-position {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto min-content;
  justify-items: center;
  row-gap: 12px;
}

#sun-position .icon {
  grid-column: 1 / -1;
}

#sun-position .icon > svg,
#moon-phase .icon > svg {
  max-width: 170px;
  min-height: 170px;
}

#moon-phase {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.circle-background {
  stroke: var(--Divider);
}

.arc-path {
  stroke: var(--Primary);
}

/* Loading screen */
#loading-screen {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--White);
}

#loading-screen .icon {
  animation: loadingAnimation 1.2s linear infinite;
}

#loading-screen .icon svg {
  max-width: 100px;
  min-height: 100px;
  stroke: var(--White);
}

/* Settings dialog */

dialog {
  background-color: var(--White);
  outline: none;
  border: none;
  border-radius: 16px;
  padding: 16px 24px;
  color: var(--Black);
  opacity: 0;
  transform: translateY(100px);
  transition:
    opacity 300ms,
    transform 300ms cubic-bezier(0, 0, 0.2, 1),
    overlay 300ms allow-discrete,
    display 300ms allow-discrete;
}

dialog[open] {
  opacity: 1;
  transform: translateY(0);
}

@starting-style {
  dialog[open] {
    opacity: 0;
    transform: translateY(100px);
  }
}

dialog::backdrop {
  background-color: #00000000;
  transition:
    display 300ms allow-discrete,
    overlay 300ms allow-discrete,
    background-color 300ms;
}

dialog[open]::backdrop {
  background-color: #00000085;
}

@starting-style {
  dialog[open]::backdrop {
    background-color: #00000000;
  }
}

#settings-dialog {
  width: 400px;
}

#settings-dialog .title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#settings-dialog h1.title {
  font-size: 1rem;
  font-weight: 700;
}

form#settings {
  margin: 30px 0;
}

#settings-dialog form#settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#settings .field-title {
  display: flex;
  gap: 12px;
}

.field-title .icon svg {
  max-width: 28px;
  min-height: 28px;
  fill: var(--Black);
}

#settings .settings-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#settings .settings-field .title {
  font-size: 0.8rem;
}

#settings-dialog .source-code {
  text-align: center;
  font-size: 0.8rem;
  padding-bottom: 12px;
}

#settings-dialog .source-code a {
  font-weight: 400;
}

dialog .buttons {
  margin-top: 12px;
  flex-direction: row-reverse;
  display: flex;
  gap: 8px;
}

dialog button {
  padding: 8px 16px;
}

/* Alert box */
#alert-box {
  width: 480px;
}

#alert-box .content {
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, min-content);
  gap: 10px 30px;
  align-items: center;
}

#alert-box .title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  grid-column: 1 / -1;
}

#alert-box .icon {
  margin-left: 16px;
  width: 56px;
  aspect-ratio: 1/1;
}

#alert-box .description {
  margin-right: 16px;
}

#alert-box button {
  padding: 8px 24px;
}

/* Footer */
footer {
  text-align: center;
  background-color: var(--Black);
  color: var(--White);
  font-weight: 300;
  font-size: 0.8rem;
  padding: 32px;
}

a {
  text-decoration: none;
  font-weight: 600;
  color: var(--Primary);
  transition: color 200ms;
}

a:hover {
  color: var(--PrimaryHover);
}

a:active {
  color: var(--PrimaryActive);
}

/* SVG fill colors */
#current-weather.day .condition-icon .raindrop {
  fill: var(--RainContrast) !important;
}

#hour-forecast .condition-icon .snowflake,
#day-forecast .condition .icon .snowflake {
  fill: var(--SnowContrast) !important;
}

/* Animations */

@keyframes loadingAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Media queries */
/* Change this media query when setting final app name */
@media only screen and (max-width: 850px) {
  #app-title .label {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  #current-weather {
    column-gap: 12px;
  }

  .double-section-container {
    flex-direction: column;
  }

  #more-weather-info {
    flex-direction: column;
    gap: 20px;
  }

  #more-weather-info .left-side {
    padding: 0;
    margin: 0;
    border: none;
  }
}

@media only screen and (max-width: 550px) {
  #day-forecast {
    column-gap: 10px;
  }

  #day-forecast .condition .value {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  header {
    grid-template-columns: repeat(3, auto);
  }

  #current-weather {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
  }

  #current-weather .condition-icon {
    grid-row: 1/2;
  }

  #current-weather .condition-icon svg {
    max-width: 80px;
    min-height: 80px;
  }

  #current-weather .current-temp .value {
    font-size: 1.8rem;
  }

  #current-weather .other-temps {
    grid-column: 2/-1;
    grid-row: 2/ -1;
  }

  #current-weather .location,
  #current-weather .current-temp {
    justify-self: start;
  }

  #current-weather .condition-icon,
  #current-weather .other-temps {
    justify-self: end;
  }

  #current-weather .current-temp,
  #current-weather .other-temps {
    align-self: end;
  }

  #current-weather .location,
  #current-weather .condition-icon {
    align-self: start;
  }
}
@media only screen and (max-width: 400px) {
  header {
    column-gap: 6px;
    padding: 16px 8px;
  }

  #settings-dialog form#settings {
    gap: 24px;
  }

  #settings-dialog .settings-field {
    flex-direction: column;
    gap: 6px;
  }

  #settings-dialog .field-title {
    align-self: start;
  }

  #settings-dialog select {
    align-self: stretch;
    max-width: 100%;
  }

  #settings-dialog .buttons {
    align-items: stretch;
  }

  #settings-dialog .buttons button {
    width: 100%;
  }

  #settings-dialog .buttons button,
  #settings-dialog select {
    padding: 12px 16px;
  }

  #alert-box .content {
    column-gap: 16px;
  }

  #alert-box .icon {
    margin: 0;
  }

  #alert-box .description {
    margin: 0;
  }

  #alert-box button {
    padding: 12px 32px;
  }
}

@media only screen and (max-width: 350px) {
  :root {
    font-size: 20px;
  }

  header {
    grid-template-columns: 1fr auto;
  }

  header #app-title {
    display: none;
  }

  #search-location-button {
    padding: 10px;
  }

  .clear-input {
    top: 9px;
  }

  #forecast section {
    overflow-x: scroll;
  }

  #forecast section:not(#current-weather) {
    padding: 24px 12px;
  }
}

@media only screen and (max-width: 200px) {
  #search-location {
    padding: 10px 9px;
    border: 1px solid var(--SmallTextBlack);
    border-radius: 8px;
  }

  .clear-input {
    display: none;
  }

  #search-location-button {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap\");\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n:root {\n  /* Typography */\n  font-size: 24px;\n  font-family: \"Outfit\", sans-serif;\n\n  /* Colors */\n  --Black: #292a2e;\n  --White: #f4f4f4;\n  --Primary: #3a94e8;\n  --PrimaryHover: #75b0e7;\n  --PrimaryActive: #267ccc;\n  --SmallTextBlack: #3e4755;\n  --SmallTextWhite: #c0c8d1;\n  --GrayText: #97a1ae;\n  --Divider: #d0d7e0;\n  --Rain: #3981c5;\n  --Snow: #d6eff7;\n  --RainContrast: #68b1f5;\n  --SnowContrast: #a2c8d6;\n  --UvIndex: #9967da;\n  --Footer: #232629;\n  --Background: #283454;\n  --SuggestionHover: #d4e5f3;\n  --DayBackground: linear-gradient(to right, #95bdda 0%, #2a80be 100%);\n  --NightBackground: linear-gradient(to right, #1d2130 0%, #121936 100%);\n}\n\nbody {\n  color: var(--Black);\n  background-color: var(--Background);\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0;\n}\n\np,\nh1,\nh2,\nh3 {\n  margin: 0;\n}\n\ninput {\n  display: block;\n  font-size: 0.8rem;\n  font-family: inherit;\n  padding: 10px 32px 10px 18px;\n  color: var(--SmallTextBlack);\n  border: 1px solid var(--SmallTextBlack);\n  border-radius: 8px 0 0 8px;\n  border-right: none;\n  width: 100%;\n  background-color: var(--White);\n}\n\ninput::placeholder {\n  color: var(--GrayText);\n  font-weight: 300;\n}\n\ninput:focus,\nbutton:focus,\nselect:focus,\na:focus {\n  border-color: var(--White);\n  outline: 1.5px solid var(--Primary);\n  box-shadow: 0 0 10px 0 var(--Primary);\n}\n\nbutton:focus,\na:focus {\n  outline-offset: 2px;\n  border-width: 5px;\n  box-shadow: 0 0 10px 1px var(--Primary);\n}\n\na:focus {\n  border-radius: 4px;\n}\n\nselect {\n  font-family: inherit;\n  font-size: 0.7rem;\n  border-radius: 8px;\n  background-color: var(--White);\n  color: var(--Black);\n  padding: 6px 8px;\n  max-width: 110px;\n  width: 100%;\n}\n\nbutton {\n  font-family: inherit;\n  font-size: 0.7rem;\n  padding: 0;\n  display: block;\n  border: none;\n  cursor: pointer;\n  background: none;\n  border-radius: 8px;\n  font-weight: 600;\n  user-select: none;\n}\n\nbutton.primary {\n  background-color: var(--Primary);\n  color: var(--White);\n  transition: background-color 200ms;\n}\n\nbutton.primary:hover {\n  background-color: var(--PrimaryHover);\n}\n\nbutton.primary:active {\n  background-color: var(--PrimaryActive);\n}\n\nbutton.secondary {\n  border: 2px solid var(--Primary);\n  color: var(--Primary);\n  transition:\n    border-color 200ms,\n    color 200ms;\n}\n\nbutton.secondary:hover {\n  border-color: var(--PrimaryHover);\n  color: var(--PrimaryHover);\n}\n\nbutton.secondary:active {\n  border-color: var(--PrimaryActive);\n  color: var(--PrimaryActive);\n}\n\nsvg {\n  display: block;\n}\n\n.small-text {\n  font-size: 0.8rem;\n  font-weight: 300;\n}\n\n.very-small-text {\n  font-size: 0.583rem;\n  font-weight: 300;\n}\n\n/* Header */\n\nheader {\n  display: grid;\n  grid-template-columns: 1fr minmax(0px, 325px) 1fr;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--White);\n  padding: 16px clamp(16px, 4.3vw, 32px);\n  column-gap: 24px;\n}\n\n#app-title {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n#app-title .label {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n#app-title .icon {\n  padding: 0 6px;\n}\n\n#app-title .icon svg {\n  max-width: 40px;\n  min-height: 40px;\n}\n\nheader form {\n  display: flex;\n  align-items: center;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n.input-container {\n  position: relative;\n  width: 100%;\n}\n\n.clear-input {\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  padding: 2px;\n  right: 9px;\n  top: 11px;\n  cursor: pointer;\n}\n\ninput[type=\"search\"]:placeholder-shown + .clear-input {\n  visibility: hidden;\n}\n\ninput[type=\"search\"]:not(:placeholder-shown) + .clear-input {\n  visibility: show;\n}\n\n.clear-input > svg {\n  fill: var(--GrayText);\n}\n\n.clear-input:hover > svg {\n  fill: var(--Primary);\n}\n\n.search-suggestions {\n  position: absolute;\n  z-index: 1;\n  top: 50px;\n  background-color: #fff;\n  width: 100%;\n  border-radius: 16px;\n  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.363));\n}\n\n.suggestion {\n  padding: 10px 12px;\n  cursor: pointer;\n}\n\n.suggestion:first-child {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n\n.suggestion:last-child {\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\n\n.suggestion:hover {\n  background-color: var(--SuggestionHover);\n}\n\n.suggestion:not(:last-child) {\n  border-bottom: 1px solid var(--Divider);\n}\n\n.suggestion .location {\n  font-weight: 400;\n}\n\n.suggestion .country {\n  font-weight: 400;\n}\n\n.suggestion.empty {\n  color: var(--GrayText);\n}\n\n#search-location-button {\n  padding: 11px;\n  border-radius: 0 8px 8px 0;\n}\n\n#search-location-button > svg {\n  width: 24px;\n  height: 24px;\n  fill: var(--White);\n}\n\n.header-buttons {\n  justify-self: end;\n}\n\n.settings-button {\n  background: none;\n  padding: 6px;\n  border-radius: 8px;\n  transition: background-color 200ms;\n}\n\n.settings-button:hover {\n  background-color: #00000017;\n}\n\n.settings-button > svg {\n  width: 34px;\n  height: 34px;\n  fill: black;\n}\n\n/* Main body and general forecast */\nmain {\n  flex: 1;\n}\n\n#forecast {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  padding: 80px 0;\n}\n\n#forecast > * {\n  margin: 0 auto;\n  max-width: 750px;\n  width: 100%;\n}\n\n#forecast section {\n  border-radius: 16px;\n}\n\n#forecast section:not(#current-weather) {\n  padding: 24px;\n  background-color: white;\n}\n\n/* 1. Current weather */\n#current-weather {\n  display: grid;\n  grid-template-rows: repeat(3, auto);\n  grid-template-columns: minmax(min-content, 320px) min-content;\n  align-items: center;\n  justify-content: space-between;\n  row-gap: 32px;\n  column-gap: 50px;\n  padding: 45px clamp(25px, 12vw, 90px);\n}\n\n#current-weather.day {\n  background: var(--DayBackground);\n  color: var(--Black);\n}\n\n#current-weather.night {\n  background: var(--NightBackground);\n  color: var(--White);\n}\n\n.current-temp .value {\n  font-size: 2.917rem;\n}\n\n#current-weather .condition {\n  overflow-wrap: break-word;\n}\n\n.day .location .country,\n.day .other-temps .temp-divider,\n.day .other-temps .low-value,\n.day .other-temps .feelslike-temp {\n  color: var(--SmallTextBlack);\n}\n\n.night .location .country,\n.night .other-temps .temp-divider,\n.night .other-temps .low-value,\n.night .other-temps .feelslike-temp {\n  color: var(--SmallTextWhite);\n}\n\n#current-weather .condition-icon {\n  grid-column: 2 / 3;\n  grid-row: 1 / -1;\n}\n\n#current-weather .condition-icon svg {\n  max-width: clamp(90px, 33.3vw, 250px);\n  min-height: clamp(90px, 33.3vw, 250px);\n}\n\n#current-weather.day .condition-icon > svg {\n  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.17));\n}\n\n#current-weather.night .condition-icon > svg {\n  filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.41));\n}\n\n/* 2. Hour forecast */\n#hour-forecast {\n  display: flex;\n  overflow-x: scroll;\n}\n\n.hour-container {\n  display: flex;\n  gap: 12px;\n  padding: 8px 18px;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hour-container:not(:last-child) {\n  border-right: 1px solid var(--Divider);\n}\n\n.hour-container:first-child {\n  padding-left: 0;\n}\n\n.hour-container:last-child {\n  padding-right: 0;\n}\n\n#hour-forecast .time {\n  color: var(--SmallTextBlack);\n  text-wrap: nowrap;\n}\n\n#hour-forecast .condition-icon > svg {\n  max-width: 60px;\n  min-height: 60px;\n}\n\n#hour-forecast .precipitation {\n  display: flex;\n  gap: 4px;\n}\n\n#hour-forecast .precipitation .value {\n  color: var(--GrayText);\n}\n\n#hour-forecast .precipitation .icon > svg {\n  fill: var(--GrayText);\n  max-width: 16px;\n  min-height: 16px;\n}\n\n/* 3. Day forecast */\n\n#day-forecast {\n  display: grid;\n  grid-template-columns: 1fr repeat(3, max-content);\n  align-items: center;\n  column-gap: 24px;\n  row-gap: 20px;\n}\n\n#day-forecast .condition,\n#day-forecast .precipitation {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n#day-forecast .condition {\n  gap: 8px;\n}\n\n#day-forecast .precipitation {\n  gap: 4px;\n}\n\n#day-forecast .condition .icon > svg {\n  max-width: 35px;\n  min-height: 35px;\n}\n\n#day-forecast .precipitation .icon > svg {\n  fill: var(--Rain);\n  max-width: 24px;\n  min-height: 24px;\n}\n\n/* 4. Humidity and UV Index */\n.double-section-container {\n  display: flex;\n  gap: 32px;\n}\n\n.double-section-container > section {\n  width: 100%;\n}\n\n#humidity,\n#uv {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n}\n\n#humidity .value-container,\n#uv .value-container {\n  position: relative;\n}\n\n#humidity .value,\n#uv .value {\n  display: flex;\n  width: 120px;\n  height: 120px;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.042rem;\n  font-weight: 600;\n}\n\n#humidity .value {\n  color: var(--Rain);\n}\n\n#uv .value {\n  color: var(--UvIndex);\n}\n\n.arc-percentage {\n  position: absolute;\n  display: block;\n  max-width: 120px;\n  min-width: 120px;\n  transform: rotate(180deg);\n}\n\n#humidity .arc-path {\n  stroke: var(--Rain);\n}\n\n#uv .arc-path {\n  stroke: var(--UvIndex);\n}\n\n#humidity .title-container,\n#uv .title-container {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n#humidity .icon > svg,\n#uv .icon > svg {\n  fill: var(--Black);\n  max-width: 24px;\n  min-height: 24px;\n}\n\n/* 5. More weather fnfo */\n\n#more-weather-info {\n  display: flex;\n}\n\n.left-side,\n.right-side {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.left-side {\n  border-right: 1px solid var(--Divider);\n  padding-right: 32px;\n  margin-right: 32px;\n}\n\n.left-side > div,\n.right-side > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.left-side .title,\n.right-side .title {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n#more-weather-info .icon > svg {\n  max-width: 24px;\n  min-width: 24px;\n  fill: var(--Black);\n}\n\n#more-weather-info .direction > svg {\n  max-width: 16px;\n  min-width: 16px;\n  fill: var(--SmallTextBlack);\n}\n\n.value-container {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n/* 6. Sun position and moon phase */\n\n.astro-value {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#sun-position {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: auto min-content;\n  justify-items: center;\n  row-gap: 12px;\n}\n\n#sun-position .icon {\n  grid-column: 1 / -1;\n}\n\n#sun-position .icon > svg,\n#moon-phase .icon > svg {\n  max-width: 170px;\n  min-height: 170px;\n}\n\n#moon-phase {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n}\n\n.circle-background {\n  stroke: var(--Divider);\n}\n\n.arc-path {\n  stroke: var(--Primary);\n}\n\n/* Loading screen */\n#loading-screen {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: var(--White);\n}\n\n#loading-screen .icon {\n  animation: loadingAnimation 1.2s linear infinite;\n}\n\n#loading-screen .icon svg {\n  max-width: 100px;\n  min-height: 100px;\n  stroke: var(--White);\n}\n\n/* Settings dialog */\n\ndialog {\n  background-color: var(--White);\n  outline: none;\n  border: none;\n  border-radius: 16px;\n  padding: 16px 24px;\n  color: var(--Black);\n  opacity: 0;\n  transform: translateY(100px);\n  transition:\n    opacity 300ms,\n    transform 300ms cubic-bezier(0, 0, 0.2, 1),\n    overlay 300ms allow-discrete,\n    display 300ms allow-discrete;\n}\n\ndialog[open] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n@starting-style {\n  dialog[open] {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n}\n\ndialog::backdrop {\n  background-color: #00000000;\n  transition:\n    display 300ms allow-discrete,\n    overlay 300ms allow-discrete,\n    background-color 300ms;\n}\n\ndialog[open]::backdrop {\n  background-color: #00000085;\n}\n\n@starting-style {\n  dialog[open]::backdrop {\n    background-color: #00000000;\n  }\n}\n\n#settings-dialog {\n  width: 400px;\n}\n\n#settings-dialog .title-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#settings-dialog h1.title {\n  font-size: 1rem;\n  font-weight: 700;\n}\n\nform#settings {\n  margin: 30px 0;\n}\n\n#settings-dialog form#settings {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#settings .field-title {\n  display: flex;\n  gap: 12px;\n}\n\n.field-title .icon svg {\n  max-width: 28px;\n  min-height: 28px;\n  fill: var(--Black);\n}\n\n#settings .settings-field {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#settings .settings-field .title {\n  font-size: 0.8rem;\n}\n\n#settings-dialog .source-code {\n  text-align: center;\n  font-size: 0.8rem;\n  padding-bottom: 12px;\n}\n\n#settings-dialog .source-code a {\n  font-weight: 400;\n}\n\ndialog .buttons {\n  margin-top: 12px;\n  flex-direction: row-reverse;\n  display: flex;\n  gap: 8px;\n}\n\ndialog button {\n  padding: 8px 16px;\n}\n\n/* Alert box */\n#alert-box {\n  width: 480px;\n}\n\n#alert-box .content {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  grid-template-rows: repeat(2, min-content);\n  gap: 10px 30px;\n  align-items: center;\n}\n\n#alert-box .title {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n  grid-column: 1 / -1;\n}\n\n#alert-box .icon {\n  margin-left: 16px;\n  width: 56px;\n  aspect-ratio: 1/1;\n}\n\n#alert-box .description {\n  margin-right: 16px;\n}\n\n#alert-box button {\n  padding: 8px 24px;\n}\n\n/* Footer */\nfooter {\n  text-align: center;\n  background-color: var(--Black);\n  color: var(--White);\n  font-weight: 300;\n  font-size: 0.8rem;\n  padding: 32px;\n}\n\na {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--Primary);\n  transition: color 200ms;\n}\n\na:hover {\n  color: var(--PrimaryHover);\n}\n\na:active {\n  color: var(--PrimaryActive);\n}\n\n/* SVG fill colors */\n#current-weather.day .condition-icon .raindrop {\n  fill: var(--RainContrast) !important;\n}\n\n#hour-forecast .condition-icon .snowflake,\n#day-forecast .condition .icon .snowflake {\n  fill: var(--SnowContrast) !important;\n}\n\n/* Animations */\n\n@keyframes loadingAnimation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Media queries */\n/* Change this media query when setting final app name */\n@media only screen and (max-width: 850px) {\n  #app-title .label {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  #current-weather {\n    column-gap: 12px;\n  }\n\n  .double-section-container {\n    flex-direction: column;\n  }\n\n  #more-weather-info {\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  #more-weather-info .left-side {\n    padding: 0;\n    margin: 0;\n    border: none;\n  }\n}\n\n@media only screen and (max-width: 550px) {\n  #day-forecast {\n    column-gap: 10px;\n  }\n\n  #day-forecast .condition .value {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  header {\n    grid-template-columns: repeat(3, auto);\n  }\n\n  #current-weather {\n    grid-template-rows: repeat(2, auto);\n    grid-template-columns: repeat(2, auto);\n  }\n\n  #current-weather .condition-icon {\n    grid-row: 1/2;\n  }\n\n  #current-weather .condition-icon svg {\n    max-width: 80px;\n    min-height: 80px;\n  }\n\n  #current-weather .current-temp .value {\n    font-size: 1.8rem;\n  }\n\n  #current-weather .other-temps {\n    grid-column: 2/-1;\n    grid-row: 2/ -1;\n  }\n\n  #current-weather .location,\n  #current-weather .current-temp {\n    justify-self: start;\n  }\n\n  #current-weather .condition-icon,\n  #current-weather .other-temps {\n    justify-self: end;\n  }\n\n  #current-weather .current-temp,\n  #current-weather .other-temps {\n    align-self: end;\n  }\n\n  #current-weather .location,\n  #current-weather .condition-icon {\n    align-self: start;\n  }\n}\n@media only screen and (max-width: 400px) {\n  header {\n    column-gap: 6px;\n    padding: 16px 8px;\n  }\n\n  #settings-dialog form#settings {\n    gap: 24px;\n  }\n\n  #settings-dialog .settings-field {\n    flex-direction: column;\n    gap: 6px;\n  }\n\n  #settings-dialog .field-title {\n    align-self: start;\n  }\n\n  #settings-dialog select {\n    align-self: stretch;\n    max-width: 100%;\n  }\n\n  #settings-dialog .buttons {\n    align-items: stretch;\n  }\n\n  #settings-dialog .buttons button {\n    width: 100%;\n  }\n\n  #settings-dialog .buttons button,\n  #settings-dialog select {\n    padding: 12px 16px;\n  }\n\n  #alert-box .content {\n    column-gap: 16px;\n  }\n\n  #alert-box .icon {\n    margin: 0;\n  }\n\n  #alert-box .description {\n    margin: 0;\n  }\n\n  #alert-box button {\n    padding: 12px 32px;\n  }\n}\n\n@media only screen and (max-width: 350px) {\n  :root {\n    font-size: 20px;\n  }\n\n  header {\n    grid-template-columns: 1fr auto;\n  }\n\n  header #app-title {\n    display: none;\n  }\n\n  #search-location-button {\n    padding: 10px;\n  }\n\n  .clear-input {\n    top: 9px;\n  }\n\n  #forecast section {\n    overflow-x: scroll;\n  }\n\n  #forecast section:not(#current-weather) {\n    padding: 24px 12px;\n  }\n}\n\n@media only screen and (max-width: 200px) {\n  #search-location {\n    padding: 10px 9px;\n    border: 1px solid var(--SmallTextBlack);\n    border-radius: 8px;\n  }\n\n  .clear-input {\n    display: none;\n  }\n\n  #search-location-button {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/favicon.svg":
/*!*****************************!*\
  !*** ./src/img/favicon.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 33.866664 33.866664\" version=\"1.1\" id=\"svg1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><defs id=\"defs1\"><linearGradient id=\"linearGradient1\"><stop style=\"stop-color:#78b6d7;stop-opacity:1;\" offset=\"0.0937312\" id=\"stop1\"></stop><stop style=\"stop-color:#2a90d4;stop-opacity:1;\" offset=\"0.84257984\" id=\"stop2\"></stop></linearGradient><linearGradient xlink:href=\"#linearGradient1\" id=\"linearGradient2\" x1=\"1.0583333\" y1=\"1.0583333\" x2=\"32.808331\" y2=\"32.808331\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(1.0666668,0,0,1.0666668,-1.1288889,-1.1288889)\"></linearGradient></defs><g id=\"layer1\"><rect style=\"fill:url(#linearGradient2);stroke:none;stroke-width:4.51555;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke fill markers\" id=\"rect1\" width=\"33.866665\" height=\"33.866665\" x=\"4.6629367e-15\" y=\"4.6629367e-15\" ry=\"6.7733331\"></rect><g id=\"g62\" transform=\"matrix(0.9,0,0,0.9,1.2868792,0.26234152)\"><path id=\"path9-8\" style=\"fill:#e3c063;fill-opacity:1;stroke-width:1.91246\" d=\"m 12.381675,8.1535075 a 0.596604,0.596604 0 0 0 -0.596863,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.596863,0.596346 0.596604,0.596604 0 0 0 0.595829,-0.596346 V 8.7498535 a 0.596604,0.596604 0 0 0 -0.595829,-0.596346 z m 6.069913,2.4794355 a 0.596604,0.596604 0 0 0 -0.421679,0.174666 l -1.316716,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.843359,0 l 1.316716,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.1258746,0.01499 a 0.596604,0.596604 0 0 0 -0.4221964,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.3172322,1.316715 a 0.596604,0.596604 0 0 0 0.8433594,0 0.596604,0.596604 0 0 0 0,-0.843359 L 6.7473931,10.822595 A 0.596604,0.596604 0 0 0 6.3257134,10.647929 Z m 6.0554446,2.06189 a 4.5898942,4.5898942 0 0 0 -4.589901,4.5899 4.5898942,4.5898942 0 0 0 1.2459188,3.125908 c 0.9475055,-0.835297 2.1856822,-1.34768 3.5408692,-1.347722 h 0.0021 c 0.0033,9e-6 0.0065,-1.5e-5 0.0098,0 0.674128,-1.83344 1.980816,-3.322329 3.659724,-4.230232 a 4.5898942,4.5898942 0 0 0 -3.868497,-2.137854 z m -8.5472822,3.993554 a 0.596604,0.596604 0 0 0 -0.5968627,0.596346 0.596604,0.596604 0 0 0 0.5968627,0.596863 h 1.8619019 a 0.596604,0.596604 0 0 0 0.596346,-0.596863 0.596604,0.596604 0 0 0 -0.596346,-0.596346 z M 7.635711,21.44882 a 0.596604,0.596604 0 0 0 -0.4221965,0.174666 l -1.3161987,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.8433594,0 L 7.3726779,23.151558 C 7.5115289,22.59784 7.735513,22.07797 8.0320692,21.606433 A 0.596604,0.596604 0 0 0 7.635711,21.44882 Z\"></path><path id=\"path2-29\" style=\"fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\" d=\"m 20.036138,14.706849 c -3.31169,0 -6.09321,2.269543 -6.874315,5.338064 -0.193636,-0.02622 -0.388791,-0.03965 -0.584194,-0.04018 -2.454489,7.5e-5 -4.4441557,1.989948 -4.4439779,4.44444 8.11e-5,2.454304 1.9896719,4.443896 4.4439779,4.443968 0.121881,-4.56e-4 0,0 0.365121,0 v 0 h 7.093388 7.093387 v -0.01728 c 0.08136,0.0082 0.162936,0.01392 0.244632,0.01728 2.296923,-1.28e-4 4.158845,-1.862256 4.158728,-4.159176 -1.26e-4,-2.296756 -1.861977,-4.158612 -4.158728,-4.158741 -0.116227,0.0032 -0.232254,0.01192 -0.347778,0.02512 C 26.456174,17.254428 23.544545,14.7068 20.036138,14.7068 Z\"></path></g></g></svg>"

/***/ }),

/***/ "./src/img/ui/arc-percentage.svg":
/*!***************************************!*\
  !*** ./src/img/ui/arc-percentage.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 100 100\"><circle class=\"circle-background\" fill=\"none\" stroke-width=\"12\" cx=\"50\" cy=\"50\" r=\"44\"></circle><path class=\"arc-path\" fill=\"none\" stroke-width=\"12\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/autorefresh.svg":
/*!************************************!*\
  !*** ./src/img/ui/autorefresh.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/close.svg":
/*!******************************!*\
  !*** ./src/img/ui/close.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/humidity-overlay.svg":
/*!*****************************************!*\
  !*** ./src/img/ui/humidity-overlay.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Zm0-80q100 0 170-68.5T720-416q0-47-18-89.5T650-580L480-748 310-580q-34 32-52 74.5T240-416q0 99 70 167.5T480-180Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/loading.svg":
/*!********************************!*\
  !*** ./src/img/ui/loading.svg ***!
  \********************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 33.866664 33.866664\" version=\"1.1\" id=\"svg1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><defs id=\"defs1\"></defs><g id=\"layer1\"><path style=\"fill:none;fill-opacity:1;stroke:#f4f4f4;stroke-width:3.82402;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers\" id=\"path1\" d=\"M 29.701216,18.817391 A 12.906082,12.906082 0 0 1 16.292203,29.823404 12.906082,12.906082 0 0 1 4.0416394,17.540991 12.906082,12.906082 0 0 1 15.082431,4.1605996\"></path></g></svg>"

/***/ }),

/***/ "./src/img/ui/precipitation.svg":
/*!**************************************!*\
  !*** ./src/img/ui/precipitation.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M198-484q-15 8-30.5 2.5T144-502L44-702q-8-15-2.5-30.5T62-756q15-8 30.5-2.5T116-738l100 200q8 15 2.5 30.5T198-484Zm140 280q-15 8-30.5 2.5T284-222l-80-160q-8-15-2.5-30.5T222-436q15-8 30.5-2.5T276-418l80 160q8 15 2.5 30.5T338-204Zm82-200q-15 8-30.5 2.5T366-422L226-702q-8-15-2.5-30.5T244-756q15-8 30.5-2.5T298-738l140 280q8 15 2.5 30.5T420-404Zm86-200q-15 8-30.5 2.5T452-622l-39-80q-8-15-2.5-30.5T431-756q15-8 30-2.5t23 20.5l40 80q8 15 2.5 30.5T506-604Zm24 399q-15 8-30.5 3T476-222l-40-80q-8-15-2.5-30.5T454-356q15-8 30.5-2.5T508-338l40 80q8 15 2.5 30T530-205Zm186 0q-15 8-30.5 3T662-222L522-502q-8-15-2.5-30.5T540-556q15-8 30.5-2.5T594-538l140 280q8 15 2.5 30T716-205Zm62-239q-15 8-30.5 2.5T724-462L604-702q-8-15-2.5-30.5T622-756q15-8 30.5-2.5T676-738l120 240q8 15 2.5 30.5T778-444Zm120 240q-15 8-30.5 2.5T844-222l-60-120q-8-15-2.5-30.5T802-396q15-8 30.5-2.5T856-378l60 120q8 15 2.5 30.5T898-204Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/pressure.svg":
/*!*********************************!*\
  !*** ./src/img/ui/pressure.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M200-400q-17 0-28.5-11.5T160-440q0-17 11.5-28.5T200-480h560q17 0 28.5 11.5T800-440q0 17-11.5 28.5T760-400H200Zm0-120q-17 0-28.5-11.5T160-560q0-17 11.5-28.5T200-600h560q17 0 28.5 11.5T800-560q0 17-11.5 28.5T760-520H200ZM480-80q-17 0-28.5-11.5T440-120v-88l-36 36q-11 11-28 11t-28-11q-11-11-11-28t11-28l104-104q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l104 104q11 11 11.5 27.5T612-172q-11 11-27.5 11.5T556-171l-36-35v86q0 17-11.5 28.5T480-80Zm0-577q-8 0-15-2.5t-13-8.5L348-772q-11-11-11-28t11-28q11-11 28-11t28 11l36 36v-88q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v88l36-36q11-11 28-11t28 11q11 11 11 28t-11 28L508-668q-6 6-13 8.5t-15 2.5Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/rain.svg":
/*!*****************************!*\
  !*** ./src/img/ui/rain.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/search-error.svg":
/*!*************************************!*\
  !*** ./src/img/ui/search-error.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 33.866664 33.866664\" version=\"1.1\" id=\"svg1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\"><defs id=\"defs1\"></defs><g id=\"layer1\"><path id=\"path1\" style=\"fill:#617e98;fill-opacity:1;stroke-width:0.0403526\" d=\"m 13.690637,2.6856245 c -3.069141,0 -5.6728436,1.0684773 -7.8103764,3.2060058 -2.1375326,2.1375328 -3.2060058,4.7412357 -3.2060058,7.8103757 0,1.35237 0.2076795,2.613808 0.622701,3.785299 0.2088823,-0.265921 0.4316193,-0.52102 0.6712768,-0.760677 0.7715709,-0.771571 1.6873036,-1.386639 2.6975098,-1.820044 0.1209519,-0.05189 0.2436626,-0.09991 0.3669027,-0.145728 -0.049175,-0.343321 -0.081132,-0.693881 -0.081132,-1.05885 0,-1.88078 0.6531647,-3.474176 1.9590535,-4.7800697 1.3058924,-1.3058888 2.8992894,-1.9590535 4.7800704,-1.9590535 1.880785,0 3.473665,0.6531647 4.779553,1.9590535 1.305894,1.3058937 1.959054,2.8992897 1.959054,4.7800697 0,1.880785 -0.65316,3.47418 -1.959054,4.78007 -0.24068,0.240681 -0.494267,0.451183 -0.754475,0.647506 0.0456,0.09627 0.09112,0.192354 0.133325,0.290421 0.449608,1.04471 0.671793,2.179182 0.671793,3.334164 0,0.286315 -0.01387,0.571431 -0.04134,0.854211 0.473171,-0.237615 0.914729,-0.50545 1.321883,-0.806152 l 7.775236,7.775236 c 0.402344,0.402351 0.900793,0.60358 1.495,0.60358 0.594169,0 1.09213,-0.201229 1.494482,-0.60358 0.417567,-0.402344 0.626318,-0.896521 0.626318,-1.483114 0,-0.586564 -0.201229,-1.088797 -0.60358,-1.506368 l -7.797974,-7.821228 c 0.584827,-0.776629 1.05011,-1.677875 1.396297,-2.704228 0.346227,-1.026382 0.519348,-2.146438 0.519348,-3.360518 0,-3.06914 -1.068473,-5.6728429 -3.206006,-7.8103757 -2.137533,-2.1375285 -4.74072,-3.2060058 -7.80986,-3.2060058 z\"></path><path d=\"m 9.9920901,26.221486 q 0.4204589,0 0.7116009,-0.284418 0.291145,-0.284431 0.291145,-0.704878 0,-0.420457 -0.284418,-0.719264 -0.284431,-0.298807 -0.704876,-0.298807 -0.4204589,0 -0.7116049,0.295574 -0.291145,0.29559 -0.291145,0.716048 0,0.420443 0.284421,0.708093 0.284431,0.287652 0.704877,0.287652 z m 0.0036,-2.696921 q 0.3709919,0 0.6391529,-0.265872 0.268153,-0.265874 0.268153,-0.638223 v -2.221893 q 0,-0.372359 -0.264927,-0.63822 -0.264929,-0.265873 -0.635921,-0.265873 -0.3709959,0 -0.6391569,0.265873 -0.268152,0.265872 -0.268152,0.63822 v 2.221893 q 0,0.372361 0.264928,0.638223 0.264927,0.265872 0.635923,0.265872 z m 0.0075,5.639017 q -1.3373662,0 -2.5017465,-0.499298 Q 6.3370711,28.165 5.4647229,27.292655 4.5923775,26.420306 4.0930961,25.256557 3.5937982,24.092805 3.5937982,22.751378 q 0,-1.341443 0.4992979,-2.498162 0.4992814,-1.156732 1.3716268,-2.029078 0.8723482,-0.872347 2.0360999,-1.371629 1.1637515,-0.499298 2.5051772,-0.499298 1.341442,0 2.498161,0.499298 1.156733,0.499282 2.029078,1.371629 0.872348,0.872346 1.371629,2.032511 0.499298,1.160166 0.499298,2.497517 0,1.337366 -0.499298,2.501746 -0.499281,1.164394 -1.371629,2.036743 -0.872345,0.872345 -2.032511,1.371629 -1.160165,0.499298 -2.497518,0.499298 z\" id=\"path1-9\" style=\"fill:#e84c5e;fill-opacity:1;stroke-width:0.0153234\"></path></g></svg>"

/***/ }),

/***/ "./src/img/ui/search.svg":
/*!*******************************!*\
  !*** ./src/img/ui/search.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M372-307q-116.108 0-196.887-80.834-80.78-80.833-80.78-195.499 0-114.667 80.834-195.5Q256-859.667 371-859.667t195.5 80.834Q647-698 647-583.233q0 45.233-12.334 83.4-12.333 38.166-35.666 70.166l229.333 228.334q15.334 16.037 15.334 37.685 0 21.648-15.667 36.981-15.689 16-37.659 16t-37.007-16L525-354.334q-29 21.949-68.139 34.641Q417.721-307 372-307Zm-.431-104.666q71.931 0 121.348-50 49.417-50.001 49.417-121.667 0-71.667-49.515-121.667-49.515-50.001-121.25-50.001-72.291 0-122.43 50.001Q199-655 199-583.333q0 71.666 50.041 121.667 50.041 50 122.528 50Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/settings.svg":
/*!*********************************!*\
  !*** ./src/img/ui/settings.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M425-80q-18.333 0-32.166-12-13.834-12-16.5-29.999l-13-84.668Q346.333-213 328.5-223.333 310.666-233.667 296.333-245l-78 35.333Q200.666-202 183-208q-17.667-6-27.667-22.333L101-327q-10-16.333-5.667-34.333t19.333-29.666l71.001-52.667q-1.667-8.334-2-18.167-.334-9.834-.334-18.167 0-8.333.334-18.167.333-9.833 2-18.167l-71.001-52.667q-15-11.666-19.333-29.666Q91-616.667 101-633l54.333-96.667Q165.333-746 183-752q17.666-6 35.333 1.667l78 35.333q14.333-11.333 32.334-21.667 18-10.333 34.667-16l13-85.334Q379-856 392.834-868q13.833-12 32.166-12h110q18.333 0 32.167 12 13.833 12 16.499 29.999l13 84.668Q613.667-747 631.833-737q18.167 10 31.834 22l78-35.333q17.667-7.667 35-1.667T804-729.667L859-633q10 16.333 5.667 34.666-4.333 18.334-19.333 29.333l-71.001 51.334q1.667 9 2 18.834.334 9.833.334 18.833 0 9-.334 18.5Q776-452 774-443l71 52.001q15 10.999 19.333 29.333 4.334 18.333-5.666 34.666L804-230.333Q794-214 776.334-208q-17.667 6-35.333-1.667L663.667-245q-14.333 11.333-32 22t-35.001 16.333l-13 84.668Q581-104 567.167-91.999 553.333-80 535-80H425Zm12.333-66.666h85l14-110q32.334-8 60.834-24.5T649-321l103.667 44.334 39.667-70.667L701-415q4.334-16 6.667-32.167Q710-463.333 710-480q0-16.667-2-32.833Q706-529 701-545l91.334-67.667-39.667-70.667L649-638.667q-22.666-25-50.833-41.833-28.167-16.834-61.834-22.834l-13.666-110h-85l-14 110q-33 7.334-61.501 23.834Q333.666-663 311-639l-103.667-44.334-39.667 70.667L259-545.333Q254.666-529 252.333-513T250-480q0 16.667 2.333 32.667T259-415l-91.334 67.667 39.667 70.667L311-321.333q23.333 23.667 51.833 40.167t60.834 24.5l13.666 110Zm43.334-200.001q55.333 0 94.333-39T614-480q0-55.333-39-94.333t-94.333-39q-55.667 0-94.5 39-38.834 39-38.834 94.333t38.834 94.333q38.833 39 94.5 39ZM480-480Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/time-format.svg":
/*!************************************!*\
  !*** ./src/img/ui/time-format.svg ***!
  \************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/units.svg":
/*!******************************!*\
  !*** ./src/img/ui/units.svg ***!
  \******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M560-520q-17 0-28.5-11.5T520-560q0-17 11.5-28.5T560-600h120q17 0 28.5 11.5T720-560q0 17-11.5 28.5T680-520H560Zm0-160q-17 0-28.5-11.5T520-720q0-17 11.5-28.5T560-760h240q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H560ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/uv-overlay.svg":
/*!***********************************!*\
  !*** ./src/img/ui/uv-overlay.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm198 82q-11-11-11-27.5t11-28.5l56-57q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-40q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-57-56q-12-12-12-29t12-28q11-11 28-11t28 11l57 57q11 11 11 28t-11 28q-12 11-28 11t-28-11Zm508 509-56-57q-11-12-11-28.5t11-27.5q11-11 27.5-11t28.5 11l57 56q12 11 11.5 28T791-169q-12 12-29 12t-28-12ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm89 271q-11-11-11-28t11-28l57-57q11-11 27.5-11t28.5 11q12 12 12 28.5T282-225l-56 56q-12 12-29 12t-28-12Zm311-71q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/visibility.svg":
/*!***********************************!*\
  !*** ./src/img/ui/visibility.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-134 0-244.5-72T61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/wind-direction.svg":
/*!***************************************!*\
  !*** ./src/img/ui/wind-direction.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 15 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.56778 3.17825V14.5552C8.56778 14.768 8.49599 14.9462 8.3524 15.0898C8.20882 15.2334 8.03062 15.3052 7.8178 15.3052C7.60499 15.3052 7.42679 15.2334 7.2832 15.0898C7.13962 14.9462 7.06783 14.768 7.06783 14.5552V3.17825L1.89858 8.3475C1.74986 8.49622 1.57583 8.56961 1.37648 8.56768C1.17711 8.56576 0.99987 8.48723 0.844753 8.3321C0.699887 8.17698 0.624887 8.00135 0.619753 7.8052C0.61462 7.60905 0.68962 7.43342 0.844753 7.2783L7.18513 0.937927C7.27871 0.844344 7.37743 0.778316 7.48128 0.73985C7.58511 0.701384 7.69729 0.68215 7.8178 0.68215C7.93832 0.68215 8.0505 0.701384 8.15433 0.73985C8.25818 0.778316 8.3569 0.844344 8.45048 0.937927L14.7909 7.2783C14.9293 7.41675 15.0002 7.58822 15.0034 7.7927C15.0066 7.99718 14.9357 8.17698 14.7909 8.3321C14.6357 8.48723 14.4575 8.5648 14.2563 8.5648C14.055 8.5648 13.8768 8.48723 13.7217 8.3321L8.56778 3.17825Z\"></path></svg>"

/***/ }),

/***/ "./src/img/ui/wind.svg":
/*!*****************************!*\
  !*** ./src/img/ui/wind.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 -960 960 960\"><path d=\"M460-160q-32 0-59.5-16T356-220q-11-20-.5-40t32.5-20q13 0 23 8t18 18q5 7 13.5 10.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H120q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400h340q50 0 85 35t35 85q0 50-35 85t-85 35ZM120-560q-17 0-28.5-11.5T80-600q0-17 11.5-28.5T120-640h500q25 0 42.5-17.5T680-700q0-25-17.5-42.5T620-760q-16 0-30 7.5T568-731q-7 12-17 21.5t-24 9.5q-20 0-32.5-15t-6.5-32q14-42 50.5-67.5T620-840q58 0 99 41t41 99q0 58-41 99t-99 41H120Zm678 308q-20 9-39-2.5T740-288q0-14 9.5-23.5T771-328q14-8 21.5-22t7.5-30q0-25-17.5-42.5T740-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h620q58 0 99 41t41 99q0 42-22 76.5T798-252Z\"></path></svg>"

/***/ }),

/***/ "./src/conditions.js":
/*!***************************!*\
  !*** ./src/conditions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _json_conditions_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/conditions.json */ "./src/json/conditions.json");


async function getConditionIcon(conditionCode, isDay = true) {
  conditionCode = 1000;

  // eslint-disable-next-line arrow-body-style
  const currentCondition = _json_conditions_json__WEBPACK_IMPORTED_MODULE_0__.find((condition) => {
    return condition.codes.includes(conditionCode);
  });

  // Return empty string if conditionCode doesn't exist
  if (!currentCondition) return "";

  // If the condition contains time-based icons, return their corresponding icon
  // (example, clear-day and clear-night)
  const condition = Array.isArray(currentCondition.condition)
    ? currentCondition.condition[+isDay]
    : currentCondition.condition;

  // Fetch svg from "./img/forecast"

  return condition.icon;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getConditionIcon);


/***/ }),

/***/ "./src/dialogs.js":
/*!************************!*\
  !*** ./src/dialogs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Dialog {
  // Private methods
  #dialog;

  constructor(id) {
    this.id = id;
    this.#dialog = this.#setupDialog();
  }

  // Getters

  get getButtons() {
    return Array.from(this.#dialog.querySelectorAll(".buttons button"));
  }

  get getPrimaryButton() {
    return this.getButtons.find((button) => button.className === "primary");
  }

  get getForm() {
    return this.#dialog.querySelector("form");
  }

  // Private methods
  #setupDialog() {
    const dialog = document.createElement("dialog");
    dialog.id = this.id;
    return dialog;
  }

  #addCloseEvent(button) {
    button.addEventListener("click", () => this.closeDialog());
  }

  // Public methods
  setContent(
    content,
    buttons = [{ classes: "button", type: "button", label: "Button" }],
  ) {
    const dialogButtons = document.createElement("div");
    dialogButtons.className = "buttons";

    this.#dialog.appendChild(content);

    buttons.forEach((button) => {
      const buttonElement = document.createElement("button");
      buttonElement.className = button.classes;
      buttonElement.type = button.type;
      buttonElement.textContent = button.label;
      this.#addCloseEvent(buttonElement);
      dialogButtons.appendChild(buttonElement);
    });

    this.#dialog.appendChild(dialogButtons);
  }

  showDialog() {
    if (!this.#dialog) return;

    // Add dialog only once
    if (!document.body.querySelector(`dialog#${this.#dialog.id}`)) {
      document.body.appendChild(this.#dialog);
    }
    this.#dialog.showModal();
  }

  closeDialog() {
    if (!this.#dialog) return;
    this.#dialog.close();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);


/***/ }),

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSearchEvent: () => (/* binding */ addSearchEvent),
/* harmony export */   renderLoadingScreen: () => (/* binding */ renderLoadingScreen),
/* harmony export */   setWeather: () => (/* binding */ setWeather)
/* harmony export */ });
/* harmony import */ var _img_ui_search_error_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/ui/search-error.svg */ "./src/img/ui/search-error.svg");
/* harmony import */ var _img_ui_search_error_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_ui_search_error_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_ui_rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ui/rain.svg */ "./src/img/ui/rain.svg");
/* harmony import */ var _img_ui_rain_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_ui_rain_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_ui_humidity_overlay_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/ui/humidity-overlay.svg */ "./src/img/ui/humidity-overlay.svg");
/* harmony import */ var _img_ui_humidity_overlay_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_ui_humidity_overlay_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_ui_uv_overlay_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ui/uv-overlay.svg */ "./src/img/ui/uv-overlay.svg");
/* harmony import */ var _img_ui_uv_overlay_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ui_uv_overlay_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_ui_precipitation_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/ui/precipitation.svg */ "./src/img/ui/precipitation.svg");
/* harmony import */ var _img_ui_precipitation_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_ui_precipitation_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_ui_wind_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/ui/wind.svg */ "./src/img/ui/wind.svg");
/* harmony import */ var _img_ui_wind_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_ui_wind_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_ui_wind_direction_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/ui/wind-direction.svg */ "./src/img/ui/wind-direction.svg");
/* harmony import */ var _img_ui_wind_direction_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_ui_wind_direction_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_ui_visibility_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/ui/visibility.svg */ "./src/img/ui/visibility.svg");
/* harmony import */ var _img_ui_visibility_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_ui_visibility_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_ui_pressure_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/ui/pressure.svg */ "./src/img/ui/pressure.svg");
/* harmony import */ var _img_ui_pressure_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_ui_pressure_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_ui_arc_percentage_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/ui/arc-percentage.svg */ "./src/img/ui/arc-percentage.svg");
/* harmony import */ var _img_ui_arc_percentage_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_ui_arc_percentage_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_ui_loading_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/ui/loading.svg */ "./src/img/ui/loading.svg");
/* harmony import */ var _img_ui_loading_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_ui_loading_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./conditions */ "./src/conditions.js");
/* harmony import */ var _moon_phases__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moon-phases */ "./src/moon-phases.js");
/* harmony import */ var _sun_position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sun-position */ "./src/sun-position.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./time */ "./src/time.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialogs */ "./src/dialogs.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





















const alertBox = new _dialogs__WEBPACK_IMPORTED_MODULE_17__["default"]("alert-box");
const locationMemory = new _storage__WEBPACK_IMPORTED_MODULE_18__["default"]("lastLocation");

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
  icon.innerHTML = (_img_ui_search_error_svg__WEBPACK_IMPORTED_MODULE_0___default());

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
    const suggestions = await (0,_page__WEBPACK_IMPORTED_MODULE_16__.fetchSearchSuggestions)(input.value);

    if (!suggestions.length) {
      alertBox.showDialog();
      return;
    }
    (0,_page__WEBPACK_IMPORTED_MODULE_16__.removeSuggestions)();
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
    convertedTime = _time__WEBPACK_IMPORTED_MODULE_15__.convertTo12Hour(timeValue);
  } else if (timeSettings === "24h") {
    convertedTime = _time__WEBPACK_IMPORTED_MODULE_15__.convertTo24Hour(timeValue);
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
  (0,_conditions__WEBPACK_IMPORTED_MODULE_12__["default"])(current.condition.code, current.is_day).then((icon) => {
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
  (0,_conditions__WEBPACK_IMPORTED_MODULE_12__["default"])(hour.condition.code, hour.is_day).then((icon) => {
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
  precipitationIcon.innerHTML = (_img_ui_rain_svg__WEBPACK_IMPORTED_MODULE_1___default());
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
    (0,_conditions__WEBPACK_IMPORTED_MODULE_12__["default"])(day.day.condition.code).then((icon) => {
      conditionIcon.innerHTML = icon;
    });
    conditionValue.className = "value small-text";
    conditionValue.textContent = day.day.condition.text;

    conditionContainer.appendChild(conditionIcon);
    conditionContainer.appendChild(conditionValue);

    precipitationContainer.className = "precipitation";
    precipitationIcon.className = "icon";
    precipitationIcon.innerHTML = (_img_ui_rain_svg__WEBPACK_IMPORTED_MODULE_1___default());
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
  arcPercentage.innerHTML = (_img_ui_arc_percentage_svg__WEBPACK_IMPORTED_MODULE_9___default());

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
    (_img_ui_humidity_overlay_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    current.humidity,
    100,
    "%",
  );
  const uv = createArcSection("uv", "UV Index", (_img_ui_uv_overlay_svg__WEBPACK_IMPORTED_MODULE_3___default()), current.uv, 11);

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
    (_img_ui_precipitation_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    "precipitation",
    "Precipitation",
    getMagnitude(
      { value: current.precip_mm, units: "mm" },
      { value: current.precip_in, units: "in" },
      unitsSettings,
    ),
  );
  const wind = createInformation(
    (_img_ui_wind_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    "wind",
    "Wind",
    getMagnitude(
      { value: current.wind_kph, units: "km/h" },
      { value: current.wind_mph, units: "mph" },
      unitsSettings,
    ),
    { class: "direction", icon: (_img_ui_wind_direction_svg__WEBPACK_IMPORTED_MODULE_6___default()), value: current.wind_degree },
  );
  const rightSide = document.createElement("div");
  const visibility = createInformation(
    (_img_ui_visibility_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    "visibility",
    "Visibility",
    getMagnitude(
      { value: current.vis_km, units: "km" },
      { value: current.vis_miles, units: "mi" },
      unitsSettings,
    ),
  );
  const pressure = createInformation(
    (_img_ui_pressure_svg__WEBPACK_IMPORTED_MODULE_8___default()),
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
  const sunIcon = await (0,_sun_position__WEBPACK_IMPORTED_MODULE_14__["default"])(
    astro.sunrise,
    astro.sunset,
    lastTimeUpdated.split(" ")[1],
  );
  const moonIcon = await (0,_moon_phases__WEBPACK_IMPORTED_MODULE_13__["default"])(astro.moon_phase);

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
  icon.innerHTML = (_img_ui_loading_svg__WEBPACK_IMPORTED_MODULE_10___default());
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

    const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_11__.readSettings)();

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

function setWeather(location) {
  // Save current location query
  // If there's not any location saved. Use default location "London".
  if (!location) {
    location = locationMemory.checkSavedItem()
      ? locationMemory.getItem()
      : "London";
  }

  locationMemory.saveItem(location);

  let forecastRefresh;
  // Interval from hours to miliseconds
  const autorefresh = parseInt((0,_settings__WEBPACK_IMPORTED_MODULE_11__.readSettings)().autorefresh, 10) * 3600000;

  // Reset interval each time function is invoked
  clearInterval(forecastRefresh);

  renderForecast(location);
  setInterval(renderForecast, autorefresh, location);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");
/* harmony import */ var _conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conditions */ "./src/conditions.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings */ "./src/settings.js");






_settings__WEBPACK_IMPORTED_MODULE_4__.checkDefaultSettings();

_page__WEBPACK_IMPORTED_MODULE_1__.renderHeader();
_page__WEBPACK_IMPORTED_MODULE_1__.renderMain();
_forecast__WEBPACK_IMPORTED_MODULE_2__.setWeather();
_page__WEBPACK_IMPORTED_MODULE_1__.renderFooter();

(0,_conditions__WEBPACK_IMPORTED_MODULE_3__["default"])(1000).then((res) => console.log(res));


/***/ }),

/***/ "./src/moon-phases.js":
/*!****************************!*\
  !*** ./src/moon-phases.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _json_moon_phases_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/moon-phases.json */ "./src/json/moon-phases.json");


async function getMoonPhaseIcon(phaseValue) {
  const path = "./img/moon-phases/";

  // eslint-disable-next-line arrow-body-style
  const currentPhase = _json_moon_phases_json__WEBPACK_IMPORTED_MODULE_0__.find((phase) => {
    return phase.name === phaseValue;
  });

  if (!currentPhase) return "";

  const svg = await __webpack_require__("./src lazy recursive ^.*.*$")(`${path}${currentPhase.icon}`);

  return svg.default;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMoonPhaseIcon);


/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSearchSuggestions: () => (/* binding */ fetchSearchSuggestions),
/* harmony export */   removeSuggestions: () => (/* binding */ removeSuggestions),
/* harmony export */   renderFooter: () => (/* binding */ renderFooter),
/* harmony export */   renderHeader: () => (/* binding */ renderHeader),
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _img_favicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/favicon.svg */ "./src/img/favicon.svg");
/* harmony import */ var _img_favicon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_ui_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/ui/search.svg */ "./src/img/ui/search.svg");
/* harmony import */ var _img_ui_search_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_ui_search_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_ui_settings_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/ui/settings.svg */ "./src/img/ui/settings.svg");
/* harmony import */ var _img_ui_settings_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_ui_settings_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_ui_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ui/close.svg */ "./src/img/ui/close.svg");
/* harmony import */ var _img_ui_close_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_ui_close_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_ui_units_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/ui/units.svg */ "./src/img/ui/units.svg");
/* harmony import */ var _img_ui_units_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_ui_units_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_ui_time_format_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/ui/time-format.svg */ "./src/img/ui/time-format.svg");
/* harmony import */ var _img_ui_time_format_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_ui_time_format_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_ui_autorefresh_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/ui/autorefresh.svg */ "./src/img/ui/autorefresh.svg");
/* harmony import */ var _img_ui_autorefresh_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_ui_autorefresh_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forecast */ "./src/forecast.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ "./src/settings.js");
/* harmony import */ var _dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialogs */ "./src/dialogs.js");











const settingsDialog = new _dialogs__WEBPACK_IMPORTED_MODULE_9__["default"]("settings-dialog");

// Fetch methods
async function fetchSearchSuggestions(query) {
  const responseFetch = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=d9bcc94c28e04844af1222420240303&q=${query}`,
  );
  return responseFetch.json();
}

// Events:
// - Search events
function addClearInputEvent(clear, input) {
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
  });
}

function addSuggestionsBehaviorEvent(input, searchSuggestions) {
  let searchTimeout;
  const suggestionsDelay = 500;

  input.addEventListener("input", () => {
    // Reset timer when input event triggers
    clearTimeout(searchTimeout);

    removeSuggestions();

    // Wait 0.5s to fetch search suggestions
    if (!input.value) return;
    searchTimeout = setTimeout(
      () => addSuggestions(input, searchSuggestions),
      suggestionsDelay,
    );
  });

  input.addEventListener("focus", async () => {
    removeSuggestions();

    if (!input.value) return;
    addSuggestions(input, searchSuggestions);
  });
}

function addChooseSuggestionEvent(input, suggestion) {
  const form = document.querySelector("#search-form");

  suggestion.addEventListener("click", () => {
    input.value = suggestion.dataset.value;
    removeSuggestions();
    form.requestSubmit(); // Trigger submit event
  });
}

function addOpenSettingsDialogEvent(settingsButton) {
  settingsButton.addEventListener("click", () => {
    settingsDialog.showDialog();
  });
}

// - Settings dialog events
function addWriteSettingsEvent(form) {
  const inputs = Array.from(form.querySelectorAll("select"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    (0,_settings__WEBPACK_IMPORTED_MODULE_8__.writeInputSettings)(inputs);
    (0,_forecast__WEBPACK_IMPORTED_MODULE_7__.setWeather)(); // Refresh weather
  });
}

function addSubmitSettingsEvent(form, submitButton) {
  submitButton.addEventListener("click", () => {
    form.requestSubmit();
  });
}

// Header
function createAppTitle() {
  const container = document.createElement("div");
  const label = document.createElement("h1");
  const icon = document.createElement("span");

  container.id = "app-title";

  label.className = "label";
  label.textContent = "Weather App";

  icon.className = "icon";
  icon.innerHTML = (_img_favicon_svg__WEBPACK_IMPORTED_MODULE_0___default());

  container.appendChild(icon);
  container.appendChild(label);

  return container;
}

function createChooseAreaInput(id, placeholder) {
  const form = document.createElement("form");
  const inputContainer = document.createElement("div");
  const input = document.createElement("input");
  const clearInput = document.createElement("span");
  const searchSuggestions = document.createElement("div");
  const button = document.createElement("button");

  form.id = "search-form";
  inputContainer.className = "input-container";

  input.type = "search";
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  input.autocomplete = "off";

  clearInput.className = "clear-input";
  clearInput.innerHTML = (_img_ui_close_svg__WEBPACK_IMPORTED_MODULE_3___default());

  searchSuggestions.className = "search-suggestions";

  button.id = "search-location-button";
  button.className = "primary";
  button.innerHTML = (_img_ui_search_svg__WEBPACK_IMPORTED_MODULE_1___default());

  inputContainer.appendChild(input);
  inputContainer.appendChild(clearInput);
  inputContainer.appendChild(searchSuggestions);

  form.appendChild(inputContainer);
  form.appendChild(button);

  addClearInputEvent(clearInput, input);
  (0,_forecast__WEBPACK_IMPORTED_MODULE_7__.addSearchEvent)(form, input);
  addSuggestionsBehaviorEvent(input, searchSuggestions);

  return form;
}

function createEmptySuggestion(label) {
  const suggestionContainer = document.createElement("div");
  const suggestionLabel = document.createElement("p");

  suggestionContainer.className = "suggestion empty";
  suggestionLabel.className = "location small-text";
  suggestionLabel.textContent = label;

  suggestionContainer.appendChild(suggestionLabel);

  return suggestionContainer;
}

function createSuggestion(input, suggestion) {
  const suggestionContainer = document.createElement("div");
  const location = document.createElement("p");
  const country = document.createElement("p");

  suggestionContainer.className = "suggestion";
  suggestionContainer.dataset.value = `${suggestion.name}, ${suggestion.country}`;
  location.className = "location small-text";
  location.textContent = suggestion.name;
  country.className = "country very-small-text";
  country.textContent = suggestion.country;

  suggestionContainer.appendChild(location);
  suggestionContainer.appendChild(country);

  addChooseSuggestionEvent(input, suggestionContainer);

  return suggestionContainer;
}

async function addSuggestions(input, searchSuggestions) {
  const suggestions = await fetchSearchSuggestions(input.value);

  if (!suggestions.length) {
    const emptySuggestions = createEmptySuggestion(
      "Location cannot be found...",
    );
    searchSuggestions.appendChild(emptySuggestions);
    return;
  }

  suggestions.forEach((suggestion) => {
    const suggestionElement = createSuggestion(input, suggestion);
    searchSuggestions.appendChild(suggestionElement);
  });
}

function removeSuggestions() {
  const searchSuggestions = document.querySelector(".search-suggestions");

  searchSuggestions.innerHTML = "";
}

function createHeaderButtons() {
  const container = document.createElement("div");
  container.className = "header-buttons";

  const settingsButton = document.createElement("button");
  settingsButton.className = "settings-button";
  settingsButton.innerHTML = (_img_ui_settings_svg__WEBPACK_IMPORTED_MODULE_2___default());

  addOpenSettingsDialogEvent(settingsButton);

  container.appendChild(settingsButton);

  return container;
}

function createSettingField(
  inputId,
  label,
  icon,
  settingsValue,
  selectOptions = [{ name: "option-name", value: "option-value" }],
) {
  const container = document.createElement("div");
  const fieldTitleContainer = document.createElement("div");
  const fieldLabel = document.createElement("label");
  const fieldIcon = document.createElement("span");
  const selectInput = document.createElement("select");

  container.className = "settings-field";
  fieldTitleContainer.className = "field-title";
  fieldLabel.className = "title";
  fieldLabel.setAttribute("for", inputId);
  fieldLabel.textContent = label;
  fieldIcon.className = "icon";
  fieldIcon.innerHTML = icon;

  selectInput.id = inputId;
  selectInput.name = inputId;

  selectOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.name;
    optionElement.value = option.value;
    if (option.value === settingsValue) {
      optionElement.setAttribute("selected", "selected");
    }

    selectInput.appendChild(optionElement);
  });

  fieldTitleContainer.appendChild(fieldIcon);
  fieldTitleContainer.appendChild(fieldLabel);

  container.appendChild(fieldTitleContainer);
  container.appendChild(selectInput);

  return container;
}

function setupSettingsDialogContent() {
  const settings = (0,_settings__WEBPACK_IMPORTED_MODULE_8__.readSettings)();
  const content = document.createElement("div");
  const titleContainer = document.createElement("div");
  const title = document.createElement("h1");
  const form = document.createElement("form");
  const units = createSettingField(
    "units",
    "Display units",
    (_img_ui_units_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    settings.units,
    [
      { name: "°C", value: "c" },
      { name: "°F", value: "f" },
    ],
  );
  const hourFormat = createSettingField(
    "timeFormat",
    "Time format",
    (_img_ui_time_format_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    settings.timeFormat,
    [
      { name: "24 hours", value: "24h" },
      { name: "12 hours", value: "12h" },
    ],
  );
  const autorefresh = createSettingField(
    "autorefresh",
    "Auto refresh",
    (_img_ui_autorefresh_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    settings.autorefresh,
    [
      { name: "1 hour", value: "1" },
      { name: "3 hours", value: "3" },
      { name: "5 hours", value: "5" },
      { name: "12 hours", value: "12" },
      { name: "24 hours", value: "24" },
    ],
  );

  content.className = "content";

  titleContainer.className = "title-container";
  title.className = "title";
  title.textContent = "Settings";

  titleContainer.appendChild(title);

  form.id = "settings";

  form.appendChild(units);
  form.appendChild(hourFormat);
  form.appendChild(autorefresh);

  content.appendChild(titleContainer);
  content.appendChild(form);

  // add events
  addWriteSettingsEvent(form);

  return content;
}

function renderHeader() {
  const header = document.createElement("header");
  header.appendChild(createAppTitle());
  header.appendChild(createChooseAreaInput("search-location", "Search"));
  header.appendChild(createHeaderButtons());

  settingsDialog.setContent(setupSettingsDialogContent(), [
    { classes: "primary", type: "submit", label: "Save changes" },
    { classes: "secondary", type: "button", label: "Close" },
  ]);
  addSubmitSettingsEvent(
    settingsDialog.getForm,
    settingsDialog.getPrimaryButton,
  );

  document.body.appendChild(header);
}

// Main
function renderMain() {
  const main = document.createElement("main");
  document.body.appendChild(main);
}

// Footer
function renderFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Made by ";

  const credits = document.createElement("a");
  credits.className = "credits";
  credits.href = "https://www.github.com/ErickBGomez";
  credits.target = "_blank";
  credits.textContent = "Erick B. Gómez";

  footer.appendChild(credits);

  document.body.appendChild(footer);
}




/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkDefaultSettings: () => (/* binding */ checkDefaultSettings),
/* harmony export */   readSettings: () => (/* binding */ readSettings),
/* harmony export */   writeInputSettings: () => (/* binding */ writeInputSettings)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


const settingsMemory = new _storage__WEBPACK_IMPORTED_MODULE_0__["default"]("settings");

const defaultSettings = {
  units: "c",
  timeFormat: "12h",
  autorefresh: "1",
};

// Events
function writeSettings(settings) {
  settingsMemory.saveItem(settings);
}

function writeInputSettings(inputs) {
  const settings = {};

  inputs.forEach((input) => {
    settings[input.name] = input.value;
  });

  writeSettings(settings);
}

function readSettings() {
  return JSON.parse(localStorage.getItem("settings"));
}

function checkDefaultSettings() {
  if (!localStorage.getItem("settings")) {
    writeSettings(defaultSettings);
  }
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Storage {
  #savedItem;

  constructor(name) {
    this.name = name;
  }

  saveItem(item) {
    this.#savedItem = item;

    if (typeof item === "object") {
      localStorage.setItem(this.name, JSON.stringify(this.#savedItem));
      return;
    }

    localStorage.setItem(this.name, this.#savedItem);
  }

  getItem() {
    if (typeof this.#savedItem === "object") {
      console.log("object");
      return JSON.parse(localStorage.getItem(this.name));
    }

    return localStorage.getItem(this.name);
  }

  checkSavedItem() {
    return Boolean(this.getItem());
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/sun-position.js":
/*!*****************************!*\
  !*** ./src/sun-position.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/time.js");


function getSunPositionIndex(sunrise, sunset, currentTime) {
  // Parse all time values to decimal number
  sunrise = _time__WEBPACK_IMPORTED_MODULE_0__.parseTimeToNumber(sunrise);
  sunset = _time__WEBPACK_IMPORTED_MODULE_0__.parseTimeToNumber(sunset);
  currentTime = _time__WEBPACK_IMPORTED_MODULE_0__.parseTimeToNumber(currentTime);

  const percentage = (currentTime - sunrise) / (sunset - sunrise);

  if (percentage < 0 || percentage > 1) return 0; // Night
  if (percentage < 0.2) return 1; // Sunrise
  if (percentage >= 0.2 && percentage <= 0.8) return 2; // Noon
  return 3; // Sunset
}

async function getSunPositionIcon(sunrise, sunset, currentTime) {
  const path = "./img/sun-positions/";
  const index = getSunPositionIndex(sunrise, sunset, currentTime);

  const currentSunIcon = await __webpack_require__("./src lazy recursive ^.*sun\\-.*\\.svg$")(`${path}sun-${index}.svg`);

  return currentSunIcon.default;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSunPositionIcon);


/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTo12Hour: () => (/* binding */ convertTo12Hour),
/* harmony export */   convertTo24Hour: () => (/* binding */ convertTo24Hour),
/* harmony export */   parseTimeToNumber: () => (/* binding */ parseTimeToNumber)
/* harmony export */ });
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
  time = convertTo24Hour(time);
  const [hours, minutes] = time.split(":");
  return parseInt(hours, 10) + parseInt(minutes, 10) / 60;
}




/***/ }),

/***/ "./src lazy recursive ^.*.*$":
/*!*******************************************!*\
  !*** ./src/ lazy ^.*.*$ namespace object ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	".": [
		"./src/index.js",
		9
	],
	"./": [
		"./src/index.js",
		9
	],
	"./conditions": [
		"./src/conditions.js",
		9
	],
	"./conditions.js": [
		"./src/conditions.js",
		9
	],
	"./dialogs": [
		"./src/dialogs.js",
		9
	],
	"./dialogs.js": [
		"./src/dialogs.js",
		9
	],
	"./forecast": [
		"./src/forecast.js",
		9
	],
	"./forecast.js": [
		"./src/forecast.js",
		9
	],
	"./img/favicon.svg": [
		"./src/img/favicon.svg",
		7
	],
	"./img/moon-phases/first-quarter.svg": [
		"./src/img/moon-phases/first-quarter.svg",
		7,
		"src_img_moon-phases_first-quarter_svg"
	],
	"./img/moon-phases/full-moon.svg": [
		"./src/img/moon-phases/full-moon.svg",
		7,
		"src_img_moon-phases_full-moon_svg"
	],
	"./img/moon-phases/last-quarter.svg": [
		"./src/img/moon-phases/last-quarter.svg",
		7,
		"src_img_moon-phases_last-quarter_svg"
	],
	"./img/moon-phases/new-moon.svg": [
		"./src/img/moon-phases/new-moon.svg",
		7,
		"src_img_moon-phases_new-moon_svg"
	],
	"./img/moon-phases/waning-crescent.svg": [
		"./src/img/moon-phases/waning-crescent.svg",
		7,
		"src_img_moon-phases_waning-crescent_svg"
	],
	"./img/moon-phases/waning-gibbous.svg": [
		"./src/img/moon-phases/waning-gibbous.svg",
		7,
		"src_img_moon-phases_waning-gibbous_svg"
	],
	"./img/moon-phases/waxing-crescent.svg": [
		"./src/img/moon-phases/waxing-crescent.svg",
		7,
		"src_img_moon-phases_waxing-crescent_svg"
	],
	"./img/moon-phases/waxing-gibbous.svg": [
		"./src/img/moon-phases/waxing-gibbous.svg",
		7,
		"src_img_moon-phases_waxing-gibbous_svg"
	],
	"./img/sun-positions/sun-0.svg": [
		"./src/img/sun-positions/sun-0.svg",
		7,
		"src_img_sun-positions_sun-0_svg"
	],
	"./img/sun-positions/sun-1.svg": [
		"./src/img/sun-positions/sun-1.svg",
		7,
		"src_img_sun-positions_sun-1_svg"
	],
	"./img/sun-positions/sun-2.svg": [
		"./src/img/sun-positions/sun-2.svg",
		7,
		"src_img_sun-positions_sun-2_svg"
	],
	"./img/sun-positions/sun-3.svg": [
		"./src/img/sun-positions/sun-3.svg",
		7,
		"src_img_sun-positions_sun-3_svg"
	],
	"./img/ui/arc-percentage.svg": [
		"./src/img/ui/arc-percentage.svg",
		7
	],
	"./img/ui/autorefresh.svg": [
		"./src/img/ui/autorefresh.svg",
		7
	],
	"./img/ui/close.svg": [
		"./src/img/ui/close.svg",
		7
	],
	"./img/ui/humidity-overlay.svg": [
		"./src/img/ui/humidity-overlay.svg",
		7
	],
	"./img/ui/loading.svg": [
		"./src/img/ui/loading.svg",
		7
	],
	"./img/ui/moon-phase.svg": [
		"./src/img/ui/moon-phase.svg",
		7,
		"src_img_ui_moon-phase_svg"
	],
	"./img/ui/precipitation.svg": [
		"./src/img/ui/precipitation.svg",
		7
	],
	"./img/ui/pressure.svg": [
		"./src/img/ui/pressure.svg",
		7
	],
	"./img/ui/rain.svg": [
		"./src/img/ui/rain.svg",
		7
	],
	"./img/ui/search-error.svg": [
		"./src/img/ui/search-error.svg",
		7
	],
	"./img/ui/search.svg": [
		"./src/img/ui/search.svg",
		7
	],
	"./img/ui/settings.svg": [
		"./src/img/ui/settings.svg",
		7
	],
	"./img/ui/sun-position.svg": [
		"./src/img/ui/sun-position.svg",
		7,
		"src_img_ui_sun-position_svg"
	],
	"./img/ui/time-format.svg": [
		"./src/img/ui/time-format.svg",
		7
	],
	"./img/ui/units.svg": [
		"./src/img/ui/units.svg",
		7
	],
	"./img/ui/uv-overlay.svg": [
		"./src/img/ui/uv-overlay.svg",
		7
	],
	"./img/ui/visibility.svg": [
		"./src/img/ui/visibility.svg",
		7
	],
	"./img/ui/wind-direction.svg": [
		"./src/img/ui/wind-direction.svg",
		7
	],
	"./img/ui/wind.svg": [
		"./src/img/ui/wind.svg",
		7
	],
	"./index": [
		"./src/index.js",
		9
	],
	"./index.js": [
		"./src/index.js",
		9
	],
	"./json/conditions": [
		"./src/json/conditions.json",
		3
	],
	"./json/conditions.json": [
		"./src/json/conditions.json",
		3
	],
	"./json/moon-phases": [
		"./src/json/moon-phases.json",
		3
	],
	"./json/moon-phases.json": [
		"./src/json/moon-phases.json",
		3
	],
	"./moon-phases": [
		"./src/moon-phases.js",
		9
	],
	"./moon-phases.js": [
		"./src/moon-phases.js",
		9
	],
	"./page": [
		"./src/page.js",
		9
	],
	"./page.js": [
		"./src/page.js",
		9
	],
	"./settings": [
		"./src/settings.js",
		9
	],
	"./settings.js": [
		"./src/settings.js",
		9
	],
	"./storage": [
		"./src/storage.js",
		9
	],
	"./storage.js": [
		"./src/storage.js",
		9
	],
	"./style.css": [
		"./src/style.css",
		9
	],
	"./sun-position": [
		"./src/sun-position.js",
		9
	],
	"./sun-position.js": [
		"./src/sun-position.js",
		9
	],
	"./time": [
		"./src/time.js",
		9
	],
	"./time.js": [
		"./src/time.js",
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(2).map(__webpack_require__.e)).then(() => {
		return __webpack_require__.t(id, ids[1] | 16)
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^.*.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src lazy recursive ^.*sun\\-.*\\.svg$":
/*!*****************************************************!*\
  !*** ./src/ lazy ^.*sun\-.*\.svg$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./img/sun-positions/sun-0.svg": [
		"./src/img/sun-positions/sun-0.svg",
		"src_img_sun-positions_sun-0_svg"
	],
	"./img/sun-positions/sun-1.svg": [
		"./src/img/sun-positions/sun-1.svg",
		"src_img_sun-positions_sun-1_svg"
	],
	"./img/sun-positions/sun-2.svg": [
		"./src/img/sun-positions/sun-2.svg",
		"src_img_sun-positions_sun-2_svg"
	],
	"./img/sun-positions/sun-3.svg": [
		"./src/img/sun-positions/sun-3.svg",
		"src_img_sun-positions_sun-3_svg"
	],
	"./img/ui/sun-position.svg": [
		"./src/img/ui/sun-position.svg",
		"src_img_ui_sun-position_svg"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^.*sun\\-.*\\.svg$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/json/conditions.json":
/*!**********************************!*\
  !*** ./src/json/conditions.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"codes":[1000],"condition":[{"name":"clear-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(42.333333,-42.699384)\'> <path style=\'fill:#9abfcf;stroke-width:3.93095;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 21.327101,47.783376 c 0.114455,0.709536 0.172353,1.427607 0.172879,2.147426 -1.13e-4,7.481658 -6.065319,13.546632 -13.5469771,13.54646 -0.9891243,-0.005 -1.9734346,-0.118363 -2.9354705,-0.337168 -0.6837305,-0.155507 -1.0961711,0.216471 -0.8694523,0.880002 1.8528596,5.422709 6.9626979,9.145752 12.7852529,9.159417 7.481658,-1.13e-4 13.546632,-6.065319 13.54646,-13.546977 -0.0017,-5.514419 -3.339692,-10.438708 -8.373918,-12.516246 -0.536527,-0.221416 -0.871198,0.09413 -0.778774,0.667086 z\' transform=\'translate(-42.682665,-0.47961144)\' /> </g> </svg>"},{"name":"clear-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(42.333332)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:3.18743\' d=\'m -25.399482,1.6893028 a 0.99434,0.99434 0 0 0 -0.994254,0.9942545 v 3.1036866 a 0.99434,0.99434 0 0 0 0.994254,0.9942545 0.99434,0.99434 0 0 0 0.993738,-0.9942545 V 2.6835573 a 0.99434,0.99434 0 0 0 -0.993738,-0.9942545 z m 10.116695,4.1325643 a 0.99434,0.99434 0 0 0 -0.702799,0.2909383 l -2.194698,2.1946981 a 0.99434,0.99434 0 0 0 0,1.4061157 0.99434,0.99434 0 0 0 1.406115,0 l 2.194698,-2.1946981 a 0.99434,0.99434 0 0 0 0,-1.4061157 0.99434,0.99434 0 0 0 -0.703316,-0.2909383 z m -20.209619,0.024805 a 0.99434,0.99434 0 0 0 -0.703316,0.2909384 0.99434,0.99434 0 0 0 0,1.4061157 l 2.194698,2.1946981 a 0.99434,0.99434 0 0 0 1.406115,0 0.99434,0.99434 0 0 0 0,-1.4061158 l -2.194698,-2.194698 a 0.99434,0.99434 0 0 0 -0.702799,-0.2909384 z m 10.092407,3.4369996 a 7.6498237,7.6498237 0 0 0 -7.649662,7.6496613 7.6498237,7.6498237 0 0 0 7.649662,7.649663 7.6498237,7.6498237 0 0 0 7.649663,-7.649663 7.6498237,7.6498237 0 0 0 -7.649663,-7.6496613 z m -14.245642,6.6554073 a 0.99434,0.99434 0 0 0 -0.994255,0.994254 0.99434,0.99434 0 0 0 0.994255,0.994255 h 3.10317 a 0.99434,0.99434 0 0 0 0.994254,-0.994255 0.99434,0.99434 0 0 0 -0.994254,-0.994254 z m 25.388115,0 a 0.99434,0.99434 0 0 0 -0.994255,0.994254 0.99434,0.99434 0 0 0 0.994255,0.994255 h 3.103169 a 0.99434,0.99434 0 0 0 0.994255,-0.994255 0.99434,0.99434 0 0 0 -0.994255,-0.994254 z m -3.240113,7.902877 a 0.99434,0.99434 0 0 0 -0.702799,0.290938 0.99434,0.99434 0 0 0 0,1.406116 l 2.194698,2.194181 a 0.99434,0.99434 0 0 0 1.405599,0 0.99434,0.99434 0 0 0 0,-1.405599 l -2.194181,-2.194698 a 0.99434,0.99434 0 0 0 -0.703317,-0.290938 z m -15.811438,0.0067 a 0.99434,0.99434 0 0 0 -0.703316,0.290956 l -2.194181,2.194698 a 0.99434,0.99434 0 0 0 0,1.405599 0.99434,0.99434 0 0 0 1.405599,0 l 2.194698,-2.194181 a 0.99434,0.99434 0 0 0 0,-1.406116 0.99434,0.99434 0 0 0 -0.7028,-0.290938 z m 7.909595,3.235461 a 0.99434,0.99434 0 0 0 -0.994254,0.993738 v 3.103686 a 0.99434,0.99434 0 0 0 0.994254,0.994255 0.99434,0.99434 0 0 0 0.993738,-0.994255 v -3.103668 a 0.99434,0.99434 0 0 0 -0.993738,-0.993738 z\' /> </g> </svg>"}]},{"codes":[1009,1030,1135],"condition":{"name":"cloud","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(1.2816236e-7,-84.824068)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 17.18692,92.891004 c -4.139612,0 -7.6165122,2.83693 -8.5928933,6.67258 -0.242045,-0.03278 -0.4859884,-0.04956 -0.7302419,-0.05023 -3.0681117,9.4e-5 -5.5551955,2.487436 -5.5549732,5.555546 1.013e-4,3.06788 2.4870903,5.55487 5.5549732,5.55496 0.1523504,-5.7e-4 0,0 0.4564011,0 v 0 h 8.8667341 8.866734 v -0.0216 c 0.101696,0.0102 0.20367,0.0174 0.30579,0.0216 2.871154,-1.6e-4 5.198556,-2.32782 5.19841,-5.19897 -1.57e-4,-2.87094 -2.327471,-5.19826 -5.19841,-5.19842 -0.145283,0.004 -0.290317,0.0149 -0.434722,0.0314 -0.712756,-4.182397 -4.352293,-7.366932 -8.737802,-7.366932 z\' /> </g> </svg>"}},{"codes":[1003,1006],"condition":[{"name":"cloud-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(9.7873802e-8,-42.699384)\'> <g transform=\'translate(-0.44411583,-1.6742209)\'> <path style=\'fill:#9abfcf;stroke-width:3.93095;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 21.745099,47.046267 c -0.316141,0.02219 -0.487035,0.307534 -0.417718,0.73725 0.114456,0.709536 0.171729,1.427338 0.172255,2.147156 C 21.499523,57.412324 15.43431,63.477822 7.9526594,63.47765 6.9635361,63.47265 5.9794729,63.358835 5.017438,63.14003 4.3337082,62.984523 3.9216941,63.356722 4.1484127,64.020252 c 1.217612,3.563549 3.8416702,6.392485 7.1502953,7.917691 0.772592,-4.151088 4.424812,-7.319834 8.791884,-7.319967 h 0.0034 c 0.0065,1.9e-5 0.01331,-3.1e-5 0.01981,0 1.595115,-4.33826 5.303752,-7.534546 9.914124,-8.418952 -1.064596,-4.054703 -3.965005,-7.450012 -7.921997,-9.082994 -0.134132,-0.05535 -0.255494,-0.07716 -0.360874,-0.06976 z\' transform=\'matrix(0.6,0,0,0.6,0.64667963,22.900902)\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 20.159974,57.299757 c -3.31169,0 -6.09321,2.269543 -6.874315,5.338064 -0.193636,-0.02622 -0.388791,-0.03965 -0.584194,-0.04018 -2.454489,7.5e-5 -4.4441558,1.989948 -4.443978,4.44444 8.11e-5,2.454304 1.989672,4.443896 4.443978,4.443968 0.121881,-4.56e-4 0,0 0.365121,0 v 0 h 7.093388 7.093387 v -0.01728 c 0.08136,0.0082 0.162936,0.01392 0.244632,0.01728 2.296923,-1.28e-4 4.158845,-1.862256 4.158728,-4.159176 -1.26e-4,-2.296756 -1.861977,-4.158612 -4.158728,-4.158741 -0.116227,0.0032 -0.232254,0.01192 -0.347778,0.02512 -0.570205,-3.345916 -3.481834,-5.893544 -6.990241,-5.893544 z\' /> </g> </g> </svg>"},{"name":"cloud-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(9.7873802e-8,-0.36605113)\'> <g transform=\'translate(-0.45161539,-1.2239406)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 12.381675,8.1535075 a 0.596604,0.596604 0 0 0 -0.596863,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.596863,0.596346 0.596604,0.596604 0 0 0 0.595829,-0.596346 V 8.7498535 a 0.596604,0.596604 0 0 0 -0.595829,-0.596346 z m 6.069913,2.4794355 a 0.596604,0.596604 0 0 0 -0.421679,0.174666 l -1.316716,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.843359,0 l 1.316716,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.1258746,0.01499 a 0.596604,0.596604 0 0 0 -0.4221964,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.3172322,1.316715 a 0.596604,0.596604 0 0 0 0.8433594,0 0.596604,0.596604 0 0 0 0,-0.843359 L 6.7473931,10.822595 A 0.596604,0.596604 0 0 0 6.3257134,10.647929 Z m 6.0554446,2.06189 a 4.5898942,4.5898942 0 0 0 -4.589901,4.5899 4.5898942,4.5898942 0 0 0 1.2459188,3.125908 c 0.9475055,-0.835297 2.1856822,-1.34768 3.5408692,-1.347722 h 0.0021 c 0.0033,9e-6 0.0065,-1.5e-5 0.0098,0 0.674128,-1.83344 1.980816,-3.322329 3.659724,-4.230232 a 4.5898942,4.5898942 0 0 0 -3.868497,-2.137854 z m -8.5472822,3.993554 a 0.596604,0.596604 0 0 0 -0.5968627,0.596346 0.596604,0.596604 0 0 0 0.5968627,0.596863 h 1.8619019 a 0.596604,0.596604 0 0 0 0.596346,-0.596863 0.596604,0.596604 0 0 0 -0.596346,-0.596346 z M 7.635711,21.44882 a 0.596604,0.596604 0 0 0 -0.4221965,0.174666 l -1.3161987,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.8433594,0 L 7.3726779,23.151558 C 7.5115289,22.59784 7.735513,22.07797 8.0320692,21.606433 A 0.596604,0.596604 0 0 0 7.635711,21.44882 Z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 20.036138,14.706849 c -3.31169,0 -6.09321,2.269543 -6.874315,5.338064 -0.193636,-0.02622 -0.388791,-0.03965 -0.584194,-0.04018 -2.454489,7.5e-5 -4.4441557,1.989948 -4.4439779,4.44444 8.11e-5,2.454304 1.9896719,4.443896 4.4439779,4.443968 0.121881,-4.56e-4 0,0 0.365121,0 v 0 h 7.093388 7.093387 v -0.01728 c 0.08136,0.0082 0.162936,0.01392 0.244632,0.01728 2.296923,-1.28e-4 4.158845,-1.862256 4.158728,-4.159176 -1.26e-4,-2.296756 -1.861977,-4.158612 -4.158728,-4.158741 -0.116227,0.0032 -0.232254,0.01192 -0.347778,0.02512 C 26.456174,17.254428 23.544545,14.7068 20.036138,14.7068 Z\' /> </g> </g></svg>"}]},{"codes":[1153,1186,1189,1192,1195,1243,1246],"condition":{"name":"rain","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-42.641797,-84.824068)\'> <g transform=\'translate(-4.7315064e-5,1.5980751)\'> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.97547;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 65.654975,105.47146 c 0,0.78832 -0.653135,1.42739 -1.458817,1.42739 -0.805682,0 -1.458817,-0.63907 -1.458816,-1.42739 -10e-7,-0.78831 1.458816,-2.46279 1.458816,-2.46279 0,0 1.458817,1.67448 1.458817,2.46279 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:3.56557;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 62.208175,110.81482 c 0,1.42285 -1.178855,2.57632 -2.633046,2.57632 -1.454192,0 -2.633046,-1.15347 -2.633045,-2.57632 -1e-6,-1.42284 2.633045,-4.44514 2.633045,-4.44514 0,0 2.633046,3.0223 2.633046,4.44514 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.63397;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 56.633486,105.10151 c 0,1.05108 -0.870846,1.90317 -1.945089,1.90317 -1.074242,0 -1.945088,-0.85209 -1.945087,-1.90317 -10e-7,-1.05109 1.945087,-3.28373 1.945087,-3.28373 0,0 1.945089,2.23264 1.945089,3.28373 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 59.828906,86.927511 v 5.16e-4 c -4.1396,0 -7.616896,2.836823 -8.593274,6.672461 -0.242028,-0.03274 -0.485955,-0.04949 -0.730188,-0.05013 -3.067873,2.45e-4 -5.55474,2.487344 -5.554699,5.555217 -4.3e-5,3.067885 2.486824,5.554975 5.554699,5.555225 0.15232,-6.3e-4 1e-6,0 0.456303,0 h 0.765845 c 0.07385,0 0.145239,-0.0587 0.163814,-0.13023 0.07505,-0.28876 0.198529,-0.54623 0.331246,-0.80615 0.213728,-0.41857 0.477292,-0.8258 0.736389,-1.19321 0.518201,-0.73482 1.030945,-1.3224 1.030945,-1.3224 l 0.697632,-0.80047 0.699182,0.80047 c 0,0 0.512744,0.58758 1.030945,1.3224 0.2591,0.36741 0.522661,0.77464 0.736389,1.19321 0.122934,0.24076 0.237613,0.47923 0.313159,0.74259 0.03035,0.1058 0.136644,0.19379 0.247014,0.19379 h 2.114599 1.944584 c 0.115731,0 0.246829,-0.0862 0.297657,-0.19017 0.02269,-0.0464 0.04578,-0.0925 0.06925,-0.1385 0.16814,-0.32928 0.372192,-0.64069 0.570508,-0.9219 0.396629,-0.56244 0.787032,-1.00976 0.787032,-1.00976 l 0.697632,-0.80099 0.699182,0.80099 c 0,0 0.390399,0.44732 0.787032,1.00976 0.198316,0.28121 0.401851,0.59262 0.569991,0.9219 0.03654,0.0748 0.07357,0.14943 0.110071,0.22428 0.04504,0.094 0.143918,0.10358 0.156063,0.10439 h 2.177645 v -0.0217 c 0.101738,0.0102 0.203758,0.0175 0.305924,0.0217 2.871121,-3.2e-4 5.198389,-2.32805 5.198132,-5.199175 -3.17e-4,-2.870715 -2.327417,-5.197815 -5.198132,-5.198132 -0.145409,0.0042 -0.290575,0.01459 -0.435116,0.03101 -0.712753,-4.18234 -4.351954,-7.366992 -8.737451,-7.366992 z\' /> </g> </g> </svg>"}},{"codes":[1150,1063,1180,1183,1240],"condition":[{"name":"rain-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-42.641801,-42.436502)\'> <g transform=\'translate(3.6389904e-5,-3.3748568)\'> <path style=\'fill:#9abfcf;stroke-width:2.35857;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 55.89142,49.191559 c -0.189684,0.01331 -0.292221,0.184521 -0.25063,0.44235 0.06867,0.425722 0.103037,0.856403 0.103353,1.288294 -6.8e-5,4.48899 -3.639196,8.128289 -8.128186,8.128186 -0.593474,-0.003 -1.183912,-0.07129 -1.761133,-0.202572 -0.410238,-0.0933 -0.657447,0.130015 -0.521415,0.528133 0.730567,2.13813 2.305002,3.835491 4.290177,4.750615 0.463555,-2.490653 2.654887,-4.391901 5.27513,-4.39198 h 0.002 c 0.0039,1.1e-5 0.008,-1.9e-5 0.01189,0 0.957069,-2.602956 3.182251,-4.520728 5.948475,-5.051372 -0.638758,-2.432821 -2.379003,-4.470007 -4.753199,-5.449796 -0.08048,-0.03321 -0.153296,-0.0463 -0.216524,-0.04186 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 62.357356,55.362669 c -3.311682,0 -6.092896,2.269144 -6.873999,5.337659 -0.193636,-0.02622 -0.389057,-0.03926 -0.58446,-0.03979 -2.454485,7.5e-5 -4.443834,1.989685 -4.443657,4.444173 8.1e-5,2.4543 1.989355,4.444101 4.443657,4.444173 0.121881,-4.56e-4 2.33e-4,0 0.365352,0 h 0.462843 c 0.189319,0 0.3483,-0.154726 0.390595,-0.339025 0.06224,-0.271222 0.173607,-0.499333 0.290678,-0.72861 0.177257,-0.347142 0.393108,-0.67823 0.603581,-0.976684 0.420947,-0.596912 0.836125,-1.072286 0.836125,-1.072286 l 0.697115,-0.803052 0.699182,0.803052 c 0,0 0.415178,0.475374 0.836125,1.072286 0.21047,0.298454 0.426326,0.629542 0.60358,0.976684 0.117867,0.230831 0.229949,0.460482 0.291941,0.734133 0.04109,0.181377 0.19752,0.333502 0.383764,0.333502 h 0.997578 1.435747 c 0.173427,0 0.345706,-0.138019 0.413169,-0.297567 0.04183,-0.09892 0.08886,-0.19152 0.135976,-0.283793 0.140788,-0.275716 0.308928,-0.530659 0.470772,-0.76016 0.323692,-0.459002 0.640271,-0.822172 0.640271,-0.822172 l 0.699182,-0.802535 0.697632,0.802535 c 0,0 0.318648,0.36317 0.642338,0.822172 0.161846,0.229501 0.327919,0.484444 0.468706,0.76016 0.04081,0.07992 0.08155,0.160085 0.118908,0.244386 0.07975,0.179986 0.276195,0.336974 0.473535,0.336974 h 0.897388 v -0.01757 c 0.08136,0.0082 0.162734,0.01421 0.24443,0.01757 2.296917,-1.28e-4 4.159036,-1.86252 4.158919,-4.159436 -1.26e-4,-2.296752 -1.862174,-4.158273 -4.158919,-4.158402 -0.116227,0.0032 -0.232259,0.0116 -0.347783,0.0248 -0.570203,-3.345908 -3.48187,-5.89318 -6.990271,-5.89318 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.58038;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 67.319295,69.962919 c 0,0.630656 -0.522508,1.141912 -1.167053,1.141912 -0.644546,0 -1.167054,-0.511256 -1.167053,-1.141912 -1e-6,-0.630648 1.167053,-1.970232 1.167053,-1.970232 0,0 1.167053,1.339584 1.167053,1.970232 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 64.561855,74.237607 c 0,1.13828 -0.943084,2.061056 -2.106436,2.061056 -1.163354,0 -2.106437,-0.922776 -2.106436,-2.061056 -10e-7,-1.138272 2.106436,-3.556112 2.106436,-3.556112 0,0 2.106436,2.41784 2.106436,3.556112 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.10718;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 60.102104,69.666959 c 0,0.840864 -0.696677,1.522536 -1.556071,1.522536 -0.859394,0 -1.55607,-0.681672 -1.55607,-1.522536 0,-0.840872 1.55607,-2.626984 1.55607,-2.626984 0,0 1.556071,1.786112 1.556071,2.626984 z\' /> </g> </g> </svg>"},{"name":"rain-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-42.641801,-0.10317271)\'> <g transform=\'translate(-4.1957499e-5,1.910879)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 54.571857,1.3808559 a 0.596604,0.596604 0 0 0 -0.596863,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.596863,0.596346 0.596604,0.596604 0 0 0 0.595829,-0.596346 V 1.9772019 a 0.596604,0.596604 0 0 0 -0.595829,-0.596346 z m 6.069913,2.4794355 a 0.596604,0.596604 0 0 0 -0.421679,0.174666 l -1.316716,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.843359,0 l 1.316716,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.125875,0.01499 a 0.596604,0.596604 0 0 0 -0.422196,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.317232,1.316715 a 0.596604,0.596604 0 0 0 0.84336,0 0.596604,0.596604 0 0 0 0,-0.843359 l -1.316716,-1.31672 a 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m 6.055445,2.06189 a 4.5898942,4.5898942 0 0 0 -4.589901,4.5898996 4.5898942,4.5898942 0 0 0 1.245919,3.125908 c 0.947505,-0.835297 2.185682,-1.34768 3.540869,-1.347722 h 0.0021 c 0.0033,9e-6 0.0065,-1.5e-5 0.0098,0 0.674128,-1.83344 1.980816,-3.3223286 3.659724,-4.2302316 a 4.5898942,4.5898942 0 0 0 -3.868497,-2.137854 z m -8.547282,3.993554 a 0.596604,0.596604 0 0 0 -0.596863,0.5963456 0.596604,0.596604 0 0 0 0.596863,0.596863 H 47.88596 A 0.596604,0.596604 0 0 0 48.482306,10.527071 0.596604,0.596604 0 0 0 47.88596,9.9307254 Z m 3.801835,4.7454426 a 0.596604,0.596604 0 0 0 -0.422196,0.174666 l -1.316199,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.843359,0 l 0.632003,-0.632003 c 0.138851,-0.553718 0.362835,-1.073588 0.659391,-1.545125 a 0.596604,0.596604 0 0 0 -0.396358,-0.157613 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 62.226177,7.9343994 c -3.311682,0 -6.092896,2.2691436 -6.873999,5.3376586 -0.193636,-0.02622 -0.389057,-0.03926 -0.58446,-0.03979 -2.454485,7.5e-5 -4.443834,1.989685 -4.443657,4.444173 8.1e-5,2.4543 1.989355,4.444101 4.443657,4.444173 0.121881,-4.56e-4 2.33e-4,0 0.365352,0 h 0.449323 c 0.196786,0 0.361945,-0.160941 0.407183,-0.352193 0.06279,-0.265456 0.172438,-0.489885 0.28761,-0.715442 0.177257,-0.347142 0.393108,-0.67823 0.603581,-0.976684 0.420947,-0.596912 0.836125,-1.072286 0.836125,-1.072286 l 0.697115,-0.803052 0.699182,0.803052 c 0,0 0.415178,0.475374 0.836125,1.072286 0.21047,0.298454 0.426326,0.629542 0.60358,0.976684 0.116548,0.228248 0.22744,0.455342 0.289841,0.724962 0.0431,0.186227 0.203833,0.342673 0.395273,0.342673 h 0.988169 1.510975 c 0.13188,0 0.262655,-0.104742 0.309803,-0.227803 0.0482,-0.125802 0.106094,-0.23993 0.164114,-0.353557 0.140788,-0.275716 0.308928,-0.530659 0.470772,-0.76016 0.323692,-0.459002 0.640271,-0.822172 0.640271,-0.822172 l 0.699182,-0.802535 0.697632,0.802535 c 0,0 0.318648,0.36317 0.642338,0.822172 0.161846,0.229501 0.327919,0.484444 0.468706,0.76016 0.03665,0.07178 0.07325,0.143756 0.107392,0.218751 0.08797,0.193245 0.300293,0.362609 0.513155,0.362609 h 0.869284 v -0.01757 c 0.08136,0.0082 0.162734,0.01421 0.24443,0.01757 2.296917,-1.28e-4 4.159036,-1.86252 4.158919,-4.159436 -1.26e-4,-2.296752 -1.862174,-4.158273 -4.158919,-4.158402 -0.116227,0.0032 -0.232259,0.0116 -0.347783,0.0248 -0.570203,-3.345908 -3.48187,-5.8931796 -6.990271,-5.8931796 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.58038;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 67.188116,22.534649 c 0,0.630656 -0.522508,1.141912 -1.167053,1.141912 -0.644546,0 -1.167054,-0.511256 -1.167053,-1.141912 -10e-7,-0.630648 1.167053,-1.970232 1.167053,-1.970232 0,0 1.167053,1.339584 1.167053,1.970232 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 64.430676,26.809337 c 0,1.13828 -0.943084,2.061056 -2.106436,2.061056 -1.163354,0 -2.106437,-0.922776 -2.106436,-2.061056 -10e-7,-1.138272 2.106436,-3.556112 2.106436,-3.556112 0,0 2.106436,2.41784 2.106436,3.556112 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.10718;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 59.970925,22.238689 c 0,0.840864 -0.696677,1.522536 -1.556071,1.522536 -0.859394,0 -1.55607,-0.681672 -1.55607,-1.522536 0,-0.840872 1.55607,-2.626984 1.55607,-2.626984 0,0 1.556071,1.786112 1.556071,2.626984 z\' /> </g> </g> </svg>"}]},{"codes":[1114,1117,1147,1168,1171,1219,1225,1237,1258,1264],"condition":{"name":"snow","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-85.850618,-84.824076)\'> <g transform=\'translate(-42.333104,0.39973898)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 145.37097,89.104639 c -4.13957,0 -7.61641,2.836822 -8.59275,6.672461 -0.24205,-0.0328 -0.48646,-0.04953 -0.73071,-0.05013 -3.06812,9e-5 -5.55492,2.48712 -5.5547,5.55522 9e-5,2.77874 2.04178,5.07526 4.70617,5.4839 0.2803,0.043 0.50713,-0.17809 0.56483,-0.45527 0.24709,-1.18695 1.30894,-2.09187 2.56418,-2.09186 1.29549,0 2.38584,0.96356 2.58641,2.20659 0.0364,0.22528 0.21816,0.41186 0.44648,0.41186 h 0.78135 c 0.19662,0 0.3534,-0.16041 0.38034,-0.35502 0.17587,-1.27043 1.27945,-2.26343 2.59467,-2.26343 1.33285,0 2.448,1.01972 2.60088,2.31459 0.0197,0.16683 0.1545,0.30386 0.32246,0.30386 h 0.89865 c 0.19214,0 0.3453,-0.15649 0.37104,-0.34675 0.1724,-1.27428 1.27824,-2.2717 2.59622,-2.2717 1.30552,-10e-6 2.39933,0.9796 2.58744,2.23656 l -0.004,-0.0419 c 0.0732,0.29593 0.20212,0.38684 0.25994,0.41341 2.77458,-0.10948 4.99157,-2.38744 4.99142,-5.18883 -1.5e-4,-2.87093 -2.32719,-5.197975 -5.19813,-5.198135 -0.14528,0.004 -0.29071,0.01502 -0.43512,0.03152 -0.71275,-4.182386 -4.35194,-7.366992 -8.73745,-7.366992 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 153.60035,106.8374 a 1.6933334,1.6933334 0 0 1 -1.69334,1.69334 1.6933334,1.6933334 0 0 1 -1.69333,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,1.69333 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 150.19727,111.9174 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69333 1.6933334,1.6933334 0 0 1 -1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,1.69334 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 143.42394,111.9174 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69333 1.6933334,1.6933334 0 0 1 -1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,1.69334 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 146.81061,106.8374 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69334 1.6933334,1.6933334 0 0 1 -1.69333,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,-1.69333 1.6933334,1.6933334 0 0 1 1.69333,1.69333 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 140.02088,106.8374 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69334 1.6933334,1.6933334 0 0 1 -1.69334,-1.69334 1.6933334,1.6933334 0 0 1 1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69333,1.69333 z\' /> </g> </g> </g> </svg> "}},{"codes":[1066,1210,1213,1216,1222,1255,1261],"condition":[{"name":"snow-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-84.975129,-42.436502)\'> <g transform=\'translate(0,2.1781876)\'> <path style=\'fill:#9abfcf;stroke-width:2.35857;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 98.224749,44.304113 c -0.189684,0.01331 -0.292221,0.184521 -0.25063,0.44235 0.06867,0.425722 0.103037,0.856403 0.103353,1.288294 -6.8e-5,4.48899 -3.639196,8.128289 -8.128186,8.128186 -0.593474,-0.003 -1.183912,-0.07129 -1.761133,-0.202572 -0.410238,-0.0933 -0.657447,0.130015 -0.521415,0.528133 0.730567,2.13813 2.305002,3.835491 4.290177,4.750615 0.463555,-2.490653 2.654887,-4.391901 5.27513,-4.39198 h 0.002 c 0.0039,1.1e-5 0.008,-1.9e-5 0.01189,0 0.957069,-2.602956 3.182245,-4.520728 5.948475,-5.051372 -0.63876,-2.432821 -2.37901,-4.470007 -4.753199,-5.449796 -0.08048,-0.03321 -0.153296,-0.0463 -0.216524,-0.04186 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 104.69069,50.475222 c -3.31168,0 -6.092901,2.269147 -6.874001,5.337659 -0.19364,-0.02622 -0.38906,-0.03926 -0.58446,-0.03979 -2.45448,7.5e-5 -4.44384,1.989688 -4.44366,4.444174 7.2e-5,2.070245 1.415566,3.809902 3.331606,4.30369 0.356532,0.09188 0.650285,-0.189222 0.761372,-0.539121 0.29288,-0.922509 1.162898,-1.601396 2.175372,-1.601394 1.148021,4e-6 2.111921,0.87271 2.259801,1.983811 0.0217,0.163053 0.153,0.297187 0.3175,0.297187 h 0.20389 c 0.2038,0 0.3659,-0.166528 0.39919,-0.367357 0.1786,-1.077453 1.12761,-1.913637 2.25134,-1.913641 1.15758,1.4e-5 2.12799,0.887351 2.26332,2.011691 0.0178,0.147933 0.13689,0.269307 0.28586,0.269307 h 0.2608 c 0.18789,0 0.33755,-0.153349 0.36587,-0.338915 0.16647,-1.091144 1.12226,-1.942078 2.25586,-1.942083 1.09163,-1.1e-5 2.01679,0.789112 2.23218,1.821935 0.0511,0.244781 0.25086,0.44455 0.49832,0.407413 2.00136,-0.300336 3.53692,-2.02275 3.53681,-4.107786 -1.2e-4,-2.29675 -1.86217,-4.158274 -4.15892,-4.158403 -0.11622,0.0032 -0.23226,0.0116 -0.34778,0.0248 -0.5702,-3.345903 -3.48187,-5.893177 -6.99027,-5.893177 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 111.27442,64.661352 a 1.3546667,1.3546667 0 0 1 -1.35468,1.354672 1.3546667,1.3546667 0 0 1 -1.35466,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35468,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 108.55195,68.725352 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 103.13329,68.725352 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 105.84262,64.661352 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354672 1.3546667,1.3546667 0 0 1 -1.35466,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35466,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 100.41084,64.661352 a 1.3546667,1.3546667 0 0 1 -1.354671,1.354672 1.3546667,1.3546667 0 0 1 -1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.354671,1.354664 z\' /> </g> </g> </svg> "},{"name":"snow-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-84.975129,-0.10317289)\'> <g transform=\'translate(-4.3900353e-5,2.4746539)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 96.905186,1.482703 a 0.596604,0.596604 0 0 0 -0.596863,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.596863,0.596346 0.596604,0.596604 0 0 0 0.595829,-0.596346 V 2.079049 A 0.596604,0.596604 0 0 0 96.905186,1.482703 Z m 6.069914,2.4794355 a 0.596604,0.596604 0 0 0 -0.42168,0.174666 l -1.31672,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.84336,0 l 1.31672,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.125876,0.01499 a 0.596604,0.596604 0 0 0 -0.422196,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.317232,1.316715 a 0.596604,0.596604 0 0 0 0.84336,0 0.596604,0.596604 0 0 0 0,-0.843359 l -1.316716,-1.31672 a 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m 6.055445,2.06189 a 4.5898942,4.5898942 0 0 0 -4.589901,4.5899005 4.5898942,4.5898942 0 0 0 1.245919,3.125908 c 0.947505,-0.835298 2.185682,-1.34768 3.540869,-1.347723 h 0.0021 c 0.0033,9e-6 0.0065,-1.5e-5 0.0098,0 0.674128,-1.833439 1.980816,-3.3223285 3.659724,-4.2302315 a 4.5898942,4.5898942 0 0 0 -3.868497,-2.137854 z m -8.547282,3.9935545 a 0.596604,0.596604 0 0 0 -0.596863,0.596346 0.596604,0.596604 0 0 0 0.596863,0.596863 h 1.861902 a 0.596604,0.596604 0 0 0 0.596346,-0.596863 0.596604,0.596604 0 0 0 -0.596346,-0.596346 z m 3.801835,4.745443 a 0.596604,0.596604 0 0 0 -0.422196,0.174666 l -1.316199,1.316715 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.843359,0 l 0.632003,-0.632002 c 0.138851,-0.553718 0.362835,-1.073588 0.659391,-1.545125 a 0.596604,0.596604 0 0 0 -0.396358,-0.157613 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 104.55951,8.0362015 c -3.31168,0 -6.092896,2.2691475 -6.873998,5.3376595 -0.193636,-0.02622 -0.389058,-0.03926 -0.584461,-0.03979 -2.45448,7.5e-5 -4.443834,1.989688 -4.443656,4.444174 7e-5,2.110133 1.470632,3.876816 3.442906,4.330838 0.297284,0.06844 0.540974,-0.161775 0.618196,-0.456241 0.256486,-0.978047 1.154923,-1.711425 2.207249,-1.711422 1.148734,4e-6 2.113124,0.87381 2.260074,1.985911 0.0214,0.161916 0.15177,0.295087 0.3151,0.295087 l 0.21403,0 c 0.19937,0 0.35801,-0.162852 0.38987,-0.359439 0.17526,-1.081272 1.12616,-1.921554 2.25264,-1.921559 1.15888,1.4e-5 2.13017,0.889349 2.26377,2.015487 0.0173,0.14587 0.13473,0.265511 0.28159,0.265511 h 0.33191 c 0.15073,0 0.27119,-0.122725 0.28943,-0.272257 0.13693,-1.122949 1.10843,-2.008736 2.26501,-2.008741 1.11881,-1.2e-5 2.06275,0.828893 2.24694,1.89952 0.035,0.203623 0.20042,0.367601 0.40535,0.340808 2.03942,-0.266636 3.61513,-2.006651 3.61502,-4.118766 -1.2e-4,-2.29675 -1.86217,-4.158274 -4.15892,-4.158403 -0.11622,0.0032 -0.23226,0.0116 -0.34778,0.0248 -0.5702,-3.345903 -3.48187,-5.8931775 -6.99027,-5.8931775 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 111.14324,22.222332 a 1.3546667,1.3546667 0 0 1 -1.35468,1.354672 1.3546667,1.3546667 0 0 1 -1.35466,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35468,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 108.42077,26.286332 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 103.00211,26.286332 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 105.71144,22.222332 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354672 1.3546667,1.3546667 0 0 1 -1.35466,-1.354672 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35466,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 100.27966,22.222332 a 1.3546667,1.3546667 0 0 1 -1.354666,1.354672 1.3546667,1.3546667 0 0 1 -1.354672,-1.354672 1.3546667,1.3546667 0 0 1 1.354672,-1.354664 1.3546667,1.3546667 0 0 1 1.354666,1.354664 z\' /> </g> </g> </svg> "}]},{"codes":[1201,1207,1252],"condition":{"name":"sleet","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-128.10703,-84.824076)\'> <g transform=\'translate(1.1742547e-4,1.5774452)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 145.29386,87.254342 c -4.13961,0 -7.61638,2.837349 -8.59276,6.672978 -0.24205,-0.03278 -0.48593,-0.04997 -0.73019,-0.05064 -3.06808,9.4e-5 -5.55543,2.487643 -5.55521,5.555733 1e-4,2.700197 1.92867,4.944447 4.48241,5.444627 0.16921,0.0331 0.35232,-0.0812 0.4222,-0.23875 0.0508,-0.1144 0.10635,-0.22647 0.16381,-0.33899 0.21373,-0.41857 0.47729,-0.82425 0.73639,-1.19166 0.5182,-0.73482 1.03146,-1.3224 1.03146,-1.3224 l 0.69918,-0.80047 0.69712,0.80047 c 0,0 0.51326,0.58758 1.03146,1.3224 0.2591,0.36741 0.52266,0.77309 0.73639,1.19166 0.0467,0.0915 0.0922,0.18246 0.13487,0.27491 0.10262,0.2226 0.36134,0.41342 0.60669,0.41342 l 2.72748,-5.2e-4 c 0.0473,-0.002 0.24046,-0.0282 0.29714,-0.32194 l 0.001,-0.0109 -0.002,0.0326 c 0.15099,-1.29688 1.26554,-2.31925 2.59985,-2.31924 1.32529,0 2.43336,1.00899 2.59622,2.2934 l -0.003,-0.0372 c 0.0713,0.33305 0.25071,0.36111 0.27285,0.36329 l -0.24753,-5.2e-4 v 0.001 h 0.86144 l -0.17156,-5.2e-4 c 0.029,-0.002 0.14742,-0.027 0.185,-0.2651 2e-5,-1.7e-4 -2e-5,-3.5e-4 0,-5.2e-4 v -10e-4 c 1.3e-4,-0.001 3.9e-4,-0.002 5.2e-4,-0.004 l 0.002,-0.0124 v 0.004 c 0.14095,-1.30723 1.26217,-2.34094 2.60397,-2.34094 1.18436,-1e-5 2.19805,0.80494 2.51664,1.89291 0.0979,0.33448 0.38144,0.57078 0.71262,0.46044 2.06528,-0.68805 3.55444,-2.63601 3.55431,-4.932516 -1.5e-4,-2.87092 -2.3272,-5.19849 -5.19814,-5.19865 -0.14528,0.004 -0.29018,0.01502 -0.43459,0.03152 -0.71275,-4.182378 -4.35252,-7.366992 -8.73797,-7.366992 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:3.56557;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 145.04036,110.5295 c 0,1.42285 -1.17886,2.57632 -2.63305,2.57632 -1.45419,0 -2.63304,-1.15347 -2.63304,-2.57632 0,-1.42284 2.63304,-4.44514 2.63304,-4.44514 0,0 2.63305,3.0223 2.63305,4.44514 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.63397;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 139.89599,105.67743 c 0,1.05108 -0.87085,1.90317 -1.94509,1.90317 -1.07424,0 -1.94509,-0.85209 -1.94509,-1.90317 0,-1.05109 1.94509,-3.28373 1.94509,-3.28373 0,0 1.94509,2.23264 1.94509,3.28373 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 154.57513,104.98714 a 1.6933334,1.6933334 0 0 1 -1.69334,1.69335 1.6933334,1.6933334 0 0 1 -1.69333,-1.69335 1.6933334,1.6933334 0 0 1 1.69333,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,1.69333 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 151.81369,110.5688 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69333 1.6933334,1.6933334 0 0 1 -1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,1.69334 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 148.47506,104.98716 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69333 1.6933334,1.6933334 0 0 1 -1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,-1.69335 1.6933334,1.6933334 0 0 1 1.69333,1.69335 z\' /> </g> </g> </svg> "}},{"codes":[1069,1072,1198,1204,1249],"condition":[{"name":"sleet-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-128.10703,-42.436502)\'> <g transform=\'translate(-1.1281013e-4,1.0803932)\'> <path style=\'fill:#9abfcf;stroke-width:2.35857;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 141.35665,44.863757 c -0.18969,0.01331 -0.29222,0.184521 -0.25063,0.44235 0.0687,0.425722 0.10304,0.856403 0.10335,1.288294 -7e-5,4.48899 -3.63919,8.128289 -8.12818,8.128186 -0.59348,-0.003 -1.18392,-0.07129 -1.76114,-0.202572 -0.41024,-0.0933 -0.65744,0.130015 -0.52141,0.528133 0.73056,2.13813 2.305,3.835491 4.29017,4.750615 0.46356,-2.490653 2.65489,-4.391901 5.27514,-4.39198 h 0.002 c 0.004,1.1e-5 0.008,-1.9e-5 0.0119,0 0.95707,-2.602956 3.18225,-4.520728 5.94848,-5.051372 -0.63876,-2.432821 -2.37901,-4.470007 -4.7532,-5.449796 -0.0805,-0.03321 -0.1533,-0.0463 -0.21653,-0.04186 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 147.82282,51.034871 c -3.31167,0 -6.09341,2.269672 -6.87452,5.338175 -0.19363,-0.02622 -0.38854,-0.03978 -0.58394,-0.04031 -2.45448,7.5e-5 -4.44435,1.989694 -4.44418,4.444174 7e-5,1.911721 1.20885,3.538299 2.90267,4.16512 0.17269,0.06391 0.36895,-0.03631 0.44907,-0.202055 0.025,-0.05166 0.0509,-0.102825 0.077,-0.153996 0.17726,-0.347135 0.39311,-0.67616 0.60358,-0.974617 0.42094,-0.596906 0.83561,-1.074353 0.83561,-1.074353 l 0.69918,-0.800468 0.69763,0.800468 c 0,0 0.41673,0.477447 0.83768,1.074353 0.21047,0.298457 0.42425,0.627481 0.60151,0.974617 0.0642,0.125812 0.12684,0.251795 0.18087,0.384473 0.0553,0.135847 0.2066,0.250631 0.35346,0.250631 h 1.89291 c 0,0 0.20051,-0.02317 0.23048,-0.226343 0.1154,-1.144905 1.09763,-2.055174 2.27014,-2.055172 1.24287,7e-6 2.27053,1.023069 2.27997,2.263945 l -0.001,-0.08165 c 0.009,0.08756 0.067,0.09804 0.0816,0.09922 h 0.19844 c 0,0 0.0391,-0.0167 0.0429,-0.0863 l -0.002,0.0863 h 5.1e-4 v -5.17e-4 c 0,-1.248626 1.03238,-2.281001 2.281,-2.280998 1.13763,-3e-6 2.09411,0.857144 2.25516,1.953886 0.0231,0.157242 0.15126,0.270993 0.30696,0.239262 1.89655,-0.386518 3.32445,-2.060309 3.32434,-4.071069 -1.2e-4,-2.296744 -1.86167,-4.158274 -4.1584,-4.158403 -0.11623,0.0032 -0.23226,0.0116 -0.34778,0.0248 -0.5702,-3.345898 -3.48188,-5.89318 -6.99027,-5.89318 z m 3.00705,14.081311 h 5.2e-4 v 0.0047 c -1.6e-4,-0.0016 -4e-4,-0.003 -5.2e-4,-0.0047 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 147.15886,69.654909 c 0,1.13828 -0.94309,2.061056 -2.10644,2.061056 -1.16335,0 -2.10643,-0.922776 -2.10643,-2.061056 0,-1.138272 2.10643,-3.556112 2.10643,-3.556112 0,0 2.10644,2.41784 2.10644,3.556112 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.10718;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 143.04337,65.773253 c 0,0.840864 -0.69668,1.522536 -1.55608,1.522536 -0.85939,0 -1.55607,-0.681672 -1.55607,-1.522536 0,-0.840872 1.55607,-2.626984 1.55607,-2.626984 0,0 1.55608,1.786112 1.55608,2.626984 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 154.78668,65.221021 a 1.3546667,1.3546667 0 0 1 -1.35467,1.35468 1.3546667,1.3546667 0 0 1 -1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 152.57753,69.686349 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 149.90662,65.221037 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35466,1.35468 z\' /> </g> </g> </svg> "},{"name":"sleet-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-128.10703,-0.10317294)\'> <g transform=\'translate(-0.7353806,1.4026742)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 140.77257,2.0165444 a 0.596604,0.596604 0 0 0 -0.59687,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.59687,0.596346 0.596604,0.596604 0 0 0 0.59582,-0.596346 V 2.6128904 a 0.596604,0.596604 0 0 0 -0.59582,-0.596346 z m 6.06991,2.4794355 a 0.596604,0.596604 0 0 0 -0.42168,0.174666 l -1.31672,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.84336,0 l 1.31672,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.12588,0.01499 a 0.596604,0.596604 0 0 0 -0.42219,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.31723,1.316715 a 0.596604,0.596604 0 0 0 0.84336,0 0.596604,0.596604 0 0 0 0,-0.843359 l -1.31672,-1.31672 a 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m 6.05545,2.06189 a 4.5898942,4.5898942 0 0 0 -4.5899,4.5899001 4.5898942,4.5898942 0 0 0 1.24592,3.125908 c 0.9475,-0.835297 2.18568,-1.34768 3.54087,-1.347722 h 0.002 c 0.003,9e-6 0.007,-1.5e-5 0.01,0 0.67412,-1.83344 1.98081,-3.3223291 3.65972,-4.2302321 a 4.5898942,4.5898942 0 0 0 -3.8685,-2.137854 z m -8.54728,3.9935541 a 0.596604,0.596604 0 0 0 -0.59687,0.596346 0.596604,0.596604 0 0 0 0.59687,0.596863 h 1.8619 a 0.596604,0.596604 0 0 0 0.59634,-0.596863 0.596604,0.596604 0 0 0 -0.59634,-0.596346 z m 3.80183,4.745443 a 0.596604,0.596604 0 0 0 -0.4222,0.174666 l -1.31619,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.84336,0 l 0.632,-0.632003 c 0.13885,-0.553718 0.36283,-1.073588 0.65939,-1.545125 a 0.596604,0.596604 0 0 0 -0.39636,-0.157613 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 148.42712,8.5700199 c -3.31167,0 -6.09341,2.2696721 -6.87452,5.3381751 -0.19363,-0.02622 -0.38854,-0.03978 -0.58394,-0.04031 -2.45448,7.5e-5 -4.44435,1.989694 -4.44418,4.444174 7e-5,1.911721 1.20885,3.538299 2.90267,4.16512 0.17269,0.06391 0.36895,-0.03631 0.44907,-0.202055 0.025,-0.05166 0.0509,-0.102825 0.077,-0.153996 0.17726,-0.347135 0.39311,-0.67616 0.60358,-0.974617 0.42094,-0.596906 0.83561,-1.074353 0.83561,-1.074353 l 0.69918,-0.800468 0.69763,0.800468 c 0,0 0.41673,0.477447 0.83768,1.074353 0.21047,0.298457 0.42425,0.627481 0.60151,0.974617 0.0642,0.125812 0.12684,0.251795 0.18087,0.384473 0.0553,0.135847 0.2066,0.250631 0.35346,0.250631 h 1.89291 c 0,0 0.20051,-0.02317 0.23048,-0.226343 0.1154,-1.144905 1.09763,-2.055174 2.27014,-2.055172 1.24287,7e-6 2.27053,1.023069 2.27997,2.263945 l -0.001,-0.08165 c 0.009,0.08756 0.067,0.09804 0.0816,0.09922 h 0.19844 c 0,0 0.0391,-0.0167 0.0429,-0.0863 l -0.002,0.0863 h 5.1e-4 v -5.17e-4 c 0,-1.248626 1.03238,-2.281001 2.281,-2.280998 1.13763,-3e-6 2.09411,0.857144 2.25516,1.953886 0.0231,0.157242 0.15126,0.270993 0.30696,0.239262 1.89655,-0.386518 3.32445,-2.060309 3.32434,-4.071069 -1.2e-4,-2.296744 -1.86167,-4.158274 -4.1584,-4.158403 -0.11623,0.0032 -0.23226,0.0116 -0.34778,0.0248 -0.5702,-3.345898 -3.48188,-5.8931801 -6.99027,-5.8931801 z m 3.00705,14.0813111 h 5.2e-4 v 0.0047 c -1.6e-4,-0.0016 -4e-4,-0.003 -5.2e-4,-0.0047 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 147.76316,27.190058 c 0,1.13828 -0.94309,2.061056 -2.10644,2.061056 -1.16335,0 -2.10643,-0.922776 -2.10643,-2.061056 0,-1.138272 2.10643,-3.556112 2.10643,-3.556112 0,0 2.10644,2.41784 2.10644,3.556112 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.10718;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 143.64767,23.308402 c 0,0.840864 -0.69668,1.522536 -1.55608,1.522536 -0.85939,0 -1.55607,-0.681672 -1.55607,-1.522536 0,-0.840872 1.55607,-2.626984 1.55607,-2.626984 0,0 1.55608,1.786112 1.55608,2.626984 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 155.39098,22.75617 a 1.3546667,1.3546667 0 0 1 -1.35467,1.35468 1.3546667,1.3546667 0 0 1 -1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 153.18183,27.221498 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 150.51092,22.756186 a 1.3546667,1.3546667 0 0 1 -1.35466,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35466,1.35468 z\' /> </g> </g> </svg> "}]},{"codes":[1087],"condition":{"name":"thunder","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-171.18851,-84.824076)\'> <g transform=\'translate(86.044104,-0.10960473)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 102.33122,88.95116 v 5.16e-4 c -4.139611,0 -7.616376,2.836815 -8.592756,6.672461 -0.242029,-0.03274 -0.485955,-0.04949 -0.730188,-0.05013 -3.06808,-4e-5 -5.55526,2.487143 -5.555216,5.555223 -3.7e-5,3.06808 2.487141,5.55525 5.555216,5.55521 0.15232,-6.4e-4 0,0 0.456303,0 h 2.472541 a 0.93544269,0.93544269 142.53322 0 0 0.903287,-0.69228 l 1.491575,-5.54093 c 0.176287,-0.654279 0.781355,-1.114511 1.458826,-1.113111 h 0.0021 l 5.546942,0.01964 c 0.94024,0.0032 1.655,0.942801 1.40612,1.849501 l -0.6289,2.2872 h 0.37723 c 1.04876,1e-5 1.67812,1.35091 1.00356,2.15387 l -0.70873,0.84383 a 0.11702019,0.11702019 65.01347 0 0 0.0896,0.19228 h 4.31916 v -0.0217 c 0.10174,0.0102 0.20376,0.0175 0.30593,0.0217 2.87132,-3e-5 5.1989,-2.32784 5.19865,-5.19916 -3.1e-4,-2.870921 -2.32773,-5.198105 -5.19865,-5.198135 -0.14524,0.0043 -0.29023,0.01461 -0.4346,0.03101 -0.71276,-4.18235 -4.35247,-7.366992 -8.73797,-7.366992 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:6.1528;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 99.226847,100.69302 -1.936982,7.18931 a 0.38910981,0.38910981 0 0 0 0.371555,0.49031 l 1.603487,0.0171 -1.100803,6.02611 a 0.31110939,0.31110939 0 0 0 0.544254,0.25602 l 8.080032,-9.61871 a 0.38541692,0.38541692 0 0 0 -0.2951,-0.63333 h -1.58889 l 0.94908,-3.45803 a 0.53712892,0.53712892 0 0 0 -0.51615,-0.6793 l -5.548464,-0.0186 a 0.58003287,0.58003287 0 0 0 -0.562019,0.42913 z\' /> </g> </g> </svg> "}},{"codes":[1276],"condition":{"name":"thunder-rain","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-214.64046,-84.824076)\'> <g transform=\'translate(45.307134,-0.24758482)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 186.5204,88.841668 c -4.13962,0 -7.61693,2.83734 -8.59327,6.672978 -0.24204,-0.0328 -0.48594,-0.05004 -0.73019,-0.05064 -3.06811,9e-5 -5.55492,2.487635 -5.5547,5.555734 8e-5,2.25869 1.35084,4.19716 3.28662,5.0648 0.2071,0.0928 0.42874,-0.0237 0.48782,-0.24288 l 1.35496,-5.02708 c 0.17646,-0.6549 0.78058,-1.117474 1.45883,-1.115174 l 5.54901,0.01964 c 0.94023,0.0032 1.65499,0.942794 1.40612,1.849504 l -0.62684,2.2872 h 0.37311 c 1.04871,0 1.67811,1.35142 1.00355,2.15439 l -0.22892,0.27233 c -0.0973,0.11585 -0.0149,0.29262 0.13642,0.29249 h 0.67748 5.40122 c 0,0 0.45639,-0.0729 0.77308,-0.55035 0.26053,-0.39627 0.26106,-0.39596 0.31681,-0.47749 0.39663,-0.56244 0.7891,-1.01183 0.7891,-1.01183 l 0.69763,-0.80098 0.69918,0.80098 c 0,0 0.41021,0.43593 0.78703,1.01183 0.39223,0.59944 0,0 0.39223,0.59944 0.19313,0.30601 0.58008,0.25809 0.67386,0.24133 2.21157,-0.59737 3.84071,-2.61157 3.84059,-5.01209 -1.6e-4,-2.870943 -2.32723,-5.198496 -5.19813,-5.198656 -0.14528,0.004 -0.29072,0.01502 -0.43512,0.03152 -0.71276,-4.182379 -4.35198,-7.366992 -8.73745,-7.366992 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:6.1528;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 177.66514,101.05457 -1.93699,7.18931 a 0.38910981,0.38910981 0 0 0 0.37156,0.49031 l 1.60349,0.0171 -1.10081,6.02611 a 0.31110939,0.31110939 0 0 0 0.54426,0.25602 l 8.08003,-9.61871 a 0.38541692,0.38541692 0 0 0 -0.2951,-0.63333 h -1.58889 l 0.94908,-3.45803 a 0.53712892,0.53712892 0 0 0 -0.51615,-0.6793 l -5.54847,-0.0186 a 0.58003287,0.58003287 0 0 0 -0.56201,0.42913 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.97547;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 195.95763,107.60685 c 0,0.78832 -0.65314,1.42739 -1.45882,1.42739 -0.80568,0 -1.45881,-0.63907 -1.45881,-1.42739 0,-0.78831 1.45881,-2.46278 1.45881,-2.46278 0,0 1.45882,1.67447 1.45882,2.46278 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:3.56557;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 192.01681,112.59206 c 0,1.42285 -1.17886,2.57632 -2.63305,2.57632 -1.45419,0 -2.63304,-1.15347 -2.63304,-2.57632 0,-1.42284 2.63304,-4.44514 2.63304,-4.44514 0,0 2.63305,3.0223 2.63305,4.44514 z\' /> </g> </g> </svg> "}},{"codes":[1273],"condition":[{"name":"thunder-rain-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-214.64046,-42.436502)\'> <g transform=\'translate(-0.76408415,-1.7195483)\'> <path style=\'fill:#9abfcf;stroke-width:2.35857;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 228.65425,47.479114 c -0.18969,0.01331 -0.29222,0.184521 -0.25063,0.44235 0.0687,0.425722 0.10304,0.856403 0.10335,1.288294 -7e-5,4.48899 -3.63919,8.128289 -8.12818,8.128186 -0.59348,-0.003 -1.18392,-0.07129 -1.76114,-0.202572 -0.41024,-0.0933 -0.65744,0.130015 -0.52141,0.528133 0.73056,2.13813 2.305,3.835491 4.29017,4.750615 0.46356,-2.490653 2.65489,-4.391901 5.27514,-4.39198 h 0.002 c 0.004,1.1e-5 0.008,-1.9e-5 0.0119,0 0.95707,-2.602956 3.18225,-4.520728 5.94848,-5.051372 -0.63876,-2.432821 -2.37901,-4.470007 -4.7532,-5.449796 -0.0805,-0.03321 -0.1533,-0.0463 -0.21653,-0.04186 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 235.12081,53.650224 c -3.31168,0 -6.09342,2.269669 -6.87452,5.338175 -0.19364,-0.02622 -0.38854,-0.03978 -0.58394,-0.04031 -2.45448,7.5e-5 -4.44435,1.990213 -4.44418,4.44469 6e-5,1.800523 1.07156,3.349755 2.61121,4.047815 0.28839,0.130751 0.60335,-0.04546 0.68575,-0.351399 l 1.05575,-3.920691 c 0.16277,-0.604122 0.72206,-1.031495 1.34772,-1.029395 l 4.43746,0.01602 c 0.86946,0.0029 1.53291,0.876156 1.30276,1.714624 l -0.43718,1.595768 h 0.0563 c 0.98316,6e-6 1.57757,1.27446 0.94515,2.027266 -0.18356,0.320577 0.097,0.34221 0.13282,0.343649 h 3.3636 c 0.0462,-0.001 0.24215,-0.02386 0.4222,-0.323495 l -0.0486,0.09509 c 0.13494,-0.256476 0.28892,-0.497259 0.4408,-0.712618 0.32369,-0.459001 0.64233,-0.822689 0.64233,-0.822689 l 0.69763,-0.800468 0.69919,0.800468 c 0,0 0.31658,0.363688 0.64026,0.822689 0.16185,0.2295 0.33,0.485996 0.47078,0.761711 0.001,0.0026 0.003,0.0052 0.004,0.0078 0.067,0.112551 0.22311,0.128319 0.31006,0.127641 2.04078,-0.265447 3.619,-2.001815 3.6189,-4.114995 -1.3e-4,-2.296741 -1.86167,-4.15879 -4.15841,-4.158919 -0.11622,0.0032 -0.23225,0.01212 -0.34778,0.02532 -0.5702,-3.345901 -3.48188,-5.893697 -6.99027,-5.893697 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:4.92224;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 228.46529,63.409443 -1.54959,5.751448 a 0.31128785,0.31128785 0 0 0 0.29725,0.392248 l 1.28279,0.01368 -0.88065,4.820888 a 0.24888751,0.24888751 0 0 0 0.43541,0.204816 l 6.46402,-7.694968 a 0.30833354,0.30833354 0 0 0 -0.23608,-0.506664 h -1.2711 l 0.75926,-2.766424 a 0.42970314,0.42970314 0 0 0 -0.41292,-0.54344 l -4.43878,-0.01488 a 0.4640263,0.4640263 0 0 0 -0.44961,0.343304 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.58038;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 242.04095,68.651267 c 0,0.630656 -0.52251,1.141912 -1.16705,1.141912 -0.64455,0 -1.16705,-0.511256 -1.16705,-1.141912 0,-0.630648 1.16705,-1.970224 1.16705,-1.970224 0,0 1.16705,1.339576 1.16705,1.970224 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 238.88829,72.639435 c 0,1.13828 -0.94309,2.061056 -2.10643,2.061056 -1.16337,0 -2.10644,-0.922776 -2.10644,-2.061056 0,-1.138272 2.10644,-3.556112 2.10644,-3.556112 0,0 2.10643,2.41784 2.10643,3.556112 z\' /> </g> </g> </svg> "},{"name":"thunder-rain-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-214.64046,-0.10317294)\'> <g transform=\'translate(0.85697856,1.4763353)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 225.71365,1.7584313 a 0.596604,0.596604 0 0 0 -0.59687,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.59687,0.596346 0.596604,0.596604 0 0 0 0.59582,-0.596346 V 2.3547773 a 0.596604,0.596604 0 0 0 -0.59582,-0.596346 z m 6.06991,2.4794355 a 0.596604,0.596604 0 0 0 -0.42168,0.174666 l -1.31672,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.84336,0 l 1.31672,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.12588,0.01499 a 0.596604,0.596604 0 0 0 -0.42219,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.31723,1.316715 a 0.596604,0.596604 0 0 0 0.84336,0 0.596604,0.596604 0 0 0 0,-0.843359 l -1.31672,-1.31672 a 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m 6.05545,2.06189 a 4.5898942,4.5898942 0 0 0 -4.5899,4.5899002 4.5898942,4.5898942 0 0 0 1.24592,3.125908 c 0.9475,-0.835297 2.18568,-1.34768 3.54087,-1.347722 h 0.002 c 0.003,9e-6 0.007,-1.5e-5 0.01,0 0.67412,-1.83344 1.98081,-3.3223292 3.65972,-4.2302322 a 4.5898942,4.5898942 0 0 0 -3.8685,-2.137854 z m -8.54728,3.9935542 a 0.596604,0.596604 0 0 0 -0.59687,0.596346 0.596604,0.596604 0 0 0 0.59687,0.596863 h 1.8619 a 0.596604,0.596604 0 0 0 0.59634,-0.596863 0.596604,0.596604 0 0 0 -0.59634,-0.596346 z m 3.80183,4.745443 a 0.596604,0.596604 0 0 0 -0.4222,0.174666 l -1.31619,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.84336,0 l 0.632,-0.632003 c 0.13885,-0.553718 0.36283,-1.073588 0.65939,-1.545125 a 0.596604,0.596604 0 0 0 -0.39636,-0.157613 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 233.36819,8.3116378 c -3.31168,0 -6.09342,2.2696692 -6.87452,5.3381752 -0.19364,-0.02622 -0.38854,-0.03978 -0.58394,-0.04031 -2.45448,7.5e-5 -4.44435,1.990213 -4.44418,4.44469 6e-5,1.800523 1.07156,3.349755 2.61121,4.047815 0.28839,0.130751 0.60335,-0.04546 0.68575,-0.351399 l 1.05575,-3.920691 c 0.16277,-0.604122 0.72206,-1.031495 1.34772,-1.029395 l 4.43746,0.01602 c 0.86946,0.0029 1.53291,0.876156 1.30276,1.714624 l -0.43718,1.595768 h 0.0563 c 0.98316,6e-6 1.57757,1.27446 0.94516,2.027266 -0.18356,0.320577 0.097,0.34221 0.13281,0.343649 h 3.36361 c 0.0462,-0.001 0.24214,-0.02386 0.4222,-0.323495 l -0.0486,0.09509 c 0.13494,-0.256476 0.28893,-0.497259 0.4408,-0.712618 0.32369,-0.459001 0.64234,-0.822689 0.64234,-0.822689 l 0.69763,-0.800468 0.69918,0.800468 c 0,0 0.31659,0.363688 0.64027,0.822689 0.16184,0.2295 0.32999,0.485996 0.47078,0.761711 0.001,0.0026 0.003,0.0052 0.004,0.0078 0.067,0.112551 0.22311,0.128319 0.31006,0.127641 2.04078,-0.265447 3.619,-2.001815 3.6189,-4.114995 -1.3e-4,-2.296741 -1.86167,-4.15879 -4.15841,-4.158919 -0.11622,0.0032 -0.23225,0.01212 -0.34778,0.02532 -0.5702,-3.345901 -3.48188,-5.8936972 -6.99027,-5.8936972 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:4.92224;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 226.71268,18.070857 -1.54959,5.751448 a 0.31128785,0.31128785 0 0 0 0.29725,0.392248 l 1.28279,0.01368 -0.88065,4.820888 a 0.24888751,0.24888751 0 0 0 0.43541,0.204816 l 6.46402,-7.694968 a 0.30833354,0.30833354 0 0 0 -0.23608,-0.506664 h -1.27111 l 0.75926,-2.766424 a 0.42970314,0.42970314 0 0 0 -0.41292,-0.54344 l -4.43877,-0.01488 a 0.4640263,0.4640263 0 0 0 -0.44961,0.343304 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:1.58038;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 240.28833,23.312681 c 0,0.630656 -0.52251,1.141912 -1.16705,1.141912 -0.64455,0 -1.16705,-0.511256 -1.16705,-1.141912 0,-0.630648 1.16705,-1.970224 1.16705,-1.970224 0,0 1.16705,1.339576 1.16705,1.970224 z\' /> <path class=\'raindrop\' style=\'fill:#3981c5;fill-opacity:1;stroke-width:2.85246;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 237.13568,27.300849 c 0,1.13828 -0.94309,2.061056 -2.10644,2.061056 -1.16336,0 -2.10644,-0.922776 -2.10644,-2.061056 0,-1.138272 2.10644,-3.556112 2.10644,-3.556112 0,0 2.10644,2.41784 2.10644,3.556112 z\' /> </g> </g> </svg> "}]},{"codes":[1282],"condition":{"name":"thunder-snow","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-256.97379,-84.824076)\'> <g transform=\'translate(44.406915,0.01184982)\'> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.79725;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 229.75405,88.594119 c -4.13961,0 -7.61689,2.836834 -8.59327,6.672461 -0.24205,-0.0328 -0.48593,-0.04953 -0.73019,-0.05013 -3.06808,1e-4 -5.55492,2.487647 -5.5547,5.55574 7e-5,2.09052 1.15682,3.90672 2.86391,4.85345 0.42571,0.23609 0.90516,-0.0168 1.03197,-0.48731 l 1.23249,-4.57182 c 0.17645,-0.654895 0.78057,-1.117477 1.45882,-1.115177 l 5.5485,0.01964 c 0.94023,0.0032 1.6555,0.942797 1.40663,1.849497 l -0.62683,2.2872 h 0.37259 c 1.04868,1e-5 1.67859,1.35298 1.00407,2.15594 l -0.14314,0.17002 c -0.13113,0.15553 -0.0205,0.39336 0.18293,0.39326 h 0.54622 0.41651 c -0.009,-0.0882 -0.014,-0.17774 -0.0139,-0.2682 0,-1.43566 1.1854,-2.61896 2.62103,-2.61897 1.36476,1e-5 2.49915,1.06975 2.60811,2.40864 v -0.0269 c -1.4e-4,-7e-4 -3.8e-4,-0.001 -5.2e-4,-0.002 h 5.2e-4 v 0.002 c 0.0561,0.27606 0.17622,0.44864 0.30747,0.45062 0.10123,0.002 0.19747,-0.25373 0.19947,-0.35915 l -0.002,0.10542 c 0.0221,-1.41725 1.19536,-2.57865 2.61741,-2.57866 1.13864,0 2.11775,0.74414 2.47427,1.76837 0.11681,0.33556 0.39914,0.51043 0.70073,0.32143 1.46565,-0.9185 2.4418,-2.54394 2.44171,-4.40128 -1.5e-4,-2.870903 -2.32774,-5.198493 -5.19865,-5.198653 -0.14528,0.004 -0.29019,0.01502 -0.4346,0.03152 -0.71275,-4.182378 -4.35197,-7.366992 -8.73745,-7.366992 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 240.20123,106.05835 a 1.6933334,1.6933334 0 0 1 -1.69334,1.69335 1.6933334,1.6933334 0 0 1 -1.69333,-1.69335 1.6933334,1.6933334 0 0 1 1.69333,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,1.69333 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 237.3443,110.75324 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69333 1.6933334,1.6933334 0 0 1 -1.69334,-1.69333 1.6933334,1.6933334 0 0 1 1.69334,-1.69334 1.6933334,1.6933334 0 0 1 1.69333,1.69334 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.852;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 234.46983,106.05835 a 1.6933334,1.6933334 0 0 1 -1.69333,1.69335 1.6933334,1.6933334 0 0 1 -1.69333,-1.69335 1.6933334,1.6933334 0 0 1 1.69333,-1.69333 1.6933334,1.6933334 0 0 1 1.69333,1.69333 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:6.1528;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 220.89814,100.80719 -1.93699,7.18931 a 0.38910981,0.38910981 0 0 0 0.37156,0.49031 l 1.60349,0.0171 -1.10081,6.02611 a 0.31110939,0.31110939 0 0 0 0.54426,0.25602 l 8.08003,-9.61871 a 0.38541692,0.38541692 0 0 0 -0.2951,-0.63333 h -1.58889 l 0.94908,-3.45803 a 0.53712892,0.53712892 0 0 0 -0.51615,-0.6793 l -5.54847,-0.0186 a 0.58003287,0.58003287 0 0 0 -0.56201,0.42913 z\' /> </g> </g> </svg> "}},{"codes":[1279],"condition":[{"name":"thunder-snow-night","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-256.97379,-42.436502)\'> <g transform=\'translate(-9.8570573e-5,-0.18927473)\'> <path style=\'fill:#9abfcf;stroke-width:2.35857;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 270.22343,45.78578 c -0.18969,0.01331 -0.29222,0.184521 -0.25063,0.44235 0.0687,0.425722 0.10304,0.856403 0.10335,1.288294 -7e-5,4.48899 -3.63919,8.128289 -8.12818,8.128186 -0.59348,-0.003 -1.18392,-0.07129 -1.76114,-0.202572 -0.41024,-0.0933 -0.65744,0.130015 -0.52141,0.528133 0.73056,2.13813 2.305,3.835491 4.29017,4.750615 0.46356,-2.490653 2.65489,-4.391901 5.27514,-4.39198 h 0.002 c 0.004,1.1e-5 0.008,-1.9e-5 0.0119,0 0.95707,-2.602956 3.18225,-4.520728 5.94848,-5.051372 -0.63876,-2.432821 -2.37901,-4.470007 -4.7532,-5.449796 -0.0805,-0.03321 -0.1533,-0.0463 -0.21653,-0.04186 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 276.68961,51.989231 c -3.31167,0 -6.09341,2.269666 -6.87451,5.338175 -0.19364,-0.02622 -0.38906,-0.03978 -0.58447,-0.04031 -2.45447,7.5e-5 -4.44383,1.989689 -4.44365,4.444173 6e-5,1.81068 1.08347,3.366418 2.63705,4.058667 0.23303,0.103838 0.48495,-0.03417 0.55138,-0.280603 l 0.99478,-3.688147 c 0.16277,-0.604124 0.71998,-1.031495 1.34565,-1.029395 l 4.43952,0.0155 c 0.86948,0.0029 1.5329,0.876671 1.30277,1.715141 l -0.38861,1.415934 c -2.1e-4,8.53e-4 -3.2e-4,0.0017 -5.2e-4,0.0026 -4.7e-4,0.0021 -10e-4,0.0042 -10e-4,0.0062 -0.0343,0.160041 0.0767,0.17266 0.093,0.173633 l -0.0646,-0.0015 c 0.26903,0.0046 0.50843,0.103519 0.70022,0.261999 0.10433,0.08621 0.25442,0.09973 0.36483,0.02119 0.37106,-0.263969 0.82213,-0.421164 1.3069,-0.421162 0.74717,3e-6 1.41618,0.369737 1.83348,0.934309 0.12155,0.164441 0.26967,0.164464 0.39119,0 0.417,-0.564356 1.0851,-0.934306 1.83193,-0.934309 1.08405,-3e-6 2.00485,0.778133 2.2288,1.800406 0.0446,0.20379 0.21843,0.360911 0.42375,0.323495 1.93866,-0.353281 3.4092,-2.048543 3.4091,-4.089156 -1.3e-4,-2.296748 -1.86218,-4.158274 -4.15892,-4.158403 -0.11623,0.0032 -0.23227,0.01159 -0.34779,0.02481 -0.5702,-3.345904 -3.48136,-5.89318 -6.98975,-5.89318 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 283.4787,66.262315 a 1.3546667,1.3546667 0 0 1 -1.35467,1.35468 1.3546667,1.3546667 0 0 1 -1.35466,-1.35468 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 281.19316,70.018227 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 279.42275,66.262315 a 1.3546667,1.3546667 0 0 1 -1.35466,1.35468 1.3546667,1.3546667 0 0 1 -1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35466,1.354664 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:4.92224;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 269.86312,62.061387 -1.54959,5.751448 a 0.31128785,0.31128785 0 0 0 0.29725,0.392248 l 1.28279,0.01368 -0.88065,4.820888 a 0.24888751,0.24888751 0 0 0 0.43541,0.204816 l 6.46402,-7.694968 a 0.30833354,0.30833354 0 0 0 -0.23608,-0.506664 h -1.27111 l 0.75926,-2.766424 a 0.42970314,0.42970314 0 0 0 -0.41292,-0.54344 l -4.43877,-0.01488 a 0.4640263,0.4640263 0 0 0 -0.44961,0.343304 z\' /> </g> </g> </svg> "},{"name":"thunder-snow-day","icon":"<svg viewBox=\'0 0 33.866664 33.866664\' xmlns=\'http://www.w3.org/2000/svg\'> <g transform=\'translate(-256.97379,-0.10317294)\'> <g transform=\'translate(-0.17089012,0.16623619)\'> <path style=\'fill:#e3c063;fill-opacity:1;stroke-width:1.91246\' d=\'m 269.07465,2.9214516 a 0.596604,0.596604 0 0 0 -0.59686,0.596346 v 1.8624185 a 0.596604,0.596604 0 0 0 0.59686,0.596346 0.596604,0.596604 0 0 0 0.59583,-0.596346 V 3.5177976 a 0.596604,0.596604 0 0 0 -0.59583,-0.596346 z m 6.06992,2.4794355 a 0.596604,0.596604 0 0 0 -0.42168,0.174666 l -1.31672,1.316716 a 0.596604,0.596604 0 0 0 0,0.843876 0.596604,0.596604 0 0 0 0.84336,0 l 1.31672,-1.317233 a 0.596604,0.596604 0 0 0 0,-0.843359 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m -12.12588,0.01499 a 0.596604,0.596604 0 0 0 -0.42219,0.174666 0.596604,0.596604 0 0 0 0,0.84336 l 1.31723,1.316715 a 0.596604,0.596604 0 0 0 0.84336,0 0.596604,0.596604 0 0 0 0,-0.843359 l -1.31672,-1.31672 a 0.596604,0.596604 0 0 0 -0.42168,-0.174666 z m 6.05545,2.06189 a 4.5898942,4.5898942 0 0 0 -4.5899,4.5898999 4.5898942,4.5898942 0 0 0 1.24592,3.125908 c 0.9475,-0.835297 2.18568,-1.34768 3.54086,-1.347722 h 0.002 c 0.003,9e-6 0.007,-1.5e-5 0.01,0 0.67413,-1.83344 1.98082,-3.322329 3.65973,-4.2302319 a 4.5898942,4.5898942 0 0 0 -3.8685,-2.137854 z m -8.54728,3.9935539 a 0.596604,0.596604 0 0 0 -0.59687,0.596346 0.596604,0.596604 0 0 0 0.59687,0.596863 h 1.8619 a 0.596604,0.596604 0 0 0 0.59634,-0.596863 0.596604,0.596604 0 0 0 -0.59634,-0.596346 z m 3.80183,4.745443 a 0.596604,0.596604 0 0 0 -0.4222,0.174666 l -1.31619,1.316716 a 0.596604,0.596604 0 0 0 0,0.843359 0.596604,0.596604 0 0 0 0.84336,0 l 0.632,-0.632003 c 0.13885,-0.553718 0.36283,-1.073588 0.65939,-1.545125 a 0.596604,0.596604 0 0 0 -0.39636,-0.157613 z\' /> <path style=\'fill:#d4dce5;fill-opacity:1;stroke-width:3.0378;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 276.7296,9.4750361 c -3.31167,0 -6.09341,2.2696659 -6.87451,5.3381749 -0.19364,-0.02622 -0.38906,-0.03978 -0.58447,-0.04031 -2.45447,7.5e-5 -4.44383,1.989689 -4.44365,4.444173 6e-5,1.81068 1.08347,3.366418 2.63705,4.058667 0.23303,0.103838 0.48495,-0.03417 0.55138,-0.280603 l 0.99478,-3.688147 c 0.16277,-0.604124 0.71998,-1.031495 1.34565,-1.029395 l 4.43952,0.0155 c 0.86948,0.0029 1.5329,0.876671 1.30277,1.715141 l -0.38861,1.415934 c -2.1e-4,8.53e-4 -3.2e-4,0.0017 -5.2e-4,0.0026 -4.7e-4,0.0021 -10e-4,0.0042 -10e-4,0.0062 -0.0343,0.160041 0.0767,0.17266 0.093,0.173633 l -0.0646,-0.0015 c 0.26903,0.0046 0.50843,0.103519 0.70022,0.261999 0.10433,0.08621 0.25442,0.09973 0.36483,0.02119 0.37106,-0.263969 0.82213,-0.421164 1.3069,-0.421162 0.74717,3e-6 1.41618,0.369737 1.83348,0.934309 0.12155,0.164441 0.26967,0.164464 0.39119,0 0.417,-0.564356 1.0851,-0.934306 1.83193,-0.934309 1.08405,-3e-6 2.00485,0.778133 2.2288,1.800406 0.0446,0.20379 0.21843,0.360911 0.42375,0.323495 1.93866,-0.353281 3.4092,-2.048543 3.4091,-4.089156 -1.3e-4,-2.296748 -1.86218,-4.158274 -4.15892,-4.158403 -0.11623,0.0032 -0.23227,0.01159 -0.34779,0.02481 -0.5702,-3.345904 -3.48136,-5.8931799 -6.98975,-5.8931799 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 283.51869,23.74812 a 1.3546667,1.3546667 0 0 1 -1.35467,1.35468 1.3546667,1.3546667 0 0 1 -1.35466,-1.35468 1.3546667,1.3546667 0 0 1 1.35466,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,1.354664 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 281.23315,27.504032 a 1.3546667,1.3546667 0 0 1 -1.35467,1.354664 1.3546667,1.3546667 0 0 1 -1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35467,-1.354672 1.3546667,1.3546667 0 0 1 1.35467,1.354672 z\' /> <path class=\'snowflake\' style=\'fill:#d6eff7;fill-opacity:1;stroke-width:1.4816;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 279.46274,23.74812 a 1.3546667,1.3546667 0 0 1 -1.35466,1.35468 1.3546667,1.3546667 0 0 1 -1.35467,-1.35468 1.3546667,1.3546667 0 0 1 1.35467,-1.354664 1.3546667,1.3546667 0 0 1 1.35466,1.354664 z\' /> <path style=\'fill:#f3de80;fill-opacity:1;stroke-width:4.92224;stroke-linecap:round;paint-order:stroke fill markers\' d=\'m 269.90311,19.547192 -1.54959,5.751448 a 0.31128785,0.31128785 0 0 0 0.29725,0.392248 l 1.28279,0.01368 -0.88065,4.820888 a 0.24888751,0.24888751 0 0 0 0.43541,0.204816 l 6.46402,-7.694968 a 0.30833354,0.30833354 0 0 0 -0.23608,-0.506664 h -1.27111 l 0.75926,-2.766424 a 0.42970314,0.42970314 0 0 0 -0.41292,-0.54344 l -4.43877,-0.01488 a 0.4640263,0.4640263 0 0 0 -0.44961,0.343304 z\' /> </g> </g> </svg> "}]}]');

/***/ }),

/***/ "./src/json/moon-phases.json":
/*!***********************************!*\
  !*** ./src/json/moon-phases.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"New Moon","icon":"new-moon.svg"},{"name":"Waxing Crescent","icon":"waxing-crescent.svg"},{"name":"First Quarter","icon":"first-quarter.svg"},{"name":"Waxing Gibbous","icon":"waxing-gibbous.svg"},{"name":"Full Moon","icon":"full-moon.svg"},{"name":"Waning Gibbous","icon":"waning-gibbous.svg"},{"name":"Last Quarter","icon":"last-quarter.svg"},{"name":"Waning Crescent","icon":"waning-crescent.svg"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "weather-project:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweather_project"] = self["webpackChunkweather_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGtJQUFrSTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0ZBQWtGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFFBQVEsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFNBQVMsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFL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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStEOzs7Ozs7Ozs7OztBQzNDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHVCQUF1Qiw0QkFBNEI7V0FDbkQ7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLG9CQUFvQjtXQUNyQztXQUNBLG1HQUFtRyxZQUFZO1dBQy9HO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDOztXQUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy9mYXZpY29uLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL2FyYy1wZXJjZW50YWdlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL2F1dG9yZWZyZXNoLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL2h1bWlkaXR5LW92ZXJsYXkuc3ZnIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9pbWcvdWkvbG9hZGluZy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy91aS9wcmVjaXBpdGF0aW9uLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL3ByZXNzdXJlLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL3JhaW4uc3ZnIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9pbWcvdWkvc2VhcmNoLWVycm9yLnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL3NlYXJjaC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy91aS9zZXR0aW5ncy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy91aS90aW1lLWZvcm1hdC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy91aS91bml0cy5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ltZy91aS91di1vdmVybGF5LnN2ZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvaW1nL3VpL3Zpc2liaWxpdHkuc3ZnIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9pbWcvdWkvd2luZC1kaXJlY3Rpb24uc3ZnIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9pbWcvdWkvd2luZC5zdmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2NvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2RpYWxvZ3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3QvLi9zcmMvbW9vbi1waGFzZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy9zdW4tcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0Ly4vc3JjLyBsYXp5IF4uKi4qJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC8uL3NyYy8gbGF6eSBeLipzdW5cXC0uKlxcLnN2ZyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3V0Zml0OndnaHRAMTAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YWZ0ZXIsXG4qOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC8qIFR5cG9ncmFwaHkgKi9cbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJPdXRmaXRcIiwgc2Fucy1zZXJpZjtcblxuICAvKiBDb2xvcnMgKi9cbiAgLS1CbGFjazogIzI5MmEyZTtcbiAgLS1XaGl0ZTogI2Y0ZjRmNDtcbiAgLS1QcmltYXJ5OiAjM2E5NGU4O1xuICAtLVByaW1hcnlIb3ZlcjogIzc1YjBlNztcbiAgLS1QcmltYXJ5QWN0aXZlOiAjMjY3Y2NjO1xuICAtLVNtYWxsVGV4dEJsYWNrOiAjM2U0NzU1O1xuICAtLVNtYWxsVGV4dFdoaXRlOiAjYzBjOGQxO1xuICAtLUdyYXlUZXh0OiAjOTdhMWFlO1xuICAtLURpdmlkZXI6ICNkMGQ3ZTA7XG4gIC0tUmFpbjogIzM5ODFjNTtcbiAgLS1Tbm93OiAjZDZlZmY3O1xuICAtLVJhaW5Db250cmFzdDogIzY4YjFmNTtcbiAgLS1Tbm93Q29udHJhc3Q6ICNhMmM4ZDY7XG4gIC0tVXZJbmRleDogIzk5NjdkYTtcbiAgLS1Gb290ZXI6ICMyMzI2Mjk7XG4gIC0tQmFja2dyb3VuZDogIzI4MzQ1NDtcbiAgLS1TdWdnZXN0aW9uSG92ZXI6ICNkNGU1ZjM7XG4gIC0tRGF5QmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTViZGRhIDAlLCAjMmE4MGJlIDEwMCUpO1xuICAtLU5pZ2h0QmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWQyMTMwIDAlLCAjMTIxOTM2IDEwMCUpO1xufVxuXG5ib2R5IHtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbn1cblxucCxcbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nOiAxMHB4IDMycHggMTBweCAxOHB4O1xuICBjb2xvcjogdmFyKC0tU21hbGxUZXh0QmxhY2spO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1TbWFsbFRleHRCbGFjayk7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1HcmF5VGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlucHV0OmZvY3VzLFxuYnV0dG9uOmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxuYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBvdXRsaW5lOiAxLjVweCBzb2xpZCB2YXIoLS1QcmltYXJ5KTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCB2YXIoLS1QcmltYXJ5KTtcbn1cblxuYnV0dG9uOmZvY3VzLFxuYTpmb2N1cyB7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggdmFyKC0tUHJpbWFyeSk7XG59XG5cbmE6Zm9jdXMge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYnV0dG9uLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cblxuYnV0dG9uLnByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QcmltYXJ5SG92ZXIpO1xufVxuXG5idXR0b24ucHJpbWFyeTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QcmltYXJ5QWN0aXZlKTtcbn1cblxuYnV0dG9uLnNlY29uZGFyeSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLVByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIHRyYW5zaXRpb246XG4gICAgYm9yZGVyLWNvbG9yIDIwMG1zLFxuICAgIGNvbG9yIDIwMG1zO1xufVxuXG5idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1QcmltYXJ5SG92ZXIpO1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeUhvdmVyKTtcbn1cblxuYnV0dG9uLnNlY29uZGFyeTphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHZhcigtLVByaW1hcnlBY3RpdmUpO1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeUFjdGl2ZSk7XG59XG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udmVyeS1zbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjU4M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgwcHgsIDMyNXB4KSAxZnI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBwYWRkaW5nOiAxNnB4IGNsYW1wKDE2cHgsIDQuM3Z3LCAzMnB4KTtcbiAgY29sdW1uLWdhcDogMjRweDtcbn1cblxuI2FwcC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2FwcC10aXRsZSAubGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNhcHAtdGl0bGUgLmljb24ge1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuI2FwcC10aXRsZSAuaWNvbiBzdmcge1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbmhlYWRlciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbGVhci1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMnB4O1xuICByaWdodDogOXB4O1xuICB0b3A6IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpwbGFjZWhvbGRlci1zaG93biArIC5jbGVhci1pbnB1dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5jbGVhci1pbnB1dCB7XG4gIHZpc2liaWxpdHk6IHNob3c7XG59XG5cbi5jbGVhci1pbnB1dCA+IHN2ZyB7XG4gIGZpbGw6IHZhcigtLUdyYXlUZXh0KTtcbn1cblxuLmNsZWFyLWlucHV0OmhvdmVyID4gc3ZnIHtcbiAgZmlsbDogdmFyKC0tUHJpbWFyeSk7XG59XG5cbi5zZWFyY2gtc3VnZ2VzdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMzYzKSk7XG59XG5cbi5zdWdnZXN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XG59XG5cbi5zdWdnZXN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbn1cblxuLnN1Z2dlc3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1TdWdnZXN0aW9uSG92ZXIpO1xufVxuXG4uc3VnZ2VzdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLURpdmlkZXIpO1xufVxuXG4uc3VnZ2VzdGlvbiAubG9jYXRpb24ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3VnZ2VzdGlvbiAuY291bnRyeSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zdWdnZXN0aW9uLmVtcHR5IHtcbiAgY29sb3I6IHZhcigtLUdyYXlUZXh0KTtcbn1cblxuI3NlYXJjaC1sb2NhdGlvbi1idXR0b24ge1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcbn1cblxuI3NlYXJjaC1sb2NhdGlvbi1idXR0b24gPiBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiB2YXIoLS1XaGl0ZSk7XG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uc2V0dGluZ3MtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5cbi5zZXR0aW5ncy1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMTc7XG59XG5cbi5zZXR0aW5ncy1idXR0b24gPiBzdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmaWxsOiBibGFjaztcbn1cblxuLyogTWFpbiBib2R5IGFuZCBnZW5lcmFsIGZvcmVjYXN0ICovXG5tYWluIHtcbiAgZmxleDogMTtcbn1cblxuI2ZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMnB4O1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbiNmb3JlY2FzdCA+ICoge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb3JlY2FzdCBzZWN0aW9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuI2ZvcmVjYXN0IHNlY3Rpb246bm90KCNjdXJyZW50LXdlYXRoZXIpIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi8qIDEuIEN1cnJlbnQgd2VhdGhlciAqL1xuI2N1cnJlbnQtd2VhdGhlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heChtaW4tY29udGVudCwgMzIwcHgpIG1pbi1jb250ZW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHJvdy1nYXA6IDMycHg7XG4gIGNvbHVtbi1nYXA6IDUwcHg7XG4gIHBhZGRpbmc6IDQ1cHggY2xhbXAoMjVweCwgMTJ2dywgOTBweCk7XG59XG5cbiNjdXJyZW50LXdlYXRoZXIuZGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tRGF5QmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XG59XG5cbiNjdXJyZW50LXdlYXRoZXIubmlnaHQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1OaWdodEJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xufVxuXG4uY3VycmVudC10ZW1wIC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMi45MTdyZW07XG59XG5cbiNjdXJyZW50LXdlYXRoZXIgLmNvbmRpdGlvbiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5kYXkgLmxvY2F0aW9uIC5jb3VudHJ5LFxuLmRheSAub3RoZXItdGVtcHMgLnRlbXAtZGl2aWRlcixcbi5kYXkgLm90aGVyLXRlbXBzIC5sb3ctdmFsdWUsXG4uZGF5IC5vdGhlci10ZW1wcyAuZmVlbHNsaWtlLXRlbXAge1xuICBjb2xvcjogdmFyKC0tU21hbGxUZXh0QmxhY2spO1xufVxuXG4ubmlnaHQgLmxvY2F0aW9uIC5jb3VudHJ5LFxuLm5pZ2h0IC5vdGhlci10ZW1wcyAudGVtcC1kaXZpZGVyLFxuLm5pZ2h0IC5vdGhlci10ZW1wcyAubG93LXZhbHVlLFxuLm5pZ2h0IC5vdGhlci10ZW1wcyAuZmVlbHNsaWtlLXRlbXAge1xuICBjb2xvcjogdmFyKC0tU21hbGxUZXh0V2hpdGUpO1xufVxuXG4jY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcbn1cblxuI2N1cnJlbnQtd2VhdGhlciAuY29uZGl0aW9uLWljb24gc3ZnIHtcbiAgbWF4LXdpZHRoOiBjbGFtcCg5MHB4LCAzMy4zdncsIDI1MHB4KTtcbiAgbWluLWhlaWdodDogY2xhbXAoOTBweCwgMzMuM3Z3LCAyNTBweCk7XG59XG5cbiNjdXJyZW50LXdlYXRoZXIuZGF5IC5jb25kaXRpb24taWNvbiA+IHN2ZyB7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE2cHggcmdiYSgwLCAwLCAwLCAwLjE3KSk7XG59XG5cbiNjdXJyZW50LXdlYXRoZXIubmlnaHQgLmNvbmRpdGlvbi1pY29uID4gc3ZnIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuNDEpKTtcbn1cblxuLyogMi4gSG91ciBmb3JlY2FzdCAqL1xuI2hvdXItZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbi5ob3VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob3VyLWNvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tRGl2aWRlcik7XG59XG5cbi5ob3VyLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmhvdXItY29udGFpbmVyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4jaG91ci1mb3JlY2FzdCAudGltZSB7XG4gIGNvbG9yOiB2YXIoLS1TbWFsbFRleHRCbGFjayk7XG4gIHRleHQtd3JhcDogbm93cmFwO1xufVxuXG4jaG91ci1mb3JlY2FzdCAuY29uZGl0aW9uLWljb24gPiBzdmcge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG5cbiNob3VyLWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA0cHg7XG59XG5cbiNob3VyLWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIC52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1HcmF5VGV4dCk7XG59XG5cbiNob3VyLWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIC5pY29uID4gc3ZnIHtcbiAgZmlsbDogdmFyKC0tR3JheVRleHQpO1xuICBtYXgtd2lkdGg6IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDE2cHg7XG59XG5cbi8qIDMuIERheSBmb3JlY2FzdCAqL1xuXG4jZGF5LWZvcmVjYXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIG1heC1jb250ZW50KTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMjRweDtcbiAgcm93LWdhcDogMjBweDtcbn1cblxuI2RheS1mb3JlY2FzdCAuY29uZGl0aW9uLFxuI2RheS1mb3JlY2FzdCAucHJlY2lwaXRhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZGF5LWZvcmVjYXN0IC5jb25kaXRpb24ge1xuICBnYXA6IDhweDtcbn1cblxuI2RheS1mb3JlY2FzdCAucHJlY2lwaXRhdGlvbiB7XG4gIGdhcDogNHB4O1xufVxuXG4jZGF5LWZvcmVjYXN0IC5jb25kaXRpb24gLmljb24gPiBzdmcge1xuICBtYXgtd2lkdGg6IDM1cHg7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG5cbiNkYXktZm9yZWNhc3QgLnByZWNpcGl0YXRpb24gLmljb24gPiBzdmcge1xuICBmaWxsOiB2YXIoLS1SYWluKTtcbiAgbWF4LXdpZHRoOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyNHB4O1xufVxuXG4vKiA0LiBIdW1pZGl0eSBhbmQgVVYgSW5kZXggKi9cbi5kb3VibGUtc2VjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMycHg7XG59XG5cbi5kb3VibGUtc2VjdGlvbi1jb250YWluZXIgPiBzZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNodW1pZGl0eSxcbiN1diB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2h1bWlkaXR5IC52YWx1ZS1jb250YWluZXIsXG4jdXYgLnZhbHVlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2h1bWlkaXR5IC52YWx1ZSxcbiN1diAudmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMDQycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jaHVtaWRpdHkgLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLVJhaW4pO1xufVxuXG4jdXYgLnZhbHVlIHtcbiAgY29sb3I6IHZhcigtLVV2SW5kZXgpO1xufVxuXG4uYXJjLXBlcmNlbnRhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4jaHVtaWRpdHkgLmFyYy1wYXRoIHtcbiAgc3Ryb2tlOiB2YXIoLS1SYWluKTtcbn1cblxuI3V2IC5hcmMtcGF0aCB7XG4gIHN0cm9rZTogdmFyKC0tVXZJbmRleCk7XG59XG5cbiNodW1pZGl0eSAudGl0bGUtY29udGFpbmVyLFxuI3V2IC50aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2h1bWlkaXR5IC5pY29uID4gc3ZnLFxuI3V2IC5pY29uID4gc3ZnIHtcbiAgZmlsbDogdmFyKC0tQmxhY2spO1xuICBtYXgtd2lkdGg6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG59XG5cbi8qIDUuIE1vcmUgd2VhdGhlciBmbmZvICovXG5cbiNtb3JlLXdlYXRoZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sZWZ0LXNpZGUsXG4ucmlnaHQtc2lkZSB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmxlZnQtc2lkZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLURpdmlkZXIpO1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG59XG5cbi5sZWZ0LXNpZGUgPiBkaXYsXG4ucmlnaHQtc2lkZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5sZWZ0LXNpZGUgLnRpdGxlLFxuLnJpZ2h0LXNpZGUgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtb3JlLXdlYXRoZXItaW5mbyAuaWNvbiA+IHN2ZyB7XG4gIG1heC13aWR0aDogMjRweDtcbiAgbWluLXdpZHRoOiAyNHB4O1xuICBmaWxsOiB2YXIoLS1CbGFjayk7XG59XG5cbiNtb3JlLXdlYXRoZXItaW5mbyAuZGlyZWN0aW9uID4gc3ZnIHtcbiAgbWF4LXdpZHRoOiAxNnB4O1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIGZpbGw6IHZhcigtLVNtYWxsVGV4dEJsYWNrKTtcbn1cblxuLnZhbHVlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTRweDtcbn1cblxuLyogNi4gU3VuIHBvc2l0aW9uIGFuZCBtb29uIHBoYXNlICovXG5cbi5hc3Ryby12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzdW4tcG9zaXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gbWluLWNvbnRlbnQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMTJweDtcbn1cblxuI3N1bi1wb3NpdGlvbiAuaWNvbiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG59XG5cbiNzdW4tcG9zaXRpb24gLmljb24gPiBzdmcsXG4jbW9vbi1waGFzZSAuaWNvbiA+IHN2ZyB7XG4gIG1heC13aWR0aDogMTcwcHg7XG4gIG1pbi1oZWlnaHQ6IDE3MHB4O1xufVxuXG4jbW9vbi1waGFzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNpcmNsZS1iYWNrZ3JvdW5kIHtcbiAgc3Ryb2tlOiB2YXIoLS1EaXZpZGVyKTtcbn1cblxuLmFyYy1wYXRoIHtcbiAgc3Ryb2tlOiB2YXIoLS1QcmltYXJ5KTtcbn1cblxuLyogTG9hZGluZyBzY3JlZW4gKi9cbiNsb2FkaW5nLXNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcbn1cblxuI2xvYWRpbmctc2NyZWVuIC5pY29uIHtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nQW5pbWF0aW9uIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4jbG9hZGluZy1zY3JlZW4gLmljb24gc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHN0cm9rZTogdmFyKC0tV2hpdGUpO1xufVxuXG4vKiBTZXR0aW5ncyBkaWFsb2cgKi9cblxuZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgdHJhbnNpdGlvbjpcbiAgICBvcGFjaXR5IDMwMG1zLFxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKSxcbiAgICBvdmVybGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlLFxuICAgIGRpc3BsYXkgMzAwbXMgYWxsb3ctZGlzY3JldGU7XG59XG5cbmRpYWxvZ1tvcGVuXSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuQHN0YXJ0aW5nLXN0eWxlIHtcbiAgZGlhbG9nW29wZW5dIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcbiAgdHJhbnNpdGlvbjpcbiAgICBkaXNwbGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlLFxuICAgIG92ZXJsYXkgMzAwbXMgYWxsb3ctZGlzY3JldGUsXG4gICAgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcbn1cblxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcbn1cblxuQHN0YXJ0aW5nLXN0eWxlIHtcbiAgZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICB9XG59XG5cbiNzZXR0aW5ncy1kaWFsb2cge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNzZXR0aW5ncy1kaWFsb2cgLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3NldHRpbmdzLWRpYWxvZyBoMS50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZm9ybSNzZXR0aW5ncyB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4jc2V0dGluZ3MtZGlhbG9nIGZvcm0jc2V0dGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiNzZXR0aW5ncyAuZmllbGQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG59XG5cbi5maWVsZC10aXRsZSAuaWNvbiBzdmcge1xuICBtYXgtd2lkdGg6IDI4cHg7XG4gIG1pbi1oZWlnaHQ6IDI4cHg7XG4gIGZpbGw6IHZhcigtLUJsYWNrKTtcbn1cblxuI3NldHRpbmdzIC5zZXR0aW5ncy1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NldHRpbmdzIC5zZXR0aW5ncy1maWVsZCAudGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuI3NldHRpbmdzLWRpYWxvZyAuc291cmNlLWNvZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuI3NldHRpbmdzLWRpYWxvZyAuc291cmNlLWNvZGUgYSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmRpYWxvZyAuYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbmRpYWxvZyBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLyogQWxlcnQgYm94ICovXG4jYWxlcnQtYm94IHtcbiAgd2lkdGg6IDQ4MHB4O1xufVxuXG4jYWxlcnQtYm94IC5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIG1pbi1jb250ZW50KTtcbiAgZ2FwOiAxMHB4IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNhbGVydC1ib3ggLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBncmlkLWNvbHVtbjogMSAvIC0xO1xufVxuXG4jYWxlcnQtYm94IC5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHdpZHRoOiA1NnB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cblxuI2FsZXJ0LWJveCAuZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbiNhbGVydC1ib3ggYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG59XG5cbi8qIEZvb3RlciAqL1xuZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjayk7XG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAzMnB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tUHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLVByaW1hcnlIb3Zlcik7XG59XG5cbmE6YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLVByaW1hcnlBY3RpdmUpO1xufVxuXG4vKiBTVkcgZmlsbCBjb2xvcnMgKi9cbiNjdXJyZW50LXdlYXRoZXIuZGF5IC5jb25kaXRpb24taWNvbiAucmFpbmRyb3Age1xuICBmaWxsOiB2YXIoLS1SYWluQ29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbiNob3VyLWZvcmVjYXN0IC5jb25kaXRpb24taWNvbiAuc25vd2ZsYWtlLFxuI2RheS1mb3JlY2FzdCAuY29uZGl0aW9uIC5pY29uIC5zbm93Zmxha2Uge1xuICBmaWxsOiB2YXIoLS1Tbm93Q29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbi8qIEFuaW1hdGlvbnMgKi9cblxuQGtleWZyYW1lcyBsb2FkaW5nQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLyogTWVkaWEgcXVlcmllcyAqL1xuLyogQ2hhbmdlIHRoaXMgbWVkaWEgcXVlcnkgd2hlbiBzZXR0aW5nIGZpbmFsIGFwcCBuYW1lICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICNhcHAtdGl0bGUgLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2N1cnJlbnQtd2VhdGhlciB7XG4gICAgY29sdW1uLWdhcDogMTJweDtcbiAgfVxuXG4gIC5kb3VibGUtc2VjdGlvbi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAjbW9yZS13ZWF0aGVyLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICB9XG5cbiAgI21vcmUtd2VhdGhlci1pbmZvIC5sZWZ0LXNpZGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICNkYXktZm9yZWNhc3Qge1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gIH1cblxuICAjZGF5LWZvcmVjYXN0IC5jb25kaXRpb24gLnZhbHVlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgfVxuXG4gICNjdXJyZW50LXdlYXRoZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICB9XG5cbiAgI2N1cnJlbnQtd2VhdGhlciAuY29uZGl0aW9uLWljb24ge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gIH1cblxuICAjY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiBzdmcge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgI2N1cnJlbnQtd2VhdGhlciAuY3VycmVudC10ZW1wIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cblxuICAjY3VycmVudC13ZWF0aGVyIC5vdGhlci10ZW1wcyB7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gICAgZ3JpZC1yb3c6IDIvIC0xO1xuICB9XG5cbiAgI2N1cnJlbnQtd2VhdGhlciAubG9jYXRpb24sXG4gICNjdXJyZW50LXdlYXRoZXIgLmN1cnJlbnQtdGVtcCB7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgfVxuXG4gICNjdXJyZW50LXdlYXRoZXIgLmNvbmRpdGlvbi1pY29uLFxuICAjY3VycmVudC13ZWF0aGVyIC5vdGhlci10ZW1wcyB7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIH1cblxuICAjY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXRlbXAsXG4gICNjdXJyZW50LXdlYXRoZXIgLm90aGVyLXRlbXBzIHtcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XG4gIH1cblxuICAjY3VycmVudC13ZWF0aGVyIC5sb2NhdGlvbixcbiAgI2N1cnJlbnQtd2VhdGhlciAuY29uZGl0aW9uLWljb24ge1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgY29sdW1uLWdhcDogNnB4O1xuICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICB9XG5cbiAgI3NldHRpbmdzLWRpYWxvZyBmb3JtI3NldHRpbmdzIHtcbiAgICBnYXA6IDI0cHg7XG4gIH1cblxuICAjc2V0dGluZ3MtZGlhbG9nIC5zZXR0aW5ncy1maWVsZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZweDtcbiAgfVxuXG4gICNzZXR0aW5ncy1kaWFsb2cgLmZpZWxkLXRpdGxlIHtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgfVxuXG4gICNzZXR0aW5ncy1kaWFsb2cgc2VsZWN0IHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gICNzZXR0aW5ncy1kaWFsb2cgLmJ1dHRvbnMge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgI3NldHRpbmdzLWRpYWxvZyAuYnV0dG9ucyBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3NldHRpbmdzLWRpYWxvZyAuYnV0dG9ucyBidXR0b24sXG4gICNzZXR0aW5ncy1kaWFsb2cgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cblxuICAjYWxlcnQtYm94IC5jb250ZW50IHtcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xuICB9XG5cbiAgI2FsZXJ0LWJveCAuaWNvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2FsZXJ0LWJveCAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNhbGVydC1ib3ggYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDMycHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICA6cm9vdCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xuICB9XG5cbiAgaGVhZGVyICNhcHAtdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjc2VhcmNoLWxvY2F0aW9uLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5jbGVhci1pbnB1dCB7XG4gICAgdG9wOiA5cHg7XG4gIH1cblxuICAjZm9yZWNhc3Qgc2VjdGlvbiB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB9XG5cbiAgI2ZvcmVjYXN0IHNlY3Rpb246bm90KCNjdXJyZW50LXdlYXRoZXIpIHtcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyMDBweCkge1xuICAjc2VhcmNoLWxvY2F0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1TbWFsbFRleHRCbGFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cbiAgLmNsZWFyLWlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3NlYXJjaC1sb2NhdGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQ0FBaUM7O0VBRWpDLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLG9FQUFvRTtFQUNwRSxzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtF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O0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakI7O0VBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdXRmaXQ6d2dodEAxMDAuLjkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBUeXBvZ3JhcGh5ICovXFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogXFxcIk91dGZpdFxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuICAvKiBDb2xvcnMgKi9cXG4gIC0tQmxhY2s6ICMyOTJhMmU7XFxuICAtLVdoaXRlOiAjZjRmNGY0O1xcbiAgLS1QcmltYXJ5OiAjM2E5NGU4O1xcbiAgLS1QcmltYXJ5SG92ZXI6ICM3NWIwZTc7XFxuICAtLVByaW1hcnlBY3RpdmU6ICMyNjdjY2M7XFxuICAtLVNtYWxsVGV4dEJsYWNrOiAjM2U0NzU1O1xcbiAgLS1TbWFsbFRleHRXaGl0ZTogI2MwYzhkMTtcXG4gIC0tR3JheVRleHQ6ICM5N2ExYWU7XFxuICAtLURpdmlkZXI6ICNkMGQ3ZTA7XFxuICAtLVJhaW46ICMzOTgxYzU7XFxuICAtLVNub3c6ICNkNmVmZjc7XFxuICAtLVJhaW5Db250cmFzdDogIzY4YjFmNTtcXG4gIC0tU25vd0NvbnRyYXN0OiAjYTJjOGQ2O1xcbiAgLS1VdkluZGV4OiAjOTk2N2RhO1xcbiAgLS1Gb290ZXI6ICMyMzI2Mjk7XFxuICAtLUJhY2tncm91bmQ6ICMyODM0NTQ7XFxuICAtLVN1Z2dlc3Rpb25Ib3ZlcjogI2Q0ZTVmMztcXG4gIC0tRGF5QmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTViZGRhIDAlLCAjMmE4MGJlIDEwMCUpO1xcbiAgLS1OaWdodEJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFkMjEzMCAwJSwgIzEyMTkzNiAxMDAlKTtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogdmFyKC0tQmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxMHB4IDMycHggMTBweCAxOHB4O1xcbiAgY29sb3I6IHZhcigtLVNtYWxsVGV4dEJsYWNrKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLVNtYWxsVGV4dEJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tR3JheVRleHQpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG5hOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgb3V0bGluZTogMS41cHggc29saWQgdmFyKC0tUHJpbWFyeSk7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHZhcigtLVByaW1hcnkpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMsXFxuYTpmb2N1cyB7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggdmFyKC0tUHJpbWFyeSk7XFxufVxcblxcbmE6Zm9jdXMge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBwYWRkaW5nOiA2cHggOHB4O1xcbiAgbWF4LXdpZHRoOiAxMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVByaW1hcnlIb3Zlcik7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QcmltYXJ5QWN0aXZlKTtcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1QcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5KTtcXG4gIHRyYW5zaXRpb246XFxuICAgIGJvcmRlci1jb2xvciAyMDBtcyxcXG4gICAgY29sb3IgMjAwbXM7XFxufVxcblxcbmJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1QcmltYXJ5SG92ZXIpO1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnlIb3Zlcik7XFxufVxcblxcbmJ1dHRvbi5zZWNvbmRhcnk6YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tUHJpbWFyeUFjdGl2ZSk7XFxuICBjb2xvcjogdmFyKC0tUHJpbWFyeUFjdGl2ZSk7XFxufVxcblxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNtYWxsLXRleHQge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4udmVyeS1zbWFsbC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC41ODNyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1pbm1heCgwcHgsIDMyNXB4KSAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgcGFkZGluZzogMTZweCBjbGFtcCgxNnB4LCA0LjN2dywgMzJweCk7XFxuICBjb2x1bW4tZ2FwOiAyNHB4O1xcbn1cXG5cXG4jYXBwLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYXBwLXRpdGxlIC5sYWJlbCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jYXBwLXRpdGxlIC5pY29uIHtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbn1cXG5cXG4jYXBwLXRpdGxlIC5pY29uIHN2ZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG5oZWFkZXIgZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2xlYXItaW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICByaWdodDogOXB4O1xcbiAgdG9wOiAxMXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpwbGFjZWhvbGRlci1zaG93biArIC5jbGVhci1pbnB1dCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmNsZWFyLWlucHV0IHtcXG4gIHZpc2liaWxpdHk6IHNob3c7XFxufVxcblxcbi5jbGVhci1pbnB1dCA+IHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1HcmF5VGV4dCk7XFxufVxcblxcbi5jbGVhci1pbnB1dDpob3ZlciA+IHN2ZyB7XFxuICBmaWxsOiB2YXIoLS1QcmltYXJ5KTtcXG59XFxuXFxuLnNlYXJjaC1zdWdnZXN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdG9wOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMzYzKSk7XFxufVxcblxcbi5zdWdnZXN0aW9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Z2dlc3Rpb246Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4uc3VnZ2VzdGlvbjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcXG59XFxuXFxuLnN1Z2dlc3Rpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tU3VnZ2VzdGlvbkhvdmVyKTtcXG59XFxuXFxuLnN1Z2dlc3Rpb246bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tRGl2aWRlcik7XFxufVxcblxcbi5zdWdnZXN0aW9uIC5sb2NhdGlvbiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbiAuY291bnRyeSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi5lbXB0eSB7XFxuICBjb2xvcjogdmFyKC0tR3JheVRleHQpO1xcbn1cXG5cXG4jc2VhcmNoLWxvY2F0aW9uLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XFxufVxcblxcbiNzZWFyY2gtbG9jYXRpb24tYnV0dG9uID4gc3ZnIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZmlsbDogdmFyKC0tV2hpdGUpO1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnMge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zZXR0aW5ncy1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XFxufVxcblxcbi5zZXR0aW5ncy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDE3O1xcbn1cXG5cXG4uc2V0dGluZ3MtYnV0dG9uID4gc3ZnIHtcXG4gIHdpZHRoOiAzNHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblxcbi8qIE1haW4gYm9keSBhbmQgZ2VuZXJhbCBmb3JlY2FzdCAqL1xcbm1haW4ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMnB4O1xcbiAgcGFkZGluZzogODBweCAwO1xcbn1cXG5cXG4jZm9yZWNhc3QgPiAqIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA3NTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZm9yZWNhc3Qgc2VjdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4jZm9yZWNhc3Qgc2VjdGlvbjpub3QoI2N1cnJlbnQtd2VhdGhlcikge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAxLiBDdXJyZW50IHdlYXRoZXIgKi9cXG4jY3VycmVudC13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCAzMjBweCkgbWluLWNvbnRlbnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcm93LWdhcDogMzJweDtcXG4gIGNvbHVtbi1nYXA6IDUwcHg7XFxuICBwYWRkaW5nOiA0NXB4IGNsYW1wKDI1cHgsIDEydncsIDkwcHgpO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLmRheSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1EYXlCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1CbGFjayk7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXIubmlnaHQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tTmlnaHRCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1XaGl0ZSk7XFxufVxcblxcbi5jdXJyZW50LXRlbXAgLnZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMi45MTdyZW07XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXIgLmNvbmRpdGlvbiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uZGF5IC5sb2NhdGlvbiAuY291bnRyeSxcXG4uZGF5IC5vdGhlci10ZW1wcyAudGVtcC1kaXZpZGVyLFxcbi5kYXkgLm90aGVyLXRlbXBzIC5sb3ctdmFsdWUsXFxuLmRheSAub3RoZXItdGVtcHMgLmZlZWxzbGlrZS10ZW1wIHtcXG4gIGNvbG9yOiB2YXIoLS1TbWFsbFRleHRCbGFjayk7XFxufVxcblxcbi5uaWdodCAubG9jYXRpb24gLmNvdW50cnksXFxuLm5pZ2h0IC5vdGhlci10ZW1wcyAudGVtcC1kaXZpZGVyLFxcbi5uaWdodCAub3RoZXItdGVtcHMgLmxvdy12YWx1ZSxcXG4ubmlnaHQgLm90aGVyLXRlbXBzIC5mZWVsc2xpa2UtdGVtcCB7XFxuICBjb2xvcjogdmFyKC0tU21hbGxUZXh0V2hpdGUpO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiBzdmcge1xcbiAgbWF4LXdpZHRoOiBjbGFtcCg5MHB4LCAzMy4zdncsIDI1MHB4KTtcXG4gIG1pbi1oZWlnaHQ6IGNsYW1wKDkwcHgsIDMzLjN2dywgMjUwcHgpO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLmRheSAuY29uZGl0aW9uLWljb24gPiBzdmcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuMTcpKTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci5uaWdodCAuY29uZGl0aW9uLWljb24gPiBzdmcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTZweCByZ2JhKDAsIDAsIDAsIDAuNDEpKTtcXG59XFxuXFxuLyogMi4gSG91ciBmb3JlY2FzdCAqL1xcbiNob3VyLWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgcGFkZGluZzogOHB4IDE4cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXItY29udGFpbmVyOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tRGl2aWRlcik7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcblxcbi5ob3VyLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IC50aW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1TbWFsbFRleHRCbGFjayk7XFxuICB0ZXh0LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuI2hvdXItZm9yZWNhc3QgLmNvbmRpdGlvbi1pY29uID4gc3ZnIHtcXG4gIG1heC13aWR0aDogNjBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2hvdXItZm9yZWNhc3QgLnByZWNpcGl0YXRpb24gLnZhbHVlIHtcXG4gIGNvbG9yOiB2YXIoLS1HcmF5VGV4dCk7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIC5pY29uID4gc3ZnIHtcXG4gIGZpbGw6IHZhcigtLUdyYXlUZXh0KTtcXG4gIG1heC13aWR0aDogMTZweDtcXG4gIG1pbi1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbi8qIDMuIERheSBmb3JlY2FzdCAqL1xcblxcbiNkYXktZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogMjRweDtcXG4gIHJvdy1nYXA6IDIwcHg7XFxufVxcblxcbiNkYXktZm9yZWNhc3QgLmNvbmRpdGlvbixcXG4jZGF5LWZvcmVjYXN0IC5wcmVjaXBpdGF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkYXktZm9yZWNhc3QgLmNvbmRpdGlvbiB7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI2RheS1mb3JlY2FzdCAucHJlY2lwaXRhdGlvbiB7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuI2RheS1mb3JlY2FzdCAuY29uZGl0aW9uIC5pY29uID4gc3ZnIHtcXG4gIG1heC13aWR0aDogMzVweDtcXG4gIG1pbi1oZWlnaHQ6IDM1cHg7XFxufVxcblxcbiNkYXktZm9yZWNhc3QgLnByZWNpcGl0YXRpb24gLmljb24gPiBzdmcge1xcbiAgZmlsbDogdmFyKC0tUmFpbik7XFxuICBtYXgtd2lkdGg6IDI0cHg7XFxuICBtaW4taGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4vKiA0LiBIdW1pZGl0eSBhbmQgVVYgSW5kZXggKi9cXG4uZG91YmxlLXNlY3Rpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5kb3VibGUtc2VjdGlvbi1jb250YWluZXIgPiBzZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jaHVtaWRpdHksXFxuI3V2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2h1bWlkaXR5IC52YWx1ZS1jb250YWluZXIsXFxuI3V2IC52YWx1ZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaHVtaWRpdHkgLnZhbHVlLFxcbiN1diAudmFsdWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMDQycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2h1bWlkaXR5IC52YWx1ZSB7XFxuICBjb2xvcjogdmFyKC0tUmFpbik7XFxufVxcblxcbiN1diAudmFsdWUge1xcbiAgY29sb3I6IHZhcigtLVV2SW5kZXgpO1xcbn1cXG5cXG4uYXJjLXBlcmNlbnRhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblxcbiNodW1pZGl0eSAuYXJjLXBhdGgge1xcbiAgc3Ryb2tlOiB2YXIoLS1SYWluKTtcXG59XFxuXFxuI3V2IC5hcmMtcGF0aCB7XFxuICBzdHJva2U6IHZhcigtLVV2SW5kZXgpO1xcbn1cXG5cXG4jaHVtaWRpdHkgLnRpdGxlLWNvbnRhaW5lcixcXG4jdXYgLnRpdGxlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaHVtaWRpdHkgLmljb24gPiBzdmcsXFxuI3V2IC5pY29uID4gc3ZnIHtcXG4gIGZpbGw6IHZhcigtLUJsYWNrKTtcXG4gIG1heC13aWR0aDogMjRweDtcXG4gIG1pbi1oZWlnaHQ6IDI0cHg7XFxufVxcblxcbi8qIDUuIE1vcmUgd2VhdGhlciBmbmZvICovXFxuXFxuI21vcmUtd2VhdGhlci1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sZWZ0LXNpZGUsXFxuLnJpZ2h0LXNpZGUge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubGVmdC1zaWRlIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLURpdmlkZXIpO1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gIG1hcmdpbi1yaWdodDogMzJweDtcXG59XFxuXFxuLmxlZnQtc2lkZSA+IGRpdixcXG4ucmlnaHQtc2lkZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ubGVmdC1zaWRlIC50aXRsZSxcXG4ucmlnaHQtc2lkZSAudGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21vcmUtd2VhdGhlci1pbmZvIC5pY29uID4gc3ZnIHtcXG4gIG1heC13aWR0aDogMjRweDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGZpbGw6IHZhcigtLUJsYWNrKTtcXG59XFxuXFxuI21vcmUtd2VhdGhlci1pbmZvIC5kaXJlY3Rpb24gPiBzdmcge1xcbiAgbWF4LXdpZHRoOiAxNnB4O1xcbiAgbWluLXdpZHRoOiAxNnB4O1xcbiAgZmlsbDogdmFyKC0tU21hbGxUZXh0QmxhY2spO1xcbn1cXG5cXG4udmFsdWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNHB4O1xcbn1cXG5cXG4vKiA2LiBTdW4gcG9zaXRpb24gYW5kIG1vb24gcGhhc2UgKi9cXG5cXG4uYXN0cm8tdmFsdWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc3VuLXBvc2l0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMTJweDtcXG59XFxuXFxuI3N1bi1wb3NpdGlvbiAuaWNvbiB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbn1cXG5cXG4jc3VuLXBvc2l0aW9uIC5pY29uID4gc3ZnLFxcbiNtb29uLXBoYXNlIC5pY29uID4gc3ZnIHtcXG4gIG1heC13aWR0aDogMTcwcHg7XFxuICBtaW4taGVpZ2h0OiAxNzBweDtcXG59XFxuXFxuI21vb24tcGhhc2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2lyY2xlLWJhY2tncm91bmQge1xcbiAgc3Ryb2tlOiB2YXIoLS1EaXZpZGVyKTtcXG59XFxuXFxuLmFyYy1wYXRoIHtcXG4gIHN0cm9rZTogdmFyKC0tUHJpbWFyeSk7XFxufVxcblxcbi8qIExvYWRpbmcgc2NyZWVuICovXFxuI2xvYWRpbmctc2NyZWVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLVdoaXRlKTtcXG59XFxuXFxuI2xvYWRpbmctc2NyZWVuIC5pY29uIHtcXG4gIGFuaW1hdGlvbjogbG9hZGluZ0FuaW1hdGlvbiAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI2xvYWRpbmctc2NyZWVuIC5pY29uIHN2ZyB7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBzdHJva2U6IHZhcigtLVdoaXRlKTtcXG59XFxuXFxuLyogU2V0dGluZ3MgZGlhbG9nICovXFxuXFxuZGlhbG9nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVdoaXRlKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgY29sb3I6IHZhcigtLUJsYWNrKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgb3BhY2l0eSAzMDBtcyxcXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLFxcbiAgICBvdmVybGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlLFxcbiAgICBkaXNwbGF5IDMwMG1zIGFsbG93LWRpc2NyZXRlO1xcbn1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuQHN0YXJ0aW5nLXN0eWxlIHtcXG4gIGRpYWxvZ1tvcGVuXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XFxuICB9XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgZGlzcGxheSAzMDBtcyBhbGxvdy1kaXNjcmV0ZSxcXG4gICAgb3ZlcmxheSAzMDBtcyBhbGxvdy1kaXNjcmV0ZSxcXG4gICAgYmFja2dyb3VuZC1jb2xvciAzMDBtcztcXG59XFxuXFxuZGlhbG9nW29wZW5dOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XFxufVxcblxcbkBzdGFydGluZy1zdHlsZSB7XFxuICBkaWFsb2dbb3Blbl06OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xcbiAgfVxcbn1cXG5cXG4jc2V0dGluZ3MtZGlhbG9nIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuI3NldHRpbmdzLWRpYWxvZyAudGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jc2V0dGluZ3MtZGlhbG9nIGgxLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmZvcm0jc2V0dGluZ3Mge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxufVxcblxcbiNzZXR0aW5ncy1kaWFsb2cgZm9ybSNzZXR0aW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI3NldHRpbmdzIC5maWVsZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uZmllbGQtdGl0bGUgLmljb24gc3ZnIHtcXG4gIG1heC13aWR0aDogMjhweDtcXG4gIG1pbi1oZWlnaHQ6IDI4cHg7XFxuICBmaWxsOiB2YXIoLS1CbGFjayk7XFxufVxcblxcbiNzZXR0aW5ncyAuc2V0dGluZ3MtZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZXR0aW5ncyAuc2V0dGluZ3MtZmllbGQgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4jc2V0dGluZ3MtZGlhbG9nIC5zb3VyY2UtY29kZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG5cXG4jc2V0dGluZ3MtZGlhbG9nIC5zb3VyY2UtY29kZSBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmRpYWxvZyAuYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbn1cXG5cXG4vKiBBbGVydCBib3ggKi9cXG4jYWxlcnQtYm94IHtcXG4gIHdpZHRoOiA0ODBweDtcXG59XFxuXFxuI2FsZXJ0LWJveCAuY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBtaW4tY29udGVudCk7XFxuICBnYXA6IDEwcHggMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGVydC1ib3ggLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG59XFxuXFxuI2FsZXJ0LWJveCAuaWNvbiB7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG4gIHdpZHRoOiA1NnB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbiNhbGVydC1ib3ggLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuXFxuI2FsZXJ0LWJveCBidXR0b24ge1xcbiAgcGFkZGluZzogOHB4IDI0cHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CbGFjayk7XFxuICBjb2xvcjogdmFyKC0tV2hpdGUpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLVByaW1hcnlIb3Zlcik7XFxufVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiB2YXIoLS1QcmltYXJ5QWN0aXZlKTtcXG59XFxuXFxuLyogU1ZHIGZpbGwgY29sb3JzICovXFxuI2N1cnJlbnQtd2VhdGhlci5kYXkgLmNvbmRpdGlvbi1pY29uIC5yYWluZHJvcCB7XFxuICBmaWxsOiB2YXIoLS1SYWluQ29udHJhc3QpICFpbXBvcnRhbnQ7XFxufVxcblxcbiNob3VyLWZvcmVjYXN0IC5jb25kaXRpb24taWNvbiAuc25vd2ZsYWtlLFxcbiNkYXktZm9yZWNhc3QgLmNvbmRpdGlvbiAuaWNvbiAuc25vd2ZsYWtlIHtcXG4gIGZpbGw6IHZhcigtLVNub3dDb250cmFzdCkgIWltcG9ydGFudDtcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcblxcbkBrZXlmcmFtZXMgbG9hZGluZ0FuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi8qIE1lZGlhIHF1ZXJpZXMgKi9cXG4vKiBDaGFuZ2UgdGhpcyBtZWRpYSBxdWVyeSB3aGVuIHNldHRpbmcgZmluYWwgYXBwIG5hbWUgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAjYXBwLXRpdGxlIC5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNjdXJyZW50LXdlYXRoZXIge1xcbiAgICBjb2x1bW4tZ2FwOiAxMnB4O1xcbiAgfVxcblxcbiAgLmRvdWJsZS1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAjbW9yZS13ZWF0aGVyLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAjbW9yZS13ZWF0aGVyLWluZm8gLmxlZnQtc2lkZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAjZGF5LWZvcmVjYXN0IHtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gIH1cXG5cXG4gICNkYXktZm9yZWNhc3QgLmNvbmRpdGlvbiAudmFsdWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBoZWFkZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIH1cXG5cXG4gICNjdXJyZW50LXdlYXRoZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbiBzdmcge1xcbiAgICBtYXgtd2lkdGg6IDgwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXRlbXAgLnZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5vdGhlci10ZW1wcyB7XFxuICAgIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgICBncmlkLXJvdzogMi8gLTE7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5sb2NhdGlvbixcXG4gICNjdXJyZW50LXdlYXRoZXIgLmN1cnJlbnQtdGVtcCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5jb25kaXRpb24taWNvbixcXG4gICNjdXJyZW50LXdlYXRoZXIgLm90aGVyLXRlbXBzIHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB9XFxuXFxuICAjY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXRlbXAsXFxuICAjY3VycmVudC13ZWF0aGVyIC5vdGhlci10ZW1wcyB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gIH1cXG5cXG4gICNjdXJyZW50LXdlYXRoZXIgLmxvY2F0aW9uLFxcbiAgI2N1cnJlbnQtd2VhdGhlciAuY29uZGl0aW9uLWljb24ge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgY29sdW1uLWdhcDogNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDhweDtcXG4gIH1cXG5cXG4gICNzZXR0aW5ncy1kaWFsb2cgZm9ybSNzZXR0aW5ncyB7XFxuICAgIGdhcDogMjRweDtcXG4gIH1cXG5cXG4gICNzZXR0aW5ncy1kaWFsb2cgLnNldHRpbmdzLWZpZWxkIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxuICB9XFxuXFxuICAjc2V0dGluZ3MtZGlhbG9nIC5maWVsZC10aXRsZSB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgfVxcblxcbiAgI3NldHRpbmdzLWRpYWxvZyBzZWxlY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAjc2V0dGluZ3MtZGlhbG9nIC5idXR0b25zIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICAjc2V0dGluZ3MtZGlhbG9nIC5idXR0b25zIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgI3NldHRpbmdzLWRpYWxvZyAuYnV0dG9ucyBidXR0b24sXFxuICAjc2V0dGluZ3MtZGlhbG9nIHNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIH1cXG5cXG4gICNhbGVydC1ib3ggLmNvbnRlbnQge1xcbiAgICBjb2x1bW4tZ2FwOiAxNnB4O1xcbiAgfVxcblxcbiAgI2FsZXJ0LWJveCAuaWNvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNhbGVydC1ib3ggLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2FsZXJ0LWJveCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMnB4IDMycHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIH1cXG5cXG4gIGhlYWRlciAjYXBwLXRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNzZWFyY2gtbG9jYXRpb24tYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIC5jbGVhci1pbnB1dCB7XFxuICAgIHRvcDogOXB4O1xcbiAgfVxcblxcbiAgI2ZvcmVjYXN0IHNlY3Rpb24ge1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICB9XFxuXFxuICAjZm9yZWNhc3Qgc2VjdGlvbjpub3QoI2N1cnJlbnQtd2VhdGhlcikge1xcbiAgICBwYWRkaW5nOiAyNHB4IDEycHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwcHgpIHtcXG4gICNzZWFyY2gtbG9jYXRpb24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tU21hbGxUZXh0QmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB9XFxuXFxuICAuY2xlYXItaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3NlYXJjaC1sb2NhdGlvbi1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMzLjg2NjY2NCAzMy44NjY2NjRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInN2ZzFcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxkZWZzIGlkPVxcXCJkZWZzMVxcXCI+PGxpbmVhckdyYWRpZW50IGlkPVxcXCJsaW5lYXJHcmFkaWVudDFcXFwiPjxzdG9wIHN0eWxlPVxcXCJzdG9wLWNvbG9yOiM3OGI2ZDc7c3RvcC1vcGFjaXR5OjE7XFxcIiBvZmZzZXQ9XFxcIjAuMDkzNzMxMlxcXCIgaWQ9XFxcInN0b3AxXFxcIj48L3N0b3A+PHN0b3Agc3R5bGU9XFxcInN0b3AtY29sb3I6IzJhOTBkNDtzdG9wLW9wYWNpdHk6MTtcXFwiIG9mZnNldD1cXFwiMC44NDI1Nzk4NFxcXCIgaWQ9XFxcInN0b3AyXFxcIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj1cXFwiI2xpbmVhckdyYWRpZW50MVxcXCIgaWQ9XFxcImxpbmVhckdyYWRpZW50MlxcXCIgeDE9XFxcIjEuMDU4MzMzM1xcXCIgeTE9XFxcIjEuMDU4MzMzM1xcXCIgeDI9XFxcIjMyLjgwODMzMVxcXCIgeTI9XFxcIjMyLjgwODMzMVxcXCIgZ3JhZGllbnRVbml0cz1cXFwidXNlclNwYWNlT25Vc2VcXFwiIGdyYWRpZW50VHJhbnNmb3JtPVxcXCJtYXRyaXgoMS4wNjY2NjY4LDAsMCwxLjA2NjY2NjgsLTEuMTI4ODg4OSwtMS4xMjg4ODg5KVxcXCI+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgaWQ9XFxcImxheWVyMVxcXCI+PHJlY3Qgc3R5bGU9XFxcImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDIpO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo0LjUxNTU1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzXFxcIiBpZD1cXFwicmVjdDFcXFwiIHdpZHRoPVxcXCIzMy44NjY2NjVcXFwiIGhlaWdodD1cXFwiMzMuODY2NjY1XFxcIiB4PVxcXCI0LjY2MjkzNjdlLTE1XFxcIiB5PVxcXCI0LjY2MjkzNjdlLTE1XFxcIiByeT1cXFwiNi43NzMzMzMxXFxcIj48L3JlY3Q+PGcgaWQ9XFxcImc2MlxcXCIgdHJhbnNmb3JtPVxcXCJtYXRyaXgoMC45LDAsMCwwLjksMS4yODY4NzkyLDAuMjYyMzQxNTIpXFxcIj48cGF0aCBpZD1cXFwicGF0aDktOFxcXCIgc3R5bGU9XFxcImZpbGw6I2UzYzA2MztmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MS45MTI0NlxcXCIgZD1cXFwibSAxMi4zODE2NzUsOC4xNTM1MDc1IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNTk2ODYzLDAuNTk2MzQ2IHYgMS44NjI0MTg1IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgMC41OTY4NjMsMC41OTYzNDYgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgMC41OTU4MjksLTAuNTk2MzQ2IFYgOC43NDk4NTM1IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNTk1ODI5LC0wLjU5NjM0NiB6IG0gNi4wNjk5MTMsMi40Nzk0MzU1IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNDIxNjc5LDAuMTc0NjY2IGwgLTEuMzE2NzE2LDEuMzE2NzE2IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgMCwwLjg0Mzg3NiAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLjg0MzM1OSwwIGwgMS4zMTY3MTYsLTEuMzE3MjMzIGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgMCwtMC44NDMzNTkgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNDIxNjgsLTAuMTc0NjY2IHogbSAtMTIuMTI1ODc0NiwwLjAxNDk5IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNDIyMTk2NCwwLjE3NDY2NiAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLDAuODQzMzYgbCAxLjMxNzIzMjIsMS4zMTY3MTUgYSAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLjg0MzM1OTQsMCAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLC0wLjg0MzM1OSBMIDYuNzQ3MzkzMSwxMC44MjI1OTUgQSAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCA2LjMyNTcxMzQsMTAuNjQ3OTI5IFogbSA2LjA1NTQ0NDYsMi4wNjE4OSBhIDQuNTg5ODk0Miw0LjU4OTg5NDIgMCAwIDAgLTQuNTg5OTAxLDQuNTg5OSA0LjU4OTg5NDIsNC41ODk4OTQyIDAgMCAwIDEuMjQ1OTE4OCwzLjEyNTkwOCBjIDAuOTQ3NTA1NSwtMC44MzUyOTcgMi4xODU2ODIyLC0xLjM0NzY4IDMuNTQwODY5MiwtMS4zNDc3MjIgaCAwLjAwMjEgYyAwLjAwMzMsOWUtNiAwLjAwNjUsLTEuNWUtNSAwLjAwOTgsMCAwLjY3NDEyOCwtMS44MzM0NCAxLjk4MDgxNiwtMy4zMjIzMjkgMy42NTk3MjQsLTQuMjMwMjMyIGEgNC41ODk4OTQyLDQuNTg5ODk0MiAwIDAgMCAtMy44Njg0OTcsLTIuMTM3ODU0IHogbSAtOC41NDcyODIyLDMuOTkzNTU0IGEgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNTk2ODYyNywwLjU5NjM0NiAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLjU5Njg2MjcsMC41OTY4NjMgaCAxLjg2MTkwMTkgYSAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAwLjU5NjM0NiwtMC41OTY4NjMgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgLTAuNTk2MzQ2LC0wLjU5NjM0NiB6IE0gNy42MzU3MTEsMjEuNDQ4ODIgYSAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCAtMC40MjIxOTY1LDAuMTc0NjY2IGwgLTEuMzE2MTk4NywxLjMxNjcxNiBhIDAuNTk2NjA0LDAuNTk2NjA0IDAgMCAwIDAsMC44NDMzNTkgMC41OTY2MDQsMC41OTY2MDQgMCAwIDAgMC44NDMzNTk0LDAgTCA3LjM3MjY3NzksMjMuMTUxNTU4IEMgNy41MTE1Mjg5LDIyLjU5Nzg0IDcuNzM1NTEzLDIyLjA3Nzk3IDguMDMyMDY5MiwyMS42MDY0MzMgQSAwLjU5NjYwNCwwLjU5NjYwNCAwIDAgMCA3LjYzNTcxMSwyMS40NDg4MiBaXFxcIj48L3BhdGg+PHBhdGggaWQ9XFxcInBhdGgyLTI5XFxcIiBzdHlsZT1cXFwiZmlsbDojZDRkY2U1O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDozLjAzNzg7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2Vyc1xcXCIgZD1cXFwibSAyMC4wMzYxMzgsMTQuNzA2ODQ5IGMgLTMuMzExNjksMCAtNi4wOTMyMSwyLjI2OTU0MyAtNi44NzQzMTUsNS4zMzgwNjQgLTAuMTkzNjM2LC0wLjAyNjIyIC0wLjM4ODc5MSwtMC4wMzk2NSAtMC41ODQxOTQsLTAuMDQwMTggLTIuNDU0NDg5LDcuNWUtNSAtNC40NDQxNTU3LDEuOTg5OTQ4IC00LjQ0Mzk3NzksNC40NDQ0NCA4LjExZS01LDIuNDU0MzA0IDEuOTg5NjcxOSw0LjQ0Mzg5NiA0LjQ0Mzk3NzksNC40NDM5NjggMC4xMjE4ODEsLTQuNTZlLTQgMCwwIDAuMzY1MTIxLDAgdiAwIGggNy4wOTMzODggNy4wOTMzODcgdiAtMC4wMTcyOCBjIDAuMDgxMzYsMC4wMDgyIDAuMTYyOTM2LDAuMDEzOTIgMC4yNDQ2MzIsMC4wMTcyOCAyLjI5NjkyMywtMS4yOGUtNCA0LjE1ODg0NSwtMS44NjIyNTYgNC4xNTg3MjgsLTQuMTU5MTc2IC0xLjI2ZS00LC0yLjI5Njc1NiAtMS44NjE5NzcsLTQuMTU4NjEyIC00LjE1ODcyOCwtNC4xNTg3NDEgLTAuMTE2MjI3LDAuMDAzMiAtMC4yMzIyNTQsMC4wMTE5MiAtMC4zNDc3NzgsMC4wMjUxMiBDIDI2LjQ1NjE3NCwxNy4yNTQ0MjggMjMuNTQ0NTQ1LDE0LjcwNjggMjAuMDM2MTM4LDE0LjcwNjggWlxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCI+PGNpcmNsZSBjbGFzcz1cXFwiY2lyY2xlLWJhY2tncm91bmRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHN0cm9rZS13aWR0aD1cXFwiMTJcXFwiIGN4PVxcXCI1MFxcXCIgY3k9XFxcIjUwXFxcIiByPVxcXCI0NFxcXCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XFxcImFyYy1wYXRoXFxcIiBmaWxsPVxcXCJub25lXFxcIiBzdHJva2Utd2lkdGg9XFxcIjEyXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDgwLTE2MHEtMTM0IDAtMjI3LTkzdC05My0yMjdxMC0xMzQgOTMtMjI3dDIyNy05M3E2OSAwIDEzMiAyOC41VDcyMC02OTB2LTExMGg4MHYyODBINTIwdi04MGgxNjhxLTMyLTU2LTg3LjUtODhUNDgwLTcyMHEtMTAwIDAtMTcwIDcwdC03MCAxNzBxMCAxMDAgNzAgMTcwdDE3MCA3MHE3NyAwIDEzOS00NHQ4Ny0xMTZoODRxLTI4IDEwNi0xMTQgMTczdC0xOTYgNjdaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJtMjU2LTIwMC01Ni01NiAyMjQtMjI0LTIyNC0yMjQgNTYtNTYgMjI0IDIyNCAyMjQtMjI0IDU2IDU2LTIyNCAyMjQgMjI0IDIyNC01NiA1Ni0yMjQtMjI0LTIyNCAyMjRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNDgwLTEwMHEtMTMzIDAtMjI2LjUtOTJUMTYwLTQxNnEwLTYzIDI0LjUtMTIwLjVUMjU0LTYzOGwyMjYtMjIyIDIyNiAyMjJxNDUgNDQgNjkuNSAxMDEuNVQ4MDAtNDE2cTAgMTMyLTkzLjUgMjI0VDQ4MC0xMDBabTAtODBxMTAwIDAgMTcwLTY4LjVUNzIwLTQxNnEwLTQ3LTE4LTg5LjVUNjUwLTU4MEw0ODAtNzQ4IDMxMC01ODBxLTM0IDMyLTUyIDc0LjVUMjQwLTQxNnEwIDk5IDcwIDE2Ny41VDQ4MC0xODBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMzMuODY2NjY0IDMzLjg2NjY2NFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwic3ZnMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZGVmcyBpZD1cXFwiZGVmczFcXFwiPjwvZGVmcz48ZyBpZD1cXFwibGF5ZXIxXFxcIj48cGF0aCBzdHlsZT1cXFwiZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZjRmNGY0O3N0cm9rZS13aWR0aDozLjgyNDAyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzXFxcIiBpZD1cXFwicGF0aDFcXFwiIGQ9XFxcIk0gMjkuNzAxMjE2LDE4LjgxNzM5MSBBIDEyLjkwNjA4MiwxMi45MDYwODIgMCAwIDEgMTYuMjkyMjAzLDI5LjgyMzQwNCAxMi45MDYwODIsMTIuOTA2MDgyIDAgMCAxIDQuMDQxNjM5NCwxNy41NDA5OTEgMTIuOTA2MDgyLDEyLjkwNjA4MiAwIDAgMSAxNS4wODI0MzEsNC4xNjA1OTk2XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTE5OC00ODRxLTE1IDgtMzAuNSAyLjVUMTQ0LTUwMkw0NC03MDJxLTgtMTUtMi41LTMwLjVUNjItNzU2cTE1LTggMzAuNS0yLjVUMTE2LTczOGwxMDAgMjAwcTggMTUgMi41IDMwLjVUMTk4LTQ4NFptMTQwIDI4MHEtMTUgOC0zMC41IDIuNVQyODQtMjIybC04MC0xNjBxLTgtMTUtMi41LTMwLjVUMjIyLTQzNnExNS04IDMwLjUtMi41VDI3Ni00MThsODAgMTYwcTggMTUgMi41IDMwLjVUMzM4LTIwNFptODItMjAwcS0xNSA4LTMwLjUgMi41VDM2Ni00MjJMMjI2LTcwMnEtOC0xNS0yLjUtMzAuNVQyNDQtNzU2cTE1LTggMzAuNS0yLjVUMjk4LTczOGwxNDAgMjgwcTggMTUgMi41IDMwLjVUNDIwLTQwNFptODYtMjAwcS0xNSA4LTMwLjUgMi41VDQ1Mi02MjJsLTM5LTgwcS04LTE1LTIuNS0zMC41VDQzMS03NTZxMTUtOCAzMC0yLjV0MjMgMjAuNWw0MCA4MHE4IDE1IDIuNSAzMC41VDUwNi02MDRabTI0IDM5OXEtMTUgOC0zMC41IDNUNDc2LTIyMmwtNDAtODBxLTgtMTUtMi41LTMwLjVUNDU0LTM1NnExNS04IDMwLjUtMi41VDUwOC0zMzhsNDAgODBxOCAxNSAyLjUgMzBUNTMwLTIwNVptMTg2IDBxLTE1IDgtMzAuNSAzVDY2Mi0yMjJMNTIyLTUwMnEtOC0xNS0yLjUtMzAuNVQ1NDAtNTU2cTE1LTggMzAuNS0yLjVUNTk0LTUzOGwxNDAgMjgwcTggMTUgMi41IDMwVDcxNi0yMDVabTYyLTIzOXEtMTUgOC0zMC41IDIuNVQ3MjQtNDYyTDYwNC03MDJxLTgtMTUtMi41LTMwLjVUNjIyLTc1NnExNS04IDMwLjUtMi41VDY3Ni03MzhsMTIwIDI0MHE4IDE1IDIuNSAzMC41VDc3OC00NDRabTEyMCAyNDBxLTE1IDgtMzAuNSAyLjVUODQ0LTIyMmwtNjAtMTIwcS04LTE1LTIuNS0zMC41VDgwMi0zOTZxMTUtOCAzMC41LTIuNVQ4NTYtMzc4bDYwIDEyMHE4IDE1IDIuNSAzMC41VDg5OC0yMDRaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNMjAwLTQwMHEtMTcgMC0yOC41LTExLjVUMTYwLTQ0MHEwLTE3IDExLjUtMjguNVQyMDAtNDgwaDU2MHExNyAwIDI4LjUgMTEuNVQ4MDAtNDQwcTAgMTctMTEuNSAyOC41VDc2MC00MDBIMjAwWm0wLTEyMHEtMTcgMC0yOC41LTExLjVUMTYwLTU2MHEwLTE3IDExLjUtMjguNVQyMDAtNjAwaDU2MHExNyAwIDI4LjUgMTEuNVQ4MDAtNTYwcTAgMTctMTEuNSAyOC41VDc2MC01MjBIMjAwWk00ODAtODBxLTE3IDAtMjguNS0xMS41VDQ0MC0xMjB2LTg4bC0zNiAzNnEtMTEgMTEtMjggMTF0LTI4LTExcS0xMS0xMS0xMS0yOHQxMS0yOGwxMDQtMTA0cTYtNiAxMy04LjV0MTUtMi41cTggMCAxNSAyLjV0MTMgOC41bDEwNCAxMDRxMTEgMTEgMTEuNSAyNy41VDYxMi0xNzJxLTExIDExLTI3LjUgMTEuNVQ1NTYtMTcxbC0zNi0zNXY4NnEwIDE3LTExLjUgMjguNVQ0ODAtODBabTAtNTc3cS04IDAtMTUtMi41dC0xMy04LjVMMzQ4LTc3MnEtMTEtMTEtMTEtMjh0MTEtMjhxMTEtMTEgMjgtMTF0MjggMTFsMzYgMzZ2LTg4cTAtMTcgMTEuNS0yOC41VDQ4MC05MjBxMTcgMCAyOC41IDExLjVUNTIwLTg4MHY4OGwzNi0zNnExMS0xMSAyOC0xMXQyOCAxMXExMSAxMSAxMSAyOHQtMTEgMjhMNTA4LTY2OHEtNiA2LTEzIDguNXQtMTUgMi41WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTQ4MC0xMDBxLTEzMyAwLTIyNi41LTkyVDE2MC00MTZxMC02MyAyNC41LTEyMC41VDI1NC02MzhsMjI2LTIyMiAyMjYgMjIycTQ1IDQ0IDY5LjUgMTAxLjVUODAwLTQxNnEwIDEzMi05My41IDIyNFQ0ODAtMTAwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDMzLjg2NjY2NCAzMy44NjY2NjRcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInN2ZzFcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGRlZnMgaWQ9XFxcImRlZnMxXFxcIj48L2RlZnM+PGcgaWQ9XFxcImxheWVyMVxcXCI+PHBhdGggaWQ9XFxcInBhdGgxXFxcIiBzdHlsZT1cXFwiZmlsbDojNjE3ZTk4O2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjA0MDM1MjZcXFwiIGQ9XFxcIm0gMTMuNjkwNjM3LDIuNjg1NjI0NSBjIC0zLjA2OTE0MSwwIC01LjY3Mjg0MzYsMS4wNjg0NzczIC03LjgxMDM3NjQsMy4yMDYwMDU4IC0yLjEzNzUzMjYsMi4xMzc1MzI4IC0zLjIwNjAwNTgsNC43NDEyMzU3IC0zLjIwNjAwNTgsNy44MTAzNzU3IDAsMS4zNTIzNyAwLjIwNzY3OTUsMi42MTM4MDggMC42MjI3MDEsMy43ODUyOTkgMC4yMDg4ODIzLC0wLjI2NTkyMSAwLjQzMTYxOTMsLTAuNTIxMDIgMC42NzEyNzY4LC0wLjc2MDY3NyAwLjc3MTU3MDksLTAuNzcxNTcxIDEuNjg3MzAzNiwtMS4zODY2MzkgMi42OTc1MDk4LC0xLjgyMDA0NCAwLjEyMDk1MTksLTAuMDUxODkgMC4yNDM2NjI2LC0wLjA5OTkxIDAuMzY2OTAyNywtMC4xNDU3MjggLTAuMDQ5MTc1LC0wLjM0MzMyMSAtMC4wODExMzIsLTAuNjkzODgxIC0wLjA4MTEzMiwtMS4wNTg4NSAwLC0xLjg4MDc4IDAuNjUzMTY0NywtMy40NzQxNzYgMS45NTkwNTM1LC00Ljc4MDA2OTcgMS4zMDU4OTI0LC0xLjMwNTg4ODggMi44OTkyODk0LC0xLjk1OTA1MzUgNC43ODAwNzA0LC0xLjk1OTA1MzUgMS44ODA3ODUsMCAzLjQ3MzY2NSwwLjY1MzE2NDcgNC43Nzk1NTMsMS45NTkwNTM1IDEuMzA1ODk0LDEuMzA1ODkzNyAxLjk1OTA1NCwyLjg5OTI4OTcgMS45NTkwNTQsNC43ODAwNjk3IDAsMS44ODA3ODUgLTAuNjUzMTYsMy40NzQxOCAtMS45NTkwNTQsNC43ODAwNyAtMC4yNDA2OCwwLjI0MDY4MSAtMC40OTQyNjcsMC40NTExODMgLTAuNzU0NDc1LDAuNjQ3NTA2IDAuMDQ1NiwwLjA5NjI3IDAuMDkxMTIsMC4xOTIzNTQgMC4xMzMzMjUsMC4yOTA0MjEgMC40NDk2MDgsMS4wNDQ3MSAwLjY3MTc5MywyLjE3OTE4MiAwLjY3MTc5MywzLjMzNDE2NCAwLDAuMjg2MzE1IC0wLjAxMzg3LDAuNTcxNDMxIC0wLjA0MTM0LDAuODU0MjExIDAuNDczMTcxLC0wLjIzNzYxNSAwLjkxNDcyOSwtMC41MDU0NSAxLjMyMTg4MywtMC44MDYxNTIgbCA3Ljc3NTIzNiw3Ljc3NTIzNiBjIDAuNDAyMzQ0LDAuNDAyMzUxIDAuOTAwNzkzLDAuNjAzNTggMS40OTUsMC42MDM1OCAwLjU5NDE2OSwwIDEuMDkyMTMsLTAuMjAxMjI5IDEuNDk0NDgyLC0wLjYwMzU4IDAuNDE3NTY3LC0wLjQwMjM0NCAwLjYyNjMxOCwtMC44OTY1MjEgMC42MjYzMTgsLTEuNDgzMTE0IDAsLTAuNTg2NTY0IC0wLjIwMTIyOSwtMS4wODg3OTcgLTAuNjAzNTgsLTEuNTA2MzY4IGwgLTcuNzk3OTc0LC03LjgyMTIyOCBjIDAuNTg0ODI3LC0wLjc3NjYyOSAxLjA1MDExLC0xLjY3Nzg3NSAxLjM5NjI5NywtMi43MDQyMjggMC4zNDYyMjcsLTEuMDI2MzgyIDAuNTE5MzQ4LC0yLjE0NjQzOCAwLjUxOTM0OCwtMy4zNjA1MTggMCwtMy4wNjkxNCAtMS4wNjg0NzMsLTUuNjcyODQyOSAtMy4yMDYwMDYsLTcuODEwMzc1NyAtMi4xMzc1MzMsLTIuMTM3NTI4NSAtNC43NDA3MiwtMy4yMDYwMDU4IC03LjgwOTg2LC0zLjIwNjAwNTggelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIm0gOS45OTIwOTAxLDI2LjIyMTQ4NiBxIDAuNDIwNDU4OSwwIDAuNzExNjAwOSwtMC4yODQ0MTggMC4yOTExNDUsLTAuMjg0NDMxIDAuMjkxMTQ1LC0wLjcwNDg3OCAwLC0wLjQyMDQ1NyAtMC4yODQ0MTgsLTAuNzE5MjY0IC0wLjI4NDQzMSwtMC4yOTg4MDcgLTAuNzA0ODc2LC0wLjI5ODgwNyAtMC40MjA0NTg5LDAgLTAuNzExNjA0OSwwLjI5NTU3NCAtMC4yOTExNDUsMC4yOTU1OSAtMC4yOTExNDUsMC43MTYwNDggMCwwLjQyMDQ0MyAwLjI4NDQyMSwwLjcwODA5MyAwLjI4NDQzMSwwLjI4NzY1MiAwLjcwNDg3NywwLjI4NzY1MiB6IG0gMC4wMDM2LC0yLjY5NjkyMSBxIDAuMzcwOTkxOSwwIDAuNjM5MTUyOSwtMC4yNjU4NzIgMC4yNjgxNTMsLTAuMjY1ODc0IDAuMjY4MTUzLC0wLjYzODIyMyB2IC0yLjIyMTg5MyBxIDAsLTAuMzcyMzU5IC0wLjI2NDkyNywtMC42MzgyMiAtMC4yNjQ5MjksLTAuMjY1ODczIC0wLjYzNTkyMSwtMC4yNjU4NzMgLTAuMzcwOTk1OSwwIC0wLjYzOTE1NjksMC4yNjU4NzMgLTAuMjY4MTUyLDAuMjY1ODcyIC0wLjI2ODE1MiwwLjYzODIyIHYgMi4yMjE4OTMgcSAwLDAuMzcyMzYxIDAuMjY0OTI4LDAuNjM4MjIzIDAuMjY0OTI3LDAuMjY1ODcyIDAuNjM1OTIzLDAuMjY1ODcyIHogbSAwLjAwNzUsNS42MzkwMTcgcSAtMS4zMzczNjYyLDAgLTIuNTAxNzQ2NSwtMC40OTkyOTggUSA2LjMzNzA3MTEsMjguMTY1IDUuNDY0NzIyOSwyNy4yOTI2NTUgNC41OTIzNzc1LDI2LjQyMDMwNiA0LjA5MzA5NjEsMjUuMjU2NTU3IDMuNTkzNzk4MiwyNC4wOTI4MDUgMy41OTM3OTgyLDIyLjc1MTM3OCBxIDAsLTEuMzQxNDQzIDAuNDk5Mjk3OSwtMi40OTgxNjIgMC40OTkyODE0LC0xLjE1NjczMiAxLjM3MTYyNjgsLTIuMDI5MDc4IDAuODcyMzQ4MiwtMC44NzIzNDcgMi4wMzYwOTk5LC0xLjM3MTYyOSAxLjE2Mzc1MTUsLTAuNDk5Mjk4IDIuNTA1MTc3MiwtMC40OTkyOTggMS4zNDE0NDIsMCAyLjQ5ODE2MSwwLjQ5OTI5OCAxLjE1NjczMywwLjQ5OTI4MiAyLjAyOTA3OCwxLjM3MTYyOSAwLjg3MjM0OCwwLjg3MjM0NiAxLjM3MTYyOSwyLjAzMjUxMSAwLjQ5OTI5OCwxLjE2MDE2NiAwLjQ5OTI5OCwyLjQ5NzUxNyAwLDEuMzM3MzY2IC0wLjQ5OTI5OCwyLjUwMTc0NiAtMC40OTkyODEsMS4xNjQzOTQgLTEuMzcxNjI5LDIuMDM2NzQzIC0wLjg3MjM0NSwwLjg3MjM0NSAtMi4wMzI1MTEsMS4zNzE2MjkgLTEuMTYwMTY1LDAuNDk5Mjk4IC0yLjQ5NzUxOCwwLjQ5OTI5OCB6XFxcIiBpZD1cXFwicGF0aDEtOVxcXCIgc3R5bGU9XFxcImZpbGw6I2U4NGM1ZTtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wMTUzMjM0XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTM3Mi0zMDdxLTExNi4xMDggMC0xOTYuODg3LTgwLjgzNC04MC43OC04MC44MzMtODAuNzgtMTk1LjQ5OSAwLTExNC42NjcgODAuODM0LTE5NS41UTI1Ni04NTkuNjY3IDM3MS04NTkuNjY3dDE5NS41IDgwLjgzNFE2NDctNjk4IDY0Ny01ODMuMjMzcTAgNDUuMjMzLTEyLjMzNCA4My40LTEyLjMzMyAzOC4xNjYtMzUuNjY2IDcwLjE2NmwyMjkuMzMzIDIyOC4zMzRxMTUuMzM0IDE2LjAzNyAxNS4zMzQgMzcuNjg1IDAgMjEuNjQ4LTE1LjY2NyAzNi45ODEtMTUuNjg5IDE2LTM3LjY1OSAxNnQtMzcuMDA3LTE2TDUyNS0zNTQuMzM0cS0yOSAyMS45NDktNjguMTM5IDM0LjY0MVE0MTcuNzIxLTMwNyAzNzItMzA3Wm0tLjQzMS0xMDQuNjY2cTcxLjkzMSAwIDEyMS4zNDgtNTAgNDkuNDE3LTUwLjAwMSA0OS40MTctMTIxLjY2NyAwLTcxLjY2Ny00OS41MTUtMTIxLjY2Ny00OS41MTUtNTAuMDAxLTEyMS4yNS01MC4wMDEtNzIuMjkxIDAtMTIyLjQzIDUwLjAwMVExOTktNjU1IDE5OS01ODMuMzMzcTAgNzEuNjY2IDUwLjA0MSAxMjEuNjY3IDUwLjA0MSA1MCAxMjIuNTI4IDUwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIC05NjAgOTYwIDk2MFxcXCI+PHBhdGggZD1cXFwiTTQyNS04MHEtMTguMzMzIDAtMzIuMTY2LTEyLTEzLjgzNC0xMi0xNi41LTI5Ljk5OWwtMTMtODQuNjY4UTM0Ni4zMzMtMjEzIDMyOC41LTIyMy4zMzMgMzEwLjY2Ni0yMzMuNjY3IDI5Ni4zMzMtMjQ1bC03OCAzNS4zMzNRMjAwLjY2Ni0yMDIgMTgzLTIwOHEtMTcuNjY3LTYtMjcuNjY3LTIyLjMzM0wxMDEtMzI3cS0xMC0xNi4zMzMtNS42NjctMzQuMzMzdDE5LjMzMy0yOS42NjZsNzEuMDAxLTUyLjY2N3EtMS42NjctOC4zMzQtMi0xOC4xNjctLjMzNC05LjgzNC0uMzM0LTE4LjE2NyAwLTguMzMzLjMzNC0xOC4xNjcuMzMzLTkuODMzIDItMTguMTY3bC03MS4wMDEtNTIuNjY3cS0xNS0xMS42NjYtMTkuMzMzLTI5LjY2NlE5MS02MTYuNjY3IDEwMS02MzNsNTQuMzMzLTk2LjY2N1ExNjUuMzMzLTc0NiAxODMtNzUycTE3LjY2Ni02IDM1LjMzMyAxLjY2N2w3OCAzNS4zMzNxMTQuMzMzLTExLjMzMyAzMi4zMzQtMjEuNjY3IDE4LTEwLjMzMyAzNC42NjctMTZsMTMtODUuMzM0UTM3OS04NTYgMzkyLjgzNC04NjhxMTMuODMzLTEyIDMyLjE2Ni0xMmgxMTBxMTguMzMzIDAgMzIuMTY3IDEyIDEzLjgzMyAxMiAxNi40OTkgMjkuOTk5bDEzIDg0LjY2OFE2MTMuNjY3LTc0NyA2MzEuODMzLTczN3ExOC4xNjcgMTAgMzEuODM0IDIybDc4LTM1LjMzM3ExNy42NjctNy42NjcgMzUtMS42NjdUODA0LTcyOS42NjdMODU5LTYzM3ExMCAxNi4zMzMgNS42NjcgMzQuNjY2LTQuMzMzIDE4LjMzNC0xOS4zMzMgMjkuMzMzbC03MS4wMDEgNTEuMzM0cTEuNjY3IDkgMiAxOC44MzQuMzM0IDkuODMzLjMzNCAxOC44MzMgMCA5LS4zMzQgMTguNVE3NzYtNDUyIDc3NC00NDNsNzEgNTIuMDAxcTE1IDEwLjk5OSAxOS4zMzMgMjkuMzMzIDQuMzM0IDE4LjMzMy01LjY2NiAzNC42NjZMODA0LTIzMC4zMzNRNzk0LTIxNCA3NzYuMzM0LTIwOHEtMTcuNjY3IDYtMzUuMzMzLTEuNjY3TDY2My42NjctMjQ1cS0xNC4zMzMgMTEuMzMzLTMyIDIydC0zNS4wMDEgMTYuMzMzbC0xMyA4NC42NjhRNTgxLTEwNCA1NjcuMTY3LTkxLjk5OSA1NTMuMzMzLTgwIDUzNS04MEg0MjVabTEyLjMzMy02Ni42NjZoODVsMTQtMTEwcTMyLjMzNC04IDYwLjgzNC0yNC41VDY0OS0zMjFsMTAzLjY2NyA0NC4zMzQgMzkuNjY3LTcwLjY2N0w3MDEtNDE1cTQuMzM0LTE2IDYuNjY3LTMyLjE2N1E3MTAtNDYzLjMzMyA3MTAtNDgwcTAtMTYuNjY3LTItMzIuODMzUTcwNi01MjkgNzAxLTU0NWw5MS4zMzQtNjcuNjY3LTM5LjY2Ny03MC42NjdMNjQ5LTYzOC42NjdxLTIyLjY2Ni0yNS01MC44MzMtNDEuODMzLTI4LjE2Ny0xNi44MzQtNjEuODM0LTIyLjgzNGwtMTMuNjY2LTExMGgtODVsLTE0IDExMHEtMzMgNy4zMzQtNjEuNTAxIDIzLjgzNFEzMzMuNjY2LTY2MyAzMTEtNjM5bC0xMDMuNjY3LTQ0LjMzNC0zOS42NjcgNzAuNjY3TDI1OS01NDUuMzMzUTI1NC42NjYtNTI5IDI1Mi4zMzMtNTEzVDI1MC00ODBxMCAxNi42NjcgMi4zMzMgMzIuNjY3VDI1OS00MTVsLTkxLjMzNCA2Ny42NjcgMzkuNjY3IDcwLjY2N0wzMTEtMzIxLjMzM3EyMy4zMzMgMjMuNjY3IDUxLjgzMyA0MC4xNjd0NjAuODM0IDI0LjVsMTMuNjY2IDExMFptNDMuMzM0LTIwMC4wMDFxNTUuMzMzIDAgOTQuMzMzLTM5VDYxNC00ODBxMC01NS4zMzMtMzktOTQuMzMzdC05NC4zMzMtMzlxLTU1LjY2NyAwLTk0LjUgMzktMzguODM0IDM5LTM4LjgzNCA5NC4zMzN0MzguODM0IDk0LjMzM3EzOC44MzMgMzkgOTQuNSAzOVpNNDgwLTQ4MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk01MjAtNDk2di0xNDRxMC0xNy0xMS41LTI4LjVUNDgwLTY4MHEtMTcgMC0yOC41IDExLjVUNDQwLTY0MHYxNTlxMCA4IDMgMTUuNXQ5IDEzLjVsMTMyIDEzMnExMSAxMSAyOCAxMXQyOC0xMXExMS0xMSAxMS0yOHQtMTEtMjhMNTIwLTQ5NlpNNDgwLTgwcS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI3VDgwLTQ4MHEwLTgzIDMxLjUtMTU2VDE5Ny03NjNxNTQtNTQgMTI3LTg1LjVUNDgwLTg4MHE4MyAwIDE1NiAzMS41VDc2My03NjNxNTQgNTQgODUuNSAxMjdUODgwLTQ4MHEwIDgzLTMxLjUgMTU2VDc2My0xOTdxLTU0IDU0LTEyNyA4NS41VDQ4MC04MFptMC00MDBabTAgMzIwcTEzMyAwIDIyNi41LTkzLjVUODAwLTQ4MHEwLTEzMy05My41LTIyNi41VDQ4MC04MDBxLTEzMyAwLTIyNi41IDkzLjVUMTYwLTQ4MHEwIDEzMyA5My41IDIyNi41VDQ4MC0xNjBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgLTk2MCA5NjAgOTYwXFxcIj48cGF0aCBkPVxcXCJNNTYwLTUyMHEtMTcgMC0yOC41LTExLjVUNTIwLTU2MHEwLTE3IDExLjUtMjguNVQ1NjAtNjAwaDEyMHExNyAwIDI4LjUgMTEuNVQ3MjAtNTYwcTAgMTctMTEuNSAyOC41VDY4MC01MjBINTYwWm0wLTE2MHEtMTcgMC0yOC41LTExLjVUNTIwLTcyMHEwLTE3IDExLjUtMjguNVQ1NjAtNzYwaDI0MHExNyAwIDI4LjUgMTEuNVQ4NDAtNzIwcTAgMTctMTEuNSAyOC41VDgwMC02ODBINTYwWk0zMjAtMTIwcS04MyAwLTE0MS41LTU4LjVUMTIwLTMyMHEwLTQ4IDIxLTg5LjV0NTktNzAuNXYtMjQwcTAtNTAgMzUtODV0ODUtMzVxNTAgMCA4NSAzNXQzNSA4NXYyNDBxMzggMjkgNTkgNzAuNXQyMSA4OS41cTAgODMtNTguNSAxNDEuNVQzMjAtMTIwWk0yMDAtMzIwaDI0MHEwLTI5LTEyLjUtNTRUMzkyLTQxNmwtMzItMjR2LTI4MHEwLTE3LTExLjUtMjguNVQzMjAtNzYwcS0xNyAwLTI4LjUgMTEuNVQyODAtNzIwdjI4MGwtMzIgMjRxLTIzIDE3LTM1LjUgNDJUMjAwLTMyMFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00ODAtNzYwcS0xNyAwLTI4LjUtMTEuNVQ0NDAtODAwdi04MHEwLTE3IDExLjUtMjguNVQ0ODAtOTIwcTE3IDAgMjguNSAxMS41VDUyMC04ODB2ODBxMCAxNy0xMS41IDI4LjVUNDgwLTc2MFptMTk4IDgycS0xMS0xMS0xMS0yNy41dDExLTI4LjVsNTYtNTdxMTItMTIgMjguNS0xMnQyOC41IDEycTExIDExIDExIDI4dC0xMSAyOGwtNTcgNTdxLTExIDExLTI4IDExdC0yOC0xMVptMTIyIDIzOHEtMTcgMC0yOC41LTExLjVUNzYwLTQ4MHEwLTE3IDExLjUtMjguNVQ4MDAtNTIwaDgwcTE3IDAgMjguNSAxMS41VDkyMC00ODBxMCAxNy0xMS41IDI4LjVUODgwLTQ0MGgtODBaTTQ4MC00MHEtMTcgMC0yOC41LTExLjVUNDQwLTgwdi04MHEwLTE3IDExLjUtMjguNVQ0ODAtMjAwcTE3IDAgMjguNSAxMS41VDUyMC0xNjB2ODBxMCAxNy0xMS41IDI4LjVUNDgwLTQwWk0yMjYtNjc4bC01Ny01NnEtMTItMTItMTItMjl0MTItMjhxMTEtMTEgMjgtMTF0MjggMTFsNTcgNTdxMTEgMTEgMTEgMjh0LTExIDI4cS0xMiAxMS0yOCAxMXQtMjgtMTFabTUwOCA1MDktNTYtNTdxLTExLTEyLTExLTI4LjV0MTEtMjcuNXExMS0xMSAyNy41LTExdDI4LjUgMTFsNTcgNTZxMTIgMTEgMTEuNSAyOFQ3OTEtMTY5cS0xMiAxMi0yOSAxMnQtMjgtMTJaTTgwLTQ0MHEtMTcgMC0yOC41LTExLjVUNDAtNDgwcTAtMTcgMTEuNS0yOC41VDgwLTUyMGg4MHExNyAwIDI4LjUgMTEuNVQyMDAtNDgwcTAgMTctMTEuNSAyOC41VDE2MC00NDBIODBabTg5IDI3MXEtMTEtMTEtMTEtMjh0MTEtMjhsNTctNTdxMTEtMTEgMjcuNS0xMXQyOC41IDExcTEyIDEyIDEyIDI4LjVUMjgyLTIyNWwtNTYgNTZxLTEyIDEyLTI5IDEydC0yOC0xMlptMzExLTcxcS0xMDAgMC0xNzAtNzB0LTcwLTE3MHEwLTEwMCA3MC0xNzB0MTcwLTcwcTEwMCAwIDE3MCA3MHQ3MCAxNzBxMCAxMDAtNzAgMTcwdC0xNzAgNzBabTAtODBxNjYgMCAxMTMtNDd0NDctMTEzcTAtNjYtNDctMTEzdC0xMTMtNDdxLTY2IDAtMTEzIDQ3dC00NyAxMTNxMCA2NiA0NyAxMTN0MTEzIDQ3Wm0wLTE2MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00ODAtMzIwcTc1IDAgMTI3LjUtNTIuNVQ2NjAtNTAwcTAtNzUtNTIuNS0xMjcuNVQ0ODAtNjgwcS03NSAwLTEyNy41IDUyLjVUMzAwLTUwMHEwIDc1IDUyLjUgMTI3LjVUNDgwLTMyMFptMC03MnEtNDUgMC03Ni41LTMxLjVUMzcyLTUwMHEwLTQ1IDMxLjUtNzYuNVQ0ODAtNjA4cTQ1IDAgNzYuNSAzMS41VDU4OC01MDBxMCA0NS0zMS41IDc2LjVUNDgwLTM5MlptMCAxOTJxLTEzNCAwLTI0NC41LTcyVDYxLTQ2MnEtNS05LTcuNS0xOC41VDUxLTUwMHEwLTEwIDIuNS0xOS41VDYxLTUzOHE2NC0xMTggMTc0LjUtMTkwVDQ4MC04MDBxMTM0IDAgMjQ0LjUgNzJUODk5LTUzOHE1IDkgNy41IDE4LjVUOTA5LTUwMHEwIDEwLTIuNSAxOS41VDg5OS00NjJxLTY0IDExOC0xNzQuNSAxOTBUNDgwLTIwMFptMC0zMDBabTAgMjIwcTExMyAwIDIwNy41LTU5LjVUODMyLTUwMHEtNTAtMTAxLTE0NC41LTE2MC41VDQ4MC03MjBxLTExMyAwLTIwNy41IDU5LjVUMTI4LTUwMHE1MCAxMDEgMTQ0LjUgMTYwLjVUNDgwLTI4MFpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNSAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNOC41Njc3OCAzLjE3ODI1VjE0LjU1NTJDOC41Njc3OCAxNC43NjggOC40OTU5OSAxNC45NDYyIDguMzUyNCAxNS4wODk4QzguMjA4ODIgMTUuMjMzNCA4LjAzMDYyIDE1LjMwNTIgNy44MTc4IDE1LjMwNTJDNy42MDQ5OSAxNS4zMDUyIDcuNDI2NzkgMTUuMjMzNCA3LjI4MzIgMTUuMDg5OEM3LjEzOTYyIDE0Ljk0NjIgNy4wNjc4MyAxNC43NjggNy4wNjc4MyAxNC41NTUyVjMuMTc4MjVMMS44OTg1OCA4LjM0NzVDMS43NDk4NiA4LjQ5NjIyIDEuNTc1ODMgOC41Njk2MSAxLjM3NjQ4IDguNTY3NjhDMS4xNzcxMSA4LjU2NTc2IDAuOTk5ODcgOC40ODcyMyAwLjg0NDc1MyA4LjMzMjFDMC42OTk4ODcgOC4xNzY5OCAwLjYyNDg4NyA4LjAwMTM1IDAuNjE5NzUzIDcuODA1MkMwLjYxNDYyIDcuNjA5MDUgMC42ODk2MiA3LjQzMzQyIDAuODQ0NzUzIDcuMjc4M0w3LjE4NTEzIDAuOTM3OTI3QzcuMjc4NzEgMC44NDQzNDQgNy4zNzc0MyAwLjc3ODMxNiA3LjQ4MTI4IDAuNzM5ODVDNy41ODUxMSAwLjcwMTM4NCA3LjY5NzI5IDAuNjgyMTUgNy44MTc4IDAuNjgyMTVDNy45MzgzMiAwLjY4MjE1IDguMDUwNSAwLjcwMTM4NCA4LjE1NDMzIDAuNzM5ODVDOC4yNTgxOCAwLjc3ODMxNiA4LjM1NjkgMC44NDQzNDQgOC40NTA0OCAwLjkzNzkyN0wxNC43OTA5IDcuMjc4M0MxNC45MjkzIDcuNDE2NzUgMTUuMDAwMiA3LjU4ODIyIDE1LjAwMzQgNy43OTI3QzE1LjAwNjYgNy45OTcxOCAxNC45MzU3IDguMTc2OTggMTQuNzkwOSA4LjMzMjFDMTQuNjM1NyA4LjQ4NzIzIDE0LjQ1NzUgOC41NjQ4IDE0LjI1NjMgOC41NjQ4QzE0LjA1NSA4LjU2NDggMTMuODc2OCA4LjQ4NzIzIDEzLjcyMTcgOC4zMzIxTDguNTY3NzggMy4xNzgyNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAtOTYwIDk2MCA5NjBcXFwiPjxwYXRoIGQ9XFxcIk00NjAtMTYwcS0zMiAwLTU5LjUtMTZUMzU2LTIyMHEtMTEtMjAtLjUtNDB0MzIuNS0yMHExMyAwIDIzIDh0MTggMThxNSA3IDEzLjUgMTAuNVQ0NjAtMjQwcTE3IDAgMjguNS0xMS41VDUwMC0yODBxMC0xNy0xMS41LTI4LjVUNDYwLTMyMEgxMjBxLTE3IDAtMjguNS0xMS41VDgwLTM2MHEwLTE3IDExLjUtMjguNVQxMjAtNDAwaDM0MHE1MCAwIDg1IDM1dDM1IDg1cTAgNTAtMzUgODV0LTg1IDM1Wk0xMjAtNTYwcS0xNyAwLTI4LjUtMTEuNVQ4MC02MDBxMC0xNyAxMS41LTI4LjVUMTIwLTY0MGg1MDBxMjUgMCA0Mi41LTE3LjVUNjgwLTcwMHEwLTI1LTE3LjUtNDIuNVQ2MjAtNzYwcS0xNiAwLTMwIDcuNVQ1NjgtNzMxcS03IDEyLTE3IDIxLjV0LTI0IDkuNXEtMjAgMC0zMi41LTE1dC02LjUtMzJxMTQtNDIgNTAuNS02Ny41VDYyMC04NDBxNTggMCA5OSA0MXQ0MSA5OXEwIDU4LTQxIDk5dC05OSA0MUgxMjBabTY3OCAzMDhxLTIwIDktMzktMi41VDc0MC0yODhxMC0xNCA5LjUtMjMuNVQ3NzEtMzI4cTE0LTggMjEuNS0yMnQ3LjUtMzBxMC0yNS0xNy41LTQyLjVUNzQwLTQ0MEgxMjBxLTE3IDAtMjguNS0xMS41VDgwLTQ4MHEwLTE3IDExLjUtMjguNVQxMjAtNTIwaDYyMHE1OCAwIDk5IDQxdDQxIDk5cTAgNDItMjIgNzYuNVQ3OTgtMjUyWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IGNvbmRpdGlvbnMgZnJvbSBcIi4vanNvbi9jb25kaXRpb25zLmpzb25cIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29uZGl0aW9uSWNvbihjb25kaXRpb25Db2RlLCBpc0RheSA9IHRydWUpIHtcbiAgY29uZGl0aW9uQ29kZSA9IDEwMDA7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGNvbmRpdGlvbnMuZmluZCgoY29uZGl0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5jb2Rlcy5pbmNsdWRlcyhjb25kaXRpb25Db2RlKTtcbiAgfSk7XG5cbiAgLy8gUmV0dXJuIGVtcHR5IHN0cmluZyBpZiBjb25kaXRpb25Db2RlIGRvZXNuJ3QgZXhpc3RcbiAgaWYgKCFjdXJyZW50Q29uZGl0aW9uKSByZXR1cm4gXCJcIjtcblxuICAvLyBJZiB0aGUgY29uZGl0aW9uIGNvbnRhaW5zIHRpbWUtYmFzZWQgaWNvbnMsIHJldHVybiB0aGVpciBjb3JyZXNwb25kaW5nIGljb25cbiAgLy8gKGV4YW1wbGUsIGNsZWFyLWRheSBhbmQgY2xlYXItbmlnaHQpXG4gIGNvbnN0IGNvbmRpdGlvbiA9IEFycmF5LmlzQXJyYXkoY3VycmVudENvbmRpdGlvbi5jb25kaXRpb24pXG4gICAgPyBjdXJyZW50Q29uZGl0aW9uLmNvbmRpdGlvblsraXNEYXldXG4gICAgOiBjdXJyZW50Q29uZGl0aW9uLmNvbmRpdGlvbjtcblxuICAvLyBGZXRjaCBzdmcgZnJvbSBcIi4vaW1nL2ZvcmVjYXN0XCJcblxuICByZXR1cm4gY29uZGl0aW9uLmljb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbmRpdGlvbkljb247XG4iLCJjbGFzcyBEaWFsb2cge1xuICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgI2RpYWxvZztcblxuICBjb25zdHJ1Y3RvcihpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLiNkaWFsb2cgPSB0aGlzLiNzZXR1cERpYWxvZygpO1xuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIGdldCBnZXRCdXR0b25zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuI2RpYWxvZy5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbnMgYnV0dG9uXCIpKTtcbiAgfVxuXG4gIGdldCBnZXRQcmltYXJ5QnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJ1dHRvbnMuZmluZCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NOYW1lID09PSBcInByaW1hcnlcIik7XG4gIH1cblxuICBnZXQgZ2V0Rm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICNzZXR1cERpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpO1xuICAgIGRpYWxvZy5pZCA9IHRoaXMuaWQ7XG4gICAgcmV0dXJuIGRpYWxvZztcbiAgfVxuXG4gICNhZGRDbG9zZUV2ZW50KGJ1dHRvbikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZURpYWxvZygpKTtcbiAgfVxuXG4gIC8vIFB1YmxpYyBtZXRob2RzXG4gIHNldENvbnRlbnQoXG4gICAgY29udGVudCxcbiAgICBidXR0b25zID0gW3sgY2xhc3NlczogXCJidXR0b25cIiwgdHlwZTogXCJidXR0b25cIiwgbGFiZWw6IFwiQnV0dG9uXCIgfV0sXG4gICkge1xuICAgIGNvbnN0IGRpYWxvZ0J1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpYWxvZ0J1dHRvbnMuY2xhc3NOYW1lID0gXCJidXR0b25zXCI7XG5cbiAgICB0aGlzLiNkaWFsb2cuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTmFtZSA9IGJ1dHRvbi5jbGFzc2VzO1xuICAgICAgYnV0dG9uRWxlbWVudC50eXBlID0gYnV0dG9uLnR5cGU7XG4gICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uLmxhYmVsO1xuICAgICAgdGhpcy4jYWRkQ2xvc2VFdmVudChidXR0b25FbGVtZW50KTtcbiAgICAgIGRpYWxvZ0J1dHRvbnMuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiNkaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQnV0dG9ucyk7XG4gIH1cblxuICBzaG93RGlhbG9nKCkge1xuICAgIGlmICghdGhpcy4jZGlhbG9nKSByZXR1cm47XG5cbiAgICAvLyBBZGQgZGlhbG9nIG9ubHkgb25jZVxuICAgIGlmICghZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGBkaWFsb2cjJHt0aGlzLiNkaWFsb2cuaWR9YCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4jZGlhbG9nKTtcbiAgICB9XG4gICAgdGhpcy4jZGlhbG9nLnNob3dNb2RhbCgpO1xuICB9XG5cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgaWYgKCF0aGlzLiNkaWFsb2cpIHJldHVybjtcbiAgICB0aGlzLiNkaWFsb2cuY2xvc2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG4iLCJpbXBvcnQgc2VhcmNoRXJyb3JTdmcgZnJvbSBcIi4vaW1nL3VpL3NlYXJjaC1lcnJvci5zdmdcIjtcbmltcG9ydCByYWluU3ZnIGZyb20gXCIuL2ltZy91aS9yYWluLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5T3ZlcmxheVN2ZyBmcm9tIFwiLi9pbWcvdWkvaHVtaWRpdHktb3ZlcmxheS5zdmdcIjtcbmltcG9ydCB1dk92ZXJsYXlTdmcgZnJvbSBcIi4vaW1nL3VpL3V2LW92ZXJsYXkuc3ZnXCI7XG5pbXBvcnQgcHJlY2lwaXRhdGlvblN2ZyBmcm9tIFwiLi9pbWcvdWkvcHJlY2lwaXRhdGlvbi5zdmdcIjtcbmltcG9ydCB3aW5kU3ZnIGZyb20gXCIuL2ltZy91aS93aW5kLnN2Z1wiO1xuaW1wb3J0IHdpbmREaXJlY3Rpb25TdmcgZnJvbSBcIi4vaW1nL3VpL3dpbmQtZGlyZWN0aW9uLnN2Z1wiO1xuaW1wb3J0IHZpc2liaWxpdHlTdmcgZnJvbSBcIi4vaW1nL3VpL3Zpc2liaWxpdHkuc3ZnXCI7XG5pbXBvcnQgcHJlc3N1cmVTdmcgZnJvbSBcIi4vaW1nL3VpL3ByZXNzdXJlLnN2Z1wiO1xuaW1wb3J0IGFyY1BlcmNlbnRhZ2VTdmcgZnJvbSBcIi4vaW1nL3VpL2FyYy1wZXJjZW50YWdlLnN2Z1wiO1xuaW1wb3J0IGxvYWRpbmdTdmcgZnJvbSBcIi4vaW1nL3VpL2xvYWRpbmcuc3ZnXCI7XG5cbmltcG9ydCB7IHJlYWRTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQgZ2V0Q29uZGl0aW9uSWNvbiBmcm9tIFwiLi9jb25kaXRpb25zXCI7XG5pbXBvcnQgZ2V0TW9vblBoYXNlSWNvbiBmcm9tIFwiLi9tb29uLXBoYXNlc1wiO1xuaW1wb3J0IGdldFN1blBvc2l0aW9uSWNvbiBmcm9tIFwiLi9zdW4tcG9zaXRpb25cIjtcbmltcG9ydCAqIGFzIHRpbWUgZnJvbSBcIi4vdGltZVwiO1xuaW1wb3J0IHsgZmV0Y2hTZWFyY2hTdWdnZXN0aW9ucywgcmVtb3ZlU3VnZ2VzdGlvbnMgfSBmcm9tIFwiLi9wYWdlXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL2RpYWxvZ3NcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgYWxlcnRCb3ggPSBuZXcgRGlhbG9nKFwiYWxlcnQtYm94XCIpO1xuY29uc3QgbG9jYXRpb25NZW1vcnkgPSBuZXcgU3RvcmFnZShcImxhc3RMb2NhdGlvblwiKTtcblxuLy8gRmV0Y2ggbWV0aG9kc1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHF1ZXJ5KSB7XG4gIGNvbnN0IHJlc3BvbnNlRmV0Y2ggPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZDliY2M5NGMyOGUwNDg0NGFmMTIyMjQyMDI0MDMwMyZxPSR7cXVlcnl9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICk7XG4gIHJldHVybiByZXNwb25zZUZldGNoLmpzb24oKTtcbn1cblxuZnVuY3Rpb24gc2V0QWxlcnRCb3hDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk9vcHMhIEVycm9yXCI7XG5cbiAgaWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgaWNvbi5pbm5lckhUTUwgPSBzZWFyY2hFcnJvclN2ZztcblxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uIHNtYWxsLXRleHRcIjtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG9wZXJhdG9yLWxpbmVicmVha1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJJdCBzZWVtcyBsaWtlIHRoZSBsb2NhdGlvbiB5b3UgZW50ZXJlZCBkb2Vzbid0IGV4aXN0LiBQbGVhc2UgdHJ5IGFnYWluIHdpdGggYSBkaWZmZXJlbnQgbG9jYXRpb24uXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuXG4vLyBFdmVudHNcbmZ1bmN0aW9uIGFkZFNlYXJjaEV2ZW50KGZvcm0sIGlucHV0KSB7XG4gIGFsZXJ0Qm94LnNldENvbnRlbnQoc2V0QWxlcnRCb3hDb250ZW50KGlucHV0LnZhbHVlKSwgW1xuICAgIHsgY2xhc3NlczogXCJwcmltYXJ5XCIsIHR5cGU6IFwiYnV0dG9uXCIsIGxhYmVsOiBcIk9rXCIgfSxcbiAgXSk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghaW5wdXQudmFsdWUpIHJldHVybjtcbiAgICAvLyBDaGVjayBzdWdnZXN0aW9ucyBmaXJzdCBiZWZvcmUgZmV0Y2hpbmcgYW4gaW5jb3JyZWN0IHZhbHVlIHRvIGdldCB0aGUgd2VhdGhlciBpbmZvXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBhd2FpdCBmZXRjaFNlYXJjaFN1Z2dlc3Rpb25zKGlucHV0LnZhbHVlKTtcblxuICAgIGlmICghc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICBhbGVydEJveC5zaG93RGlhbG9nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbW92ZVN1Z2dlc3Rpb25zKCk7XG4gICAgc2V0V2VhdGhlcihpbnB1dC52YWx1ZSk7XG4gICAgaW5wdXQuYmx1cigpO1xuICB9KTtcbn1cblxuLy8gU2V0dGluZ3MgbWV0aG9kc1xuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmUoXG4gIGNlbHNpdXMsXG4gIGZhaHJlbmhlaXQsXG4gIHVuaXRzU2V0dGluZ3MsXG4gIGRpc3BsYXlVbml0cyA9IHRydWUsXG4pIHtcbiAgbGV0IHZhbHVlO1xuICBsZXQgdW5pdHM7XG5cbiAgaWYgKHVuaXRzU2V0dGluZ3MgPT09IFwiY1wiKSB7XG4gICAgdmFsdWUgPSBjZWxzaXVzO1xuICAgIHVuaXRzID0gXCJDXCI7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBmYWhyZW5oZWl0O1xuICAgIHVuaXRzID0gXCJGXCI7XG4gIH1cblxuICByZXR1cm4gYCR7TWF0aC50cnVuYyh2YWx1ZSl9wrAke2Rpc3BsYXlVbml0cyA/IHVuaXRzIDogXCJcIn1gO1xufVxuXG4vLyBSZXR1cm4gY29ycmVjdCBtYWduaXR1ZGUgbWVhc3VyZW1lbnQgYmFzZWQgb24gdXNlciBzZXR0aW5nc1xuLy8gRXhhbXBsZTogaWYgdW5pdHNTZXR0aW5ncyA9PT0gXCJjXCIsIHRoZW4gc2hvdyBwcmVjaXBpdGF0aW9uOiBtbSwgd2luZCBzcGVlZDoga20vaCwgZXRjLi4uXG4vLyBidXQgaWYgdW5pdHNTZXR0aW5ncyA9PT0gXCJmXCIsIHRoZW4gc2hvdyBwcmVjaXBpdGF0aW9uOiBpbiwgd2luZCBzcGVlZDogbXBoLCAuLi5cbmZ1bmN0aW9uIGdldE1hZ25pdHVkZShcbiAgY01hZ25pdHVkZSA9IHsgdmFsdWU6IFwiXCIsIHVuaXRzOiBcIlwiIH0sXG4gIGZNYWduaXR1ZGUgPSB7IHZhbHVlOiBcIlwiLCB1bml0czogXCJcIiB9LFxuICB1bml0c1NldHRpbmdzID0gXCJcIixcbikge1xuICBjb25zdCBzZWxlY3RlZE1hZ25pdHVkZSA9IHVuaXRzU2V0dGluZ3MgPT09IFwiY1wiID8gY01hZ25pdHVkZSA6IGZNYWduaXR1ZGU7XG5cbiAgcmV0dXJuIGAke3NlbGVjdGVkTWFnbml0dWRlLnZhbHVlfSAke3NlbGVjdGVkTWFnbml0dWRlLnVuaXRzfWA7XG59XG5cbmZ1bmN0aW9uIGdldFRpbWUodGltZVZhbHVlLCB0aW1lU2V0dGluZ3MpIHtcbiAgbGV0IGNvbnZlcnRlZFRpbWU7XG5cbiAgaWYgKHRpbWVTZXR0aW5ncyA9PT0gXCIxMmhcIikge1xuICAgIGNvbnZlcnRlZFRpbWUgPSB0aW1lLmNvbnZlcnRUbzEySG91cih0aW1lVmFsdWUpO1xuICB9IGVsc2UgaWYgKHRpbWVTZXR0aW5ncyA9PT0gXCIyNGhcIikge1xuICAgIGNvbnZlcnRlZFRpbWUgPSB0aW1lLmNvbnZlcnRUbzI0SG91cih0aW1lVmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnZlcnRlZFRpbWU7XG59XG5cbi8vIERPTSBFbGVtZW50c1xuXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlcihcbiAgbG9jYXRpb24sXG4gIGN1cnJlbnQsXG4gIGZpcnN0Rm9yZWNhc3REYXksXG4gIHVuaXRzU2V0dGluZ3MsXG4pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBjdXJyZW50VGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG90aGVyVGVtcHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoaWdoTG93VGVtcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoaWdoVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB0ZW1wRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBsb3dUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgY29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnRhaW5lci5pZCA9IFwiY3VycmVudC13ZWF0aGVyXCI7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjdXJyZW50LmlzX2RheSA/IFwiZGF5XCIgOiBcIm5pZ2h0XCI7XG5cbiAgLy8gTG9jYXRpb25cbiAgbG9jYXRpb25Db250YWluZXIuY2xhc3NOYW1lID0gXCJsb2NhdGlvblwiO1xuICBsb2NhdGlvbk5hbWUuY2xhc3NOYW1lID0gXCJuYW1lXCI7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG4gIGxvY2F0aW9uQ291bnRyeS5jbGFzc05hbWUgPSBcImNvdW50cnkgc21hbGwtdGV4dFwiO1xuICBsb2NhdGlvbkNvdW50cnkudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5jb3VudHJ5O1xuXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ291bnRyeSk7XG5cbiAgLy8gQ3VycmVudCBUZW1wZXJhdHVyZSBhbmQgQ29uZGl0aW9uXG4gIGN1cnJlbnRUZW1wQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY3VycmVudC10ZW1wXCI7XG4gIHRlbXBlcmF0dXJlVmFsdWUuY2xhc3NOYW1lID0gXCJ2YWx1ZVwiO1xuICB0ZW1wZXJhdHVyZVZhbHVlLnRleHRDb250ZW50ID0gZ2V0VGVtcGVyYXR1cmUoXG4gICAgY3VycmVudC50ZW1wX2MsXG4gICAgY3VycmVudC50ZW1wX2YsXG4gICAgdW5pdHNTZXR0aW5ncyxcbiAgKTtcbiAgY29uZGl0aW9uLmNsYXNzTmFtZSA9IFwiY29uZGl0aW9uXCI7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgY3VycmVudFRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVWYWx1ZSk7XG4gIGN1cnJlbnRUZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgLy8gSGlnaCBsb3cgdGVtcGVyYXR1cmVzXG4gIG90aGVyVGVtcHNDb250YWluZXIuY2xhc3NOYW1lID0gXCJvdGhlci10ZW1wc1wiO1xuICBoaWdoTG93VGVtcHMuY2xhc3NOYW1lID0gXCJoaWdoLWxvdy10ZW1wXCI7XG4gIGhpZ2hUZW1wLmNsYXNzTmFtZSA9IFwiaGlnaC12YWx1ZVwiO1xuICBoaWdoVGVtcC50ZXh0Q29udGVudCA9IGdldFRlbXBlcmF0dXJlKFxuICAgIGZpcnN0Rm9yZWNhc3REYXkuZGF5Lm1heHRlbXBfYyxcbiAgICBmaXJzdEZvcmVjYXN0RGF5LmRheS5tYXh0ZW1wX2YsXG4gICAgdW5pdHNTZXR0aW5ncyxcbiAgKTtcbiAgdGVtcERpdmlkZXIuY2xhc3NOYW1lID0gXCJ0ZW1wLWRpdmlkZXJcIjtcbiAgdGVtcERpdmlkZXIudGV4dENvbnRlbnQgPSBcIiB8IFwiO1xuICBsb3dUZW1wLmNsYXNzTmFtZSA9IFwibG93LXZhbHVlXCI7XG4gIGxvd1RlbXAudGV4dENvbnRlbnQgPSBnZXRUZW1wZXJhdHVyZShcbiAgICBmaXJzdEZvcmVjYXN0RGF5LmRheS5taW50ZW1wX2MsXG4gICAgZmlyc3RGb3JlY2FzdERheS5kYXkubWludGVtcF9mLFxuICAgIHVuaXRzU2V0dGluZ3MsXG4gICk7XG4gIGZlZWxzTGlrZVRlbXAuY2xhc3NOYW1lID0gXCJmZWVsc2xpa2UtdGVtcCBzbWFsbC10ZXh0XCI7XG4gIGZlZWxzTGlrZVRlbXAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2dldFRlbXBlcmF0dXJlKGN1cnJlbnQuZmVlbHNsaWtlX2MsIGN1cnJlbnQuZmVlbHNsaWtlX2YsIHVuaXRzU2V0dGluZ3MpfWA7XG5cbiAgaGlnaExvd1RlbXBzLmFwcGVuZENoaWxkKGhpZ2hUZW1wKTtcbiAgaGlnaExvd1RlbXBzLmFwcGVuZENoaWxkKHRlbXBEaXZpZGVyKTtcbiAgaGlnaExvd1RlbXBzLmFwcGVuZENoaWxkKGxvd1RlbXApO1xuICBvdGhlclRlbXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpZ2hMb3dUZW1wcyk7XG4gIG90aGVyVGVtcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XG5cbiAgLy8gQ29uZGl0aW9uIGljb25cbiAgY29uZGl0aW9uSWNvbi5jbGFzc05hbWUgPSBcImNvbmRpdGlvbi1pY29uXCI7XG4gIGdldENvbmRpdGlvbkljb24oY3VycmVudC5jb25kaXRpb24uY29kZSwgY3VycmVudC5pc19kYXkpLnRoZW4oKGljb24pID0+IHtcbiAgICBjb25kaXRpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdGhlclRlbXBzQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJFbGVtZW50KGhvdXIsIHRpbWVWYWx1ZSwgc2V0dGluZ3MpIHtcbiAgY29uc3QgaG91ckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByZWNpcGl0YXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHByZWNpcGl0YXRpb25WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGhvdXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJob3VyLWNvbnRhaW5lclwiO1xuICB0aW1lRWxlbWVudC5jbGFzc05hbWUgPSBcInRpbWUgdmVyeS1zbWFsbC10ZXh0XCI7XG4gIHRpbWVFbGVtZW50LnRleHRDb250ZW50ID0gZ2V0VGltZSh0aW1lVmFsdWUsIHNldHRpbmdzLnRpbWVGb3JtYXQpO1xuXG4gIGNvbmRpdGlvbkljb24uY2xhc3NOYW1lID0gXCJjb25kaXRpb24taWNvblwiO1xuICBnZXRDb25kaXRpb25JY29uKGhvdXIuY29uZGl0aW9uLmNvZGUsIGhvdXIuaXNfZGF5KS50aGVuKChpY29uKSA9PiB7XG4gICAgY29uZGl0aW9uSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuICB9KTtcblxuICB0ZW1wZXJhdHVyZS5jbGFzc05hbWUgPSBcInRlbXBlcmF0dXJlIHNtYWxsLXRleHRcIjtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBnZXRUZW1wZXJhdHVyZShcbiAgICBob3VyLnRlbXBfYyxcbiAgICBob3VyLnRlbXBfZixcbiAgICBzZXR0aW5ncy51bml0cyxcbiAgICBmYWxzZSxcbiAgKTtcblxuICBwcmVjaXBpdGF0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJlY2lwaXRhdGlvblwiO1xuICBwcmVjaXBpdGF0aW9uSWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgcHJlY2lwaXRhdGlvbkljb24uaW5uZXJIVE1MID0gcmFpblN2ZztcbiAgcHJlY2lwaXRhdGlvblZhbHVlLmNsYXNzTmFtZSA9IFwidmFsdWUgdmVyeS1zbWFsbC10ZXh0XCI7XG4gIHByZWNpcGl0YXRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGAke2hvdXIuY2hhbmNlX29mX3JhaW59JWA7XG5cbiAgcHJlY2lwaXRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uSWNvbik7XG4gIHByZWNpcGl0YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvblZhbHVlKTtcblxuICBob3VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVFbGVtZW50KTtcbiAgaG91ckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25JY29uKTtcbiAgaG91ckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gIGhvdXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlY2lwaXRhdGlvbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGhvdXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJGb3JlY2FzdChcbiAgY3VycmVudCxcbiAgdG9kYXlIb3VyRm9yZWNhc3QsXG4gIHRvbW9ycm93SG91ckZvcmVjYXN0LFxuICBzZXR0aW5ncyxcbikge1xuICBjb25zdCBjdXJyZW50VGltZSA9IGN1cnJlbnQubGFzdF91cGRhdGVkLnNwbGl0KFwiIFwiKVsxXTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGxldCBob3VyRWxlbWVudHMgPSAyNDtcblxuICBjb250YWluZXIuaWQgPSBcImhvdXItZm9yZWNhc3RcIjtcblxuICAvLyBEaXNwbGF5IGZvcmVjYXN0IGJhc2VkIGluIGN1cnJlbnQgdGltZVxuICB0b2RheUhvdXJGb3JlY2FzdC5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgY29uc3QgdGltZVZhbHVlID0gaG91ci50aW1lLnNwbGl0KFwiIFwiKVsxXTtcblxuICAgIGlmICh0aW1lVmFsdWUgPj0gY3VycmVudFRpbWUpIHtcbiAgICAgIGNvbnN0IGhvdXJDb250YWluZXIgPSBjcmVhdGVIb3VyRWxlbWVudChob3VyLCB0aW1lVmFsdWUsIHNldHRpbmdzKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VyQ29udGFpbmVyKTtcblxuICAgICAgaG91ckVsZW1lbnRzLS07XG4gICAgfVxuICB9KTtcblxuICAvLyBJZiBjdXJyZW50IGRheSBkaXNwbGF5IGxlc3MgdGhhbiAyNCBob3VyIGVsZW1lbnRzLCBhZGQgZm9yZWNhc3Qgb2YgdG9tb3Jyb3dcbiAgdG9tb3Jyb3dIb3VyRm9yZWNhc3QuZm9yRWFjaCgoaG91cikgPT4ge1xuICAgIGNvbnN0IHRpbWVWYWx1ZSA9IGhvdXIudGltZS5zcGxpdChcIiBcIilbMV07XG5cbiAgICBpZiAoaG91ckVsZW1lbnRzID4gMCkge1xuICAgICAgY29uc3QgaG91ckNvbnRhaW5lciA9IGNyZWF0ZUhvdXJFbGVtZW50KGhvdXIsIHRpbWVWYWx1ZSwgc2V0dGluZ3MpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJDb250YWluZXIpO1xuXG4gICAgICBob3VyRWxlbWVudHMtLTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRlKGRhdGVTdHJpbmcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXlGb3JlY2FzdChkYXlGb3JlY2FzdCwgdW5pdHNTZXR0aW5ncykge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuICBjb250YWluZXIuaWQgPSBcImRheS1mb3JlY2FzdFwiO1xuXG4gIGRheUZvcmVjYXN0LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBjb25kaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBjb25kaXRpb25WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByZWNpcGl0YXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgcHJlY2lwaXRhdGlvblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBkYXlDb250YWluZXIuY2xhc3NOYW1lID0gXCJkYXktY29udGFpbmVyXCI7XG4gICAgZGF5RWxlbWVudC5jbGFzc05hbWUgPSBcImRheVwiO1xuICAgIGRheUVsZW1lbnQudGV4dENvbnRlbnQgPSAhaW5kZXggPyBcIlRvZGF5XCIgOiBjb252ZXJ0RGF0ZShkYXkuZGF0ZSk7XG5cbiAgICB0ZW1wZXJhdHVyZXMuY2xhc3NOYW1lID0gXCJ0ZW1wZXJhdHVyZXMgc21hbGwtdGV4dFwiO1xuICAgIHRlbXBlcmF0dXJlcy50ZXh0Q29udGVudCA9IGAke2dldFRlbXBlcmF0dXJlKGRheS5kYXkubWF4dGVtcF9jLCBkYXkuZGF5Lm1heHRlbXBfZiwgdW5pdHNTZXR0aW5ncywgZmFsc2UpfSB8ICR7Z2V0VGVtcGVyYXR1cmUoZGF5LmRheS5taW50ZW1wX2MsIGRheS5kYXkubWludGVtcF9mLCB1bml0c1NldHRpbmdzLCBmYWxzZSl9YDtcblxuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbmRpdGlvblwiO1xuICAgIGNvbmRpdGlvbkljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XG4gICAgZ2V0Q29uZGl0aW9uSWNvbihkYXkuZGF5LmNvbmRpdGlvbi5jb2RlKS50aGVuKChpY29uKSA9PiB7XG4gICAgICBjb25kaXRpb25JY29uLmlubmVySFRNTCA9IGljb247XG4gICAgfSk7XG4gICAgY29uZGl0aW9uVmFsdWUuY2xhc3NOYW1lID0gXCJ2YWx1ZSBzbWFsbC10ZXh0XCI7XG4gICAgY29uZGl0aW9uVmFsdWUudGV4dENvbnRlbnQgPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uZGl0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkljb24pO1xuICAgIGNvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25WYWx1ZSk7XG5cbiAgICBwcmVjaXBpdGF0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwicHJlY2lwaXRhdGlvblwiO1xuICAgIHByZWNpcGl0YXRpb25JY29uLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuICAgIHByZWNpcGl0YXRpb25JY29uLmlubmVySFRNTCA9IHJhaW5Tdmc7XG4gICAgcHJlY2lwaXRhdGlvblZhbHVlLmNsYXNzTmFtZSA9IFwidmFsdWUgc21hbGwtdGV4dFwiO1xuICAgIHByZWNpcGl0YXRpb25WYWx1ZS50ZXh0Q29udGVudCA9IGAke2RheS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XG5cbiAgICBwcmVjaXBpdGF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25JY29uKTtcbiAgICBwcmVjaXBpdGF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25WYWx1ZSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF5RWxlbWVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlcyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbkNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZWNpcGl0YXRpb25Db250YWluZXIpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBzZXREb3VibGVTZWN0aW9uKHNlY3Rpb25PbmUsIHNlY3Rpb25Ud28pIHtcbiAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWN0aW9ucy5jbGFzc05hbWUgPSBcImRvdWJsZS1zZWN0aW9uLWNvbnRhaW5lclwiO1xuXG4gIHNlY3Rpb25zLmFwcGVuZENoaWxkKHNlY3Rpb25PbmUpO1xuICBzZWN0aW9ucy5hcHBlbmRDaGlsZChzZWN0aW9uVHdvKTtcblxuICByZXR1cm4gc2VjdGlvbnM7XG59XG5cbi8vIEZ1bmN0aW9ucyB0byBkcmF3IHBlcmNlbnRhZ2UgYXJjc1xuLy8gQmFzZWQgb24gdGhpcyBwb3N0IGZyb20gU3RhY2sgRXhjaGFuZ2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3MzYzOTgvaG93LXRvLWNhbGN1bGF0ZS10aGUtc3ZnLXBhdGgtZm9yLWFuLWFyYy1vZi1hLWNpcmNsZVxuZnVuY3Rpb24gcG9sYXJUb0NhcnRlc2lhbihjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGFuZ2xlSW5EZWdyZWVzKSB7XG4gIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKChhbmdsZUluRGVncmVlcyAtIDkwKSAqIE1hdGguUEkpIC8gMTgwLjA7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBjZW50ZXJYICsgcmFkaXVzICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpLFxuICAgIHk6IGNlbnRlclkgKyByYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRyYXdBcmMoeFBvc2l0aW9uLCB5UG9zaXRpb24sIHJhZGl1cywgc3RhcnRBbmdsZSwgYXJjUGVyY2VudGFnZSkge1xuICAvLyBUcmFuc2Zvcm0gcGVyY2VudGFnZSB0byBhbmdsZSAoaW4gZGVncmVlcylcbiAgLy8gQXBwcm94aW1hdGUgMzYwwrAgd2hlbiBwZXJjZW50YWdlIGlzID49IDEwMCVcbiAgY29uc3QgZW5kQW5nbGUgPSBhcmNQZXJjZW50YWdlIDwgMSA/IDM2MCAqIGFyY1BlcmNlbnRhZ2UgOiAzNTkuOTk5O1xuXG4gIGNvbnN0IHN0YXJ0ID0gcG9sYXJUb0NhcnRlc2lhbih4UG9zaXRpb24sIHlQb3NpdGlvbiwgcmFkaXVzLCBlbmRBbmdsZSk7XG4gIGNvbnN0IGVuZCA9IHBvbGFyVG9DYXJ0ZXNpYW4oeFBvc2l0aW9uLCB5UG9zaXRpb24sIHJhZGl1cywgc3RhcnRBbmdsZSk7XG5cbiAgY29uc3QgbGFyZ2VBcmNGbGFnID0gZW5kQW5nbGUgLSBzdGFydEFuZ2xlIDw9IDE4MCA/IFwiMFwiIDogXCIxXCI7XG5cbiAgY29uc3QgZCA9IFtcbiAgICBcIk1cIixcbiAgICBzdGFydC54LFxuICAgIHN0YXJ0LnksXG4gICAgXCJBXCIsXG4gICAgcmFkaXVzLFxuICAgIHJhZGl1cyxcbiAgICAwLFxuICAgIGxhcmdlQXJjRmxhZyxcbiAgICAwLFxuICAgIGVuZC54LFxuICAgIGVuZC55LFxuICBdLmpvaW4oXCIgXCIpO1xuXG4gIHJldHVybiBkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcmNQZXJjZW50YWdlKHZhbHVlLCBtYXhWYWx1ZSwgdW5pdHMgPSBcIlwiKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBhcmNQZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidmFsdWUtY29udGFpbmVyXCI7XG4gIHZhbHVlRWxlbWVudC5jbGFzc05hbWUgPSBcInZhbHVlXCI7XG4gIHZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfSR7dW5pdHN9YDtcbiAgYXJjUGVyY2VudGFnZS5jbGFzc05hbWUgPSBcImFyYy1wZXJjZW50YWdlXCI7XG4gIGFyY1BlcmNlbnRhZ2UuaW5uZXJIVE1MID0gYXJjUGVyY2VudGFnZVN2ZztcblxuICBjb25zdCBhcmMgPSBhcmNQZXJjZW50YWdlLnF1ZXJ5U2VsZWN0b3IoXCIuYXJjLXBhdGhcIik7XG4gIGFyYy5zZXRBdHRyaWJ1dGUoXCJkXCIsIGRyYXdBcmMoNTAsIDUwLCA0NCwgMCwgdmFsdWUgLyBtYXhWYWx1ZSkpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUVsZW1lbnQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJjUGVyY2VudGFnZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJjU2VjdGlvbihzZWN0aW9uSWQsIHRpdGxlLCBpY29uLCB2YWx1ZSwgbWF4VmFsdWUsIHVuaXRzID0gXCJcIikge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGFyY1ZhbHVlID0gY3JlYXRlQXJjUGVyY2VudGFnZSh2YWx1ZSwgbWF4VmFsdWUsIHVuaXRzKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdGl0bGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgc2VjdGlvbi5pZCA9IHNlY3Rpb25JZDtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJ0aXRsZS1jb250YWluZXJcIjtcbiAgdGl0bGVFbGVtZW50LmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHRpdGxlSWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgdGl0bGVJY29uLmlubmVySFRNTCA9IGljb247XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJY29uKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGFyY1ZhbHVlKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUh1bWlkaXR5VXYoY3VycmVudCkge1xuICBjb25zdCBodW1pZGl0eSA9IGNyZWF0ZUFyY1NlY3Rpb24oXG4gICAgXCJodW1pZGl0eVwiLFxuICAgIFwiSHVtaWRpdHlcIixcbiAgICBodW1pZGl0eU92ZXJsYXlTdmcsXG4gICAgY3VycmVudC5odW1pZGl0eSxcbiAgICAxMDAsXG4gICAgXCIlXCIsXG4gICk7XG4gIGNvbnN0IHV2ID0gY3JlYXRlQXJjU2VjdGlvbihcInV2XCIsIFwiVVYgSW5kZXhcIiwgdXZPdmVybGF5U3ZnLCBjdXJyZW50LnV2LCAxMSk7XG5cbiAgcmV0dXJuIHNldERvdWJsZVNlY3Rpb24oaHVtaWRpdHksIHV2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb24oXG4gIGljb24sXG4gIGVsZW1lbnRDbGFzcyxcbiAgbGFiZWwsXG4gIG1hZ25pdHVkZSxcbiAgbW9yZUluZm8gPSB7IGNsYXNzOiBcIlwiLCBpY29uOiBcIlwiLCB2YWx1ZTogXCJcIiB9LFxuKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBjb250YWluZXIuY2xhc3NOYW1lID0gZWxlbWVudENsYXNzO1xuICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBpY29uRWxlbWVudC5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgaWNvbkVsZW1lbnQuaW5uZXJIVE1MID0gaWNvbjtcbiAgbGFiZWxFbGVtZW50LmNsYXNzTmFtZSA9IFwibGFiZWxcIjtcbiAgbGFiZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gIHZhbHVlRWxlbWVudC5jbGFzc05hbWUgPSBcInZhbHVlIHNtYWxsLXRleHRcIjtcbiAgdmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gbWFnbml0dWRlO1xuXG4gIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG4gIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gIGlmIChtb3JlSW5mby52YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YWx1ZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInZhbHVlLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgbW9yZUluZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbW9yZUluZm9FbGVtZW50LmNsYXNzTmFtZSA9IG1vcmVJbmZvLmNsYXNzO1xuICAgIG1vcmVJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBtb3JlSW5mby5pY29uO1xuICAgIG1vcmVJbmZvRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bW9yZUluZm8udmFsdWV9ZGVnKWA7XG5cbiAgICB2YWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3JlSW5mb0VsZW1lbnQpO1xuICAgIHZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbHVlRWxlbWVudCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsdWVDb250YWluZXIpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9yZVdlYXRoZXJJbmZvKGN1cnJlbnQsIHVuaXRzU2V0dGluZ3MpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJlY2lwaXRhdGlvbiA9IGNyZWF0ZUluZm9ybWF0aW9uKFxuICAgIHByZWNpcGl0YXRpb25TdmcsXG4gICAgXCJwcmVjaXBpdGF0aW9uXCIsXG4gICAgXCJQcmVjaXBpdGF0aW9uXCIsXG4gICAgZ2V0TWFnbml0dWRlKFxuICAgICAgeyB2YWx1ZTogY3VycmVudC5wcmVjaXBfbW0sIHVuaXRzOiBcIm1tXCIgfSxcbiAgICAgIHsgdmFsdWU6IGN1cnJlbnQucHJlY2lwX2luLCB1bml0czogXCJpblwiIH0sXG4gICAgICB1bml0c1NldHRpbmdzLFxuICAgICksXG4gICk7XG4gIGNvbnN0IHdpbmQgPSBjcmVhdGVJbmZvcm1hdGlvbihcbiAgICB3aW5kU3ZnLFxuICAgIFwid2luZFwiLFxuICAgIFwiV2luZFwiLFxuICAgIGdldE1hZ25pdHVkZShcbiAgICAgIHsgdmFsdWU6IGN1cnJlbnQud2luZF9rcGgsIHVuaXRzOiBcImttL2hcIiB9LFxuICAgICAgeyB2YWx1ZTogY3VycmVudC53aW5kX21waCwgdW5pdHM6IFwibXBoXCIgfSxcbiAgICAgIHVuaXRzU2V0dGluZ3MsXG4gICAgKSxcbiAgICB7IGNsYXNzOiBcImRpcmVjdGlvblwiLCBpY29uOiB3aW5kRGlyZWN0aW9uU3ZnLCB2YWx1ZTogY3VycmVudC53aW5kX2RlZ3JlZSB9LFxuICApO1xuICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB2aXNpYmlsaXR5ID0gY3JlYXRlSW5mb3JtYXRpb24oXG4gICAgdmlzaWJpbGl0eVN2ZyxcbiAgICBcInZpc2liaWxpdHlcIixcbiAgICBcIlZpc2liaWxpdHlcIixcbiAgICBnZXRNYWduaXR1ZGUoXG4gICAgICB7IHZhbHVlOiBjdXJyZW50LnZpc19rbSwgdW5pdHM6IFwia21cIiB9LFxuICAgICAgeyB2YWx1ZTogY3VycmVudC52aXNfbWlsZXMsIHVuaXRzOiBcIm1pXCIgfSxcbiAgICAgIHVuaXRzU2V0dGluZ3MsXG4gICAgKSxcbiAgKTtcbiAgY29uc3QgcHJlc3N1cmUgPSBjcmVhdGVJbmZvcm1hdGlvbihcbiAgICBwcmVzc3VyZVN2ZyxcbiAgICBcInByZXNzdXJlXCIsXG4gICAgXCJQcmVzc3VyZVwiLFxuICAgIGdldE1hZ25pdHVkZShcbiAgICAgIHsgdmFsdWU6IGN1cnJlbnQucHJlc3N1cmVfbWIsIHVuaXRzOiBcIm1iXCIgfSxcbiAgICAgIHsgdmFsdWU6IGN1cnJlbnQucHJlc3N1cmVfaW4sIHVuaXRzOiBcImluXCIgfSxcbiAgICAgIHVuaXRzU2V0dGluZ3MsXG4gICAgKSxcbiAgKTtcblxuICBjb250YWluZXIuaWQgPSBcIm1vcmUtd2VhdGhlci1pbmZvXCI7XG4gIGxlZnRTaWRlLmNsYXNzTmFtZSA9IFwibGVmdC1zaWRlXCI7XG4gIHJpZ2h0U2lkZS5jbGFzc05hbWUgPSBcInJpZ2h0LXNpZGVcIjtcblxuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChwcmVjaXBpdGF0aW9uKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQod2luZCk7XG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh2aXNpYmlsaXR5KTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHByZXNzdXJlKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBc3Ryb0luZm8oXG4gIHNlY3Rpb25JZCxcbiAgaWNvbixcbiAgaW5mb3JtYXRpb24gPSBbeyBsYWJlbDogXCJcIiwgdmFsdWU6IFwiXCIgfV0sXG4pIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIHNlY3Rpb24uaWQgPSBzZWN0aW9uSWQ7XG4gIGljb25FbGVtZW50LmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuICBpY29uRWxlbWVudC5pbm5lckhUTUwgPSBpY29uO1xuXG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gIGluZm9ybWF0aW9uLmZvckVhY2goKGluZm8pID0+IHtcbiAgICBjb25zdCBhc3Ryb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB2YWx1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBhc3Ryb1ZhbHVlLmNsYXNzTmFtZSA9IFwiYXN0cm8tdmFsdWVcIjtcbiAgICB2YWx1ZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ2YWx1ZVwiO1xuICAgIHZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGluZm8udmFsdWU7XG5cbiAgICB2YWx1ZUxhYmVsLmNsYXNzTmFtZSA9IFwibGFiZWwgc21hbGwtdGV4dFwiO1xuICAgIHZhbHVlTGFiZWwudGV4dENvbnRlbnQgPSBpbmZvLmxhYmVsO1xuXG4gICAgYXN0cm9WYWx1ZS5hcHBlbmRDaGlsZCh2YWx1ZUVsZW1lbnQpO1xuICAgIGFzdHJvVmFsdWUuYXBwZW5kQ2hpbGQodmFsdWVMYWJlbCk7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFzdHJvVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlU3VuQW5kTW9vbkluZm8oYXN0cm8sIGxhc3RUaW1lVXBkYXRlZCwgdGltZVNldHRpbmdzKSB7XG4gIGNvbnN0IHN1bkljb24gPSBhd2FpdCBnZXRTdW5Qb3NpdGlvbkljb24oXG4gICAgYXN0cm8uc3VucmlzZSxcbiAgICBhc3Ryby5zdW5zZXQsXG4gICAgbGFzdFRpbWVVcGRhdGVkLnNwbGl0KFwiIFwiKVsxXSxcbiAgKTtcbiAgY29uc3QgbW9vbkljb24gPSBhd2FpdCBnZXRNb29uUGhhc2VJY29uKGFzdHJvLm1vb25fcGhhc2UpO1xuXG4gIGNvbnN0IHN1biA9IGNyZWF0ZUFzdHJvSW5mbyhcInN1bi1wb3NpdGlvblwiLCBzdW5JY29uLCBbXG4gICAgeyBsYWJlbDogXCJTdW5yaXNlXCIsIHZhbHVlOiBnZXRUaW1lKGFzdHJvLnN1bnJpc2UsIHRpbWVTZXR0aW5ncykgfSxcbiAgICB7IGxhYmVsOiBcIlN1bnNldFwiLCB2YWx1ZTogZ2V0VGltZShhc3Ryby5zdW5zZXQsIHRpbWVTZXR0aW5ncykgfSxcbiAgXSk7XG5cbiAgY29uc3QgbW9vbiA9IGNyZWF0ZUFzdHJvSW5mbyhcIm1vb24tcGhhc2VcIiwgbW9vbkljb24sIFtcbiAgICB7IGxhYmVsOiBcIk1vb24gcGhhc2VcIiwgdmFsdWU6IGFzdHJvLm1vb25fcGhhc2UgfSxcbiAgXSk7XG5cbiAgcmV0dXJuIHNldERvdWJsZVNlY3Rpb24oc3VuLCBtb29uKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9hZGluZ1NjcmVlbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBjb250YWluZXIuaWQgPSBcImxvYWRpbmctc2NyZWVuXCI7XG4gIGljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XG4gIGljb24uaW5uZXJIVE1MID0gbG9hZGluZ1N2ZztcbiAgbGFiZWwuY2xhc3NOYW1lID0gXCJsYWJlbFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmlkID0gXCJmb3JlY2FzdFwiO1xuXG4gICAgcmVuZGVyTG9hZGluZ1NjcmVlbigpO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihsb2NhdGlvbik7XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IHJlYWRTZXR0aW5ncygpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlQ3VycmVudFdlYXRoZXIoXG4gICAgICAgIHdlYXRoZXIubG9jYXRpb24sXG4gICAgICAgIHdlYXRoZXIuY3VycmVudCxcbiAgICAgICAgd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXSxcbiAgICAgICAgc2V0dGluZ3MudW5pdHMsXG4gICAgICApLFxuICAgICk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlSG91ckZvcmVjYXN0KFxuICAgICAgICB3ZWF0aGVyLmN1cnJlbnQsXG4gICAgICAgIHdlYXRoZXIuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cixcbiAgICAgICAgd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyLFxuICAgICAgICBzZXR0aW5ncyxcbiAgICAgICksXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVEYXlGb3JlY2FzdCh3ZWF0aGVyLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LCBzZXR0aW5ncy51bml0cyksXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSHVtaWRpdHlVdih3ZWF0aGVyLmN1cnJlbnQpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBjcmVhdGVNb3JlV2VhdGhlckluZm8od2VhdGhlci5jdXJyZW50LCBzZXR0aW5ncy51bml0cyksXG4gICAgKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBhd2FpdCBjcmVhdGVTdW5BbmRNb29uSW5mbyhcbiAgICAgICAgd2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3RybyxcbiAgICAgICAgd2VhdGhlci5jdXJyZW50Lmxhc3RfdXBkYXRlZCxcbiAgICAgICAgc2V0dGluZ3MudGltZUZvcm1hdCxcbiAgICAgICksXG4gICAgKTtcblxuICAgIC8vIFJlc2V0IG1haW4gYW5kIGFkZCBmb3JlY2FzdCBpbmZvcm1hdGlvblxuICAgIG1haW4uaW5uZXJIVE1MID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoXCJBbiBlcnJvciBoYXMgb2N1cnJlZFwiKTtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIC8vIFNhdmUgY3VycmVudCBsb2NhdGlvbiBxdWVyeVxuICAvLyBJZiB0aGVyZSdzIG5vdCBhbnkgbG9jYXRpb24gc2F2ZWQuIFVzZSBkZWZhdWx0IGxvY2F0aW9uIFwiTG9uZG9uXCIuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uTWVtb3J5LmNoZWNrU2F2ZWRJdGVtKClcbiAgICAgID8gbG9jYXRpb25NZW1vcnkuZ2V0SXRlbSgpXG4gICAgICA6IFwiTG9uZG9uXCI7XG4gIH1cblxuICBsb2NhdGlvbk1lbW9yeS5zYXZlSXRlbShsb2NhdGlvbik7XG5cbiAgbGV0IGZvcmVjYXN0UmVmcmVzaDtcbiAgLy8gSW50ZXJ2YWwgZnJvbSBob3VycyB0byBtaWxpc2Vjb25kc1xuICBjb25zdCBhdXRvcmVmcmVzaCA9IHBhcnNlSW50KHJlYWRTZXR0aW5ncygpLmF1dG9yZWZyZXNoLCAxMCkgKiAzNjAwMDAwO1xuXG4gIC8vIFJlc2V0IGludGVydmFsIGVhY2ggdGltZSBmdW5jdGlvbiBpcyBpbnZva2VkXG4gIGNsZWFySW50ZXJ2YWwoZm9yZWNhc3RSZWZyZXNoKTtcblxuICByZW5kZXJGb3JlY2FzdChsb2NhdGlvbik7XG4gIHNldEludGVydmFsKHJlbmRlckZvcmVjYXN0LCBhdXRvcmVmcmVzaCwgbG9jYXRpb24pO1xufVxuXG5leHBvcnQgeyBzZXRXZWF0aGVyLCBhZGRTZWFyY2hFdmVudCwgcmVuZGVyTG9hZGluZ1NjcmVlbiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIHBhZ2UgZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0ICogYXMgZm9yZWNhc3QgZnJvbSBcIi4vZm9yZWNhc3RcIjtcbmltcG9ydCBnZXRDb25kaXRpb25JY29uIGZyb20gXCIuL2NvbmRpdGlvbnNcIjtcbmltcG9ydCAqIGFzIHNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbnNldHRpbmdzLmNoZWNrRGVmYXVsdFNldHRpbmdzKCk7XG5cbnBhZ2UucmVuZGVySGVhZGVyKCk7XG5wYWdlLnJlbmRlck1haW4oKTtcbmZvcmVjYXN0LnNldFdlYXRoZXIoKTtcbnBhZ2UucmVuZGVyRm9vdGVyKCk7XG5cbmdldENvbmRpdGlvbkljb24oMTAwMCkudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiIsImltcG9ydCBtb29uUGhhc2VzIGZyb20gXCIuL2pzb24vbW9vbi1waGFzZXMuanNvblwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRNb29uUGhhc2VJY29uKHBoYXNlVmFsdWUpIHtcbiAgY29uc3QgcGF0aCA9IFwiLi9pbWcvbW9vbi1waGFzZXMvXCI7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgY29uc3QgY3VycmVudFBoYXNlID0gbW9vblBoYXNlcy5maW5kKChwaGFzZSkgPT4ge1xuICAgIHJldHVybiBwaGFzZS5uYW1lID09PSBwaGFzZVZhbHVlO1xuICB9KTtcblxuICBpZiAoIWN1cnJlbnRQaGFzZSkgcmV0dXJuIFwiXCI7XG5cbiAgY29uc3Qgc3ZnID0gYXdhaXQgaW1wb3J0KGAke3BhdGh9JHtjdXJyZW50UGhhc2UuaWNvbn1gKTtcblxuICByZXR1cm4gc3ZnLmRlZmF1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vb25QaGFzZUljb247XG4iLCJpbXBvcnQgYXBwSWNvbiBmcm9tIFwiLi9pbWcvZmF2aWNvbi5zdmdcIjtcbmltcG9ydCBzZWFyY2hTdmcgZnJvbSBcIi4vaW1nL3VpL3NlYXJjaC5zdmdcIjtcbmltcG9ydCBzZXR0aW5nc1N2ZyBmcm9tIFwiLi9pbWcvdWkvc2V0dGluZ3Muc3ZnXCI7XG5pbXBvcnQgY2xvc2VTdmcgZnJvbSBcIi4vaW1nL3VpL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IHVuaXRzU3ZnIGZyb20gXCIuL2ltZy91aS91bml0cy5zdmdcIjtcbmltcG9ydCB0aW1lRm9ybWF0U3ZnIGZyb20gXCIuL2ltZy91aS90aW1lLWZvcm1hdC5zdmdcIjtcbmltcG9ydCBhdXRvcmVmcmVzaFN2ZyBmcm9tIFwiLi9pbWcvdWkvYXV0b3JlZnJlc2guc3ZnXCI7XG5pbXBvcnQgeyBhZGRTZWFyY2hFdmVudCwgc2V0V2VhdGhlciB9IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyB3cml0ZUlucHV0U2V0dGluZ3MsIHJlYWRTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL2RpYWxvZ3NcIjtcblxuY29uc3Qgc2V0dGluZ3NEaWFsb2cgPSBuZXcgRGlhbG9nKFwic2V0dGluZ3MtZGlhbG9nXCIpO1xuXG4vLyBGZXRjaCBtZXRob2RzXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNlYXJjaFN1Z2dlc3Rpb25zKHF1ZXJ5KSB7XG4gIGNvbnN0IHJlc3BvbnNlRmV0Y2ggPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PWQ5YmNjOTRjMjhlMDQ4NDRhZjEyMjI0MjAyNDAzMDMmcT0ke3F1ZXJ5fWAsXG4gICk7XG4gIHJldHVybiByZXNwb25zZUZldGNoLmpzb24oKTtcbn1cblxuLy8gRXZlbnRzOlxuLy8gLSBTZWFyY2ggZXZlbnRzXG5mdW5jdGlvbiBhZGRDbGVhcklucHV0RXZlbnQoY2xlYXIsIGlucHV0KSB7XG4gIGNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdWdnZXN0aW9uc0JlaGF2aW9yRXZlbnQoaW5wdXQsIHNlYXJjaFN1Z2dlc3Rpb25zKSB7XG4gIGxldCBzZWFyY2hUaW1lb3V0O1xuICBjb25zdCBzdWdnZXN0aW9uc0RlbGF5ID0gNTAwO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgLy8gUmVzZXQgdGltZXIgd2hlbiBpbnB1dCBldmVudCB0cmlnZ2Vyc1xuICAgIGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KTtcblxuICAgIHJlbW92ZVN1Z2dlc3Rpb25zKCk7XG5cbiAgICAvLyBXYWl0IDAuNXMgdG8gZmV0Y2ggc2VhcmNoIHN1Z2dlc3Rpb25zXG4gICAgaWYgKCFpbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgIHNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gYWRkU3VnZ2VzdGlvbnMoaW5wdXQsIHNlYXJjaFN1Z2dlc3Rpb25zKSxcbiAgICAgIHN1Z2dlc3Rpb25zRGVsYXksXG4gICAgKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGFzeW5jICgpID0+IHtcbiAgICByZW1vdmVTdWdnZXN0aW9ucygpO1xuXG4gICAgaWYgKCFpbnB1dC52YWx1ZSkgcmV0dXJuO1xuICAgIGFkZFN1Z2dlc3Rpb25zKGlucHV0LCBzZWFyY2hTdWdnZXN0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDaG9vc2VTdWdnZXN0aW9uRXZlbnQoaW5wdXQsIHN1Z2dlc3Rpb24pIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWZvcm1cIik7XG5cbiAgc3VnZ2VzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlucHV0LnZhbHVlID0gc3VnZ2VzdGlvbi5kYXRhc2V0LnZhbHVlO1xuICAgIHJlbW92ZVN1Z2dlc3Rpb25zKCk7XG4gICAgZm9ybS5yZXF1ZXN0U3VibWl0KCk7IC8vIFRyaWdnZXIgc3VibWl0IGV2ZW50XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRPcGVuU2V0dGluZ3NEaWFsb2dFdmVudChzZXR0aW5nc0J1dHRvbikge1xuICBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldHRpbmdzRGlhbG9nLnNob3dEaWFsb2coKTtcbiAgfSk7XG59XG5cbi8vIC0gU2V0dGluZ3MgZGlhbG9nIGV2ZW50c1xuZnVuY3Rpb24gYWRkV3JpdGVTZXR0aW5nc0V2ZW50KGZvcm0pIHtcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIikpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB3cml0ZUlucHV0U2V0dGluZ3MoaW5wdXRzKTtcbiAgICBzZXRXZWF0aGVyKCk7IC8vIFJlZnJlc2ggd2VhdGhlclxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3VibWl0U2V0dGluZ3NFdmVudChmb3JtLCBzdWJtaXRCdXR0b24pIHtcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gIH0pO1xufVxuXG4vLyBIZWFkZXJcbmZ1bmN0aW9uIGNyZWF0ZUFwcFRpdGxlKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGNvbnRhaW5lci5pZCA9IFwiYXBwLXRpdGxlXCI7XG5cbiAgbGFiZWwuY2xhc3NOYW1lID0gXCJsYWJlbFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBcIjtcblxuICBpY29uLmNsYXNzTmFtZSA9IFwiaWNvblwiO1xuICBpY29uLmlubmVySFRNTCA9IGFwcEljb247XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNob29zZUFyZWFJbnB1dChpZCwgcGxhY2Vob2xkZXIpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjbGVhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb3JtLmlkID0gXCJzZWFyY2gtZm9ybVwiO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBcImlucHV0LWNvbnRhaW5lclwiO1xuXG4gIGlucHV0LnR5cGUgPSBcInNlYXJjaFwiO1xuICBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gaWQ7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gIGlucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG5cbiAgY2xlYXJJbnB1dC5jbGFzc05hbWUgPSBcImNsZWFyLWlucHV0XCI7XG4gIGNsZWFySW5wdXQuaW5uZXJIVE1MID0gY2xvc2VTdmc7XG5cbiAgc2VhcmNoU3VnZ2VzdGlvbnMuY2xhc3NOYW1lID0gXCJzZWFyY2gtc3VnZ2VzdGlvbnNcIjtcblxuICBidXR0b24uaWQgPSBcInNlYXJjaC1sb2NhdGlvbi1idXR0b25cIjtcbiAgYnV0dG9uLmNsYXNzTmFtZSA9IFwicHJpbWFyeVwiO1xuICBidXR0b24uaW5uZXJIVE1MID0gc2VhcmNoU3ZnO1xuXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xlYXJJbnB1dCk7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaFN1Z2dlc3Rpb25zKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIGFkZENsZWFySW5wdXRFdmVudChjbGVhcklucHV0LCBpbnB1dCk7XG4gIGFkZFNlYXJjaEV2ZW50KGZvcm0sIGlucHV0KTtcbiAgYWRkU3VnZ2VzdGlvbnNCZWhhdmlvckV2ZW50KGlucHV0LCBzZWFyY2hTdWdnZXN0aW9ucyk7XG5cbiAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcHR5U3VnZ2VzdGlvbihsYWJlbCkge1xuICBjb25zdCBzdWdnZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VnZ2VzdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgc3VnZ2VzdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInN1Z2dlc3Rpb24gZW1wdHlcIjtcbiAgc3VnZ2VzdGlvbkxhYmVsLmNsYXNzTmFtZSA9IFwibG9jYXRpb24gc21hbGwtdGV4dFwiO1xuICBzdWdnZXN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICBzdWdnZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25MYWJlbCk7XG5cbiAgcmV0dXJuIHN1Z2dlc3Rpb25Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Z2dlc3Rpb24oaW5wdXQsIHN1Z2dlc3Rpb24pIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBzdWdnZXN0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwic3VnZ2VzdGlvblwiO1xuICBzdWdnZXN0aW9uQ29udGFpbmVyLmRhdGFzZXQudmFsdWUgPSBgJHtzdWdnZXN0aW9uLm5hbWV9LCAke3N1Z2dlc3Rpb24uY291bnRyeX1gO1xuICBsb2NhdGlvbi5jbGFzc05hbWUgPSBcImxvY2F0aW9uIHNtYWxsLXRleHRcIjtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBzdWdnZXN0aW9uLm5hbWU7XG4gIGNvdW50cnkuY2xhc3NOYW1lID0gXCJjb3VudHJ5IHZlcnktc21hbGwtdGV4dFwiO1xuICBjb3VudHJ5LnRleHRDb250ZW50ID0gc3VnZ2VzdGlvbi5jb3VudHJ5O1xuXG4gIHN1Z2dlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICBzdWdnZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvdW50cnkpO1xuXG4gIGFkZENob29zZVN1Z2dlc3Rpb25FdmVudChpbnB1dCwgc3VnZ2VzdGlvbkNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIHN1Z2dlc3Rpb25Db250YWluZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFN1Z2dlc3Rpb25zKGlucHV0LCBzZWFyY2hTdWdnZXN0aW9ucykge1xuICBjb25zdCBzdWdnZXN0aW9ucyA9IGF3YWl0IGZldGNoU2VhcmNoU3VnZ2VzdGlvbnMoaW5wdXQudmFsdWUpO1xuXG4gIGlmICghc3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgY29uc3QgZW1wdHlTdWdnZXN0aW9ucyA9IGNyZWF0ZUVtcHR5U3VnZ2VzdGlvbihcbiAgICAgIFwiTG9jYXRpb24gY2Fubm90IGJlIGZvdW5kLi4uXCIsXG4gICAgKTtcbiAgICBzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChlbXB0eVN1Z2dlc3Rpb25zKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWdnZXN0aW9ucy5mb3JFYWNoKChzdWdnZXN0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbkVsZW1lbnQgPSBjcmVhdGVTdWdnZXN0aW9uKGlucHV0LCBzdWdnZXN0aW9uKTtcbiAgICBzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uRWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdWdnZXN0aW9ucygpIHtcbiAgY29uc3Qgc2VhcmNoU3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdWdnZXN0aW9uc1wiKTtcblxuICBzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJCdXR0b25zKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJoZWFkZXItYnV0dG9uc1wiO1xuXG4gIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2V0dGluZ3NCdXR0b24uY2xhc3NOYW1lID0gXCJzZXR0aW5ncy1idXR0b25cIjtcbiAgc2V0dGluZ3NCdXR0b24uaW5uZXJIVE1MID0gc2V0dGluZ3NTdmc7XG5cbiAgYWRkT3BlblNldHRpbmdzRGlhbG9nRXZlbnQoc2V0dGluZ3NCdXR0b24pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc0J1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2V0dGluZ0ZpZWxkKFxuICBpbnB1dElkLFxuICBsYWJlbCxcbiAgaWNvbixcbiAgc2V0dGluZ3NWYWx1ZSxcbiAgc2VsZWN0T3B0aW9ucyA9IFt7IG5hbWU6IFwib3B0aW9uLW5hbWVcIiwgdmFsdWU6IFwib3B0aW9uLXZhbHVlXCIgfV0sXG4pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmllbGRUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZpZWxkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2V0dGluZ3MtZmllbGRcIjtcbiAgZmllbGRUaXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZpZWxkLXRpdGxlXCI7XG4gIGZpZWxkTGFiZWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBmaWVsZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dElkKTtcbiAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICBmaWVsZEljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XG4gIGZpZWxkSWNvbi5pbm5lckhUTUwgPSBpY29uO1xuXG4gIHNlbGVjdElucHV0LmlkID0gaW5wdXRJZDtcbiAgc2VsZWN0SW5wdXQubmFtZSA9IGlucHV0SWQ7XG5cbiAgc2VsZWN0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uLm5hbWU7XG4gICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICBpZiAob3B0aW9uLnZhbHVlID09PSBzZXR0aW5nc1ZhbHVlKSB7XG4gICAgICBvcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gIH0pO1xuXG4gIGZpZWxkVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRJY29uKTtcbiAgZmllbGRUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZExhYmVsKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGRUaXRsZUNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gc2V0dXBTZXR0aW5nc0RpYWxvZ0NvbnRlbnQoKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gcmVhZFNldHRpbmdzKCk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHVuaXRzID0gY3JlYXRlU2V0dGluZ0ZpZWxkKFxuICAgIFwidW5pdHNcIixcbiAgICBcIkRpc3BsYXkgdW5pdHNcIixcbiAgICB1bml0c1N2ZyxcbiAgICBzZXR0aW5ncy51bml0cyxcbiAgICBbXG4gICAgICB7IG5hbWU6IFwiwrBDXCIsIHZhbHVlOiBcImNcIiB9LFxuICAgICAgeyBuYW1lOiBcIsKwRlwiLCB2YWx1ZTogXCJmXCIgfSxcbiAgICBdLFxuICApO1xuICBjb25zdCBob3VyRm9ybWF0ID0gY3JlYXRlU2V0dGluZ0ZpZWxkKFxuICAgIFwidGltZUZvcm1hdFwiLFxuICAgIFwiVGltZSBmb3JtYXRcIixcbiAgICB0aW1lRm9ybWF0U3ZnLFxuICAgIHNldHRpbmdzLnRpbWVGb3JtYXQsXG4gICAgW1xuICAgICAgeyBuYW1lOiBcIjI0IGhvdXJzXCIsIHZhbHVlOiBcIjI0aFwiIH0sXG4gICAgICB7IG5hbWU6IFwiMTIgaG91cnNcIiwgdmFsdWU6IFwiMTJoXCIgfSxcbiAgICBdLFxuICApO1xuICBjb25zdCBhdXRvcmVmcmVzaCA9IGNyZWF0ZVNldHRpbmdGaWVsZChcbiAgICBcImF1dG9yZWZyZXNoXCIsXG4gICAgXCJBdXRvIHJlZnJlc2hcIixcbiAgICBhdXRvcmVmcmVzaFN2ZyxcbiAgICBzZXR0aW5ncy5hdXRvcmVmcmVzaCxcbiAgICBbXG4gICAgICB7IG5hbWU6IFwiMSBob3VyXCIsIHZhbHVlOiBcIjFcIiB9LFxuICAgICAgeyBuYW1lOiBcIjMgaG91cnNcIiwgdmFsdWU6IFwiM1wiIH0sXG4gICAgICB7IG5hbWU6IFwiNSBob3Vyc1wiLCB2YWx1ZTogXCI1XCIgfSxcbiAgICAgIHsgbmFtZTogXCIxMiBob3Vyc1wiLCB2YWx1ZTogXCIxMlwiIH0sXG4gICAgICB7IG5hbWU6IFwiMjQgaG91cnNcIiwgdmFsdWU6IFwiMjRcIiB9LFxuICAgIF0sXG4gICk7XG5cbiAgY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInRpdGxlLWNvbnRhaW5lclwiO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJTZXR0aW5nc1wiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBmb3JtLmlkID0gXCJzZXR0aW5nc1wiO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodW5pdHMpO1xuICBmb3JtLmFwcGVuZENoaWxkKGhvdXJGb3JtYXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGF1dG9yZWZyZXNoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAvLyBhZGQgZXZlbnRzXG4gIGFkZFdyaXRlU2V0dGluZ3NFdmVudChmb3JtKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQXBwVGl0bGUoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVDaG9vc2VBcmVhSW5wdXQoXCJzZWFyY2gtbG9jYXRpb25cIiwgXCJTZWFyY2hcIikpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyQnV0dG9ucygpKTtcblxuICBzZXR0aW5nc0RpYWxvZy5zZXRDb250ZW50KHNldHVwU2V0dGluZ3NEaWFsb2dDb250ZW50KCksIFtcbiAgICB7IGNsYXNzZXM6IFwicHJpbWFyeVwiLCB0eXBlOiBcInN1Ym1pdFwiLCBsYWJlbDogXCJTYXZlIGNoYW5nZXNcIiB9LFxuICAgIHsgY2xhc3NlczogXCJzZWNvbmRhcnlcIiwgdHlwZTogXCJidXR0b25cIiwgbGFiZWw6IFwiQ2xvc2VcIiB9LFxuICBdKTtcbiAgYWRkU3VibWl0U2V0dGluZ3NFdmVudChcbiAgICBzZXR0aW5nc0RpYWxvZy5nZXRGb3JtLFxuICAgIHNldHRpbmdzRGlhbG9nLmdldFByaW1hcnlCdXR0b24sXG4gICk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG4vLyBNYWluXG5mdW5jdGlvbiByZW5kZXJNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbi8vIEZvb3RlclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgXCI7XG5cbiAgY29uc3QgY3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjcmVkaXRzLmNsYXNzTmFtZSA9IFwiY3JlZGl0c1wiO1xuICBjcmVkaXRzLmhyZWYgPSBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vRXJpY2tCR29tZXpcIjtcbiAgY3JlZGl0cy50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBjcmVkaXRzLnRleHRDb250ZW50ID0gXCJFcmljayBCLiBHw7NtZXpcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0cyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5leHBvcnQge1xuICByZW5kZXJIZWFkZXIsXG4gIHJlbmRlck1haW4sXG4gIHJlbmRlckZvb3RlcixcbiAgZmV0Y2hTZWFyY2hTdWdnZXN0aW9ucyxcbiAgcmVtb3ZlU3VnZ2VzdGlvbnMsXG59O1xuIiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBzZXR0aW5nc01lbW9yeSA9IG5ldyBTdG9yYWdlKFwic2V0dGluZ3NcIik7XG5cbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgdW5pdHM6IFwiY1wiLFxuICB0aW1lRm9ybWF0OiBcIjEyaFwiLFxuICBhdXRvcmVmcmVzaDogXCIxXCIsXG59O1xuXG4vLyBFdmVudHNcbmZ1bmN0aW9uIHdyaXRlU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgc2V0dGluZ3NNZW1vcnkuc2F2ZUl0ZW0oc2V0dGluZ3MpO1xufVxuXG5mdW5jdGlvbiB3cml0ZUlucHV0U2V0dGluZ3MoaW5wdXRzKSB7XG4gIGNvbnN0IHNldHRpbmdzID0ge307XG5cbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgc2V0dGluZ3NbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgfSk7XG5cbiAgd3JpdGVTZXR0aW5ncyhzZXR0aW5ncyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRTZXR0aW5ncygpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXR0aW5nc1wiKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRGVmYXVsdFNldHRpbmdzKCkge1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2V0dGluZ3NcIikpIHtcbiAgICB3cml0ZVNldHRpbmdzKGRlZmF1bHRTZXR0aW5ncyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hlY2tEZWZhdWx0U2V0dGluZ3MsIHJlYWRTZXR0aW5ncywgd3JpdGVJbnB1dFNldHRpbmdzIH07XG4iLCJjbGFzcyBTdG9yYWdlIHtcbiAgI3NhdmVkSXRlbTtcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNhdmVJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLiNzYXZlZEl0ZW0gPSBpdGVtO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLm5hbWUsIEpTT04uc3RyaW5naWZ5KHRoaXMuI3NhdmVkSXRlbSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMubmFtZSwgdGhpcy4jc2F2ZWRJdGVtKTtcbiAgfVxuXG4gIGdldEl0ZW0oKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLiNzYXZlZEl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib2JqZWN0XCIpO1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5uYW1lKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMubmFtZSk7XG4gIH1cblxuICBjaGVja1NhdmVkSXRlbSgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldEl0ZW0oKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcbiIsImltcG9ydCAqIGFzIHRpbWUgZnJvbSBcIi4vdGltZVwiO1xuXG5mdW5jdGlvbiBnZXRTdW5Qb3NpdGlvbkluZGV4KHN1bnJpc2UsIHN1bnNldCwgY3VycmVudFRpbWUpIHtcbiAgLy8gUGFyc2UgYWxsIHRpbWUgdmFsdWVzIHRvIGRlY2ltYWwgbnVtYmVyXG4gIHN1bnJpc2UgPSB0aW1lLnBhcnNlVGltZVRvTnVtYmVyKHN1bnJpc2UpO1xuICBzdW5zZXQgPSB0aW1lLnBhcnNlVGltZVRvTnVtYmVyKHN1bnNldCk7XG4gIGN1cnJlbnRUaW1lID0gdGltZS5wYXJzZVRpbWVUb051bWJlcihjdXJyZW50VGltZSk7XG5cbiAgY29uc3QgcGVyY2VudGFnZSA9IChjdXJyZW50VGltZSAtIHN1bnJpc2UpIC8gKHN1bnNldCAtIHN1bnJpc2UpO1xuXG4gIGlmIChwZXJjZW50YWdlIDwgMCB8fCBwZXJjZW50YWdlID4gMSkgcmV0dXJuIDA7IC8vIE5pZ2h0XG4gIGlmIChwZXJjZW50YWdlIDwgMC4yKSByZXR1cm4gMTsgLy8gU3VucmlzZVxuICBpZiAocGVyY2VudGFnZSA+PSAwLjIgJiYgcGVyY2VudGFnZSA8PSAwLjgpIHJldHVybiAyOyAvLyBOb29uXG4gIHJldHVybiAzOyAvLyBTdW5zZXRcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3VuUG9zaXRpb25JY29uKHN1bnJpc2UsIHN1bnNldCwgY3VycmVudFRpbWUpIHtcbiAgY29uc3QgcGF0aCA9IFwiLi9pbWcvc3VuLXBvc2l0aW9ucy9cIjtcbiAgY29uc3QgaW5kZXggPSBnZXRTdW5Qb3NpdGlvbkluZGV4KHN1bnJpc2UsIHN1bnNldCwgY3VycmVudFRpbWUpO1xuXG4gIGNvbnN0IGN1cnJlbnRTdW5JY29uID0gYXdhaXQgaW1wb3J0KGAke3BhdGh9c3VuLSR7aW5kZXh9LnN2Z2ApO1xuXG4gIHJldHVybiBjdXJyZW50U3VuSWNvbi5kZWZhdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTdW5Qb3NpdGlvbkljb247XG4iLCJjb25zdCB0aW1lUGF0dGVybiA9IC8oKDFbMC0yXXwwP1sxLTldKTooWzAtNV1bMC05XSkgPyhbQWFQcF1bTW1dKSkvO1xuXG4vLyBGcm9tIDI0IGhvdXJzIHRvIDEyIGhvdXJzXG5mdW5jdGlvbiBjb252ZXJ0VG8xMkhvdXIodGltZSkge1xuICAvLyBBdm9pZCBpZiB0aW1lIGlzIGFscmVhZHkgMjQgaG91cnMgZm9ybWF0XG4gIGlmICh0aW1lUGF0dGVybi50ZXN0KHRpbWUpKSByZXR1cm4gdGltZTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZS5zcGxpdChcIjpcIik7XG4gIGNvbnN0IG1vZGlmaWVyID0gaG91cnMgPCBcIjEyXCIgPyBcIkFNXCIgOiBcIlBNXCI7XG5cbiAgaWYgKGhvdXJzID09PSBcIjAwXCIpIGhvdXJzID0gXCIxMlwiO1xuICBlbHNlIGlmIChob3VycyA+IFwiMTJcIikgaG91cnMgPSAraG91cnMgLSAxMjtcblxuICBpZiAoaG91cnMgPCAxMCkgaG91cnMgPSBgMCR7K2hvdXJzfWA7IC8vIEFkZCBleHRyYSAwIGZyb20gMTowMCB0byA5OjAwXG5cbiAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9ICR7bW9kaWZpZXJ9YDtcbn1cblxuLy8gRnJvbSAxMiBob3VycyB0byAyNCBob3Vyc1xuZnVuY3Rpb24gY29udmVydFRvMjRIb3VyKHRpbWUpIHtcbiAgLy8gQXZvaWQgaWYgdGltZSBpcyBhbHJlYWR5IDEyIGhvdXJzIGZvcm1hdFxuICBpZiAoIXRpbWVQYXR0ZXJuLnRlc3QodGltZSkpIHJldHVybiB0aW1lO1xuXG4gIGNvbnN0IFt0aW1lVmFsdWUsIG1vZGlmaWVyXSA9IHRpbWUuc3BsaXQoXCIgXCIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZVZhbHVlLnNwbGl0KFwiOlwiKTtcblxuICBpZiAobW9kaWZpZXIgPT09IFwiQU1cIiAmJiBob3VycyA9PT0gXCIxMlwiKSB7XG4gICAgaG91cnMgPSAwO1xuICB9IGVsc2UgaWYgKG1vZGlmaWVyID09PSBcIlBNXCIpIHtcbiAgICBpZiAoaG91cnMgIT09IFwiMTJcIikgaG91cnMgPSAraG91cnMgKyAxMjtcbiAgfVxuXG4gIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzfWA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVRvTnVtYmVyKHRpbWUpIHtcbiAgdGltZSA9IGNvbnZlcnRUbzI0SG91cih0aW1lKTtcbiAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuICByZXR1cm4gcGFyc2VJbnQoaG91cnMsIDEwKSArIHBhcnNlSW50KG1pbnV0ZXMsIDEwKSAvIDYwO1xufVxuXG5leHBvcnQgeyBjb252ZXJ0VG8xMkhvdXIsIGNvbnZlcnRUbzI0SG91ciwgcGFyc2VUaW1lVG9OdW1iZXIgfTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLlwiOiBbXG5cdFx0XCIuL3NyYy9pbmRleC5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL1wiOiBbXG5cdFx0XCIuL3NyYy9pbmRleC5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL2NvbmRpdGlvbnNcIjogW1xuXHRcdFwiLi9zcmMvY29uZGl0aW9ucy5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL2NvbmRpdGlvbnMuanNcIjogW1xuXHRcdFwiLi9zcmMvY29uZGl0aW9ucy5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL2RpYWxvZ3NcIjogW1xuXHRcdFwiLi9zcmMvZGlhbG9ncy5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL2RpYWxvZ3MuanNcIjogW1xuXHRcdFwiLi9zcmMvZGlhbG9ncy5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL2ZvcmVjYXN0XCI6IFtcblx0XHRcIi4vc3JjL2ZvcmVjYXN0LmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vZm9yZWNhc3QuanNcIjogW1xuXHRcdFwiLi9zcmMvZm9yZWNhc3QuanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9pbWcvZmF2aWNvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL2Zhdmljb24uc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL21vb24tcGhhc2VzL2ZpcnN0LXF1YXJ0ZXIuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9tb29uLXBoYXNlcy9maXJzdC1xdWFydGVyLnN2Z1wiLFxuXHRcdDcsXG5cdFx0XCJzcmNfaW1nX21vb24tcGhhc2VzX2ZpcnN0LXF1YXJ0ZXJfc3ZnXCJcblx0XSxcblx0XCIuL2ltZy9tb29uLXBoYXNlcy9mdWxsLW1vb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9tb29uLXBoYXNlcy9mdWxsLW1vb24uc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfbW9vbi1waGFzZXNfZnVsbC1tb29uX3N2Z1wiXG5cdF0sXG5cdFwiLi9pbWcvbW9vbi1waGFzZXMvbGFzdC1xdWFydGVyLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvbW9vbi1waGFzZXMvbGFzdC1xdWFydGVyLnN2Z1wiLFxuXHRcdDcsXG5cdFx0XCJzcmNfaW1nX21vb24tcGhhc2VzX2xhc3QtcXVhcnRlcl9zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL21vb24tcGhhc2VzL25ldy1tb29uLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvbW9vbi1waGFzZXMvbmV3LW1vb24uc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfbW9vbi1waGFzZXNfbmV3LW1vb25fc3ZnXCJcblx0XSxcblx0XCIuL2ltZy9tb29uLXBoYXNlcy93YW5pbmctY3Jlc2NlbnQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9tb29uLXBoYXNlcy93YW5pbmctY3Jlc2NlbnQuc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfbW9vbi1waGFzZXNfd2FuaW5nLWNyZXNjZW50X3N2Z1wiXG5cdF0sXG5cdFwiLi9pbWcvbW9vbi1waGFzZXMvd2FuaW5nLWdpYmJvdXMuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9tb29uLXBoYXNlcy93YW5pbmctZ2liYm91cy5zdmdcIixcblx0XHQ3LFxuXHRcdFwic3JjX2ltZ19tb29uLXBoYXNlc193YW5pbmctZ2liYm91c19zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL21vb24tcGhhc2VzL3dheGluZy1jcmVzY2VudC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL21vb24tcGhhc2VzL3dheGluZy1jcmVzY2VudC5zdmdcIixcblx0XHQ3LFxuXHRcdFwic3JjX2ltZ19tb29uLXBoYXNlc193YXhpbmctY3Jlc2NlbnRfc3ZnXCJcblx0XSxcblx0XCIuL2ltZy9tb29uLXBoYXNlcy93YXhpbmctZ2liYm91cy5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL21vb24tcGhhc2VzL3dheGluZy1naWJib3VzLnN2Z1wiLFxuXHRcdDcsXG5cdFx0XCJzcmNfaW1nX21vb24tcGhhc2VzX3dheGluZy1naWJib3VzX3N2Z1wiXG5cdF0sXG5cdFwiLi9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3N1bi1wb3NpdGlvbnMvc3VuLTAuc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfc3VuLXBvc2l0aW9uc19zdW4tMF9zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL3N1bi1wb3NpdGlvbnMvc3VuLTEuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9zdW4tcG9zaXRpb25zL3N1bi0xLnN2Z1wiLFxuXHRcdDcsXG5cdFx0XCJzcmNfaW1nX3N1bi1wb3NpdGlvbnNfc3VuLTFfc3ZnXCJcblx0XSxcblx0XCIuL2ltZy9zdW4tcG9zaXRpb25zL3N1bi0yLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMi5zdmdcIixcblx0XHQ3LFxuXHRcdFwic3JjX2ltZ19zdW4tcG9zaXRpb25zX3N1bi0yX3N2Z1wiXG5cdF0sXG5cdFwiLi9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMy5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3N1bi1wb3NpdGlvbnMvc3VuLTMuc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfc3VuLXBvc2l0aW9uc19zdW4tM19zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL3VpL2FyYy1wZXJjZW50YWdlLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvYXJjLXBlcmNlbnRhZ2Uuc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL2F1dG9yZWZyZXNoLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvYXV0b3JlZnJlc2guc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL2Nsb3NlLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvY2xvc2Uuc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL2h1bWlkaXR5LW92ZXJsYXkuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy91aS9odW1pZGl0eS1vdmVybGF5LnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS9sb2FkaW5nLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvbG9hZGluZy5zdmdcIixcblx0XHQ3XG5cdF0sXG5cdFwiLi9pbWcvdWkvbW9vbi1waGFzZS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL21vb24tcGhhc2Uuc3ZnXCIsXG5cdFx0Nyxcblx0XHRcInNyY19pbWdfdWlfbW9vbi1waGFzZV9zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL3VpL3ByZWNpcGl0YXRpb24uc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy91aS9wcmVjaXBpdGF0aW9uLnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS9wcmVzc3VyZS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3ByZXNzdXJlLnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS9yYWluLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvcmFpbi5zdmdcIixcblx0XHQ3XG5cdF0sXG5cdFwiLi9pbWcvdWkvc2VhcmNoLWVycm9yLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvc2VhcmNoLWVycm9yLnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS9zZWFyY2guc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy91aS9zZWFyY2guc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL3NldHRpbmdzLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvc2V0dGluZ3Muc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL3N1bi1wb3NpdGlvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3N1bi1wb3NpdGlvbi5zdmdcIixcblx0XHQ3LFxuXHRcdFwic3JjX2ltZ191aV9zdW4tcG9zaXRpb25fc3ZnXCJcblx0XSxcblx0XCIuL2ltZy91aS90aW1lLWZvcm1hdC5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3RpbWUtZm9ybWF0LnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS91bml0cy5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3VuaXRzLnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2ltZy91aS91di1vdmVybGF5LnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvdXYtb3ZlcmxheS5zdmdcIixcblx0XHQ3XG5cdF0sXG5cdFwiLi9pbWcvdWkvdmlzaWJpbGl0eS5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3Zpc2liaWxpdHkuc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL3dpbmQtZGlyZWN0aW9uLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvdWkvd2luZC1kaXJlY3Rpb24uc3ZnXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vaW1nL3VpL3dpbmQuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy91aS93aW5kLnN2Z1wiLFxuXHRcdDdcblx0XSxcblx0XCIuL2luZGV4XCI6IFtcblx0XHRcIi4vc3JjL2luZGV4LmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vaW5kZXguanNcIjogW1xuXHRcdFwiLi9zcmMvaW5kZXguanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9qc29uL2NvbmRpdGlvbnNcIjogW1xuXHRcdFwiLi9zcmMvanNvbi9jb25kaXRpb25zLmpzb25cIixcblx0XHQzXG5cdF0sXG5cdFwiLi9qc29uL2NvbmRpdGlvbnMuanNvblwiOiBbXG5cdFx0XCIuL3NyYy9qc29uL2NvbmRpdGlvbnMuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL2pzb24vbW9vbi1waGFzZXNcIjogW1xuXHRcdFwiLi9zcmMvanNvbi9tb29uLXBoYXNlcy5qc29uXCIsXG5cdFx0M1xuXHRdLFxuXHRcIi4vanNvbi9tb29uLXBoYXNlcy5qc29uXCI6IFtcblx0XHRcIi4vc3JjL2pzb24vbW9vbi1waGFzZXMuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL21vb24tcGhhc2VzXCI6IFtcblx0XHRcIi4vc3JjL21vb24tcGhhc2VzLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vbW9vbi1waGFzZXMuanNcIjogW1xuXHRcdFwiLi9zcmMvbW9vbi1waGFzZXMuanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9wYWdlXCI6IFtcblx0XHRcIi4vc3JjL3BhZ2UuanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9wYWdlLmpzXCI6IFtcblx0XHRcIi4vc3JjL3BhZ2UuanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9zZXR0aW5nc1wiOiBbXG5cdFx0XCIuL3NyYy9zZXR0aW5ncy5qc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL3NldHRpbmdzLmpzXCI6IFtcblx0XHRcIi4vc3JjL3NldHRpbmdzLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vc3RvcmFnZVwiOiBbXG5cdFx0XCIuL3NyYy9zdG9yYWdlLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vc3RvcmFnZS5qc1wiOiBbXG5cdFx0XCIuL3NyYy9zdG9yYWdlLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vc3R5bGUuY3NzXCI6IFtcblx0XHRcIi4vc3JjL3N0eWxlLmNzc1wiLFxuXHRcdDlcblx0XSxcblx0XCIuL3N1bi1wb3NpdGlvblwiOiBbXG5cdFx0XCIuL3NyYy9zdW4tcG9zaXRpb24uanNcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9zdW4tcG9zaXRpb24uanNcIjogW1xuXHRcdFwiLi9zcmMvc3VuLXBvc2l0aW9uLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vdGltZVwiOiBbXG5cdFx0XCIuL3NyYy90aW1lLmpzXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vdGltZS5qc1wiOiBbXG5cdFx0XCIuL3NyYy90aW1lLmpzXCIsXG5cdFx0OVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgyKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgaWRzWzFdIHwgMTYpXG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKE9iamVjdC5rZXlzKG1hcCkpO1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMgbGF6eSByZWN1cnNpdmUgXi4qLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwidmFyIG1hcCA9IHtcblx0XCIuL2ltZy9zdW4tcG9zaXRpb25zL3N1bi0wLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMC5zdmdcIixcblx0XHRcInNyY19pbWdfc3VuLXBvc2l0aW9uc19zdW4tMF9zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL3N1bi1wb3NpdGlvbnMvc3VuLTEuc3ZnXCI6IFtcblx0XHRcIi4vc3JjL2ltZy9zdW4tcG9zaXRpb25zL3N1bi0xLnN2Z1wiLFxuXHRcdFwic3JjX2ltZ19zdW4tcG9zaXRpb25zX3N1bi0xX3N2Z1wiXG5cdF0sXG5cdFwiLi9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3N1bi1wb3NpdGlvbnMvc3VuLTIuc3ZnXCIsXG5cdFx0XCJzcmNfaW1nX3N1bi1wb3NpdGlvbnNfc3VuLTJfc3ZnXCJcblx0XSxcblx0XCIuL2ltZy9zdW4tcG9zaXRpb25zL3N1bi0zLnN2Z1wiOiBbXG5cdFx0XCIuL3NyYy9pbWcvc3VuLXBvc2l0aW9ucy9zdW4tMy5zdmdcIixcblx0XHRcInNyY19pbWdfc3VuLXBvc2l0aW9uc19zdW4tM19zdmdcIlxuXHRdLFxuXHRcIi4vaW1nL3VpL3N1bi1wb3NpdGlvbi5zdmdcIjogW1xuXHRcdFwiLi9zcmMvaW1nL3VpL3N1bi1wb3NpdGlvbi5zdmdcIixcblx0XHRcInNyY19pbWdfdWlfc3VuLXBvc2l0aW9uX3N2Z1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgNyB8IDE2KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYyBsYXp5IHJlY3Vyc2l2ZSBeLipzdW5cXFxcLS4qXFxcXC5zdmckXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5tYWluLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIndlYXRoZXItcHJvamVjdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dlYXRoZXJfcHJvamVjdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3ZWF0aGVyX3Byb2plY3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=