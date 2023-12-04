const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    description: String,
});

module.exports = Product;