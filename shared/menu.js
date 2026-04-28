const nav_buttons = document.getElementsByClassName("nav_button");
let search_result = document.getElementsByClassName("results");
let search_users = document.getElementById("search_user_global");


search_users.addEventListener("input", searchUsers)

for (let i = 0; i < nav_buttons.length; i++){
    let value = nav_buttons[i];
    if(value.style.color !== "rgb(30, 144, 255)"){
        value.addEventListener("mouseover", menuHoverChangeColor);
        value.addEventListener("mouseleave", menuBackToDefault)
    }
}

export async function searchUsers(event) {
    let input = event.currentTarget;
    let result_box = document.getElementById("search_result");
    if (input.value.length > 2) {
        let nameSearched = input.value.toString()
        result_box.style.visibility = "visible";
        const url = "http://localhost:5255/";
        //Lança a query pro backend, para cada resultado do meu json criar um elemento div, se não tiver nenhum, retorna cant find
        const response = await fetch(`${url}users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": nameSearched,
            })
        })
        let data = await response.json();
        if(response.ok){
            data.users.forEach(user => {
                //quero que crie uma string com base no template e complete as informações
            })
        }
        else if(response.status === 404){
            let cNameSearched = document.getElementById("tpl_not_found").content.cloneNode(true);
            cNameSearched.children[0].textContent = `Can't find "${nameSearched}"`
            result_box.append(cNameSearched);
        }
        else{
            console.log("AAAAAAAAAAAAAAAAAAAAA");
        }
    }
    else{
        result_box.style.visibility = "hidden";
    }
}
export function menuHoverChangeColor(event){
    let hoveredElement = event.currentTarget;
    hoveredElement.style.backgroundColor = "rgba(39,39,39,0.29)"
}
export function menuBackToDefault(event){
    let element = event.currentTarget;
    element.style.backgroundColor = "rgba(255,255,255,0)";
}