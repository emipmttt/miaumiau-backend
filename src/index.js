const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const worldRoutes = require('./routes/world');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
console.log(process.env.BD_PASSWORD);
// Connect to MongoDB
mongoose.connect(`mongodb+srv://mushipolix:${process.env.BD_PASSWORD}@cluster0.pqngo.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/world', worldRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
