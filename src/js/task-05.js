const onIdInput = document.querySelector("#name-input");
const onTitleName = document.querySelector("#name-output");
console.log(onTitleName);

onIdInput.addEventListener("input", (event) => {

  onTitleName.textContent = event.currentTarget.value;
  

});

onIdInput.addEventListener("input", (event) => {
  if (onIdInput.value === "") { 
   onTitleName.textContent = "Anonimus"
  } 
});

