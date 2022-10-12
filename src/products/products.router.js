const router = require('express').Router()

const productServices = require('./products.services')

router.get('/', productServices.getAllProducts)
router.post('/', productServices.postProduct)

router.get('/:id', productServices.getProductById)
router.patch('/:id', productServices.patchProduct)


module.exports = router