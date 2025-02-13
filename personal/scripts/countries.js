const url = "https://countriesnow.space/api/v0.1/countries/";


async function getCountries() {
    const result = await fetch(url);
    const countrydata = await result.json();
    return countrydata.data;
}
const lo = document.querySelector("#countries");
const city = document.querySelector("#city");


async function displayCountry() {
    const country = await getCountries();
    country.forEach((c) => {
        const option = document.createElement("option");
        option.value = c.country;
        option.innerHTML = c.country;
        lo.appendChild(option);
    })
};

lo.addEventListener("change", () => {
    if (lo.value) {
        city.disabled = false;
        async function displayCity() {
            const countryCity = await getCountries();
            const list = [ ];
            for (let i = 0; i < countryCity.length; i++) {
                list.push(countryCity[i].country);
            }
            list.forEach((cityname) => {
                const cityOption = document.createElement("option");
                const chosenCountry = list.indexOf(`${lo.value}`);
                const selectedCountry = chosenCountry + 1;

                alert(`${list[chosenCountry]} `);
            });
        }
        displayCity();

    } else {
        city.disabled = true;
    }

})


displayCountry();
