const bgColor = document.querySelector(".wrapper")
const themes = document.querySelector("[data-theme]")
const lightTheme = document.querySelector("[data-light]")
const darkTheme = document.querySelector("[data-dark]")
let userInput = document.querySelector("[data-user-input]");
let no_result = document.querySelector("[data-no-result]");
const userContainer = document.querySelector("[data-user-container]");
const root = document.documentElement.style;

// initial variables
let currentTheme = darkTheme;
let username = "harishghorui";

// default call for saved username
fetchUserData();

// search form listener for username submit
const searchForm = document.querySelector("[data-searchTab]");
searchForm.addEventListener("submit", (e) => {
    // prevent the default search method
    e.preventDefault();

    if(userInput.value == "") return;

    username = userInput.value;
    fetchUserData();
})

async function fetchUserData() {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            // If response is not successful, throw an error
            throw new Error('Invalid User');
        }
        no_result.style.display = "none";
        let data = await response.json();
        fetchUserAvatar(data);
        fetchUserName(data);
        fetchUserProfile(data);
        fetchUserJoined(data);
        fetchUserBio(data);
        fetchUserRepos(data);
        fetchUserFollowers(data);
        fetchUserFollowing(data);
        fetchUserLocation(data);
        fetchUserBlog(data);
        fetchUserTwitter(data);
        fetchUserCompany(data);
    }
    catch(error) {
        console.log(error.message);
        fetchFailed();
    }
}

function fetchFailed() {
    no_result.style.display = "flex";

    // clear button listener for adding clear button
    userInput.addEventListener("input", () => {
        no_result.style.display = "none";
    })
}

function fetchUserAvatar(data) {
    let avatar = document.querySelector("[data-avatar]");
    avatar.src = data?.avatar_url;
}

function fetchUserName(data) {
    let fullName = document.querySelector("[data-name]");
    fullName.innerText = data?.name;
}

function fetchUserProfile(data) {
    let userProfile = document.querySelector("[data-username]");
    userProfile.innerText = `@${data?.login}`;
    userProfile.href = data?.html_url;
}

function fetchUserJoined(data) {
    let joinDate = document.querySelector("[data-joined]");
    let dateString = data?.created_at;
    let dateOnly = dateString.substring(0, 10);  // Extract the first 10 characters, which represent the date
    let arrDate = dateOnly.split("-");
    let arrMonth = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let date = arrDate[2];
    let month = arrMonth[arrDate[1]-1];
    let year = arrDate[0];
    
    joinDate.innerText = `Joined ${date} ${month} ${year}`;
}

function fetchUserBio(data) {
    let userBio = document.querySelector("[data-bio]");
    if(data?.bio) {
        userBio.innerText = data?.bio;
    }
    else {
        userBio.innerText = "This profile has no bio";
    }
    
}

function fetchUserRepos(data) {
    let repo = document.querySelector("[data-repos]");
    repo.innerText = data?.public_repos;
}

function fetchUserFollowers(data) {
    let followers = document.querySelector("[data-followers]");
    followers.innerText = data?.followers;
}

function fetchUserFollowing(data) {
    let following = document.querySelector("[data-following]");
    following.innerText = data?.following;
}

function fetchUserLocation(data) {
    let userLocation = document.querySelector("[data-location]");
    if(data?.location != null) {
        userLocation.innerText = data?.location;
    }
    else {
        userLocation.innerText = "Not Available";
    }
}

function fetchUserBlog(data) {
    let userBlog = document.querySelector("[data-blog]");
    if(data.blog != "") {
        userBlog.innerText = `${data?.blog}`;
        userBlog.href = data?.blog;
    }
    else {
        userBlog.innerText = "Not Available";
    }
}

function fetchUserTwitter(data) {
    let userTwitter = document.querySelector("[data-twitter]");
    if(data.twitter_username != null) {
        userTwitter.innerText = `${data?.twitter_username}`;
        userTwitter.href = `https://twitter.com/${data?.twitter_username}`;
    }
    else {
        userTwitter.innerText = "Not Available";
    }
}

function fetchUserCompany(data) {
    let userCompany = document.querySelector("[data-company]");
    if(data?.company) {
        userCompany.innerText = `${data?.company}`;
    }
    else {
        userCompany.innerText = "Not Available";
    }
}

// default darkMode
toggleTheme(currentTheme);

function toggleTheme(theme) {
    if(theme != darkTheme) {
        darkTheme.classList.remove("active");
        lightTheme.classList.add("active");
        currentTheme = lightTheme;
        makeDarkTheme();
    }
    else {
        lightTheme.classList.remove("active");
        darkTheme.classList.add("active");
        currentTheme = darkTheme;
        makeLightTheme();
    }
}

function makeDarkTheme() {
    // bgColor.style.background = '#141D2F';
    // bgColor.style.color = 'white';
    // themes.style.color = 'white';
    // searchForm.style.background = '#1E2A47';
    // userInput.style.color = 'white';
    // userInput.classList.add('placeholder-dm');
    // userContainer.classList.add('userBgDM');
    root.setProperty("--lm-bg", "#141D2F");
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
}

function makeLightTheme() {
    // bgColor.style.background = '#F6F8FF';
    // bgColor.style.color = '#4B6A9B';
    // themes.style.color = '#4B6A9B';
    // searchForm.style.background = '#FEFEFE';
    // userInput.style.color = '#4B6A9B';
    // userInput.classList.remove('placeholder-dm');
    // userContainer.classList.remove('userBgDM');
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    root.setProperty("--lm-icon-bg", "brightness(100%)");
}

themes.addEventListener("click", () => {
    if(currentTheme == darkTheme) {
        currentTheme = lightTheme;
    }
    else {
        currentTheme = darkTheme;
    }
    toggleTheme(currentTheme);
})

