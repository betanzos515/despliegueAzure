const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const rutasPrueba = require('./routes/routes.js');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use('/',rutasPrueba);
app.listen(PORT, ()=>{
    console.log(`Servicio corriendo en el puerto ${PORT}`);
});

