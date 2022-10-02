function getArticleGenerator(articles) {
    let separateArticles = articles;

    let showNext = function showNextArticleOnPage() {
        
        let contentElement = document.getElementById("content");
        let newArtcl = document.createElement("article");

        if (separateArticles.length > 0) {
            newArtcl.textContent = separateArticles.shift();
            contentElement.appendChild(newArtcl);
        }
    }

    return showNext;
}