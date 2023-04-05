const file = "fruitData.json";

async function getFruitData() {
    const response = await fetch(file);
    const data = await response.json();
   // console.table(data.prophets);
   displayFruits(data);
   return data;
}

const data = getFruitData();

const displayFruits = (fruits) => {
    const selection1 = document.querySelector("select#fruit-selection1");
    const selection2 = document.querySelector("select#fruit-selection2");
    const selection3 = document.querySelector("select#fruit-selection3");

    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        option.setAttribute("value", fruit.name);
        option.setAttribute("id", "option1");
        option.textContent = fruit.name

        let option2 = document.createElement("option");
        option2.setAttribute("value", fruit.name);
        option2.setAttribute("id", "option2");
        option2.textContent = fruit.name

        let option3 = document.createElement("option");
        option3.setAttribute("value", fruit.name);
        option3.setAttribute("id", "option3");
        option3.textContent = fruit.name

        selection1.appendChild(option);
        selection2.appendChild(option2);
        selection3.appendChild(option3);
    });
}

const form = document.querySelector("#fruitForm");
const display = document.querySelector("#orderInfo");

form.addEventListener("submit", function(event) 
{
    event.preventDefault();

    const nameInput = document.querySelector("#nameInput").value;
    const lnameInput = document.querySelector("#lnameInput").value;
    const nameVar = document.querySelector("#name");
    
    const phoneInput = document.querySelector("#phoneInput").value;
    const phoneVar = document.querySelector("#phone");

    const emailInput = document.querySelector("#emailInput").value;
    const emailVar = document.querySelector("#email");

    const option1 = document.querySelector("#fruit-selection1").value;
    const option2 = document.querySelector("#fruit-selection2").value;
    const option3 = document.querySelector("#fruit-selection3").value;
    const optionVar1 = document.querySelector("#selection1");
    const optionVar2 = document.querySelector("#selection2");
    const optionVar3 = document.querySelector("#selection3");
    const instructionVar = document.querySelector("#instructions");
    const instructionInput = document.querySelector("#instructionsInput").value;
    
    

    optionVar1.innerHTML = option1;
    optionVar2.innerHTML = option2;
    optionVar3.innerHTML = option3;


    
    
    
    nameVar.innerHTML = `${nameInput} ${lnameInput}`;
    phoneVar.innerHTML = phoneInput;
    emailVar.innerHTML = emailInput;

    instructionVar.innerHTML = `Special Instructions: ${instructionInput}`;

    const now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var seconds = now.getSeconds();
    
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    const dateVar = document.getElementById("date");
    dateVar.innerHTML = `Date submitted: ${fulldateUK}`;




    display.classList.add("show");
    display.classList.remove("hide");


})