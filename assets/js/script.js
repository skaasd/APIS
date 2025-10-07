const climasSection = document.querySelector(".climas");
const apiURL = "https://api.gael.cloud/general/public/clima";
const card = document.querySelector(".card");
const apiUser = "https://jsonplaceholder.typicode.com/users";

async function getClimas() {
  const res = await fetch(apiURL);
  const climas = await res.json();
  return climas;
}

async function rederClimas() {
  const climas = await getClimas();
  let template = "";

  climas.forEach((clima) => {
    template += `
        <div class="clima">
            <h3>${clima.Estacion}</h3>
            <p>Temperatura: ${clima.Temp} °C</p>
            <p>Humedad: ${clima.Humedad} %</p>
            <p>Condición: ${clima.Estado}</p>
        </div>
        `;
  });
  climasSection.innerHTML = template;
}
rederClimas();

async function getRandomUser() {
  const res = await fetch(apiUser);
  const users = await res.json();
  return users;
}

async function renderUsers() {
  const users = await getRandomUser();
  let template = "";
  users.forEach((user) => {
    template += `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
        </div>
        `;
  });
  card.innerHTML = template;
}

renderUsers();