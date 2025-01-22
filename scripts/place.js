const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#windchill");

temperature.innerHTML = `<strong>Temperature:</strong> 10°C`;
condition.innerHTML = `<strong>Conditions:</strong> Sunny`;
wind.innerHTML = `<strong>Wind:</strong> 10 km/h`;
windChill.innerHTML = `<strong>Wind Chill:</strong> 10°C`;


const date = new Date;
const year = document.getElementById('currentyear');

year.innerHTML += date.getFullYear();

/////////////////////////////////////////////////////////

const modified = document.getElementById('lastModified');
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

