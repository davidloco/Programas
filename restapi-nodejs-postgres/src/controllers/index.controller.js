const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'sena',
    port: '5432'
});

const getUserById = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('SELECT * FROM nivel where id =  $1', [id]);
    res.json(response.rows);
}

const getUsers = async(req, res) => {
    const response = await pool.query('SELECT id, nombre, descripcion, duracion FROM nivel');
    console.log(response.rows);
    var prueba = { nivel : response.rows};
    res.status(200).send(prueba);
  }

const createUser = async(req, res) => {
    console.log(req.body);
    const {nombre} = req.body;

    const response = await pool.query('INSERT INTO nivel(nombre) VALUES ($1)', [nombre]);
    console.log(response);
    res.json({
        message: 'user added succesfully',
        body: {
            user: {nombre}
        }
    })

 }

 const updateUser = async(req, res) => {
     const id= req.params.id;
     const {nombre} = req.body;
     const response = await pool.query('UPDATE nivel SET nombre=$1 WHERE id = $2', [nombre, id]);
     console.log(response);
     res.json('user updated succesfully')
}

const deleteUser = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('DELETE FROM nivel WHERE id = $1', [id]);
    res.json(` usuario ${id} borrado correctamente`);
}

//Exportar las constantes
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
     updateUser
}