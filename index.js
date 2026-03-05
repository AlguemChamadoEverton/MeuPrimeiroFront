async function loginFetch(){

    const email = document.getElementById("email_input").value.toLowerCase();
    const pass = document.getElementById("pass_input").value

    if (!(email === "" || pass.value === "")){
        const response = await fetch("http://localhost:8080")
    }
}