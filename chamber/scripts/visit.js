let daysSince = Number(window.localStorage.getItem("lastVisited-ls"));

const timestamp = Date.now();
const dayInMilliseconds = 24 * 60 * 60 * 1000; 
const dayInteger = Math.floor(timestamp / dayInMilliseconds);

if (daysSince !== 0)
{
    daysSince -= dayInteger;
 

    
    document.getElementById("visits").textContent = `Your last visit was ${daysSince} days ago`;
    

}
else
{
    document.getElementById("visits").textContent = "No days have passed since your last visit";
}
localStorage.setItem("lastVisted-ls", dayInteger);