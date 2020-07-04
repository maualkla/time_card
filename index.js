/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * June 3rd, 2020
 */

const express = require('express'); // Calling Express
const app = express(); // Creating express App object.
const keys = require('./config/keys'); // Getting enviroment keys.

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});


// Validation to make sure production enviroment can run React side
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Getting enviroment (heroku) variables
const PORT = process.env.PORT || 5000;

app.listen(PORT);
//app.listen(5000); // Only for local testing
