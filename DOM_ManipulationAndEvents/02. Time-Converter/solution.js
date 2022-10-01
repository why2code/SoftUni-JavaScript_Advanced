function attachEventsListeners() {

    let buttons = Array.from(document.querySelectorAll("input[type=button]"));

    for (let button of buttons) {
        button.addEventListener("click", calculate);
    }



    function calculate(event) {
        let value = Number(event.target.parentElement.querySelector("input[type=text]").value);
        let typeOfButton = event.target.id;

        let daysValue = 0;

        if (typeOfButton === "daysBtn") {
            daysValue = value;
        }
        else if (typeOfButton === "hoursBtn") {
            daysValue = value / 24;
        }
        else if (typeOfButton === "minutesBtn") {
            daysValue = (value / 24) / 60;
        }
        else if (typeOfButton === "secondsBtn") {
            daysValue = ((value / 24) / 60)/60;

        }

        let hoursValue = daysValue * 24;
        let minutesValue = hoursValue * 60;
        let secondsValue = minutesValue * 60;


        document.getElementById("days").value = daysValue;
        document.getElementById("hours").value = hoursValue;
        document.getElementById("minutes").value = minutesValue;
        document.getElementById("seconds").value = secondsValue;

    }


}