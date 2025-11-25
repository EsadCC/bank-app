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
}

aanmeldsubmit.onclick = function()
{
    alert("U heeft een account gemaakt!");
}


window.onclick = function(event) {
    if (event.target == inlog) {
        inlog.style.display = "none";
    }
    if (event.target == aanmeld) {
        aanmeld.style.display = "none";
    }
}