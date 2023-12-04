const request = require('supertest');
const app = require('../index');

// Test for create a new product
describe('POST /product', () => {
    beforeAll(() => {
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
    });

    it('should create a new product and return 201 status', async () => {
        const newProduct = {
            name: 'Test Product',
            price: 100,
            description: 'Product description',
        };

        const response = await request(server)
            .post('/product')
            .send(newProduct);

        expect(response.statusCode).toBe(201);
    });
});

// Test for list all products
describe('GET /product', () => {
    beforeAll(() => {
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
    });

    it('should return all products and a 200 status', async () => {
        const response = await request(server)
            .get('/product');

        expect(response.statusCode).toBe(200);
    });
});

// Test for update a product by id
describe('PUT /product/:id', () => {
    beforeAll(() => {
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
    });

    it('should update a product and return 200 status', async () => {
        const updateProduct = {
            name: 'Test Product Updated',
            price: 100,
            description: 'Product description',
        };

        const response = await request(server)
            .put('/product/656ddbba8de058978199cef8') // Insert a ID valid
            .send(updateProduct);

        expect(response.statusCode).toBe(200);
    });
});

// Test for delete a product by id
describe('DELETE /product/:id', () => {
    beforeAll(() => {
        server = app.listen(0);
    });

    afterAll(() => {
        server.close();
    });

    it('should delete a product and return 200 status', async () => {
        const response = await request(server)
            .delete('/product/656ddbba8de058978199cef8'); // Insert a ID valid

        expect(response.statusCode).toBe(200);
    });
});