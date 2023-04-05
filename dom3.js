const $card = document.querySelector(".card");
console.log($card.classList);
// clasList lo cambia a un arreglo en vez de solo el selector
$card.classList.add("rotate-45");
$card.classList.remove("rotate-45");
// palanca toggle hace lo contrario a lo que tiene
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
//puedes agregar varias con "",
$card.classList.add("opacity-80", "sepia");
