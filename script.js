document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registerForm");
    const messageBox = document.getElementById("formMessage");

    //1. Check is user data is already stored
    const storeduser = localStorage.getItem("userData");
    if (storeduser) {
        const user = JSON.parse(storeduser);
        showMessage(`Welcome back, ${user.name} from ${user.region}`, "success")
    }

    //2. Listen to submissions
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        const region = document.getElementById("region").value;

        let errorMessage = "";

        if (name === "") {
            errorMessage += "Please enter your full name. \n";
        }

        if (email === "" || !email.includes("@") || !email.includes(".")) {
            errorMessage += "Please enter a valid email address.\n";
        }

        if (region === "") {
            errorMessage += "Please select a region.\n";
        }

        if (errorMessage) {
            showMessage(errorMessage, "error");
        } else {
            const userData = {
                name,
                email,
                region
            }
            localStorage.setItem("userData", JSON.stringify(userData));
            showMessage(`Thank you for registering, ${name}`, "success");
            form.reset()
        }  
    });

    function showMessage(msg, type) {
        messageBox.innerHTML = msg;
        messageBox.className = `form-message ${type}`;
        messageBox.style.display = "block";

        setTimeout(() => {
            messageBox.style.opacity = 1;
        }, 100);
    }
});
