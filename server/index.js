require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const { default: axios } = require('axios');

app.use(cors());

app.use(express.json());





app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})