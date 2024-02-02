class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Producto '${product.title}' Agregado correctamente.`);
    }

    removeProduct(code) {
        const index = this.products.findIndex(product => product.code === code);
        if (index !== -1) {
            const removedProduct = this.products.splice(index, 1)[0];
            console.log(`Producto '${removedProduct.title}' eliminado exitosamente.`);
        } else {
            console.log(`Product with code '${code}' no encontrado.`);
        }
    }

    displayProducts() {
        if (this.products.length > 0) {
            console.log("Lista de productos: ");
            this.products.forEach(product => {
                console.log(`${product.title}: $${product.price} - Stock: ${product.stock}`);
            });
        } else {
            console.log("No hay productos disponibles.");
        }
    }
}

const manager = new ProductManager();

const product1 = new Product("Remera", "Remera de algodón oversize de alta calidad", 5000, "remera.jpg", "RM001", 25);
const product2 = new Product("Jean", "Jean clásico con roturas", 10000, "jean.jpg", "JN001", 10);
const product3 = new Product("Campera", "Campera impermeable para todas las estaciones", 15000, "campera.jpg", "CP001", 20);

manager.addProduct(product1);
manager.addProduct(product2);
manager.addProduct(product3);

manager.displayProducts();

manager.removeProduct("SP001");

manager.displayProducts();
