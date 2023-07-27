module.exports = {
    cow: {
        health: 12,
        boxWidth: 80,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        hitable: true,
        craftable: false,
        solid: true,
        drop: [
            { name: "cowMeat", quantity: [1, 3] },
        ],
        hitSound: "cow"

    },
    sheep: {
        health: 8,
        boxWidth: 80,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        hitable: true,
        craftable: false,
        solid: true,
        drop: [
            { name: "cowMeat", quantity: [1, 2] },
        ],
    },
    hen: {
        health: 3,
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        hitable: true,
        craftable: false,
        solid: true,
        drop: [
            { name: "egg", quantity: [1, 2] },
        ],
    },
}