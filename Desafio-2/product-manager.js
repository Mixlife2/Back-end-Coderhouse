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
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }


        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log(`Ya existe un producto con el código '${code}'.`);
            return;
        }

        const product = new Product(title, description, price, thumbnail, code, stock);
        product.id = this.productIdCounter++;
        
        this.products.push(product);
        console.log(`Producto '${title}' agregado correctamente.`);
    }

    getProducts() {
        return this.products;
    }
}

const manager = new ProductManager();

manager.addProduct("Remera", "Remera de algodón oversize de alta calidad", 5000, "remera.jpg", "RM001", 25);
manager.addProduct("Jean", "Jean clásico con roturas", 10000, "jean.jpg", "JN001", 10);
manager.addProduct("Campera", "Campera impermeable para todas las estaciones", 15000, "campera.jpg", "CP001", 20);

console.log(manager.getProducts());