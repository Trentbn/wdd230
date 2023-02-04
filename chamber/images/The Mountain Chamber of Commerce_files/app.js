function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");    
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;

document.getElementById('currentyear').innerHTML = new Date().getFullYear();
document.getElementById('lastupdated').innerHTML = new Date(document.lastModified);

///document.getElementById("headerDate").innerHTML = new Date();///
const dateField = document.getElementById("headerDate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
dateField.innerHTML = `<em>${fulldateUK}</em>`;