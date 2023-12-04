const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productRoutes = require('./src/routes/productRoutes');
app.use('/product', productRoutes);

// Main route
app.get('/', (req, res) => {
    res.json({ message: 'Main route'});
});

module.exports = app;