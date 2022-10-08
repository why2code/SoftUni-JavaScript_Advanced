function sortTickets(ticketsArr, filter) {
    let resArrayOfTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let itemTickets = Array.from(ticketsArr);
    for (let i = 0; i < itemTickets.length; i++) {
        let [dest, cost, stat] = itemTickets[i].split('|');
        let currTicket = new Ticket(dest, cost, stat);
        resArrayOfTickets.push(currTicket);
    }

    if (filter === "destination") {
       return resArrayOfTickets.sort((a, b) => (a.destination > b.destination) ? 1 : ((a.destination < b.destination) ? -1 : 0));
    }
    else if (filter === "price") {
        return resArrayOfTickets.sort((a, b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0));
    }
    else { //status
        return resArrayOfTickets.sort((a, b) => (a.status > b.status) ? 1 : ((a.status < b.status) ? -1 : 0));
    }

}

sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);