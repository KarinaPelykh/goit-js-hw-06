const input = document.querySelector("#validation-input");
const valueInput = parseInt(input.dataset.length);

input.addEventListener('blur', () => {

    const result = input.value
   
    
    if ( result.length < valueInput || result.length > valueInput) {
        input.classList.add("invalid");
    }
    else if (result.length === valueInput) {
     input.classList.remove("invalid");  
     input.classList.add("valid");
    }; 
    
});
