const variable = "Hello, World!";
console.log(variable);
alert(variable);
document.body.style.backgroundColor = "#f0f0f0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "#333";
document.body.style.padding = "20px";
document.body.style.textAlign = "center";

const heading = document.createElement("h1");
heading.textContent = variable;
document.body.appendChild(heading);
const paragraph = document.createElement("p");
paragraph.textContent = "This is a sample paragraph.";
document.body.appendChild(paragraph);
const button = document.createElement("button");

button.textContent = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.marginTop = "20px";
button.onclick = function() {
  alert("Button Clicked!");
};
document.body.appendChild(button);

const footer = document.createElement("footer");    
footer.textContent = "© 2024 My Website";
footer.style.marginTop = "40px";
footer.style.fontSize = "14px";
footer.style.color = "#777";
document.body.appendChild(footer);
footer.style.borderTop = "1px solid #ccc";
footer.style.paddingTop = "10px";
footer.style.marginTop = "40px";
footer.style.fontSize = "14px";
footer.style.color = "#777";
document.body.appendChild(footer);

try{
 //Código de conexión a la API
}
catch(error){
 console.log(error)
}

const apiUrl = "https://api.example.com/data";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    } 
    return response.json();
  })
