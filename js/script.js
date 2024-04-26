// Form validation
document.addEventListener("DOMContentLoaded", function () {
    let forms = document.getElementsByTagName("form");
    for (const element of forms) {
        element.addEventListener("submit", function (event) {
            let inputs = this.getElementsByTagName("input");
            for (const elementalue of inputs) {
                if (elementalue.trim() === "") {
                    event.preventDefault();
                    alert("Please fill in all fields.");
                    return;
                }
            }
        });
    }
});

// Username and password validation
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", function () {
    let username = this.value;
    let emailInput = document.getElementById("email");
    let email = emailInput.value;

    if (username === email) {
        alert("Username should not be the same as your email.");
        this.setCustomValidity("Username should not be the same as your email.");
    } else if (!/^[a-zA-Z]+$/.test(username)) {
        alert("Username should only contain alphabets.");
        this.setCustomValidity("Username should only contain alphabets.");
    } else {
        this.setCustomValidity("");
    }
});

passwordInput.addEventListener("input", function () {
    let password = this.value;
    let passwordLength = password.length;
    let containsCharacters = /[a-zA-Z]/.test(password);
    let containsNumbers = /\d/.test(password);
    let containsSpecialCharacters = /[?$#@]/.test(password);

    if (passwordLength < 6 || passwordLength > 10) {
        alert("Password should be between 6 and 10 characters in length.");
        this.setCustomValidity("Password should be between 6 and 10 characters in length.");
    } else if (!containsCharacters || !containsNumbers || !containsSpecialCharacters) {
        alert("Password must contain a mix of characters, numbers, and special characters (?, $, #, @).");
        this.setCustomValidity("Password must contain a mix of characters, numbers, and special characters (?, $, #, @).");
    } else {
        this.setCustomValidity("");
    }
});