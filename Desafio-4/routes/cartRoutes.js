const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
    
    const cartId = generateUniqueId(); 

   
    const newCart = {
        id: cartId,
        products: [] 
    };

    
    res.status(201).json({ message: 'Carrito creado correctamente', cart: newCart });
});


router.delete('/:productId', (req, res) => {
    
});


router.put('/:productId', (req, res) => {
    
});


router.get('/:pid', (req, res) => {
    const cartId = parseInt(req.params.pid);
    const cart = cartManager.getCartById(cartId);
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ error: 'Carrito no encontrado' });
    }

});


module.exports = router;
