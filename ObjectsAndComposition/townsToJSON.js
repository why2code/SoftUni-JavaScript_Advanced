function printer(data){
    let res = [];

    for(let i = 1; i < data.length; i++){
        let headers = data[i].split(' | ');
        //(Math.round(headers[1] * 100) / 100).toFixed(2);

        let currTown = headers[0].substring(2);

        let currLattitude = Number(headers[1]);
        let correctedLattitude = parseFloat(currLattitude.toFixed(2));

        let currLongitude = headers[2].split(' |');
        let correctedLongitude = parseFloat(Number(currLongitude[0]).toFixed(2));

        let townObj = {
            Town: currTown,
            Latitude: correctedLattitude,
            Longitude: correctedLongitude
        }

        res.push(townObj);
    }

    console.log(JSON.stringify(res));

}

printer(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);