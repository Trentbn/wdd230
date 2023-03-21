const tempVariable = document.querySelector('#tempature');
const windVariable = document.querySelector("#wind");
const chillVariable = document.getElementById("chill");
let tempature = 0;
let wind = 0;
const weatherIcon = document.querySelector('#weatherIcon');
const weatherDescription = document.querySelector('#weatherDescription');







const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=7a29e1e1e36d8ff58c0e10b3216ebf8c';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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

  tempVariable.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  tempature = weatherData.main.temp;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  weatherDescription.textContent = description;
  windVariable.textContent = weatherData.wind.speed.toFixed(0);
  wind = weatherData.wind.speed;

  if (tempature >= 50 || wind < 3) {
    chillVariable.textContent = "N/A";
  }
  
  else {
    chillVariable.textContent = WindChillCalculator(tempature, wind);
    
  }
  
}

function WindChillCalculator(tempature, windspeed) 
{
  windChill = 
  35.74 + (0.6215 * tempature) - (35.75 * windspeed ** 0.16) + (0.4275 * tempature * windspeed ** 0.16);
  return Math.round(windChill)
}
