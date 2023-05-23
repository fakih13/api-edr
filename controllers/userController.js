const UserData = require('../models/UserData');

// Contrôleur pour la route POST
const saveUserData = async (req, res) => {
  const{nom, prenom, nomEnfant, prenomEnfant,age, email, telephone}= req.body
  // Code de récupération des données utilisateur
  try {
    const parent = await UserData.create({nom, prenom, nomEnfant,age,prenomEnfant, email, telephone})
    res.status(200).json(parent)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

// Contrôleur pour la route GET
const getAllUserData = async (req, res) => {
  const parent = await UserData.find({}).sort({createdAt:-1})
  res.status(200).json(parent)
};

module.exports = { saveUserData, getAllUserData };