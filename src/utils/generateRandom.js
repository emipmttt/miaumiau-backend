function getRandomPosition(min, max) {
    const gridSize = 64;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    const roundedValue = Math.round(randomValue / gridSize) * gridSize;
    return roundedValue;
}

function iterateNTimes(n, callback) {
    for (let i = 0; i < n; i++) {
        callback();
    }
}

function generateRandom(name, number, minPosition, maxPosition, worldItems) {

    let newWorldItems = [...worldItems]

    iterateNTimes(parseInt(number), () => {
        let x, y;
        let isUniquePosition = false;

        while (!isUniquePosition) {
            x = getRandomPosition(minPosition + 25, (maxPosition * 32) - 100);
            y = getRandomPosition(minPosition + 164, (maxPosition * 32) - 115);

            isUniquePosition = worldItems.find(item => item.x === x && item.y === y) ? false : true
        }
        newWorldItems.push({ x, y, name });
    });
    return newWorldItems;
}

module.exports = generateRandom