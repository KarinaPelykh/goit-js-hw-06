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


const createBoxes = (event) =>{
  const valueinput = input.value;
  let arrBoxCreated = [];
  let firstBoxs = 30;
  for (let i = 0; i <= valueinput; i += 1){
  const boxCreate = document.createElement("div");
  boxCreate.classList.add("box");
  boxCreate.style.width = firstBoxs +`px`;
 boxCreate.style.height = firstBoxs + `px`;
boxCreate.style.backgroundColor = getRandomHexColor()
  firstBoxs += 10;
    arrBoxCreated.push(boxCreate);
   boxs.append(boxCreate);
  }
  
}
const destroyBoxes = (event) => {
  boxs.innerHTML = "";
  input.value = ""
 }

buttonCreate.addEventListener("click",createBoxes)
buttonDestroy.addEventListener("click",destroyBoxes)







