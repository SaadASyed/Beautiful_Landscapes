document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registerForm");

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
            alert("Thank you for registering");
        form.reset();
        }
    });

    function errorMessage(msg, type) {
        messageBox.innerHTML = msg;
        messageBox.className = `form-message ${type}`;
        messageBox.style.display = "block";

        setTImeout(() =>{
            messageBox.style.opacity = 1;
        }, 100);
    }
});