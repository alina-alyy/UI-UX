document.getElementById("changePasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var currentPassword = document.getElementById("currentPassword").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Validate password fields
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password must match!");
        return;
    }

    // Perform password change logic here
    // You can make an AJAX request to the server to handle the password change

    // Clear input fields
    document.getElementById("currentPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";

    alert("Password changed successfully!");
});
