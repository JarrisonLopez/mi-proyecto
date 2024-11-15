const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

module.exports = app;
