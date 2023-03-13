let daysSince = Number(window.localStorage.getItem("lastVisited-ls"));

let now = Date.now();
let findDaysSince = now;

if (daysSince)