const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');

router.use(auth);

router.post('/', product.create);
router.get('/', product.getAll);
router.get('/:id', product.getOne);
router.put('/:id', product.update);
router.delete('/:id', product.remove);

module.exports = router;