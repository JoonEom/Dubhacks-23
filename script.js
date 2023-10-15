function getFlightNum(event) {
    event.preventDefault();
    let flightNum = document.getElementById("flight-number").value;
    window.location.href = "match.html";
}


function getMatches() {
    const Http = new XMLHttpRequest();
    const url='https://us-west1-festive-airway-393617.cloudfunctions.net/dbgetusers';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
         return Http.responseText;
    }
    return Http.responseText;
}

function getLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("login-password").value;
    window.location.href = 'home.html';

    
}

function getSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("signup-password").value;
    window.location.href = 'login.html';
    
}
