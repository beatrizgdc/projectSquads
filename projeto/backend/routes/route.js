// Definição das rotas da API
const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller.js');

// Rota para criar um novo usuário
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;