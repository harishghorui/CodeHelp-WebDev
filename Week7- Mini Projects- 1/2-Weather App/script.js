
const userTab = document.querySelector("[data-userWeather]")
const searchTab = document.querySelector("[data-searchWeather]")

const userContainer = document.querySelector(".weather-container")
const grantAccessContainer = document.querySelector(".grant-location-container")
const searchForm = document.querySelector("[data-searchForm]")
const loadingScreen = document.querySelector(".loading-container")
const userInfoContainer = document.querySelector(".user-info-container")

// initial variables
let currentTab = userTab;
let API_KEY = "64bfa4d5e6ff5599bb575f2c76f89588";
currentTab.classList.add("current-tab");
getfromSessionStorage();

// Function to switch between user and search tabs
function switchTab(clickedTab) {

    // Checking if clickedTab is different from currentTab
    if(clickedTab != currentTab) {
        // Changing tab focus
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        
        // Toggling visibility of containers based on tab switch
        if(!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active")
        }
        else {
            searchForm.classList.remove("active")
            userInfoContainer.classList.remove("active")
            notFound.classList.remove("active");
            getfromSessionStorage();
        }
    }
}

// Adding event listeners for tab clicks
userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

// Function to retrieve user location from session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    // Checking if user coordinates are not stored
    if(!localCoordinates) {
        // Displaying grant access container
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

// Function to fetch user weather info
async function fetchUserWeatherInfo(coordinates) {

    // Extracting latitude and longitude from coordinates
    const {lat, lon} = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // API call
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        // data received
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        // show weather info
        renderWeatherInfo(data);
    }
    catch(err) {
        // error handling
        loadingScreen.classList.remove("active");
        
    }
}

// Function to render weather information on UI
function renderWeatherInfo(weatherInfo) {
    // Fetching UI elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // Updating UI elements with weather data
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
    humidity.innerText =  `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}

// Function to get user location
function getLocation() {

    // Checking if geolocation is supported by the browser
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        // error handling
    }
}

// Function to handle user position retrieval
function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

// Event listener for grant access button click
const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click" , getLocation);

// Search form submission event listener
const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName = searchInput.value;
    if(cityName === "") return;

    else
    fetchSearchWeatherInfo(cityName);
})

// Function to fetch weather info for searched city
async function fetchSearchWeatherInfo(city) {

    // Showing loading screen and hiding other containers
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    notFound.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        // If city not found, throw error
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
        searchInput.value = "";
    }
    catch (error) {
        cityNotFound();
    }
}

// Function to handle city not found error
const notFound = document.querySelector(".city-not-found");
function cityNotFound() {
    loadingScreen.classList.remove("active");
    notFound.classList.add("active");
    searchInput.value = "";
}
