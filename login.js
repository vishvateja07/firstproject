function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store logged-in user
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}