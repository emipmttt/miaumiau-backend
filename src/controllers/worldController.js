const jwt = require('jsonwebtoken');
const World = require('../models/World');
const generateRandom = require('../utils/generateRandom');
const generateSquare = require('../utils/generateSquare');

const itemDetails = require('../utils/items/itemDetails')
const create = async (req, res) => {
    try {
        const { name, size, passphrase } = req.body;

        // Validate access token
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        try {
            // Verify the access token
            jwt.verify(accessToken, process.env.SECRET);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid access token' });
        }

        try {

            let worldItems = []
            worldItems = generateRandom("tree", size / 3, 0, size, worldItems)
            worldItems = generateRandom("bush", size / 4, 0, size, worldItems)
            worldItems = generateRandom("berryBush", size / 5, 0, size, worldItems)
            worldItems = generateRandom("grapesBush", size / 5, 0, size, worldItems)
            worldItems = generateRandom("appleTree", size / 5, 0, size, worldItems)
            worldItems = generateRandom("yellowFlowers", size / 5, 0, size, worldItems)
            worldItems = generateRandom("redFlowers", size / 5, 0, size, worldItems)
            worldItems = generateRandom("stone", size / 5, 0, size, worldItems)
            worldItems = generateSquare("water", size / 5, 0, size, worldItems)

            // Create a new world
            const world = new World({
                name,
                size,
                passphrase,
                items: worldItems
            });

            // Save the world to the database
            const savedWorld = await world.save();
            // Return the created world
            res.json(savedWorld);

        } catch (error) {
            if (error.message.includes("E11000")) {
                return res.status(500).json({ message: "There is another world with that name alredy" });
            } else {
                console.log(error)
                return res.status(500).json({ message: 'Failed to create world' });
            }
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Failed to create world' });
    }
};

const get = async (req, res) => {
    try {
        const worldName = req.params.name;

        // Validate access token
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        try {
            // Verify the access token
            jwt.verify(accessToken, process.env.SECRET);

            // Find the world by name
            const world = await World.findOne({ name: worldName });

            if (!world) {
                return res.status(404).json({ message: 'World not found' });
            }

            // Return the world data
            res.json(world);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch world data' });
    }
};


const list = async (req, res) => {
    try {
        // Validate access token
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        try {
            // Verify the access token
            jwt.verify(accessToken, process.env.SECRET);

            // Pagination parameters
            const page = parseInt(req.query.page) || 1; // Current page number
            const limit = parseInt(req.query.limit) || 10; // Number of worlds per page

            // Calculate skip value based on page and limit
            const skip = (page - 1) * limit;

            // Filter parameters
            const filters = {};

            // Check if filters exist in query parameters
            if (req.query.name) {
                filters.name = { $regex: req.query.name, $options: 'i' };
            }

            // Find worlds with filters and pagination
            const worlds = await World.find(filters)
                .select('-items') // Exclude the 'items' property
                .skip(skip)
                .limit(limit);

            // Count total number of worlds with filters
            const totalWorlds = await World.countDocuments(filters);

            // Calculate total number of pages
            const totalPages = Math.ceil(totalWorlds / limit);

            // Return the paginated and filtered list of worlds
            res.json({
                worlds,
                currentPage: page,
                totalPages,
                totalWorlds,
            });
        } catch (error) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch worlds data' });
    }
};

const getItemDetails = async (req, res) => {
    try {
        // Validate access token
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        try {
            // Verify the access token
            jwt.verify(accessToken, process.env.SECRET);

            res.json(
                itemDetails
            );
        } catch (error) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch worlds data' });
    }
};

module.exports = { create, get, list, getItemDetails };

