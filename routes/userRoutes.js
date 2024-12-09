const express = require('express');
const { registerUser, loginUser } = require('../cotrollers/userController'); // Assurez-vous du bon chemin relatif

const router = express.Router();

// Route pour l'enregistrement d'un utilisateur
router.post('/register', registerUser);

// Route pour la connexion d'un utilisateur
router.post('/login', loginUser);

module.exports = router;
