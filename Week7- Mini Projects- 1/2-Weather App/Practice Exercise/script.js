console.log("hello ji")

const APIkey = "64bfa4d5e6ff5599bb575f2c76f89588";
let city = "Panaji";

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);
    let data = await response.json();
    return data;
}

// function calling to fetch weather data
async function displayWeather() {

    let data = await getWeather();
    
    // creating new element
    let newPara = document.createElement('p');

    // adding content to created element
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    
    // adding element to document body
    document.body.appendChild(newPara);
}

displayWeather(); // Call the function to display weather

// ---------------------------------


const data = document.getElementById('demo');

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        data.innerHTML = "Geolocation not Supported by Browser";
    }
}

function showPosition(position) {
    data.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Logitude: " + position.coords.longitude;
}