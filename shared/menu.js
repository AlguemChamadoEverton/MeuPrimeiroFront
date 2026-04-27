const nav_buttons = document.getElementsByClassName("nav_button");
let search_result = document.getElementsByClassName("results");
let search_users = document.getElementById("search_user_global;")

search_users.addEventListener("input", searchUsers)

for (let i = 0; i < nav_buttons.length; i++){
    let value = nav_buttons[i];
    console.log(value.style.color);
    if(value.style.color !== "rgb(30, 144, 255)"){
        value.addEventListener("mouseover", menuHoverChangeColor);
        value.addEventListener("mouseleave", menuBackToDefault)
    }
}

export async function searchUsers(event) {
    let input = event.currentTarget.length;
    if (input >= 3) {
        const url = "http://localhost:5255/";
        //Lança a query pro backend, para cada resultado do meu json criar um elemento div, se não tiver nenhum, retorna cant find
        const response = await fetch(`${url}users`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": input.value.toString(),
            })

        })
        if(response.ok){
            let data = await response.json();
            data.users.forEach{
                
            }
        }
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