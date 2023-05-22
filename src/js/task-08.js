const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputEmail = form.querySelector('input[name="email"]');
    const inputPassword = form.querySelector('input[name="password"]');
    
    if (inputEmail.value === "" || inputPassword.value === "") {
        alert(`Bсі поля повинні бути заповнені!`)
    }
    const {elements: {email, password }} = event.currentTarget;
     console.log(`Login: ${ email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}) 