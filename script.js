document.getElementById("colorChangeBtn").addEventListener("click", function() {
    this.style.background = "#3498db";
    this.innerText = "Kicked into action! 🥋";
});

document.getElementById("secretActionBtn").addEventListener("mousedown", function() {
    setTimeout(() => {
        this.innerText = "You found the hidden move! 🏆";
        this.style.background = "#ff5733";
    }, 1000); // Long press for 1 second
});

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function() {
        const text = {
            skating: "Skating is smooth like JavaScript animations! 🛹",
            karate: "Karate moves require precision, just like good code! 🥋",
            books: "Reading expands the mind, just like learning JavaScript! 📚"
        };
        document.getElementById("tabText").innerText = text[this.dataset.tab];
    });
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
        emailError.innerText = "Invalid email format!";
        valid = false;
    } else {
        emailError.innerText = "";
    }

    let password = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    if (password.value.length < 8) {
        passwordError.innerText = "Password too short!";
        valid = false;
    } else {
        passwordError.innerText = "";
    }

    if (valid) {
        alert("Form successfully submitted! 🚀");
    }
});
