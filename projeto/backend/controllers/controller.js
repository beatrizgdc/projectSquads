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

// Obter todos os usuários
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
};

//Obter usuário pelo ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (!user) return res.status(404).json({ message: 'Usuário não encontrado'});

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar o usuário', error });
    }
};

//Atualizar usuário pelo ID
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(
            id, 
            { name, email, password }, 
            { new: true }
        );

        if (!updateUser) return res.status(404).json({ message: 'Usuário não encontrado'});

        res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updateUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar o usuário', error });
    }
};

//Deletar usuário pelo ID
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUser = await User.findByIdAndDelete(id);

        if (!deleteUser) return res.status(404).json({ message: 'Usuário não encontrado'});

        res.status(200).json({ message: 'Usuário deletado com sucesso', user: deleteUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar o usuário', error });
    }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
