// Arquivos estático
const express = require('express');
const connectDB = require('../config/db.js');
const dotenv = require('dotenv')
const userRoutes = require('../routes/route.js');

dotenv.config({path: './MONGO_URI.env'});
const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Usar as rotas de usuário
app.use('/api', userRoutes);

// Conectar ao MongoDB
connectDB();

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
