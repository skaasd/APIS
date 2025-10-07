const climasSection = document.querySelector(".climas");
const apiURL = "https://api.gael.cloud/general/public/clima";

async function getClimas() {
  const resp = await fetch(apiURL);
  const data = await resp.json();
  console.log(data);
}

async function mostrarClimas() {
  const climas = await getClimas();
  let template = "";

  climas.forEach((clima) => {
    template += `
        <div class="clima">
            <h3>${clima.Ciudad}</h3>
            <p>Temperatura: ${clima.Temperatura} °C</p>
            <p>Humedad: ${clima.Humedad} %</p>
            <p>Condición: ${clima.Condicion}</p>
        </div>
        `;
  });
  climasSection.innerHTML = template;
}
mostrarClimas();
