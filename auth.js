document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            if (username === "admin" && password === "123") {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html";
            } else {
                errorMessage.textContent = "🚨 Invalid Username or Password!";
            }
        });
    }
});
