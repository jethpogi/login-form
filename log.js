document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("button[type='submit']");

    loginBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form submission or page reload

        const email = document.getElementById("user").value.trim();
        const password = document.getElementById("pass").value.trim();

        if (!email || !password) {
            alert("Please fill in both Email and Password.");
            return;
        }

        // Simulate login check
        if (email === "admin@example.com" && password === "1234") {
            alert("Login successful!");
            // window.location.href = "dashboard.html"; // optional redirect
        } else {
            alert("Invalid email or password.");
        }
    });
});
