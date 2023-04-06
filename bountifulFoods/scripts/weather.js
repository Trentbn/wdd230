let tempVariable = document.querySelector('#tempature');
let weatherIcon = document.querySelector('#weatherIcon');
let weatherDescription = document.querySelector('#weatherDescription');
let humidity = document.querySelector("#humidity");







const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=7a29e1e1e36d8ff58c0e10b3216ebf8c';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;


  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  weatherDescription.textContent = description;
  humidity.textContent = `${weatherData.main.humidity}% Humidity`;

}