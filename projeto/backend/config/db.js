// Conexão ao banco de dados MongoDB

const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const dbURI = 'mongodb+srv://jonnathanvituriano205:<db_password>@cluster0.mksft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Opções de conexão
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, options);
        console.log('Conectado ao MongoDB com sucesso');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1); // Encerra o processo em caso de falha
    }
};

module.exports = connectDB;
