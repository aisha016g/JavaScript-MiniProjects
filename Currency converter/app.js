const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");

        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Update country flag
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Update exchange rate
const updateExchangeRate = async () => {
    let amt = document.querySelector(".amount input");
    let amtVal = amt.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amt.value = "1";
    }

    let from = fromCurr.value.toLowerCase();
    let to = toCurr.value.toLowerCase();

    const URL = `${BASE_URL}/${from}.json`;

    try {
        let response = await fetch(URL);
        let data = await response.json();

        let rate = data[from][to];

        let finalAmount = (amtVal * rate).toFixed(2);

        msg.innerText =
            `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.log(error);
        msg.innerText = "Unable to fetch exchange rate.";
    }
};

// Button click
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Initial load
window.addEventListener("load", () => {
    updateExchangeRate();

    updateFlag(fromCurr);
    updateFlag(toCurr);
});