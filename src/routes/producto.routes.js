const express = require('express');
const router = express.Router();

const Producto = require('../models/producto');

router.get('/', async (req, res) => {
    const producto = await Producto.find();
    console.log(producto);
    res.json(producto);    
});

router.get('/:id', async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
});

router.post('/', async (req, res) => {
    const { id, descripcion, valorUnitario, estado } = req.body;
    const producto = new Producto({id, descripcion, valorUnitario, estado});
    await producto.save();
    res.json({status:'Producto guardado'});
});

router.put('/:id', async (req, res) => {
    const { id, descripcion, valorUnitario, estado } = req.body;
    const newProducto = {id, descripcion, valorUnitario, estado};
    await Producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json({status:'Producto actualizado'});
});

router.delete('/:id', async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status:'Producto eliminado'});
});

module.exports = router;