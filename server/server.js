const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config()

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.apikey}&query=${this.state.userMovie}`)
        .then((result) => {
            res.send(result.data);
        })
        .catch((error) => {
            res.send('An error occured.');
        })
});

module.exports = app;