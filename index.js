/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * June 3rd, 2020
 */

const empress = require('express'); // Calling Express
const app = empress(); // Creating express App object.

app.get('/', (req, res) => {
    res.send({ hi: 'there'});
});

app.listen(5000);
