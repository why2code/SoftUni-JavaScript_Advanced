function getArticleGenerator(articles) {
    let articlesArray = articles;

    return () => {
        let contentElement = document.getElementById("content");
        let newArtcl = document.createElement("article");
        if (articlesArray.length > 0) {
            newArtcl.textContent = articlesArray.shift();
            contentElement.appendChild(newArtcl);
        }
    }

}