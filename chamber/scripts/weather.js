const currentTemp = document.querySelector('#tempature');
const currentWind = document.querySelector("#wind");
const wind = parseInt(currentWind);
const temp = parseInt(currentTemp);

const weatherIcon = document.querySelector('#weatherIcon');
const weatherDescription = document.querySelector('#weatherDescription');


function WindChillCalculator(tempature, windspeed) {
    windChill = 
    35.74 + (0.6215 * tempature) - (35.75 * windspeed ** 0.16) + (0.4275 * tempature * windspeed ** 0.16);
    return Math.round(windChill)
}

if (temp >= 50 && wind < 3) {
    chill.textContent = "N/A";
}

else {
    chill.textContent = WindChillCalculator(temp, wind);
    
}




const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=7a29e1e1e36d8ff58c0e10b3216ebf8c';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(weatherData)
{
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  weatherDescription.textContent = description;
  currentWind.textContent = weatherData.wind.speed.toFixed(0);

}