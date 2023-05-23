const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    nomEnfant: { type: String, required: true },
    prenomEnfant: { type: String, required: true },
    age: { type: Date, required: true },
    email: { type: String, required: true },
    telephone: { type: Number, required: true },
  },
  { timestamps: true }
);

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
