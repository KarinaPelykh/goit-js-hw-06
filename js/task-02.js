const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let listProduct ='';
ingredients.forEach(element => {
const newEl = document.createElement("li");
newEl.classList.add("item")
document.querySelector("#ingredients").append(newEl);
newEl.textContent = element
const ptoduct = `<li class="item"> ${element} </li>`;
  listProduct += ptoduct;
});

;
