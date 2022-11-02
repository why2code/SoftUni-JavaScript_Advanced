async function attachEvents() {
    let url = `http://localhost:3030/jsonstore/messenger`;

    let textArea = document.getElementById("messages");
    document.getElementById("refresh").addEventListener("click", displayMsg);
    document.getElementById("submit").addEventListener("click", submitMsg);


    async function displayMsg() {
        let response = await fetch(url);
        let data = await response.json();
        
        let res = [];

        for(let msg in data){
            let author = data[msg].author;
            let message = data[msg].content;
            
            res.push(`${author}: ${message}`);
        }
        
        textArea.textContent = `${res.join(`\n`)}`;
    }


    async function submitMsg(){
        let author = document.querySelector("[name=author]");
        let authorName = author.value;
        let msg = document.querySelector("[name=content]");
        let msgText = msg.value;

        let msgToSentToServer = {
            author: authorName,
            content: msgText,
          };
          
        let response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application\json'
            },
            body: JSON.stringify(msgToSentToServer)
        });

        author.value = "";
        msg.value = "";
        const data = await response.json();
        return data;
    }

}

attachEvents();