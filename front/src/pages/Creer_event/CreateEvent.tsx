import { useNavigate } from 'react-router';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import './CreateEvent.css';

export function CreateEvent() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    price: '',
    DateDebut: '',
    DateFin: '',
    image: null as File | null, // ✅ Définit l'image correctement
  });

  const [preview, setPreview] = useState<string | null>(null); // ✅ Aperçu de l'image

  // ✅ Gérer les changements des champs texte et numériques
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Gérer l'upload d'image
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file)); // ✅ Génère un aperçu
    }
  };

  // ✅ Gérer la soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Événement créé avec succès :", formData);
    alert("Événement créé avec succès !");
    navigate('/events'); // ✅ Redirige vers la liste des événements
  };

  return (
    <view className="create-event-page">
      {/* ✅ Titre et bouton retour */}
      <view className="event-header">
        <text className="event-back-btn" bindtap={() => navigate('/')}>←</text>
        <text className="event-title">Créer un événement</text>
      </view>

      {/* ✅ Formulaire */}
      <view className="event-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" className="event-input" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" className="event-input" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Adresse" className="event-input" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Tarif" className="event-input" onChange={handleChange} required />
        <input type="date" name="DateDebut" placeholder="Date debut" className="event-input" onChange={handleChange} required />
        <input type="date" name="DateFin" placeholder="Date fin" className="event-input" onChange={handleChange} required />

        {/* ✅ Champ d'upload d'image */}
        <input type="file" accept="image/*" className="event-input-file" onChange={handleImageChange} />

        {/* ✅ Affichage de l'aperçu de l'image sélectionnée */}
        {preview && <img src={preview} alt="Aperçu de l'événement" className="event-image-preview" />}

        {/* ✅ Bouton de soumission */}
        <text bindtap={() => console.log("create")} className="event-submit-btn">Créer l'événement</text>
      </view>
    </view>
  );
}

export default CreateEvent;
