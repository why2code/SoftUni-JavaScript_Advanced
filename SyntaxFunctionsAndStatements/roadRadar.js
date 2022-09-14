function speedLimiter(speed, area) {
    let drivingSpeed = Number(speed);
    let comparableSpeedLimit = 0;

    if (area === "city") {
        comparableSpeedLimit = 50;
    }
    else if (area === "motorway") {
        comparableSpeedLimit = 130;
    }
    else if (area === "interstate") {
        comparableSpeedLimit = 90;
    }
    else if (area === "residential") {
        comparableSpeedLimit = 20;
    }

    if(drivingSpeed <= comparableSpeedLimit){
        console.log(`Driving ${drivingSpeed} km/h in a ${comparableSpeedLimit} zone`);
    }
    else{
        let deltaInSpeedValue = drivingSpeed - comparableSpeedLimit;
        let status = "";

        if(deltaInSpeedValue <= 20){
            status = "speeding";
        }
        else if(deltaInSpeedValue <= 40){
            status = "excessive speeding";
        }
        else if(deltaInSpeedValue > 40){
            status = "reckless driving";
        }

        console.log(`The speed is ${deltaInSpeedValue} km/h faster than the allowed speed of ${comparableSpeedLimit} - ${status}`);
    }
}

speedLimiter(40, 'city');
speedLimiter(21, 'residential');
