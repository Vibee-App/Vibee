const User = require('../models/Account');

// Exemple pour récupérer un utilisateur par son ID (protégé par JWT et rôles)
const getUserById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};



module.exports = { getUserById };
