let inlog = document.getElementById("box"); 
let aanmeld = document.getElementById("box2"); 
let inlogknop = document.getElementById("inlogknop"); 
let aanmeldknop = document.getElementById("accountmaken");
let closeLogin = document.getElementById("closeLogin");
let closeSignup = document.getElementById("closeSignup"); 
let linkToSignup = document.getElementById("linkToSignup");
let linkToLogin = document.getElementById("linkToLogin");
let inlogsubmit = document.getElementById("submit1");
let aanmeldsubmit = document.getElementById("submit2");


inlogknop.onclick = function()
{
    inlog.style.display = "flex";
}

aanmeldknop.onclick = function()
{
    aanmeld.style.display = "flex";
}

closeLogin.onclick = function()
{
    inlog.style.display = "none";
}

closeSignup.onclick = function()
{
    aanmeld.style.display = "none";
}


linkToSignup.onclick = function()
{
        inlog.style.display = "none";
        aanmeld.style.display = "flex";
}


linkToLogin.onclick = function() 
{
    aanmeld.style.display = "none";
    inlog.style.display = "flex";
}

inlogsubmit.onclick = function()
{
    alert("U bent ingelogd!");
    window.location.href = "dashboard.html";
}
aanmeldsubmit.onclick = function()
{
    alert("U heeft een account gemaakt!");
    window.location.href = "dashboard.html";
}


window.onclick = function(event) {
    if (event.target == inlog) {
        inlog.style.display = "none";
    }
    if (event.target == aanmeld) {
        aanmeld.style.display = "none";
    }
}


const users = [
    { username: 'gebruiker1', password: 'Abc!' },
    { username: 'gebruiker2', password: 'Def!' },
    { username: 'gebruiker3', password: 'Ghi!' }
];

function login() {
    const usernameInput = document.getElementById('gebruikersnaam');
    const passwordInput = document.getElementById('wachtwoord');
    const notification = document.getElementById('notification');
    const username = usernameInput.value;
    const password = passwordInput.value;

    notification.textContent = "";

    if (!username) {
        showNotification(notification, "Vul uw gebruikersnaam in.", "red");
        return;
    }

    if (!password)
    {
        showNotification(notification, "Vul uw wachtwoord in.", "red")
        return;
    }

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        showNotification(notification, "Inloggen succesvol!", "green");

        inlogsubmit.disabled = true;
        window.location.href = "dashboard.html";
    } else {
        showNotification(notification, "Ongeldige gebruikersnaam of wachtwoord.", "red");

        passwordInput.value = "";
        passwordInput.focus();
    }
}

function showNotification(element, message, color) {
    element.style.color = color;
    element.textContent = message;
}

document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById('gebruikersnaam');
    const passwordInput = document.getElementById('wachtwoord');

    if (passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") login();
        });
    }
    if (usernameInput) {
        usernameInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") login();
        });
    }
});

inlogsubmit.onclick = function(event) {
    event.preventDefault();
    login();
};

aanmeldsubmit.onclick = function(event) {
    event.preventDefault();
    alert("U heeft een account gemaakt!");
    window.location.href = "dashboard.html";
}