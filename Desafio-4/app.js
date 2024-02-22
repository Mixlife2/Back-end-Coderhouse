const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para el manejo de JSON
app.use(express.json());

app.use('/api/products', productRoutes);

// Usa las rutas de carritos en la ruta base /carts
app.use('/carts', cartRoutes);

app.use('/api/carts/', cartRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
