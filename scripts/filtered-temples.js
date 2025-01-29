const modification = new Date(document.lastModified);

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML += modification;

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');
hamburger.addEventListener('click', function () {
    document.body.classList.toggle('show');
})

document.querySelector('#currentyear').innerHTML += `${new Date().getFullYear()}`;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bacolod Philippines Temple",
        location: "Bacolod Airport Access Road",
        dedicated: "2021, December, 11",
        area: 26700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-24089.jpg"
      },
      {
        templeName: "Oakland California Temple",
        location: "Oakland, California",
        dedicated: "1962, May, 26",
        area: 80157,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-4999.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2001, November, 16",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5151.jpg"
      },
    // Add more temple objects here...
];

const main = document.querySelector('.main');
const title = document.querySelector('#title');

function displayTemple(temples) {
    temples.forEach((t) => {
        const templeFigure = document.createElement('figure');
        const templeName = document.createElement('h2');
        const templeInfo = document.createElement('div');
        const templeImage = document.createElement('img');
    
        templeName.textContent = t.templeName;
        templeInfo.innerHTML += `<p>Location: ${t.location}</p>
                                                        <p>Decidated: ${t.dedicated}</p>
            <p>Size: ${ t.area } sq ft</p>`;
        templeImage.setAttribute('src', t.imageUrl);
        templeImage.setAttribute('alt', t.templeName);
        templeImage.setAttribute('loading', 'lazy');
    
        templeFigure.append(templeName, templeInfo, templeImage);
        main.appendChild(templeFigure);

    })
}

function clearMain() {
    main.innerHTML = '';
}

document.querySelector('#large').addEventListener('click', (e) => {
    const filteredTemple = temples.filter((t) => t.area > 90000);
    clearMain();
    title.innerHTML = e.target.textContent;
    displayTemple(filteredTemple);
})

document.querySelector('#small').addEventListener('click', (e) => {
    const filteredTemple = temples.filter((t) => t.area < 10000);
    clearMain();
    title.innerHTML = e.target.textContent;
    displayTemple(filteredTemple);
})

document.querySelector('#new').addEventListener('click', (e) => {
    const filteredTemple = temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000);
    clearMain();
    title.innerHTML = e.target.textContent;
    displayTemple(filteredTemple);
})

document.querySelector('#old').addEventListener('click', (e) => {
    const filteredTemple = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
    clearMain();
    title.innerHTML = e.target.textContent;
    displayTemple(filteredTemple);
})

document.querySelector('#home').addEventListener('click', (e) => {
    clearMain();
    title.innerHTML = e.target.textContent;
    displayTemple(temples);
})

displayTemple(temples);  