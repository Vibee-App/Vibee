const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY; // Remplacez par votre propre clé secrète

// Middleware pour vérifier le token JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Accès refusé. Token requis.' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide.' });
    }
    req.user = user;
    next();
  });
};

// Middleware pour vérifier les rôles d'un utilisateur
const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Accès interdit.' });
    }
    next();
  };
};

module.exports = { authenticateJWT, authorizeRole };
