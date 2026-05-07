import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization');

const response = await fetch(`${url}workouts`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
})
const noActivity = document.getElementById("no_activity");
if(response.ok){
    let data = await response.json();
    data.workouts.forEach(workout => {
        let workout_template = document.getElementById("workout").content.cloneNode(true);
        workout_template.children[0].children[]
    })
}
else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}