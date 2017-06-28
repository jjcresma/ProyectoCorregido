var express = require('express');
var router = express.Router();
var reclamoController = require('../controllers/reclamoController');

/* GET home page. */
router.get('/principal',reclamoController.principal);
router.get('/registroReclamo',reclamoController.registroReclamo);
router.post('/guardar', reclamoController.guardarReclamo);
router.post('/buscarFecha', reclamoController.fechaReclamo)
router.get('/fechas',reclamoController.fechaReclamo);

module.exports = router;
