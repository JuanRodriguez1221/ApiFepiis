const { response } = require('express');
const Evento = require('../modules/evento');
const Usuario = require('../modules/usuario');

const eventosGet = async (req, res = response) => {
    const { documento } = req.usuario; 
    try {
        const usuario = await Usuario.findOne({ documento }); 

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            });
        }

        const eventos = await Evento.find({ usuarios: documento }); 
        res.json({
            eventos
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
}

module.exports = {
    eventosGet,
}
