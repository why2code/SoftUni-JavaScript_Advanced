function timeToWalk(numOfSteps, footprint, velosity){
  
    function setFormat(num){
      return num < 10 ? '0' + num : num;
    }
    
    let distance = numOfSteps * footprint;
    velosity /= 3.6;
    let allSeconds = (distance / velosity) + (Math.floor(distance / 500) * 60);
    allSeconds = Math.round(allSeconds, 0);
    
    let time = new Date(0, 0, 0, 0, 0, allSeconds);
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    console.log(`${setFormat(hours)}:${setFormat(minutes)}:${setFormat(seconds)}`);
  }

  timeToWalk(4000, 0.60, 5);
  timeToWalk(2564, 0.70, 5.5);
