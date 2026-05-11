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
        workout_template.querySelector('.log_profile_pic').src = workout.image;
        workout_template.querySelector('#workout_log_username').textContent = workout.username;
        workout_template.querySelector('.workout_data').textContent = workout.data;
        workout_template.querySelector('#workout_routine_name').textContent = workout.name;
        workout_template.querySelector('#duration_value').textContent = workout.duration;
        workout_template.querySelector('#volume_value').textContent = workout.volume;
        workout_template.querySelector('#records_value').textContent = workout.records;
        let exercises = workout.exercises;
        let m = exercises.length < 3 ? exercises.length : 3; 
        for(let i = 0; i < m; i++){
            workout_template.querySelector('.exercise_img')
            workout_template.querySelector('.exercise_text')
            workout_ //estava um pouco cansado travei, mas o pensamento é de que quero fazer o resumo com tres exercicios do workout,
            // mas preciso clonar os elementos que geram o exercise e não sei como fazer isso
        }
        
        workout.exercises.forEach(exercise => {
            workout_template.querySelector('#exercises_summary')
            workout_
        })
    });
}
else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}