function getFlightNum(event) {
    event.preventDefault();
    let flightNum = document.getElementById("flight-number").value;
    console.log(flightNum);

}

function getLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("login-password").value;
    console.log(username);
    console.log(password);
    window.location.href = "home.html";
}

function getSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("signup-password").value;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    window.location.href = "login.html";

}