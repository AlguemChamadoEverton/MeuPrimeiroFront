const nav_buttons = document.getElementsByClassName("nav_button");

for (let i = 0; i < nav_buttons.length; i++){
    let value = nav_buttons[i];
    console.log(value.style.color);
    if(value.style.color !== "rgb(30, 144, 255)"){
        value.addEventListener("mouseover", menuHoverChangeColor);
        value.addEventListener("mouseleave", menuBackToDefault)
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