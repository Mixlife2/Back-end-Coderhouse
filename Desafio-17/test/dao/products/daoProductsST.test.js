const {describe, it} = require("mocha");

const mongoose = require("mongoose");
const supertest = require("supertest");

const requester = supertest("http://localhost:8080");


let expect;

const connDB= async() => {
    try {
        await mongoose.connect("mongodb+srv://eddykratochvil:581120eRHM@cluster0.ipkkxpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("db conectada con exito.");
    } catch (error) {
        console.log(`error al conectar a DB: ${error}`);
    }
    
}
connDB();


describe("Pruebas al router Products", function() {
    this.timeout(8000)

    after(async()=> {
        const chai = await import('chai');
        expect = chai.expect;
        //eliminar elementos creados por la prueba en DB
    })
    it("La ruta /api/products con su metodo POST, permite crear un nuevo productos en la DB", async ()=> {
        let productMock= {
            "title": "Example Product",
            "description": "This is a description of the example product.",
            "code": "EX123",
            "price": 29.99,
            "status": "available",
            "stock": 100,
            "category": "Electronics",
            "thumbnails": [
                "http://example.com/thumbnail1.jpg",
                "http://example.com/thumbnail2.jpg"
            ],
            "owner": "admin"
        }
        let resultado = await requester.post("/api/products").send(productMock)
        console.log(resultado);
    });
    
    
    
})