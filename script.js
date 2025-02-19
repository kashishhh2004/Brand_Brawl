document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginSection = document.getElementById("loginSection");
    const contentSection = document.getElementById("contentSection");
    const logoutBtn = document.getElementById("logout-btn");
    const cart = document.getElementById("cart");

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cart.innerHTML = "";
        cartItems.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price}`;
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.onclick = () => removeFromCart(index);
            li.appendChild(removeBtn);
            cart.appendChild(li);
        });

        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    function addToCart(name, price) {
        cartItems.push({ name, price });
        updateCart();
    }

    function removeFromCart(index) {
        cartItems.splice(index, 1);
        updateCart();
    }

    window.addToCart = addToCart;

    if (localStorage.getItem("loggedIn") === "true") {
        loginSection.style.display = "none";
        contentSection.style.display = "block";
        updateCart();
    } else {
        loginSection.style.display = "block";
        contentSection.style.display = "none";
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            if (username === "admin" && password === "password123") {
                localStorage.setItem("loggedIn", "true");
                location.reload();
            } else {
                errorMessage.textContent = "Invalid Username or Password!";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("cart");
            location.reload();
        });
    }
});
