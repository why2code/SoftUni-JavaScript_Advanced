function validate() {
    let button = document.getElementById("submit");
    button.addEventListener("click", validateDetails);

    let userIsValid = false;
    let emailIsValid = false;
    let passwordIsValid = false;
    let phoneIsValid = true;
    let requiredPhoneValidation = false;

    //Company checkbox show-hide
    let companyCheckbox = document.getElementById("company");
    companyCheckbox.addEventListener("change", showDivForCompanyNumber);

    function showDivForCompanyNumber(e) {
        let companyDetailsField = document.getElementById("companyInfo");

        if (companyCheckbox.checked === true) {
            companyDetailsField.style.display = "block";
            requiredPhoneValidation = true;
        }
        else {
            companyDetailsField.style.display = "none";
            requiredPhoneValidation = false;
        }
    }


    //MAIN LOGIC - validating fields data
    function validateDetails(e) {
        let userNameField = document.getElementById("username");
        let emailField = document.getElementById("email");
        let passwordField = document.getElementById("password");
        let confirmPasswordField = document.getElementById("confirm-password");

        //Username validation
        let usernameRegex = /^[A-Za-z0-9]+$/g;
        let usernameValue = userNameField.value;
        if (!usernameValue.match(usernameRegex) || (usernameValue.length < 3 || usernameValue.length > 20)) {
            userNameField.style.borderColor = "red"
            userIsValid = false;
        }
        else {
            userNameField.style.borderColor = "none"
            userIsValid = true;
        }

        //Email validation
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        let mailValue = emailField.value;
        if (!mailValue.match(emailRegex)) {
            emailField.style.borderColor = "red";
            emailIsValid = false;
        }
        else {
            emailField.style.borderColor = "none";
            emailIsValid = true;
        }

        //Passwords validation
        let passRegex = /^[A-Za-z0-9_]+$/g;
        let passValue = passwordField.value;
        let confPassValue = confirmPasswordField.value;
        if (passValue !== confPassValue) {
            passwordField.style.borderColor = "red"
            confirmPasswordField.style.borderColor = "red"
            passwordIsValid = false;
        }
        else {
            if (!passValue.match(passRegex) || (passValue.length < 5 || passValue.length > 15)) {
                passwordField.style.borderColor = "red"
                confirmPasswordField.style.borderColor = "red"
                passwordIsValid = false;

            }
            else {
                passwordField.style.borderColor = "none"
                confirmPasswordField.style.borderColor = "none"
                passwordIsValid = true;

            }
        }

        //Company phone number validation
        if (requiredPhoneValidation === true) {
            let companyField = document.getElementById("companyNumber");
            let phoneNumber = Number(companyField.value);
            if (phoneNumber < 1000 || phoneNumber > 9999) {
                companyField.style.borderColor = "red";
                phoneIsValid = false;
            }
            else {
                companyField.style.borderColor = "none";
                phoneIsValid = true;
            }
        }


        //Show Valid DIV if all inputs are valid
        if (userIsValid && emailIsValid && passwordIsValid && phoneIsValid) {
            document.getElementById("valid").style.display = "block";
        }
        else {
            document.getElementById("valid").style.display = "none"
        }
        //Stop auto-refresh on the Submit button (as per task requirement)
        e.preventDefault();
    }


}
