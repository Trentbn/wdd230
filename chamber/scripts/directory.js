const file = "data.json";

async function getBusinessData() {
    const response = await fetch(file)
    const data = await response.json()
   // console.table(data.prophets);
   displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.cards");

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let logo = document.createElement("img");
        let site = document.createElement("a");
        

        h2.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone Number: ${business.phone}`;
        site.textContent = business.website;
        site.setAttribute("src", business.website)

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
       // logo.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(site);
        cards.appendChild(card);

    }
)}