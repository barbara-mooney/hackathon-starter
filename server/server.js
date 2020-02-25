const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config()

app.use(express.static('dist'));
app.use(express.static('public'));

console.log('api key', process.env.APIKEY)

app.get('/api', (req, res) => {
    let query = req.param('query')
    console.log('query log', query)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&query=${query}`)
        .then((result) => {
            console.log('results data log', result.data)
            res.send(result.data);
        })
        .catch((error) => {
            console.log(error)
            res.send('An error occured.');
        })
});

module.exports = app;