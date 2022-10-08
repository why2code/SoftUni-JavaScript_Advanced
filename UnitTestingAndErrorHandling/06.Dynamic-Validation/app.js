function validate() {
    let inputField = document.getElementById("email");
    inputField.addEventListener("change", verifyEmail);

    let validateEmailRegex = /^[a-z]+\@[a-z]+.[a-z]+$/g;

    function verifyEmail(){
        let enteredEmail = inputField.value;

        if(!enteredEmail.match(validateEmailRegex)){
            inputField.classList.add("error");
        }
        else{
            inputField.classList.remove("error");
        }
    }
}