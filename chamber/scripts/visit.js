let daysSince = Number(window.localStorage.getItem("lastVisited-ls"));

const timestamp = Date.now(); // Get current timestamp in milliseconds
const dayInMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
const dayInteger = Math.floor(timestamp / dayInMilliseconds); // Convert timestamp to integer representing the day

if (daysSince !== 0)
{
    daysSince -= dayInteger;
 

    
    document.getElementById("visits").textContent = `Your last visit was ${daysSince} days ago`;
    

}
else
{
    document.getElementById("visits").textContent = "No days have passed since your last visit";
}
//document.getElementById("visits").textContent = "No days have passed since your last visit";
localStorage.setItem("lastVisted-ls", dayInteger);