class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        //"{name}/{age}/{playerValue}"
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split("/");

            let currPlayer = this.invitedPlayers.find(p => p.name === name);
            if (!currPlayer) {
                currPlayer = {
                    name,
                    age,
                    playerValue
                }
                this.invitedPlayers.push(currPlayer);
            }
            else {
                if (playerValue > currPlayer.playerValue) {
                    currPlayer.playerValue = playerValue;
                }
            }

        }

        let res = [];
        //res.push();
        this.invitedPlayers.forEach(x => res.push(`${x.name}`));
        return `You successfully invite ${res.join(`, `)}.`
    }

    signContract(selectedPlayer) {
        //"{name}/{playerOffer}"
        let [name, playerOffer] = selectedPlayer.split("/");

        let currPlayer = this.invitedPlayers.find(x => x.name === name);
        if (!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (Number(playerOffer) < Number(currPlayer.playerValue)) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Number(currPlayer.playerValue) - Number(playerOffer)} million more are needed to sign the contract!`)
        }

        currPlayer.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {

        let currPlayer = this.invitedPlayers.find(x => x.name === name);

        if (!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (Number(currPlayer.age) < Number(age)) {
            let ageDifference = Number(age) - Number(currPlayer.age);
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
            else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        let res = [];
        res.push(`Players list:`);
        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));
        this.invitedPlayers.forEach(p => res.push(`Player ${p.name}-${p.playerValue}`));
        return res.join(`\n`);
    }

}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
