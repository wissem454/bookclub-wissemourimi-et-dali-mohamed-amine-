const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// URI MongoDB depuis les variables d'environnement
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        // Connexion à MongoDB sans options obsolètes
        await mongoose.connect(uri);
        console.log("Connexion à MongoDB Atlas réussie");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB Atlas:", error.message);
        process.exit(1); // Quitter l'application en cas d'échec de la connexion
    }
};

module.exports = connectDB;


module.exports = connectDB;
