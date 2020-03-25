const { Router } = require('express');
const router = Router();

// const { getUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/index.controller');
const { getUsers, getUserById, createUser, deleteUser, updateUser, getUserByLike} = require('../controllers/index.controller');

//Crear rutas
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/find/:nombre', getUserByLike);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;