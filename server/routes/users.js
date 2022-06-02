var express = require('express');
const controller = require("../controllers/UsersController")
const middleware = require("../middlewares/AvatarUpload")
var router = express.Router();

router.get('/', controller.index);

router.get('/adicionar', controller.add);
router.post('/adicionar', middleware.upload, controller.create);

router.get('/:id/editar', controller.edit);
router.put('/:id/editar', middleware.upload, controller.update);

router.get('/:id/apagar', controller.exclude);
router.delete('/:id/apagar', controller.delete);

router.get('/:id', controller.show);

module.exports = router;
