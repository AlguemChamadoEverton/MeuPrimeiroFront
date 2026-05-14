import Cookies from "https://esm.sh/universal-cookie";

const url = "http://localhost:5255/";
let cookies = new Cookies();
const token = cookies.get('jwt_authorization');

/*const response = await fetch(`${url}workouts`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
}) codigo oficial*/

const response = `
{
    "workouts": 
    [
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "12/05/2026",
            "name": "Maluquisse",
            "duration": "1h30m",
            "volume": "8000kg",
            "records": 3,
            "exercises": 
            [
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Bench Press"
                }
            ]
        },
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "13/05/2026",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "exercises": 
            [
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                }
            ]
        },
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "13/05/2026",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "exercises": 
            [
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                }
            ]
        }
    ]
}`;

const noActivity = document.getElementById("no_activity");
if(1 === 1){
    //let data = await response.json(); desativado para mock
    let data = JSON.parse(response);
    let workout_template = document.getElementById("workout").content.cloneNode(true);
    let exercise_template = document.getElementById("exercises").content.cloneNode(true);// isso ta dando erro por algum motivo
    let seeMore;
    data.workouts.forEach(workout => {
        workout_template = document.getElementById("workout").content.cloneNode(true);
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
            exercise_template = document.getElementById("exercises").content.cloneNode(true);
            exercise_template.querySelector('.exercise_img').src = exercises[i].image;
            console.log(exercise_template.querySelector('.exercise_img').src); //teste
            exercise_template.querySelector('.exercise_text').textContent = exercises[i].name
            workout_template.querySelector('#exercises_summary').appendChild(exercise_template);
        }
        if(exercises.length > 3){
            seeMore = document.getElementById('see_more').content.cloneNode(true);
            workout_template.querySelector('#exercises_summary').appendChild(seeMore);
        }
        //Acrescentar depois o chat (vou precisar de mais um endpoint)
        document.getElementsByClassName("home")[0].appendChild(workout_template);
    });
}

/*else if(response.status === 404){
    noActivity.style.display = "";
}
else{
    noActivity.style.display = "";
}*/