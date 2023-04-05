// capturando selectores en variables
const $whatisDOM = document.getElementById("que-es");
console.log($whatisDOM);
let text = `
<p>DOM significa "Modelo de Objetos del Documento" (por sus siglas en inglés, "Document Object Model"). Es una estructura de árbol que representa el contenido de un documento HTML o XML y proporciona una interfaz para interactuar con ese contenido mediante scripts (como JavaScript).</p>
<p>El DOM es esencial para el desarrollo web moderno, ya que permite a los programadores crear páginas interactivas y dinámicas que responden a las acciones de los usuarios y cambian de forma dinámica sin necesidad de recargar la página.</p>
`;
//innerText es para explorer no es canon y hace lo mismo que textContent
// $whatisDOM.innerText = text;
$whatisDOM.textContent = text;
//esta es para incertar elementos html(ya agarra los <p>) pero lo mete dentro del elemento
// <p> <p>ggggggg</p> </p> mala semantica
$whatisDOM.innerHTML = text;
// sustituye el contenedor
$whatisDOM.outerHTML = text;
