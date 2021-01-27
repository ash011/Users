var express = require('express');
var router = express.Router();
const UserControler = require('../controlers/user.controler');

router.get('/', UserControler.getAll);
router.post('/', UserControler.create);
router.get('/:id', UserControler.getOne);
router.put('/', UserControler.update);
router.delete('/', UserControler.remove);

module.exports = router;
