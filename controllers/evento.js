const { response } = require('express');
const bcrypt = require('bcryptjs');
const Evento = require('../modules/evento');
const Usuario = require('../modules/usuario'); // Importar el modelo de Usuario si no lo has hecho antes

const eventosGet = async (req, res = response) => {
    const { documento } = req.usuario; // Suponiendo que 'req.usuario' contiene la información del usuario
    try {
        const usuario = await Usuario.findOne({ documento }); // Buscar al usuario por su número de documento

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario no encontrado'
            });
        }

        const eventos = await Evento.find({ usuarios: documento }); // Filtrar eventos por el número de documento del usuario
        res.json({
            eventos
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
}

const PromGet = async (req, res = response) => {
    const { q, nombre, page = 1, limit } = req.query;
    const eventos = await Evento.find();
    eventos.forEach(numero => console.log(numero));
    res.json({
        msg: 'Prom API controlador',
        q,
        nombre,
        page,
        limit,
        eventos
    });
}

module.exports = {
    eventosGet,
    PromGet
}
