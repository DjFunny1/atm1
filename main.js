if(document.getElementById("Buttonreg")) {

    const modal = document.getElementById("Modalreg");
    const button = document.getElementById("Buttonreg");
    const span = document.getElementsByClassName("close")[0];
    const body = document.getElementsByTagName("body");

    button.onclick = function () {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function () {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

//Accounts and passwords//

const users = [
    {user: "neil@gmail.com", password: "n12345"},
    {user: "oly@hotmail.com", password: "o12345"},
    {user: "djf@outlook.com", password: "dj12345"},
];

function handleSubmit(event) {
    event.preventDefault();

const username = document.getElementsByClassName("user-form-control").value;
const password = document.getElementsByClassName("pass-form-control").value;

const user = users.find(user => user.user-form-control === username && user.pass-form-control === password);

if(user){
    alert("Welcome");
}else{
    alert("Please make sure to enter the correct user and password.");
}
}

if(document.getElementById("send_button")) {

    const portal = document.getElementById("portal");
    const button = document.getElementById("send_button");
    const body = document.getElementsByTagName("body");

    button.onclick = function () {
        portal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }
}

//-------------Portal Dashboard-------------//

function portal(user,password){
    document.getElementById("login_sec").style = "display:none";
    document.getElementById("Modalreg").style = "display:none";
    document.getElementById("portal").style = "display:inline-block";
}
