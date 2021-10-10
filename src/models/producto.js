const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    id: { type: String, require: true },
    descripcion: { type: String, require: true },
    valorUnitario: { type: Number, require: true },
    estado: { type: String, require: true}
});

module.exports = mongoose.model('Producto',ProductoSchema);
