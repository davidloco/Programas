const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'sena',
    port: '5432'
});


const getProgramaById = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('SELECT p.id, p.nombre, nivel.nombre, p.descripcion, p.prerrequisito, p.habilidades FROM programa AS p JOIN nivel ON nivel.id = p.nivel_id WHERE p.id = $1', [id]);
    var prueba = { programa : response.rows};
    res.status(200).send(prueba); 
}

const getProgramasByLike = async(req, res) => {
    const response = await pool.query("SELECT * FROM programa where nombre ilike '%" + req.params.nombre +"%'");
    var prueba = { programa : response.rows};
    res.status(200).send(prueba); 
}

const getProgramas = async(req, res) => {
    const response = await pool.query('SELECT p.id, p.nombre, nivel.nombre AS nivel_nombre, p.descripcion, p.prerrequisito, p.habilidades FROM programa AS p JOIN nivel ON nivel.id = p.nivel_id');
    console.log(response.rows);
    var prueba = { programa : response.rows};
    res.status(200).send(prueba); 
}

const getOfertsById = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('SELECT o.id, o.fecha_incio_inscripcion, o.fecha_fin_inscripcion, o.fecha_inicio_periodo, o.fecha_fin_periodo, p.nombre AS nombre_programa, n.descripcion, j.nombre AS nombre_jornada, j.hora_inicio, j.hora_fin, cf.nombre AS nombre_centro, l.departamento, l.municipio, r.nombre AS nombre_region, imagen_poster, imagen_banner FROM oferta AS o JOIN centro_formacion AS cf ON cf.id = o.centro_formacion_id JOIN programa AS p ON p.id = o.programa_id JOIN nivel AS n ON n.id = p.nivel_id JOIN jornada AS j ON j.id = o.jornada_id JOIN localidad AS l ON l.id = cf.localidad_id JOIN region AS r ON r.id = l.region_id WHERE o.id = $1', [id]);
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getOfertsByIdNivel = async(req, res) => {
    const id= req.params.id;
    const response = await pool.query('SELECT o.id, o.fecha_incio_inscripcion, o.fecha_fin_inscripcion, l.latitud, l.longitud, o.fecha_inicio_periodo, o.fecha_fin_periodo, p.nombre AS nombre_programa, n.descripcion, j.nombre AS nombre_jornada, j.hora_inicio, j.hora_fin, cf.nombre AS nombre_centro, l.departamento, l.municipio, r.nombre AS nombre_region, imagen_poster, imagen_banner FROM oferta AS o JOIN centro_formacion AS cf ON cf.id = o.centro_formacion_id JOIN programa AS p ON p.id = o.programa_id JOIN nivel AS n ON n.id = p.nivel_id JOIN jornada AS j ON j.id = o.jornada_id JOIN localidad AS l ON l.id = cf.localidad_id JOIN region AS r ON r.id = l.region_id WHERE n.id = $1', [id]);
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getOfertsByLike = async(req, res) => {
    const response = await pool.query("SELECT * FROM oferta where nombre ilike '%" + req.params.nombre +"%'");
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getOferts = async(req, res) => {
    const response = await pool.query('SELECT o.id, o.fecha_incio_inscripcion, o.fecha_fin_inscripcion, l.latitud, l.longitud, o.fecha_inicio_periodo, o.fecha_fin_periodo, p.nombre AS nombre_programa, n.descripcion, j.nombre AS nombre_jornada, j.hora_inicio, j.hora_fin, cf.nombre AS nombre_centro, l.departamento, l.municipio, r.nombre AS nombre_region, imagen_poster, imagen_banner FROM oferta AS o JOIN centro_formacion AS cf ON cf.id = o.centro_formacion_id JOIN programa AS p ON p.id = o.programa_id JOIN nivel AS n ON n.id = p.nivel_id JOIN jornada AS j ON j.id = o.jornada_id JOIN localidad AS l ON l.id = cf.localidad_id JOIN region AS r ON r.id = l.region_id');
    console.log(response.rows);
    var prueba = { oferta : response.rows};
    res.status(200).send(prueba); 
}

const getNivelById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM nivel where id =  $1', [id]);
    var prueba = { nivel: response.rows };
    res.status(200).send(prueba);
}

const getNivelesByLike = async (req, res) => {
    const response = await pool.query("SELECT * FROM nivel where nombre ilike '%" + req.params.nombre + "%'");
    var prueba = { nivel: response.rows };
    res.status(200).send(prueba);
}

const getNiveles = async (req, res) => {
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
    getNiveles,
    getNivelById,
    getNivelesByLike,
    //Ofertas
    getOfertsById,
    getOfertsByLike,
    getOferts,
    getOfertsByIdNivel,
    //Programas
    getProgramaById,
    getProgramasByLike,
    getProgramas,

    createUser,
    deleteUser,
    updateUser
}