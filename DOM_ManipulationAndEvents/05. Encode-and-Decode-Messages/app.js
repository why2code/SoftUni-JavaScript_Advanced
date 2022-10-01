function encodeAndDecodeMessages() {

    let buttons = Array.from(document.getElementsByTagName("button"));

    buttons[0].addEventListener("click", EncyptMessage);
    buttons[1].addEventListener("click", DecryptMessage);

    let arrAreas = Array.from(document.getElementsByTagName("textarea"));
    let inputTextArea = arrAreas[0];
    let outputTextArea = arrAreas[1];
    let originalMessageBufffer = "";

    function EncyptMessage() {
        let textToEncrypt = inputTextArea.value;
        originalMessageBufffer = textToEncrypt;

        let outputEncryptedText = "";
        for (let i = 0; i < textToEncrypt.length; i++) {
            let newLetter = String.fromCharCode(textToEncrypt[i].charCodeAt(0) + 1);
            outputEncryptedText += newLetter;
        }

        outputTextArea.value = outputEncryptedText;
        inputTextArea.value = "";
    }

    

    function DecryptMessage() {
        outputTextArea.value = originalMessageBufffer;
    }


}