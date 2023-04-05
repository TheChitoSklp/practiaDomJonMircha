const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));
// accede a las propiedades style de .link-dom
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "10px";
console.log($linkDOM.style);

//VariablesCSS - Custom Properties CSS
// se puede declarar 2  variables usando ,
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;
// solo lo establece
$html.style.setProperty("--dark-color", "grey");
// aqui le dice que se var darkcolor ahora tenga las propiedades actualizadas
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//se las aplica
$body.style.backgroundColor = varDarkColor;
