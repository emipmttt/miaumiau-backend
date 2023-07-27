module.exports = {
    tree: {
        health: 10,
        drop: [
            { name: "wood", quantity: [10, 16] },
            { name: "treeSeed", quantity: [1, 2] }
        ],
        // sizes
        marginTop: -184,
        marginLeft: -64,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 192,
        imageHeight: 256,
        // ends sizes
        buildable: true,
        hitable: true,
        solid: true,
        hitSound: "tree"
    },
    appleTree: {
        health: 13,
        drop: [
            { name: "wood", quantity: [5, 12] },
            { name: "apple", quantity: [1, 3] }
        ],
        // sizes
        marginTop: -184,
        marginLeft: -64,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 192,
        imageHeight: 256,
        // ends sizes
        buildable: true,
        hitable: true,
        solid: true,
        hitSound: "tree"

    },
    wood: {
        health: 3,
        drop: [{ name: "wood", quantity: 1 }],
        buildable: true,
        hitable: true,
        solid: true,
        hitSound: "tree"


    },
    treeSeed: {
        health: 1,
        drop: [{ name: "treeSeed", quantity: 1 }],
        buildable: true,
        hitable: true,
        grow: "tree",
        growPoints: 20,

    },
    bush: {
        health: 4,
        drop: [
            { name: "wood", quantity: 1 },
            { name: "bushSeed", quantity: [0, 2] }
        ],
        // sizes
        marginTop: 0,
        marginLeft: 0,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        // ends sizes
        buildable: true,
        solid: true,
        hitable: true,
        hitSound: "bush"
    },
    bushSeed: {
        health: 1,
        drop: [{ name: "bushSeed", quantity: 1 }],
        buildable: true,
        grow: "bush",
        growPoints: 10,
        hitable: true,
    },
    berryBush: {
        health: 6,
        drop: [
            { name: "wood", quantity: [0, 1] },
            { name: "berry", quantity: [1, 3] },
            { name: "berryBushSeed", quantity: [0, 2] }
        ],
        // sizes
        marginTop: 0,
        marginLeft: 0,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        // ends sizes
        buildable: true,
        solid: true,
        hitable: true,
        hitSound: "bush"

    },
    berry: {
        health: 1,
        buildable: true,
        hitable: true,
        drop: [
            { name: "berry", quantity: 1 },
        ],
        food: true,
        solid: true,
        healthIncrease: 1,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 32,
        imageHeight: 32,
    },
    grapesBush: {
        health: 7,
        drop: [
            { name: "wood", quantity: [0, 1] },
            { name: "grapes", quantity: [5, 10] },
        ],
        // sizes
        marginTop: 0,
        marginLeft: 0,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        // ends sizes
        buildable: true,
        solid: true,
        hitable: true,
        hitSound: "bush"

    },
    grapes: {
        health: 1,
        grow: "grapesBush",
        growPoints: 20,
        buildable: true,
        drop: [
            { name: "grapes", quantity: 1 },
        ],
        food: true,
        solid: true,
        healthIncrease: 1,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 32,
        imageHeight: 32,

    },
    berryBushSeed: {
        health: 1,
        drop: [{ name: "berryBushSeed", quantity: 1 }],
        buildable: true,
        grow: "berryBush",
        growPoints: 15,
        hitable: true,
    },
    stone: {
        health: 15,
        drop: [{ name: "stoneFragment", quantity: [8, 12] }],
        buildable: true,
        solid: true,
        hitable: true,
        hitSound: "stone",
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,

    },
    stoneFragment: {
        health: 5,
        drop: [{ name: "stoneFragment", quantity: 1 }],
        buildable: true,
        solid: true,
        hitable: true,
        hitSound: "stone"

    },

    yellowFlowers: {
        health: 1,
        drop: [{ name: "yellowFlowers", quantity: 1 }],
        buildable: true,
        hitable: true,
        hitSound: "flawer"

    },
    redFlowers: {
        health: 1,
        drop: [{ name: "redFlowers", quantity: 1 }],
        buildable: true,
        hitable: true,
        hitSound: "flawer"
    },
    wheat: {
        health: 3,
        drop: [
            { name: "wheatSeed", quantity: [1, 2] },
            { name: "wheat", quantity: 1 },
        ],
        // sizes
        marginTop: 0,
        marginLeft: 0,
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        // ends sizes
        buildable: false,
        hitable: true,
        hitSound: "flawer"

    },
    wheatSeed: {
        health: 1,
        drop: [
            { name: "wheatSeed", quantity: 1 },
        ],
        buildable: true,
        hitable: true,
        grow: "wheat",
        // When growPoints increase to 5 it is transformed into the grow item
        growPoints: 5
    },
    water: {
        buildable: false,
        hitable: false,
        terrain: true,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64
    },
    dirt: {
        buildable: true,
        hitable: true,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        terrain: true,
        drop: [
            { name: "dirt", quantity: 1 },
        ]
    },
    sand: {
        buildable: true,
        hitable: true,
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        terrain: true,
        drop: [
            { name: "sand", quantity: 1 },
        ]
    },
};
