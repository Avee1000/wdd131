const temp = 10;
const speed = 4.8;

const windChill = (temp, speed) => {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const temperature = document.querySelector("#temperature");
const condition = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const chill = document.querySelector("#windchill");

if (temp <= 50 && speed > 3) {
    const windChillValue = windChill(temp, speed);
    temperature.innerHTML = `<strong>Temperature:</strong> ${temp}°C`;
    condition.innerHTML = `<strong>Conditions:</strong> Cloudy`;
    wind.innerHTML = `<strong>Wind:</strong> ${speed} km/h`;
    chill.innerHTML = `<strong>Wind Chill:</strong> ${windChillValue.toFixed(0)}`;
}





















const date = new Date;
const year = document.getElementById('currentyear');

year.innerHTML += date.getFullYear();

/////////////////////////////////////////////////////////

const modified = document.getElementById('lastModified');
let lastModified = new Date(document.lastModified);
modified.innerHTML += lastModified;

