const nav_buttons = document.getElementsByClassName("nav_button");
let search_users = document.getElementById("search_user_global");
const url = "http://localhost:5255/";

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
    let resultBox = document.getElementById("search_result");
    let searchLoader = document.getElementById("search_loader");
    if (input.value.length > 2) {
        let nameSearched = input.value.toString()
        resultBox.style.visibility = "visible";
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
            searchLoader.style.visibility = "hidden"
            resultBox.textContent = '';
            data.users.forEach(user => {
                //quero que crie uma string com base no template e complete as informações
                let searchResult = document.getElementById("tpl_ok").content.cloneNode(true);
                searchResult.children[1].textContent = `${user.Username}`;
                resultBox.append(searchResult);
            })
        }
        else if(response.status === 404){
            searchLoader.style.visibility = "hidden"
            let cNameSearched = document.getElementById("tpl_not_found").content.cloneNode(true);
            cNameSearched.children[0].textContent = `Can't find "${nameSearched}"`
            resultBox.textContent = '';
            resultBox.append(cNameSearched);
        }
        else{
            console.log("AAAAAAAAAAAAAAAAAAAAA");
        }
    }
    else{
        resultBox.style.visibility = "hidden";
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