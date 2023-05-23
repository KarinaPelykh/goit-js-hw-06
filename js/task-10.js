function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector("#controls");
const input = container.querySelector("input");
const buttonCreate = container.querySelector('button[data-create]');
const buttonDestroy = container.querySelector('button[data-destroy]');
const boxs = document.querySelector("#boxes");

let firstBoxs = 30;
let value = firstBoxs;

const createBoxes = (event) =>{
  const valueinput = input.value;
  let arrBoxCreated = [];
  
  for (let i = 1; i <= valueinput; i += 1){
  const boxCreate = document.createElement("div");
  boxCreate.classList.add("box");
  boxCreate.style.width = firstBoxs +`px`;
 boxCreate.style.height = firstBoxs + `px`;
boxCreate.style.backgroundColor = getRandomHexColor()
   
    arrBoxCreated.push(boxCreate);
 
    boxs.append(...arrBoxCreated);
    firstBoxs += 10;
  }
  
}



const destroyBoxes = (event) => {
  boxs.innerHTML = "";
  input.value = ""
  firstBoxs = value;
 }

buttonCreate.addEventListener("click",createBoxes)
buttonDestroy.addEventListener("click",destroyBoxes)







