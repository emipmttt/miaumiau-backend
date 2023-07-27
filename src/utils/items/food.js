module.exports = {
    wineWoodGlass: {
        health: 1,
        healthIncrease: 1,
        drop: [{
            name: "wineWoodGlass", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 16,
        imageHeight: 16,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        food: true,
        requiresToCraft: [
            { name: "woodGlass", quantity: 1 },
            { name: "grapes", quantity: 2 }
        ]
    },
    apple: {
        health: 1,
        healthIncrease: 1,
        drop: [{
            name: "apple", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 16,
        imageHeight: 16,
        buildable: true,
        hitable: true,
        solid: true,
        food: true,
        grow: "appleTree",
        growPoints: 30,
    },
    berryWoodGlass: {
        health: 1,
        healthIncrease: 2,
        drop: [{
            name: "berryWoodGlass", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 16,
        imageHeight: 16,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        food: true,
        requiresToCraft: [
            { name: "woodGlass", quantity: 1 },
            { name: "berry", quantity: 2 }
        ]
    },
    bread: {
        health: 1,
        healthIncrease: 3,
        drop: [{
            name: "bread", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        food: true,
        requiresToCraft: [
            { name: "wheat", quantity: 3 },
        ]
    },
    cowMeat: {
        health: 1,
        healthIncrease: 5,
        drop: [{
            name: "cowMeat", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        solid: true,
        food: true,
    },
    egg: {
        health: 1,
        healthIncrease: 1,
        drop: [{
            name: "egg", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        solid: true,
        food: true,
    },
    cookedEgg: {
        health: 1,
        healthIncrease: 2,
        drop: [{
            name: "cookedEgg", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        solid: true,
        food: true,
        craftable: true,
        requiresToCraft: [
            { name: "egg", quantity: 1 },
        ]
    },
    croissant: {
        health: 1,
        healthIncrease: 4,
        drop: [{
            name: "croissant", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        solid: true,
        food: true,
        craftable: true,
        requiresToCraft: [
            { name: "wheat", quantity: 3 },
            { name: "egg", quantity: 1 },
        ]
    },
}