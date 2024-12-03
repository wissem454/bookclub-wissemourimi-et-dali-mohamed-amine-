const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// MongoDB URI from environment variables
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        // Connect to MongoDB Atlas using the URI
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to MongoDB Atlas");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error.message);
        process.exit(1); // Exit the application if connection fails
    }
};

module.exports = connectDB;
