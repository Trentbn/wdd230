const tempVariable = document.getElementById('tempature').innerHTML;
const temp = parseInt(tempVariable);
const windVariable = document.getElementById('wind').innerHTML;
const wind = parseInt(windVariable);





function WindChillCalculator(tempature, windspeed) {
    windChill = 
    35.74 + (0.6215 * tempature) - (35.75 * windspeed ** 0.16) + (0.4275 * tempature * windspeed ** 0.16);
    return Math.round(windChill)
}

if (temp >= 50) {
    chill.textContent = "N/A";
}

else if (wind < 3) {
    chill.textContent = "N/A";
}

else {
    chill.textContent = WindChillCalculator(temp, wind);
    
}

