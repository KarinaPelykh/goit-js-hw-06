const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients");
const arryNewEl = [];
  ingredients.forEach(element => {
  const newEl= document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = element;
    arryNewEl.push(newEl)
   console.log(newEl);
  })

arryNewEl.forEach( newEl => {
  ul.append(newEl)
});


  
