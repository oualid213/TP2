const email = document.getElementById("email");
const password = document.getElementById("password");
const fullname = document.getElementById("fullname");
const birthdate = document.getElementById("birthdate");
const inscriptionButton = document.getElementById("Inscription");

inscriptionButton.addEventListener("click", function() {
    const emailValue = email.value;
    const passwordValue = password.value;

    const expirationDate = 500;

    setCookie(emailValue, passwordValue, expirationDate);

});

function setCookie(email, motPasse, date) {

    const date2 = new Date();
    date2.setTime(date2.getTime() + (date * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date2.toUTCString();

    const encodedEmail = encodeURIComponent(email);
    const encodedMotPasse = encodeURIComponent(motPasse);

    const cookieString = `${encodedEmail}=${encodedMotPasse}; ${expires}; path=/`;

    document.cookie = cookieString;
    
}
