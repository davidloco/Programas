const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'sena',
    port: '5432'
});


const getOfertsById = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('SELECT * FROM oferta where id =  $1', [id]);
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getOfertsByLike = async(req, res) => {
    const response = await pool.query("SELECT * FROM oferta where nombre ilike '%" + req.params.nombre +"%'");
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getOferts = async(req, res) => {
    const response = await pool.query('SELECT o.fecha_incio_inscripcion, o.fecha_fin_inscripcion, o.fecha_inicio_periodo, o.fecha_fin_periodo, p.nombre, n.descripcion, j.nombre, j.hora_inicio, j.hora_fin, cf.nombre, l.departamento, l.municipio, r.nombre, imagen_poster, imagen_banner FROM oferta AS o JOIN centro_formacion AS cf ON cf.id = o.centro_formacion_id JOIN programa AS p ON p.id = o.programa_id JOIN nivel AS n ON n.id = p.nivel_id JOIN jornada AS j ON j.id = o.jornada_id JOIN localidad AS l ON l.id = cf.localidad_id JOIN region AS r ON r.id = l.region_id');
    console.log(response.rows);
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM nivel where id =  $1', [id]);
    var prueba = { nivel: response.rows };
    res.status(200).send(prueba);
}

const getUserByLike = async (req, res) => {
    const response = await pool.query("SELECT * FROM nivel where nombre ilike '%" + req.params.nombre + "%'");
    var prueba = { nivel: response.rows };
    res.status(200).send(prueba);
}

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM nivel');
    console.log(response.rows);
    var prueba = { nivel: response.rows };
    res.status(200).send(prueba);
}

const createUser = async (req, res) => {
    console.log(req.body);
    const { nombre } = req.body;

    const response = await pool.query('INSERT INTO nivel(nombre) VALUES ($1)', [nombre]);
    console.log(response);
    res.json({
        message: 'user added succesfully',
        body: {
            user: { nombre }
        }
    })

}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;
    const response = await pool.query('UPDATE nivel SET nombre=$1 WHERE id = $2', [nombre, id]);
    console.log(response);
    res.json('user updated succesfully')
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM nivel WHERE id = $1', [id]);
    res.json(` usuario ${id} borrado correctamente`);
}

//Exportar las constantes
module.exports = {
    //Nivel
    getUsers,
    getUserById,
    getUserByLike,
    //Ofertas
    getOfertsById,
    getOfertsByLike,
    getOferts,

    createUser,
    deleteUser,
    updateUser
}