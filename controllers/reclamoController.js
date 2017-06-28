var models = require('../models/models.js');
var hoy = new Date();
var dd = hoy.getDate();
var mm = hoy.getMonth()+1;
var yyyy = hoy.getFullYear();

exports.principal = function(req, res, next) {
                 models.reclamo.findAll().then( function(reclamos){
                       res.render('index',{ title:'Proyecto Final',
                         subtitle: 'Avances en computacion',
                          reclamos: reclamos
                             });
                              });


					 }
exports.registroReclamo = function(req, res) {
  var reclamo = {tipoReclamo:'odeco',observacion:'mal servicio',fecha:'30/11/2016'}
 		              res.render('registro', {reclamo:reclamo});
                  

		   };


exports.buscarFecha = function(req, res){
  var fechasBuscar = req.body.fechasBuscar;
  models.reclamo.findAll().then( function(reclamos){
        res.render('repuesta',{  fechasBuscar:fechasBuscar, reclamos:reclamos});
               });
}
       

exports.fechaReclamo = function(req, res) {
  var fechasBuscar = '31/11/2016';
                    models.reclamo.findAll().then(function(reclamos){
                    res.render('fechas',{ fechasBuscar:fechasBuscar, reclamos: reclamos});

                          });

          }




exports.guardarReclamo = function(req, res) {

	console.log("ingresa a guardar");
	reclamo = models.reclamo.build (req.body.reclamo);
    //a continuacion guardamos los campos que recibimos del formulario
    reclamo.save	({fields:["tipoReclamo",
    					      "observacion",
    					      "fecha"

    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirect");
    			 	res.render('respuestaReclamo', {mensaje:'Se registro el reclamo con exito'});
    			 });
console.log(reclamo);
                                              };
