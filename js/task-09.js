function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 

const buttonChange = document.querySelector(".change-color");
const span =  document.querySelector(".color")

buttonChange.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}); 