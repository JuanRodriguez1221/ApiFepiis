const { Schema, model } = require('mongoose');
const EventoSchema = Schema({
    nombre_evento: {
        type: String,
        required: [true, 'El nombre del evento es obligatorio']
    },
    lugar: {
        type: String,
        required: [true, 'El lugar del evento es obligatorio']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria'],
    },
    hora_inicio: {
        type: String,
        required: [true, 'La hora de inicio es obligatoria']
    },
    hora_fin: {
        type: String,
        required: [true, 'La hora de fin es obligatoria']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    usuarios: {
        type: Array,
    },
})
module.exports = model('Evento', EventoSchema);