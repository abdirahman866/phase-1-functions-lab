// 1. Returns the number of blocks from HQ on 42nd Street
function distanceFromHqInBlocks(pickup) {
    const hq = 42;
    return Math.abs(pickup - hq);
}

// 2. Converts blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

// 3. Calculates feet traveled between start and destination
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// 4. Calculates fare price based on distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

