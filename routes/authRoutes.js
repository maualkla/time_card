/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * July 3rd, 2020
 */

const passport = require('passport');
const keys = require('../config/keys.js');

module.exports = (app) => {

    // Main 
    // commented to void bad redirections
    /*
    app.get('/', (req, res) => {
        res.send({
            hello: 'hello', 
            "Page": "Homepage", 
            "User id": "N/A"
        });
    });
    */

    // Start response (old)
    app.get('/Start', (req, res) => {
        res.send({
            InteractionType: 1,
            SessionId: 'SessionStarted',
            Message: 'Hello dude, welcome to the Express handler'
        });
    });

    // Mauricio Alcala response (old)
    app.get('/MauricioAlcala', (req, res) => {
        res.send({
            Credentials:
            {
                "Name": "Mauricio Eugenio Alcala Lopez",
                "City": "CDMX / Aguascalientes",
                "Country": "México",
                "Job": "Middleware Consultant / Fullstack Developer", 
                "Company": "Oracle / mudev"
            }
        });
    });    
};