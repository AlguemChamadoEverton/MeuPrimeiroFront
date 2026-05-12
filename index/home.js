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
            workout_template.querySelector('.exercise_img');
            workout_template.querySelector('.exercise_text');
            let exercise_template = document.getElementsByClassName('.exercise')[0].cloneNode(true);
            exercise_template.querySelector('.exercise_img').src = exercises[i].image;
            exercise_template.querySelector('.exercise_text').textContent = exercises[i].name;
            workout_template.appendChild(exercise_template);
        }
        if(exercises.length > 3){
            workout_template.querySelector('#exercises_more').display = "";
        }
        //Acrescentar depois o chat (vou precisar de mais um endpoint)
        document.getElementsByClassName("home")[0].appendChild(workout_template);
    });
}
else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}