const express = require('express');
const axios = require('axios');
const controller = require('./controller');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('./client/dist'));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));