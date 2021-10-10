const mongoose = require('mongoose');
const uri = "mongodb+srv://grupo11:grupo11@cluster0.rmajj.mongodb.net/grupo11?retryWrites=true&w=majority";
mongoose.connect(uri)
.then(db => console.log('Conexion Exitosa'))
.catch(error => handleError(error));
module.exports = mongoose;
