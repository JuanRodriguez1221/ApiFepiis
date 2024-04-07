const mongoose = require("mongoose");

const alquilerSchema = mongoose.Schema({
    direccion: String,
    fecha_entrega: String,
    fecha_retorno: String,
    estado: Number,
    identificacion_cliente: Number,
    nombreCompleto: String,
    telefono: Number,
    enseres: [
        {
            cantidad: Number,
            enser: String
        }
    ]
});

module.exports = mongoose.model('Alquiler', alquilerSchema);
