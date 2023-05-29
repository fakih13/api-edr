// app.js
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://api-edr-production.up.railway.app'); // Remplacez l'URL par l'URL de votre site
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importez les routes depuis le fichier routes.js
const routes = require('./routes');

// Utilisez les routes dans votre application
app.use(routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}.`);
});
