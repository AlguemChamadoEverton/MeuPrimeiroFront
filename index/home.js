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
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquisse",
            "duration": "1h30m",
            "volume": "8000kg",
            "records": 3,
            "like": 3,
            "comments": 3,
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
            ],
            "commentaries":
            [
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "a",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "j",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
                }
            ]
        },
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "like": 2,
            "comments": 2,
            "exercises": 
            [
                {
                    "image": "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-thumbnails/00251201-Barbell-Bench-Press_Chest_thumbnail@3x.jpg",
                    "name": "Deadlift"
                },
                {
                    "image": "https://barbend.com/wp-content/uploads/2025/01/Sitko-1.jpg",
                    "name": "Squat"
                }
            ],
            "commentaries":
            [
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "a",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "j",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
                }
            ]
        },
        {
            "image": "https://i.pinimg.com/736x/b4/0c/c5/b40cc599980b8b0a944d304e205c6fa0.jpg",
            "username": "Xestro",
            "data": "Dec 30, 2025, 11:23PM",
            "name": "Maluquaisse",
            "duration": "1h35m",
            "volume": "8005kg",
            "records": 10,
            "like": 1,
            "comments": 1,
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
            ],
            "commentaries":
            [
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/rafinhapiercer-ae12c85a-1e7f-440f-b20e-e890c4a15f61-thumbnail.jpg",
                    "username": "rafinha",
                    "time": "Yesterday at 6:07 AM",
                    "commentary": "Oiiiiiiiiiiiiiiiii"
                },
                {
                    "image": "https://d2l9nsnmtah87f.cloudfront.net/profile-images/sofi_brandao-bb65b81c-44df-4ae9-9937-8b696da82a93.jpg",
                    "username": "sofi",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "legal"
                },
                {
                    "image": "a",
                    "username": "b",
                    "time": "Dec 25, 2024, 12:30PM",
                    "commentary": "macaco"
                },
                {
                    "image": "j",
                    "username": "k",
                    "time": "Dec 30, 2024, 12:38PM",
                    "commentary": "tigre"
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
    let exercise_template = document.getElementById("exercises").content.cloneNode(true);
    let comment_template = document.getElementById("tpl_comment").content.cloneNode(true);
    let seeMore, exercises;
    data.workouts.forEach(workout => {
        workout_template = document.getElementById("workout").content.cloneNode(true);
        workout_template.querySelector('.log_profile_pic').src = workout.image;
        workout_template.querySelector('#workout_log_username').textContent = workout.username;
        workout_template.querySelector('.workout_data').textContent = workout.data;
        workout_template.querySelector('#workout_routine_name').textContent = workout.name;
        workout_template.querySelector('#duration_value').textContent = workout.duration;
        workout_template.querySelector('#volume_value').textContent = workout.volume;
        workout_template.querySelector('#records_value').textContent = workout.records;
        workout_template.querySelector('#like').textContent = workout.like;
        workout_template.querySelector('#comments_count').textContent = workout.comments;
        exercises = workout.exercises;
        let exerciseLength = exercises.length;
        let m = exerciseLength < 3 ? exerciseLength : 3;
        for(let i = 0; i < m; i++){
            exercise_template.querySelector('.exercise_img').src = exercises[i].image;
            console.log(exercise_template.querySelector('.exercise_img').src); //teste
            exercise_template.querySelector('.exercise_text').textContent = exercises[i].name;
            workout_template.querySelector('#exercises_summary').appendChild(exercise_template);
        }
        if(exercises.length > 3){
            seeMore = document.getElementById('see_more').content.cloneNode(true);
            seeMore.querySelector('#exercises_more').textContent = `See ${exerciseLength-3} more exercises`;
            workout_template.querySelector('#exercises_summary').appendChild(seeMore);
        }
        let commentaries = workout.commentaries;
        let commentariesLength = commentaries.length;
        let n = commentariesLength < 2 ? commentariesLength : 2;
        for(let j = 0; j < m; j++){
            comment_template.querySelector('')
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