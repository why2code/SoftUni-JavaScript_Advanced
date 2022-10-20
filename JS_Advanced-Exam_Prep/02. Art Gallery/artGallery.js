class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        let currArticle = this.listOfArticles.find(x => x.articleName === articleName);
        if (!currArticle) {
            currArticle = {
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            };
            this.listOfArticles.push(currArticle);
        }
        else {
            currArticle.quantity += quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        if (this.guests.find(x => x.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }
        let curPoints = personality === "Vip" ? 500 : personality === "Middle" ? 250 : 50;
        let currGuest = {
            guestName,
            points: curPoints,
            purchaseArticle: 0
        }
        this.guests.push(currGuest);
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        // if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
        //     throw new Error("This article is not found.");
        // }

        let foundArticle = this.listOfArticles.find(x => x.articleName === articleName);
        if (!foundArticle || foundArticle.articleModel !== articleModel) {
            throw new Error("This article is not found.");
        }

        if (foundArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        }

        let foundGuest = this.guests.find(x => x.guestName === guestName);
        if (!foundGuest) {
            return `This guest is not invited.`
        }

        //hm?
        let articlePoint = this.possibleArticles[articleModel];
        if (foundGuest.points >= articlePoint) {
            foundGuest.points -= articlePoint;
            foundGuest.purchaseArticle += 1;
            foundArticle.quantity -= 1;
            return `${guestName} successfully purchased the article worth ${articlePoint} points.`
        }
        else {
            return "You need to more points to purchase the article.";
        }
    }

    showGalleryInfo(criteria){
        let res = [];
        if(criteria === "article"){
            res.push("Articles information:");
            this.listOfArticles.forEach(x => res.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return `${res.join(`\n`)}`
        }
        else{
            res.push("Guests information:");
            this.guests.forEach(x => res.push(`${x.guestName} - ${x.purchaseArticle}`));
            return `${res.join(`\n`)}`
        }
    }
}


// let art = new ArtGallery("Curtis Mayfield");

// art.addArticle('picture', 'Mona Liza', 3);
// art.addArticle('Item', 'Ancient vase', 2);
// art.addArticle('picture', 'Mona Liza', 1);

// art.inviteGuest('John', 'Vip');
// art.inviteGuest('Peter', 'Middle');

// console.log(art.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(art.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(art.buyArticle('item', 'Mona Liza', 'John'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



