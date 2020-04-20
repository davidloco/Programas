const { Router } = require('express');
const router = Router();

// const { getUsers, getUserById, createUser, deleteUser, updateUser } = require('../controllers/index.controller');
const {
    //Niveles
    getNiveles,
    getNivelById,
    getNivelesByLike,
    //Ofertas
    getOferts,
    getOfertsById,
    getOfertsByLike,
    //Programas
    getProgramaById,
    getProgramasByLike,
    getProgramas,

    createUser,
    deleteUser,
    updateUser
} = require('../controllers/index.controller');

//Crear rutas
//Niveles
router.get('/niveles', getNiveles);
router.get('/niveles/:id', getNivelById);
router.get('/niveles/find/:nombre', getNivelesByLike);

//Ofertas
router.get('/oferts', getOferts);
router.get('/oferts/:id', getOfertsById);
router.get('/oferts/find/:nombre', getOfertsByLike);

//Programas
router.get('/programas', getProgramas);
router.get('/programas/:id', getProgramaById);
router.get('/programas/find/:nombre', getProgramasByLike);

router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;