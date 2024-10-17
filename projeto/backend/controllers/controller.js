// Lógica de negócios

const User = require('../models/model.js'); // Importar o modelo User

// Função para criar um novo usuário
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Criar um novo documento (usuário) baseado no modelo
        const newUser = new User({
            name,
            email,
            password
        });

        // Salvar o usuário no MongoDB
        await newUser.save();

        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar o usuário', error });
    }
};

module.exports = { createUser };
