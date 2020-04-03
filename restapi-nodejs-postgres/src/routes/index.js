const { Router } = require('express');
const router = Router();

// const { getUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/index.controller');
const { 
    //Niveles
    getUsers, 
    getUserById,
    getUserByLike,
    //Ofertas
    getOferts, 
    getOfertsById,
    getOfertsByLike,
    
    createUser, 
    deleteUser, 
    updateUser    
} = require('../controllers/index.controller');

//Crear rutas
//Niveles
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users/find/:nombre', getUserByLike);

//Ofertas
router.get('/oferts', getOferts);
router.get('/oferts/:id', getOfertsById);
router.get('/oferts/find/:nombre', getOfertsByLike);

router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;