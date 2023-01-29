function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("open");    
}

const x = document.getElementById("hamburger");
x.onclick = toggleMenu;

document.getElementById('currentyear').innerHTML = new Date().getFullYear();
document.getElementById('lastupdated').innerHTML = new Date(document.lastModified);