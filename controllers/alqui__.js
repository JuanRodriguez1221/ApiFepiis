const { response } = require('express');

const alquilerGet = (req, res = response) => {
    res.json({
        msg: 'GET Alquiler API'
    });
};

module.exports = {
    alquilerGet
};
