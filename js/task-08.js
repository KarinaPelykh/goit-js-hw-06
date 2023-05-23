const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

const {elements: {email, password }} = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert(`Bсі поля повинні бути заповнені!`)
    }
    const userInfo = {
      Login: email.value,
      Password: password.value 
    }
    console.log(userInfo);
  event.currentTarget.reset();
}) 