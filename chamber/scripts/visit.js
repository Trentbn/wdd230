let daysSince = Number(window.localStorage.getItem("lastVisited-ls"));

let now = Date.now();
let findDaysSince = now;

if (daysSince !== 0)
{
    findDaysSince -= daysSince;
    findDaysSince = Math.round(daysSince / (1000*60*60*24))
 
    if (findDaysSince > 1)
        {
            document.getElementById("visits").textContent = "${findDaysSince} days ago";
        }
}
else
{
    document.getElementById("visits").textContent = "today";
}
localStorage.setItem("lastVisted-ls", now);