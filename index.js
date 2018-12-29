function produceDrivingRange(rng){
    return function(start, stop){
        const testRng = Number.parseInt(stop.match(/[0-9]+/)) - Number.parseInt(start.match(/[0-9]+/));
        if(testRng > rng){
            return `${testRng - rng} blocks out of range`;
        }else{
            return `within range by ${rng - testRng}`;
        }
    }
}

function produceTipCalculator(frac){
    return function(cost){
        return cost * frac;
    }
}

function createDriver(){
    driverId = 1;
    return class{   
        constructor(name){
            this.name = name;
            this.id = driverId++;
        }
    }
}