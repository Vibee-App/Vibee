const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Account = require('../models/Account.js');
const User = require('../models/User.js')
const Company = require('../models/Company');
const { use } = require('../routes/UserRoute.js');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const fixedSalt = '$2a$10$zH2xEUp0fS7ZMYaxre91P.';  // Sel fixe

// Fonction pour hacher un mot de passe avec un sel fixe
const hashPassword = (password) => {
  const hash = crypto.createHmac('sha256', fixedSalt);  
  hash.update(password);  
  return hash.digest('hex');  
};

const registerUser = async (req, res) => {
  const { username, password, firstname, lastname, age } = req.body;

  // Vérification des champs requis
  if (!username || !password || !firstname || !lastname || !age) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    // Hachage du mot de passe
    const hashedPassword = hashPassword(password);

    // Création du compte (Account)
    const account = await Account.create({ email: username, password: hashedPassword });

    // Création de l'utilisateur lié à ce compte
    const user = await User.create({
      accountId: account.id,
      firstName: firstname, 
      lastName: lastname, 
      age
      
    });

    res.status(201).json({ message: 'Utilisateur créé avec succès', account, user });

  } catch (error) {
    console.error("Erreur serveur:", error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
};

const registerCompany = async (req, res) => {
  const { username, password, name, adresse, siret, phoneNumber, webSite } = req.body;

  // Vérifier que les champs obligatoires sont fournis
  if (!username || !password || !name || !adresse || !siret) {
    return res.status(400).json({ message: 'Tous les champs requis ne sont pas fournis' });
  }

  try {
    // Hash du mot de passe
    const hashedPassword = hashPassword(password);

    // Création du compte
    const account = await Account.create({ email:username, password: hashedPassword });

    // Construction de l'objet Company (ajout des champs optionnels seulement s'ils existent)
    const companyData = {
      accountId: account.id,
      name,
      adresse,
      siret,
    };

    if (phoneNumber) companyData.phoneNumber = phoneNumber;
    if (webSite) companyData.webSite = webSite;

    // Création de la compagnie avec les données conditionnelles
    const company = await Company.create(companyData);

    res.status(201).json({ message: 'Entreprise créée avec succès', company });
  } catch (error) {
    console.error("Erreur serveur:", error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { registerCompany };


const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await Account.findOne({ where: { email: username } });
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    const hashedPassword = hashPassword(password);
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

module.exports = { login,registerUser,registerCompany };
