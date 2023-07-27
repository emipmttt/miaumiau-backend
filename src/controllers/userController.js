const jwt = require('jsonwebtoken');
const User = require('../models/User');

const get = async (req, res) => {
    try {
        const username = req.params.username;

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate access token
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Missing authorization header' });
        }

        const accessToken = authorizationHeader.split(' ')[1];

        try {
            // Verify the access token
            const decodedToken = jwt.verify(accessToken, process.env.SECRET);

            // Check if the user ID in the token matches the requested user ID
            if (decodedToken.username !== user.username.toString()) {
                return res.status(403).json({ message: 'Access denied' });
            }

            // Return the user data


            res.json({ username: user.username, admin: user.admin });
        } catch (error) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user data' });
    }
};

module.exports = { get };
