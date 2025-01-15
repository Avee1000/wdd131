const modification = new Date(document.lastModified);

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML += modification;

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('nav');
hamburger.addEventListener('click', function () {
    document.body.classList.toggle('show');
})

document.querySelector('#currentyear').innerHTML += `${new Date().getFullYear()}`;