const mongoose = require('mongoose');
const config = require('./config/config.js');

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URL,{dbName:"ecommerse"});
        console.log("DB conectada correctamente");
    } catch (error) {
        console.log("Fallo conexión. Detalle:", error.message);
    }
};

module.exports = connectDB;
