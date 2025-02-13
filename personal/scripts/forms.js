import services from "./sidenav.js";

const category = document.getElementById("category");

services.available.forEach((service) => { 
  const option = document.createElement("option");
//   option.value = service.category;
  option.textContent = service;
  category.appendChild(option);
});

services.comingSoon.forEach((service) => { 
    const option = document.createElement("option");
  //   option.value = service.category;
    option.innerHTML += service;
    category.appendChild(option);
  });