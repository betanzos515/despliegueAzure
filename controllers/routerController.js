
const obtenerBody = (req, res)=>{
    const { username , password  } = req.body;
    res.status(200).json({ username, password });
}

const responderDefault = (req, res)=>{
    res.status(200).json({ msg:'Hola desde las rutas' });
}

module.exports = { obtenerBody,responderDefault }