// const bodyChildren = Array.from(document.body.children);

const services = {
    "available": [
        "Barber",
        "Painter",
        "Caterer",
        "Launderer",
        "Deep Cleaner",
        "Hairdresser",
        "Artist",
        "Graphics Designer",
        "Driver",
        "Veterinary Doctor",
        "Home Tutor",
        "Plumber",
        "Electrician",
        "Carpenter",
        "Photographer",
        "Event Planner"
    ],
    "comingSoon": [
        "Housekeeping",
        "Grocery Delivery",
        "Personal Trainer",
        "Fitness Coaching",
        "Tailoring",
        "Tech Support",
        "Car Wash",
        "Babysitting",
        "Maid Service",
        "Massage Therapy"
    ]
};

const mySidenav = document.getElementById("mySidenav");
const serviceUnorderedList = document.getElementById('serviceUnorderedList');
const comingSoon = document.getElementById('comingSoonUnorderedList');



document.getElementById('sideMenu').addEventListener('click', () => {
    mySidenav.style.width = '370px';
    document.body.style.overflowY = "hidden";
    document.querySelector('.just').style.display = "block";
    document.querySelector('.close').style.display = "flex";

    services.available.forEach((service) => {
        const serviceList = document.createElement('li');
        const serviceLinks = document.createElement('a');
        serviceLinks.textContent = service;
        serviceLinks.setAttribute('href', '#');
        serviceLinks.setAttribute('class', 'serviceNames');
    
        serviceList.appendChild(serviceLinks);
        serviceUnorderedList.appendChild(serviceList);
        document.getElementById('serviceContainer').append(serviceUnorderedList);
    });
    
    services.comingSoon.forEach((service) => {
        const comingSoonList = document.createElement('li');
        // const comingSoonLinks = document.createElement('a');
        comingSoonList.textContent = service;
        comingSoonList.setAttribute('class', 'serviceNames');
    
        comingSoon.appendChild(comingSoonList);
        document.getElementById('serviceContainer').append(comingSoon);
    });

});

document.querySelector('.close').addEventListener('click', () => {
    mySidenav.style.width = '';
    document.body.style.overflowY = "";
    document.querySelector('.just').style.display = "";
    document.querySelector('.close').style.display = "";
    serviceUnorderedList.innerHTML = '';
    comingSoon.innerHTML = '';

});


// Apply styles to all elements

export default services;