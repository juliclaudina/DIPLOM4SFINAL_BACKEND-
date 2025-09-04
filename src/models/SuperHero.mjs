import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
  nombreComun: { 
    type: String, 
    required: [true, "El nombre común del superhéroe es obligatorio"], 
    trim: true,
    minlength: [2, "El nombre común debe tener al menos 2 caracteres"], 
    maxlength: [60, "El nombre común no puede tener más de 60 caracteres"]
  },
  nombreReal: { 
    type: String, 
    required: [true, "El nombre real del superhéroe es obligatorio"], 
    trim: true,
    minlength: [2, "El nombre real debe tener al menos 2 caracteres"], 
    maxlength: [60, "El nombre real no puede tener más de 60 caracteres"]
  },
  genero: { 
    type: String, 
    default: "Desconocido" 
  },
  raza: { 
    type: String, 
    default: "Desconocida" 
  },
  ocupacion: { 
    type: String, 
    default: "Desconocida" 
  },
  creador: { 
    type: String, 
    default: "Julieta" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const SuperHero = mongoose.model('SuperHero', superheroSchema);

export default SuperHero;
