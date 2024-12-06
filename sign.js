function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const accountType = document.querySelector('input[name="account_type"]:checked').value;

    // Create a user object
    const user = {
        name,
        email,
        password,
        accountType
    };

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Save the new user in the localStorage
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to login page
    window.location.href = "login.html";
}