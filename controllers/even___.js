const { response } = require('express')
eventosGet = (req, res = response) => {
    res.json({
        msg: 'GET API'
    })
}

module.exports = {
    usuariosGet
}
