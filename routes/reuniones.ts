// const { Router } = require('express');
// const { postReuniones,getReuniones,putReuniones,deleteReuniones } = require('../controladores/reuniones');
// const { verificaRapido } = require('../middlewares/autenticacion')

import { Router } from 'express';
import { postReuniones,getReuniones,putReuniones,deleteReuniones } from '../controllers/reuniones';
import { verificaRapido } from '../middlewares/autenticacion';

const router = Router();


router.get('/', verificaRapido, getReuniones);
router.put('/:idreunion', verificaRapido, putReuniones);
router.post('/', verificaRapido ,postReuniones);
router.delete('/:idreunion', verificaRapido ,deleteReuniones);

router.get('/', verificaRapido, getReuniones);


export default router;
// module.exports = router;