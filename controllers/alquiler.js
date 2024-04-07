const { response } = require('express');
const Alquiler = require('../modules/alquiler');

const alquilerGet = async (req, res = response) => {
    const body = req.query;
    const { q, nombre, page = 1, limit } = req.query;
    const alquileres = await Alquiler.find();
    res.json({
        alquileres
    });
}

const alquilerPromGet = async (req, res = response) => {
    try {
        const { q, nombre, page = 1, limit } = req.query;
        const alquileres = await Alquiler.find();

        // Simplemente imprimir los alquileres en la consola para propósitos de demostración
        alquileres.forEach(alquiler => console.log(alquiler));

        // Devolver una respuesta JSON con la información solicitada y los alquileres encontrados
        res.json({
            msg: 'Prom API controlador',
            q,
            nombre,
            page,
            limit,
            alquileres
        });
    } catch (error) {
        // Manejar cualquier error que ocurra durante el proceso
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
}

const alquilerPut = async (req, res = response) => {
    try {
        const { direccion, fecha_entrega, fecha_retorno, estado, identificacion_cliente, nombreCompleto, telefono, enseres } = req.body;
        const { id } = req.params;

        // Verificar si el ID proporcionado es válido
        if (!id) {
            return res.status(400).json({ msg: 'ID de alquiler no proporcionado' });
        }

        // Verificar si el alquiler con el ID dado existe en la base de datos
        const alquiler = await Alquiler.findById(id);
        if (!alquiler) {
            return res.status(404).json({ msg: 'Alquiler no encontrado' });
        }

        // Actualizar los campos del alquiler con los valores proporcionados en el cuerpo de la solicitud
        alquiler.direccion = direccion;
        alquiler.fecha_entrega = fecha_entrega;
        alquiler.fecha_retorno = fecha_retorno;
        alquiler.estado = estado;
        alquiler.identificacion_cliente = identificacion_cliente;
        alquiler.nombreCompleto = nombreCompleto;
        alquiler.telefono = telefono;
        alquiler.enseres = enseres;

        // Guardar el alquiler actualizado en la base de datos
        await alquiler.save();

        // Devolver una respuesta JSON con un mensaje de éxito y el alquiler actualizado
        res.json({ msg: 'Alquiler Modificado', alquiler });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};


const alquilerDelete = async (req, res = response) => {
    try {
        const { id } = req.params;

        // Verificar si el ID proporcionado es válido
        if (!id) {
            return res.status(400).json({ msg: 'ID de alquiler no proporcionado' });
        }

        // Buscar y eliminar el alquiler con el ID dado de la base de datos
        const alquiler = await Alquiler.findOneAndDelete({ _id: id });
        
        // Verificar si se encontró y eliminó el alquiler
        if (!alquiler) {
            return res.status(404).json({ msg: 'Alquiler no encontrado' });
        }

        // Devolver una respuesta JSON con un mensaje de éxito y el alquiler eliminado
        res.json({ msg: 'Alquiler Eliminado', alquiler });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const alquilerPost = async (req, res = response) => {
    try {
        const { direccion, fecha_entrega, fecha_retorno, estado, identificacion_cliente, nombreCompleto, telefono, enseres } = req.body;

        // Crear una nueva instancia del modelo Alquiler con los datos proporcionados
        const alquiler = new Alquiler({
            direccion,
            fecha_entrega,
            fecha_retorno,
            estado,
            identificacion_cliente,
            nombreCompleto,
            telefono,
            enseres
        });

        // Guardar el nuevo alquiler en la base de datos
        await alquiler.save();

        // Devolver una respuesta JSON con un mensaje de éxito
        res.json({ msg: 'Alquiler Registrado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

module.exports = {
    alquilerGet,
    alquilerPost,
    alquilerPut,
    alquilerDelete,
    alquilerPromGet
}
