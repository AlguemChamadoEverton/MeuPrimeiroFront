import Cookies from "universal-cookie";

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
            console.log(response.json());
            cookies.set("jwt_authorization",)
        } else {
            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        }
    }
}