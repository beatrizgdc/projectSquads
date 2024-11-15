// Definição dos modelos Mongoose
const mongoose = require('mongoose');

// Definição do esquema (schema) do usuário
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Criar o modelo 'User' baseado no schema
const User = mongoose.model('User', userSchema);

module.exports = User;
