import Cookies from "https://esm.sh/universal-cookie";
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
let incorrect = document.getElementById("incorrect");

export default async function loginFetch() {
    const cookies = new Cookies();
    const url = "http://localhost:5255/";
    let emailIsValid = emailRegex.test(email_input.value.toLowerCase());
    let passIsValid = (pass_input.value.length > 5 && pass_input.value.length < 21);
    if (emailIsValid && passIsValid) {
        const response = await fetch(`${url}login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Email": email_input.value,
                "PasswordHash": pass_input.value.toLowerCase()
            })
        })
        if (response.ok) {
            const data = await response.json();
            const key = data.toString();
            cookies.set("jwt_authorization", key);
            window.location = "/MeuPrimeiroFront/index/index.html";
        } else if(response.status === 400){
            console.log(await response.json())
        }
            else {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
    else{
        incorrect.removeAttribute("hidden");
    }
}
async function login(event){
    event.preventDefault();
    await loginFetch();
}
function registerButtonMouseIn(){
    loginButton.style.backgroundColor = "#63b5ff";
}
function registerButtonMouseOut(){
    loginButton.style.backgroundColor = "#0084f0";
}

function button_change() {
    if(email_input.value.length > 0 && pass_input.value.length > 0){
        loginButton.style.backgroundColor = "#0085f2";
        loginButton.addEventListener("mouseover", registerButtonMouseIn);
        loginButton.style.cursor = "pointer";
        loginButton.addEventListener("mouseout", registerButtonMouseOut);
        loginButton.addEventListener("click", login);
    }
    else{
        loginButton.removeEventListener("mouseover", registerButtonMouseIn);
        loginButton.removeEventListener("mouseout", registerButtonMouseOut)
        loginButton.style.backgroundColor = "#acb1b5";
        loginButton.style.cursor = "";
        loginButton.removeEventListener("click", login);
    }
}

const loginButton = document.getElementById("login_button");
let email_input = document.getElementById("email_input");
let pass_input = document.getElementById("pass_input");

email_input.addEventListener("input", button_change);
pass_input.addEventListener("input", button_change);

