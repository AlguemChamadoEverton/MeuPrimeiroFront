import Cookies from "https://esm.sh/universal-cookie";

export default async function loginFetch() {

    const cookies = new Cookies();
    const email = document.getElementById("email_input").value.toLowerCase();
    const pass = document.getElementById("pass_input").value;
    const url = "http://localhost:5255/";

    if (!(email === "" || pass === "")) {
        const response = await fetch(`${url}login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Email": email,
                "PasswordHash": pass
            })
        })
        if (response.ok) {
            const data = await response.json();
            const key = data.toString();
            cookies.set("jwt_authorization", key);
            window.location = "/MeuPrimeiroFront/register/register.html";
        } else if(response.status === 400){
            let incorrect = document.getElementById("incorrect");
            incorrect.removeAttribute("hidden");
        }
            else {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
}
function button_change() {
    if(email_input.value.length > 0 && pass_input.value.length > 0){
        loginButton.style.backgroundColor = "#008bfd";
    }
    else{
        loginButton.style.backgroundColor = "#e2e4e7";
    }
}

const loginButton = document.getElementById("login_button");
let email_input = document.getElementById("email_input");
let pass_input = document.getElementById("pass_input");

email_input.addEventListener("input", button_change);
pass_input.addEventListener("input", button_change);

if (loginButton) {
    loginButton.addEventListener("click", async (event) => {
        event.preventDefault();
        await loginFetch();
    });
}