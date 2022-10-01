function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));
    for (let button of buttons) {
        button.addEventListener("click", showOrHideInformation);
    }

    function showOrHideInformation() {
        let checkForLockedUnlockedProfile = event.target.parentElement
            .querySelector("input[type=radio]:checked").value;

        if (checkForLockedUnlockedProfile === "lock"){
            return;
        }
        else {

            let button = event.target.parentElement
            .querySelector("input[value=lock]");

            if(!button.checked){
                if (event.target.textContent === "Hide it") {
                    event.target.parentElement.querySelector("div").style.display = "";
                    event.target.textContent = "Show more";
                }
                else {
                    event.target.parentElement.querySelector("div").style.display = "block";
                    event.target.textContent = "Hide it";
                }
            }
           
        }


    }

}
