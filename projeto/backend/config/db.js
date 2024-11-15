// Conexão ao banco de dados MongoDB
require('dotenv').config({path: './mongoUri.env'});
const mongoose = require('mongoose');

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado ao MongoDB com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de falha
    }
};

module.exports = connectDB;