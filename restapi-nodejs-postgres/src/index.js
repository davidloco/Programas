const express = require('express');
const app = express();

// importamos los middleware convierte datos json a javaScrip
app.use(express.json());
app.use(express.urlencoded({extended: false})); //recibir datos desde el formulario
//Importar routes
app.use(require('./routes/index'));

app.listen(8090);
console.log('Server on port 8090');