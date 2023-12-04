const router = require('express').Router()
const Product = require('../../models/Product')

// Middleware to validate mandatory fields
const validateProductFields = (req, res, next) => {
    const { name, price, description } = req.body

    if (!name || !price || !description) {
        return res.status(400).json({ error: 'Missing required fields' })
    }

    next()
}

// Middleware to validate that the ID is valid
const validateProductId = (req, res, next) => {
    const productId = req.params.id

    if (!productId.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(400).json({ error: 'Invalid product ID' })
    }

    next()
}

// Create a new product
router.post('/', validateProductFields, async (req, res) => {
    const { name, price, description } = req.body
    
    const product = {
        name,
        price,
        description,
    }

    try {
        console.log('Creating the product');
        const createdProduct = await Product.create(product)
        res.status(201).json({ message: 'Product created!', product: createdProduct })
    } catch (error) {
        console.error('Error creating the product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Get all products
router.get('/', async (req, res) => {
    try {
        console.log('Listing the products');
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Edit a product
router.put('/:id', validateProductId, validateProductFields, async (req, res) => {
    const productId = req.params.id
    const { name, price, description } = req.body

    try {
        console.log('Editing the product');
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, price, description },
            { new: true }
        )

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.status(200).json({ message: 'Product updated', product: updatedProduct })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Delete a product
router.delete('/:id', validateProductId, async (req, res) => {
    const productId = req.params.id

    try {
        console.log('Deleting the product');
        const deletedProduct = await Product.findByIdAndDelete(productId)

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' })
        }

        res.status(200).json({ message: 'Product deleted', product: deletedProduct })
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Get products with price above a specified value
router.get('/above-price/:minPrice', async (req, res) => {
    const minPrice = parseFloat(req.params.minPrice)

    if (isNaN(minPrice)) {
        return res.status(400).json({ error: 'Invalid minPrice parameter' })
    }

    try {
        const productsAbovePrice = await Product.find({ price: { $gt: minPrice } })
        res.status(200).json(productsAbovePrice)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Get products with a specific keyword in the description
router.get('/by-keyword/:keyword', async (req, res) => {
    const keyword = req.params.keyword

    if (!keyword) {
        return res.status(400).json({ error: 'Missing keyword parameter' })
    }

    try {
        const productsByKeyword = await Product.find({
            description: { $regex: new RegExp(keyword, 'i') }
        })
        res.status(200).json(productsByKeyword)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router
