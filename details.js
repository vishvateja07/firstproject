  // Show all users stored in localStorage
  function showAllUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const display = users.map(user => `Name: ${user.name}, Email: ${user.email}, Account Type: ${user.accountType}`).join("<br>");
    document.getElementById("allUsersDisplay").innerHTML = display || "No users found.";
}

// Show the logged-in user
function showLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        document.getElementById("loggedInUserDisplay").innerHTML = `Logged-in User: ${loggedInUser.name}, Email: ${loggedInUser.email}, Account Type: ${loggedInUser.accountType}`;
    } else {
        document.getElementById("loggedInUserDisplay").innerHTML = "No user is currently logged in.";
    }
}

// Check if a user is already registered
function checkUserRegistration() {
    const emailToCheck = document.getElementById("checkEmail").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isRegistered = users.some(user => user.email === emailToCheck);

    document.getElementById("checkResult").innerHTML = isRegistered ? "User is already registered." : "User is not registered.";
}

// Update user information
function updateUserInfo() {
    const email = document.getElementById("updateEmail").value;
    const newName = document.getElementById("updateName").value;
    const newAccountType = document.getElementById("updateAccountType").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], name: newName, accountType: newAccountType };
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("updateResult").innerHTML = "User updated successfully.";
    } else {
        document.getElementById("updateResult").innerHTML = "User not found.";
    }
}

// Delete a user
function deleteUserAccount() {
    const emailToDelete = document.getElementById("deleteEmail").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const initialLength = users.length;
    users = users.filter(user => user.email !== emailToDelete);

    if (users.length < initialLength) {
        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("deleteResult").innerHTML = "User deleted successfully.";
    } else {
        document.getElementById("deleteResult").innerHTML = "User not found.";
    }
}