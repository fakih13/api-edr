const express = require('express');
const router = express.Router();

// Importez le modèle de données et les contrôleurs nécessaires
const UserData = require('./models/UserData');
const { saveUserData, getAllUserData } = require('./controllers/userController');

// Route POST pour sauvegarder les données utilisateur
router.post('/api/formdata', saveUserData);

// Route GET pour afficher les données utilisateur
router.get('/api/formdata', getAllUserData);

module.exports = router;