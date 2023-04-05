// se llaman los atributos
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 5000);
document.write("<h2>HOLA MUNDO</h2>");

console.log(document.querySelectorAll(".card")[2]);

console.log(document.documentElement.lang);
console.log(document.querySelectorAll("a"));

document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));

document.documentElement.setAttribute("lang", "en");
console.log(document.documentElement.getAttribute("lang"));

// aqui se guardan en variables
// buena practica declarar variables con $ al iniciar si
// haces referencia a atributos del dom
const $linkDOM = document.querySelector(".link-dom");
//                     atributo , valor de atributo
$linkDOM.setAttribute("target", "_blank");
//este es por seguridad y buena practica al abrir links
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Atributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
//AQUI ES CON UNA FUNCION
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

//OTRA FORMA DE HACER LO DE ACA ARRIBA ACA ES CON .
$linkDOM.dataset.description = "suscrito al jon";
console.log($linkDOM.dataset.description);
