// app.js
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(function(req, res, next) {
  const allowedOrigins = ['https://api-edr-production.up.railway.app', 'https://ecole.rugbymarseille.com', 'http://127.0.0.1:5500'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  }
  // Autres en-têtes CORS et logique de traitement
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
