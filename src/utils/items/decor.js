module.exports = {
    bed: {
        health: 10,
        drop: [{
            name: "bed", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 100,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "wood", quantity: 40 }
        ],
        hitSound: "tree"

    },
    woodTable: {
        health: 10,
        drop: [{
            name: "woodTable", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 80,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        requiresToCraft: [
            { name: "wood", quantity: 10 }
        ],
        hitSound: "tree"

    },
    woodGlass: {
        health: 1,
        drop: [{
            name: "woodGlass", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 16,
        imageHeight: 16,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        requiresToCraft: [
            { name: "wood", quantity: 2 }
        ]

    },
    woodDish: {
        health: 1,
        drop: [{
            name: "woodDish", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        craftable: true,
        solid: true,
        requiresToCraft: [
            { name: "wood", quantity: 2 }
        ]
    },
    woodFloor: {
        health: 4,
        drop: [{
            name: "woodFloor", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "wood", quantity: 3 }
        ],
        hitSound: "tree"

    },
    stoneRoad: {
        health: 2,
        drop: [{
            name: "stoneRoad", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "stoneFragment", quantity: 2 }
        ],
        hitSound: "stone"

    },
    well: {
        health: 8,
        drop: [{
            name: "well", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "stoneFragment", quantity: 4 },
            { name: "wood", quantity: 6 },
            { name: "stick", quantity: 4 }
        ],
        hitSound: "stone"

    },
    bucket: {
        health: 4,
        drop: [{
            name: "bucket", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "wood", quantity: 4 },
        ],
        hitSound: "wood"

    },
    bucketWater: {
        health: 4,
        drop: [{
            name: "bucketWater", quantity: 1
        }],
        boxWidth: 32,
        boxHeight: 32,
        imageWidth: 32,
        imageHeight: 32,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "bucket", quantity: 1 },
        ],
        hitSound: "wood"

    },
    woodWall: {
        health: 4,
        drop: [{
            name: "woodWall", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "wood", quantity: 4 }
        ],
        solid: true,
        variantNames: [
            {
                name: "woodWallLeft",
                boxWidth: 8,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodWallRight",
                boxWidth: 8,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 8,
            },
            {
                name: "woodWall",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            }
        ],
        hitSound: "tree"

    },
    stoneFloor: {
        health: 4,
        drop: [{
            name: "stoneFloor", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "stoneFragment", quantity: 4 }
        ]
    },
    stoneWall: {
        health: 6,
        drop: [{
            name: "stoneWall", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "stoneFragment", quantity: 5 }
        ],
        solid: true,
        variantNames: [
            {
                name: "stoneWallLeft",
                boxWidth: 14,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "stoneWallRight",
                boxWidth: 14,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 14,
            },
            {
                name: "stoneWall",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            }
        ]
    },
    woodFence: {
        health: 4,
        drop: [{
            name: "woodFence", quantity: 1
        }],
        boxWidth: 64,
        boxHeight: 64,
        imageWidth: 64,
        imageHeight: 64,
        buildable: true,
        hitable: true,
        craftable: true,
        requiresToCraft: [
            { name: "wood", quantity: 4 }
        ],
        solid: true,
        hitSound: "tree",
        variantNames: [
            {
                name: "woodFenceRightTop",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFenceRight",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFenceRightBottom",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFence",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFenceLeftBottom",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFenceLeft",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFenceLeftTop",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
            {
                name: "woodFence",
                boxWidth: 64,
                boxHeight: 64,
                marginTop: 0,
                marginLeft: 0,
            },
        ]
    },
};

