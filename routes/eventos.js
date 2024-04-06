const { Router } = require('express');
const router = Router();
const { eventosGet, PromGet } =
    require('../controllers/evento');

router.get('/', eventosGet);

router.get('/promedio', PromGet);

module.exports = router;
