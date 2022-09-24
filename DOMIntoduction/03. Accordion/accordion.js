function toggle() {
    let buttonElement = document.getElementsByClassName("button")[0].textContent;
    let divBlockElement = document.getElementById("extra");

    if(buttonElement === "More"){
        divBlockElement.style.display = "block";
        document.getElementsByClassName("button")[0].innerText = "Less"
    }
    
    if(buttonElement === "Less"){
        divBlockElement.style.display = "none";
        document.getElementsByClassName("button")[0].innerText = "More"
    }
}