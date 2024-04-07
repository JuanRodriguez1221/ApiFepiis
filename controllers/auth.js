const Usuario = require('../modules/usuario')
const bcrypt = require('bcryptjs')

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

const login = async (req, res) => {
    const { documento, password } = req.body

    const usuario = await Usuario.findOne({ documento })
    try {
        if (!usuario) {
            return res.status(400).json({
                msg: 'Documento no encontrado'
            })
        }

        resultado = await comparePassword(password, usuario.password)

        if (resultado == true) {
            return res.status(400).json({
                msg: 'El password es correcto'
            })
        }
        else {
            return res.status(400).json({
                msg: 'El password es incorrecto'
            })

        }

    } catch (err) {
        return res.status(400).json({
            msg: 'Apreciado usuario contacte al administrador.' // 
        })

    }

}

module.exports = {
    login
}
