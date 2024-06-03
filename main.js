import "./style.css";

const nombre = document.getElementById("name");
const botonEnv = document.getElementById("botonEnv");
const resultado = document.getElementById("resultado");

function mostrarNombre(nombre) {
  resultado.innerText = `Hola, ${nombre}!`;
}

botonEnv.addEventListener("click", () => {
  const nom = nombre.value;
  mostrarNombre(nom);
});
