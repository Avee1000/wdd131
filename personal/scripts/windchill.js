// const temperature = document.getElementById('temperature');
// let newTemperature = 50;
// temperature.innerHTML += newTemperature + `&deg;F`;

// const speed = document.getElementById('speed');
// let newSpeed = 4;
// speed.innerHTML += newSpeed + ` km/h`;

// function windchill(t, s) {
//     let windChill = (35.74 + (0.6215 * t)) - ((35.75) * (s ** 0.16)) + ((0.4275 * t * (s ** 0.16)))
//     return windChill;
// }

// const chill = document.getElementById('chill');
// let windChill = windchill(newTemperature, newSpeed);
// chill.innerHTML += windChill.toFixed() + `&deg;F`;


const currentDesc = document.getElementById('description');

const div = document.querySelector('.windchill');

const banner = document.getElementById("banner");



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=20.50790&lon=-86.94813&units=imperial&APPID=61a0af6c0abff327e78c6ce5bfbb578c";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
            displayForecast(data.list);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {

    const prompt = document.getElementById('prompt');
    prompt.innerHTML = `Maximum Temperature:  ${data.list[0].main.temp_max.toFixed(0)}&deg;F`;

    document.querySelector('.close').addEventListener('click', function () {
        banner.style.display = "none";
    });


    const windchillContainer = document.createElement('div');
    windchillContainer.setAttribute('class', 'firstContainer');

    const place = document.createElement('h2');
    place.innerHTML = `${data.city.name}, ${data.city.country}`;

    /////////////////////////////////////////////////////

    const weatherTemp = document.createElement('div');
    weatherTemp.setAttribute('class', 'weatherTemp');

    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "weather");
    weatherIcon.setAttribute('width', '50px');
    weatherIcon.setAttribute('height', '50px');
    weatherIcon.setAttribute('loading', 'lazy');

    const temperature = document.createElement('h1');
    temperature.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;F`;
    weatherTemp.append(weatherIcon, temperature);

    ////////////////////////////////////////////////////

    const weatherMain = document.createElement('div');
    weatherMain.setAttribute('class', 'weatherMain');

    const p1 = document.createElement('p');
    p1.innerHTML = `${data.list[0].weather[0].main} (${data.list[0].weather[0].description})`;

    const humidity = document.createElement('span');
    humidity.setAttribute('class', 'moreInfo');
    humidity.innerHTML = ` Humidity: ${data.list[0].main.humidity}%`;
    weatherMain.append(p1, humidity);
    // currentDesc.innerHTML = `- ${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
    windchillContainer.append(place, weatherTemp, weatherMain);
    div.appendChild(windchillContainer);



    //FORECAST FOR 1 DAYS

}

////////////////////////////////////////////////////////////////////////

window.addEventListener('scroll', function () {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        banner.classList.add('banner-fixed');
    } else {
        banner.classList.remove('banner-fixed');
    }
});


function displayForecast(data) {

    const allDates = [];

    var today = new Date();

    // Copy today's date and add one day to it
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Get the year, month, and day of the month for tomorrow's date
    var year = tomorrow.getFullYear();
    var month = tomorrow.getMonth() + 1; // Month is zero-indexed, so we add 1
    var day = tomorrow.getDate();

    // Format the date as yyyy-mm-dd
    var tomorrowFormatted = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

    var formattedTime = "15:00:00";

    for (let i = 0; i < data.length; i++) {
        const lists = data[i];
        allDates.push(lists.dt_txt);
    }

    const indexOfForecast = allDates.indexOf(tomorrowFormatted + " " + formattedTime);
    const forecastContainer = document.createElement('div');
    forecastContainer.setAttribute('class', 'forecastContainer');


    const heading = document.createElement('h1');
    heading.innerHTML = `1-day forecast: <br>${data[indexOfForecast].dt_txt.slice(0, 10)} @ ${data[indexOfForecast].dt_txt.slice(11, 19)}`;

    // const section = document.createElement('section');

    const section = document.createElement('section');
    section.setAttribute('class', 'forecastSection');

    const fcDiv = document.createElement('div');
    fcDiv.setAttribute('class', 'fcDiv');

    const forecastIcon = document.createElement('img');
    const icon = `https://openweathermap.org/img/w/${data[indexOfForecast].weather[0].icon}.png`
    forecastIcon.setAttribute('src', icon);
    forecastIcon.setAttribute('alt', "forecast-image");
    forecastIcon.setAttribute('width', '50px');
    forecastIcon.setAttribute('height', '50px');
    forecastIcon.setAttribute('loading', 'lazy');

    const dayTemp = document.createElement('h1');
    dayTemp.innerHTML = `${data[indexOfForecast].main.temp.toFixed(0)}&deg;F`;

    const upper = data[indexOfForecast].weather[0].description;
    const dayDesc = document.createElement('p');
    dayDesc.innerHTML = `${data[indexOfForecast].weather[0].main} (${upper.charAt(0).toUpperCase() + upper.slice(1)})`;

    fcDiv.append(forecastIcon, dayTemp);
    section.append(fcDiv, dayDesc);
    forecastContainer.append(heading, section);
    document.querySelector('#forecast-container').appendChild(forecastContainer);
}