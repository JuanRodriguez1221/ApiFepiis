const { Router } = require('express');
const router = Router();
const { alquilerGet, alquilerPost, alquilerPut, alquilerDelete, alquilerPromGet  } =
    require('../controllers/alquiler');

router.get('/', alquilerGet);
router.get('/promedio', alquilerPromGet);
router.post('/', alquilerPost);
router.put('/', alquilerPut);
router.delete('/', alquilerDelete);

module.exports = router;
