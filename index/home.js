const url = "http://localhost:5255/";
const token = 

const response = await fetch(`${url}workouts`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
})
let data = await response.json();