async function loginFetch(){

    const email = document.getElementById("email_input").value.toLowerCase();
    const pass = document.getElementById("pass_input").value;
    const url = "http://localhost:5255/";

    if (!(email === "" || pass === "")){
        const response = await fetch(`${url}login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                "Email": email,
                "PasswordHash": pass
            }
        }).then(response => response.json());
        if(response.ok){
            console.log(response);
        }
        console.log('cuuuuuuuuuuuuuuuuuuuuuuu');
    }
}