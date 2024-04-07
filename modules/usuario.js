const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    documento: {
        type: String,
        required: [true, 'El documento es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        minlength: 3,
        maxlength: [60, 'El password debe ser de máximo 7 y se obtuvo: { VALUE }'],
    },
    rol: {
        type: String,
        required: true,
        enum: ['Admin', 'Practicante', 'Cliente', 'Colaborador']
    }
})
module.exports = model('Usuario', UsuarioSchema);