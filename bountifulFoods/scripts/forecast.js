let tempVariable1 = document.querySelector('#tempature1');
let weatherIcon1 = document.querySelector('#weatherIcon1');
let weatherDescription1 = document.querySelector('#weatherDescription1');
let tempVariable2 = document.querySelector('#tempature2');
let weatherIcon2 = document.querySelector('#weatherIcon2');
let weatherDescription2 = document.querySelector('#weatherDescription2');
let tempVariable3 = document.querySelector('#tempature3');
let weatherIcon3 = document.querySelector('#weatherIcon3');
let weatherDescription3 = document.querySelector('#weatherDescription3');


const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=7a29e1e1e36d8ff58c0e10b3216ebf8c';


async function apiFetch() {
    try {
      const response = await fetch(url2);
      if (response.ok) {
        const data2 = await response.json();
        console.log(data2);
        //displayResults(data);
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

  tempVariable1.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  tempVariable2.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  tempVariable3.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;


  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", description);
  weatherDescription.textContent = description;
  humidity.textContent = `${weatherData.main.humidity}% Humidity`;

}