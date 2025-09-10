const express = require('express');
const mongoose = require('mongoose');
const CompraModel = require('./infrastructure/CompraModel');
const CompraRepository = require('./repositories/CompraRepository');
const CompraUseCase = require('./usecases/CompraUseCase');
const CompraController = require('./controllers/CompraController');
const compraRoutes = require('./routes/compraRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

const compraRepository = new CompraRepository(CompraModel);
const compraUseCase = new CompraUseCase(compraRepository);
const compraController = new CompraController(compraUseCase);

app.use('/compras', compraRoutes(compraController));

module.exports = app;
