const fs = require('fs');

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = null; 
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}


class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.productIdCounter = 1;
        this.loadFromFile();
    }

    addProduct(productData) {
        if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        const existingProduct = this.products.find(product => product.code === productData.code);
        if (existingProduct) {
            console.log(`Ya existe un producto con el código '${productData.code}'.`);
            return;
        }

        productData.id = this.productIdCounter++;
        
        this.products.push(productData);
        console.log(`Producto '${productData.title}' agregado correctamente.`);

       
        this.saveToFile();
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado.");
            return null;
        }
    }

    saveToFile() {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2));
            console.log('Productos guardados en archivo.');
        } catch (error) {
            console.log('Error al guardar productos en archivo:', error.message);
        }
    }
    loadFromFile() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
            console.log('Productos cargados desde archivo.');
        } catch (error) {
            console.log('Error al cargar productos desde archivo:', error.message);
        }
    }

    updateProduct(id, updatedFields) {
        let updated = false;

        this.products.forEach(product => {
            if (product.id === id) {
                Object.assign(product, updatedFields);
                updated = true;
            }
        });

        if (updated) {
            this.saveToFile();
            console.log(`Producto con ID ${id} actualizado correctamente.`);
        } else {
            console.log(`No se encontró ningún producto con el ID ${id}.`);
        }
    }
    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            this.saveToFile();
            console.log(`Producto con ID ${id} eliminado correctamente.`);
        } else {
            console.log(`No se encontró ningún producto con el ID ${id}.`);
        }
    }

}

const manager = new ProductManager('products.json');


manager.addProduct({
    title: "Remera",
    description: "Remera de algodón oversize de alta calidad",
    price: 5000,
    thumbnail: "remera.jpg",
    code: "RM001",
    stock: 25
});
manager.addProduct({
    title: "Jean",
    description: "Jean clásico con roturas",
    price: 10000,
    thumbnail: "jean.jpg",
    code: "JN001",
    stock: 10
});
manager.addProduct({
    title: "Campera",
    description: "Campera impermeable para todas las estaciones",
    price: 15000,
    thumbnail: "campera.jpg",
    code: "CP001",
    stock: 20
});

console.log(manager.getProducts());

console.log(manager.getProductById(2)); 
console.log(manager.getProductById(5));
