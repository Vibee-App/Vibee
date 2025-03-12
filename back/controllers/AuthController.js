const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/Account.js');
const { use } = require('../routes/UserRoute.js');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const fixedSalt = '$2a$10$zH2xEUp0fS7ZMYaxre91P.';  // Sel fixe

// Fonction pour hacher un mot de passe avec un sel fixe
const hashPassword = (password) => {
  const hash = crypto.createHmac('sha256', fixedSalt);  // Hachage avec SHA-256 et le sel
  hash.update(password);  // Mise à jour avec le mot de passe
  return hash.digest('hex');  // Retourner le hachage hexadécimal
};

// Inscription d'un nouvel utilisateur
const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Hachage du mot de passe avec le sel fixe
    const hashedPassword = hashPassword(password);
    const user = new User({ email: username, password: hashedPassword });
    console.log(user)
    // Sauvegarde de l'utilisateur
    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Fonction pour connecter un utilisateur
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ where: { email: username } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    console.log(user.email)
    console.log(user)
    // Hachage du mot de passe entré par l'utilisateur avec le même sel
    const hashedPassword = hashPassword(password);

    console.log("Mot de passe haché de l'utilisateur :", hashedPassword);
    console.log("Mot de passe stocké dans la base :", user.password);

    // Comparaison entre le mot de passe haché et celui stocké en base
    if (hashedPassword === user.password) {
      const token = jwt.sign({ id: user.id, username: user.email, role: user.role }, secretKey, { expiresIn: '1h' });
      return res.json({ token });
    } else {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }
  } catch (error) {
    console.error("Erreur serveur:", error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { login, register };
