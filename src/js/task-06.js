const input = document.querySelector("#validation-input");



input.addEventListener("blur", () => {
 
    const result = input.value
    if ( result.length > 6) {
         input.classList.add("invalid")
    }
    if (result.length === 6) {
        input.classList.add("valid")
         input.classList.remove("invalid")
    }
});
