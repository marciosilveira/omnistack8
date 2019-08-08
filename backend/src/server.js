const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./route');

const server = express();

mongoose.connect('mongodb+srv://dpl7:admindpl7@cluster0-pwvwc.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);