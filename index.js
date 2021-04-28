// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
    if(pickUp > 42) {
        return (pickUp - 42)
    }
    else {
        return (42 - pickUp)
    }
}

function distanceFromHqInFeet(feetAway) {
    if(feetAway > 42) {
        return (feetAway - 42)*264
    }
    else {
        return (42 - feetAway)*264
    }
}

function distanceTravelledInFeet(start, finish) {
    if (start > finish) {
        return (start - finish)*264
    }
    else {
        return (finish - start)*264
    }
}

function calculatesFarePrice(start, finish) {
    let trip = distanceTravelledInFeet(start, finish)
    if (trip <= 400) {
        return 0
    }
    else if(trip > 400 && trip <= 2000) {
        return (trip - 400) * .02
    }
    else if (trip > 2000 && trip <= 2500) {
        return 25
    }
    else if (trip > 2500) {
        return 'cannot travel that far'
    }
}