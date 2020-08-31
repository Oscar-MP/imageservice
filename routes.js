'use strict'


var express     = require('express');
var controller  = require('./controller.js');
var router      = express.Router();



// Static routes

router.get('/',             controller.root_request);     // Return information about the microservice.
router.get('/image/:id',    controller.get_image);        // Shows an image
router.get('/images',       controller.get_images);       // Watch out, only admin allowed
router.post('/image',       controller.upload_image);     // Uploads an image
router.put('/image/:id',    controller.update_image);     // Update an image
router.delete('/image/:id', controller.remove_image)      // Removes an image

router.get('*', controller.image_not_found);              // Not found image

module.exports = router;
