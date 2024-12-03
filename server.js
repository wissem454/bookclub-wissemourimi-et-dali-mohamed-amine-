require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const connectDB = require('./config/db');  // Import the MongoDB connection logic
const userRoutes = require('./routes/userRoutes');  // Import the routes

const app = express();

// Use a different port if 3000 is taken (fallback to process.env.PORT or 3000)
const port = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();  // Call the connectDB function to establish a connection

// Use user routes
app.use('/api/users', userRoutes);  // All user-related routes will now be prefixed with '/api/users'

// Root route
app.get('/', (req, res) => {
    res.send('Hello World! Your server is up and running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

