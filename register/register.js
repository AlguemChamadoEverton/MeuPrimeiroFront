export default async function registerFetch() {

    const email = document.getElementById("email_input");
    let pass = document.getElementById("pass_input");
    let user = document.getElementById("user_input");
    const url = "http://localhost:5255/";
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    const userRegex = /^[0-9A-Za-z]{6,16}$/;
    let emailIsValid = emailRegex.test(email.value.toLowerCase());
    let passIsValid = (pass.value.length > 5 && pass.value.length < 21);
    let userIsValid = userRegex.test(user.value)

    if (emailIsValid && passIsValid && userIsValid) {
        const response = await fetch(`${url}register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": user,
                "Email": email,
                "PasswordHash": pass
            })
        })
        if (response.ok) {
            window.location = "/MeuPrimeiroFront/login/login.html";
        } else if(response.status === 400){
            console.log(await response.json());
        }
            else {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
    else {
        let emailInvalid = document.getElementById("emailInvalid");
        let passInvalid = document.getElementById("passInvalid");
        let userInvalid = document.getElementById("userInvalid");
        if(!userIsValid){
            userInvalid.removeAttribute("hidden");
            email.style.border = "10px solid red"
        }
        if(!emailIsValid){
            emailInvalid.removeAttribute("hidden")
            email.style.borderWidth = "thick"
            email.style.border = "red";
        }
        if(!passIsValid){
            passInvalid.removeAttribute("hidden")
            email.style.borderWidth = "thick"
            email.style.border = "red";
        }
    }
}
function button_change() {
    if(email_input.value.length > 0 && pass_input.value.length > 0 && user_input.value.length > 0){
        loginButton.style.backgroundColor = "#008bfd";

        loginButton.addEventListener("mouseover", () =>
        {
            while() {
                loginButton.style.backgroundColor = "#63b5ff";

            }
        });
    }
    else{
        loginButton.style.backgroundColor = "#acb1b5";
    }
}

const loginButton = document.getElementById("login_button");
let email_input = document.getElementById("email_input");
let pass_input = document.getElementById("pass_input");
let user_input = document.getElementById("user_input");

email_input.addEventListener("input", button_change);
pass_input.addEventListener("input", button_change);
user_input.addEventListener("input", button_change);

if (loginButton) {
    loginButton.addEventListener("click", async (event) => {
        event.preventDefault();
        await registerFetch();
    });
}