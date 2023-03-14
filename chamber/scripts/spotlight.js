const file = "data.json";

async function getBusinessData() {
    const response = await fetch(file)
    const data = await response.json()
   // console.table(data.prophets);
   displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = (businesses) => {
    const spotlights = document.getElementById("spotlights");
    let i = 1;

    businesses.forEach((business) => {

        let spotlight = document.createElement("div");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let logo = document.createElement("img");
        let site = document.createElement("a");
        let membership = document.createElement("p");
        

        h2.textContent = business.name;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone Number: ${business.phone}`;
        site.textContent = business.website;
        site.setAttribute("href", business.website)
        membership.textContent = `${business.membershipLevel} Member`;

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        //logo.setAttribute('width', '340');
       // logo.setAttribute('height', '440');
       
       if (business.membershipLevel === "Gold")
       {
        
        spotlight.appendChild(h2);
        spotlight.appendChild(membership)
        spotlight.appendChild(logo);
        spotlight.appendChild(address);
        spotlight.appendChild(phone);
        spotlight.appendChild(site);
        spotlight.setAttribute("id", `spotlight${i}`)
        spotlights.appendChild(spotlight);
        i ++;
       }

    }
)}
