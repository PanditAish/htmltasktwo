
document.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailerror");
    const passwordError = document.getElementById("passworderror");
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    //email and password regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W]).{8,}$/;

    let isValid = true;

    //email validation
    if(!emailRegex.test(email)){
       emailError.textContent = "Please enter a valid email address"; 
       isValid = false;    
    } 

    //password validation
    if(!passwordRegex.test(password)){
       passwordError.textContent ="Password must be at least 8 characters, one uppercase letter, one digit and one special character";
       isValid = false; 
    }

    if(isValid) {
        emailInput.value = "";
        passwordInput.value = "";
        alert("Form is validate successfully");
    }
   
});

//remove error messages in real time when typing
document.getElementById("email").addEventListener("input", function () {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(this.value.trim())) {
        document.getElementById("emailerror").textContent = "";
    }
});

document.getElementById("password").addEventListener("input", function () {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W]).{8,}$/;
    if (passwordRegex.test(this.value.trim())) {
        document.getElementById("passworderror").textContent = "";
    }
});