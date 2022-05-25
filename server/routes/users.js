var express = require('express');
const controller = require("../controllers/UsersController")
var router = express.Router();

router.get('/', controller.index);
router.get('/adicionar', controller.add);
router.get('/:id/editar', controller.edit);
router.get('/:id/apagar', controller.exclude);
router.get('/:id', controller.show);

module.exports = router;
