const express = require('express');
const ProductManager = require('./product-manager');

const app = express();
const PORT = process.env.PORT || 3000; 
const productManager = new ProductManager('products.json'); // Suponiendo que tu archivo de productos se llama products.json

app.get('/', (req, res) => {
    res.send('Bienvenido a la tienda de productos.');
}
);

// Ruta para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid); // Recupera el ID del producto de req.params
    const product = productManager.getProductById(productId); // Obtiene el producto por su ID

    if (product) {
        res.json(product); // Devuelve el producto si se encontró
    } else {
        res.status(404).json({ error: 'Producto no encontrado' }); // Devuelve un error si el producto no se encontró
    }
});

// Ruta para obtener los productos con soporte para el parámetro 'limit'
app.get('/products', (req, res) => {
    let limit = req.query.limit; // Recupera el valor del parámetro de consulta 'limit'
    let products = productManager.getAllProducts();

    // Verifica si se proporcionó un límite y lo aplica si es un número válido
    if (limit && !isNaN(limit)) {
        limit = parseInt(limit);
        products = products.slice(0, limit); // Aplica el límite al array de productos
    }

    res.json(products);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});