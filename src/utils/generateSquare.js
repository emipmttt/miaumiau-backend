const getRandomSecure = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = generateSquare = ({
    name,
    imagePath,
    marginTop,
    marginLeft,
    boxWidth,
    boxHeight,
    number,
    imageWidth,
    imageHeight,
    rangeFrom = 0,
    rangeTo = 2900,
    minGroupItems = 1,
    maxGroupItems = 10,
    gridSize = 32,
    zIndex
}) => {
    const fragment = document.createDocumentFragment();
    const existingItems = document.querySelectorAll('.world_item');
    const occupiedPositions = new Set();

    existingItems.forEach(item => {
        const itemX = parseInt(item.style.left);
        const itemY = parseInt(item.style.top);
        const itemWidth = parseInt(item.style.width);
        const itemHeight = parseInt(item.style.height);

        for (let x = itemX; x < itemX + itemWidth; x += gridSize) {
            for (let y = itemY; y < itemY + itemHeight; y += gridSize) {
                occupiedPositions.add(`${x},${y}`);
            }
        }
    });

    for (let i = 0; i < number; i++) {
        const groupSize = getRandomSecure(minGroupItems, maxGroupItems);
        const groupX = getRandomSecure(rangeFrom, rangeTo);
        const groupY = getRandomSecure(rangeFrom, rangeTo);

        let xCoord = groupX;
        let yCoord = groupY;

        for (let j = 0; j < groupSize; j++) {
            let attempts = 0;
            let positionFound = false;

            while (!positionFound && attempts < 10) {
                const direction = getRandomSecure(1, 4);

                switch (direction) {
                    case 1: // top
                        yCoord -= gridSize;
                        break;
                    case 2: // right
                        xCoord += gridSize;
                        break;
                    case 3: // bottom
                        yCoord += gridSize;
                        break;
                    case 4: // left
                        xCoord -= gridSize;
                        break;
                }

                const positionKey = `${xCoord},${yCoord}`;

                if (!occupiedPositions.has(positionKey)) {
                    positionFound = true;
                } else {
                    // undo the move if the position is already occupied
                    switch (direction) {
                        case 1: // top
                            yCoord += gridSize;
                            break;
                        case 2: // right
                            xCoord -= gridSize;
                            break;
                        case 3: // bottom
                            yCoord -= gridSize;
                            break;
                        case 4: // left
                            xCoord += gridSize;
                            break;
                    }

                    attempts++;
                }
            }

            if (!positionFound) {
                // could not find a free position after 10 attempts
                break;
            }

            // mark the position as occupied
            occupiedPositions.add(`${xCoord},${yCoord}`);

            // Calculate the position of the div on a 32x32 grid
            const gridX = Math.floor(xCoord / gridSize) * gridSize;
            const gridY = Math.floor(yCoord / gridSize) * gridSize;

            const isOccupied = Array.from(document.querySelectorAll(".world_item")).find((worldItem => {
                // console.log(itemLeft);
                // console.log(itemTop);

                // console.log(itemWidth);
                // console.log(itemHeight);

                const itemLeft = parseInt(worldItem.style.left)
                const itemTop = parseInt(worldItem.style.top)
                const itemWidth = parseInt(worldItem.style.width)
                const itemHeight = parseInt(worldItem.style.height)


                if ((gridX >= itemLeft && gridX < itemLeft + itemWidth)
                    && (gridY >= itemTop && gridY < itemTop + itemHeight)
                ) {
                    return true
                }

            }))

            if (isOccupied) { continue }

            const container = document.createElement("div");
            container.style.position = "absolute";
            container.style.left = `${parseInt(gridX)}px`;
            container.style.top = `${parseInt(gridY)}px`;
            container.style.zIndex = parseInt(yCoord);
            container.style.width = boxWidth;
            container.style.height = boxHeight;
            container.style.zIndex = zIndex;

            container.className = "world_item";
            container.dataset.name = name;

            const item = document.createElement("img");
            item.src = imagePath;
            item.style.marginTop = marginTop;
            item.style.marginLeft = marginLeft;

            if (imageWidth) {
                item.style.width = imageWidth + "px";
            }
            if (imageHeight) {
                item.style.height = imageHeight + "px";
            }

            container.appendChild(item);
            fragment.appendChild(container);
        }
    }

    document.querySelector(".world").appendChild(fragment);
};