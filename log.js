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
            window.location.href = "dashboard.html"
        } else {
            alert("Invalid email or password.");
        }
    });
});
//js for sign up form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signupBtn").addEventListener("click", function () {
        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!fullname || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        alert("Signup successful!");
        // Optional: Redirect after sign up
        // window.location.href = "index.html";
    });
});
