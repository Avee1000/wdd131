const table = document.getElementById('pricing');
const url = "https://avee1000.github.io/wdd230/personal/data/prices.json";



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayPrices(data.rentals);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayPrices(rentals){

    rentals.forEach((rental) => {
         
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `<td><strong> ${rental.type} </strong></td>
                                                    <td>${rental.maxPersons}</td>
                                                    <td>$${rental.reservationHalfDay}</td>
                                                    <td>$${rental.reservationFullDay}</td>
                                                    <td>$${rental.walkInHalfDay}</td>
                                                    <td>$${rental.walkInFullDay}</td>`;          


        table.appendChild(tableRow);
    });
}