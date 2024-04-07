const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nombre_evento: String,
  lugar: String,
  fecha: String,
  hora_inicio: String,
  hora_fin: String,
  descripcion: String,
  usuarios: [String]
});

module.exports = mongoose.model('Evento', eventoSchema);

