const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/',(sreq, res)=>{
    res.json({ msg: 'Entramos al endpoint' });
});     

app.listen(PORT, ()=>{
    console.log(`Servicio corriendo en el puerto ${PORT}`);
});

