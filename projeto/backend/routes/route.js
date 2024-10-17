// Definição das rotas da API

const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/controller.js');

// Rota para criar um novo usuário
router.post('/register', createUser);

module.exports = router;
