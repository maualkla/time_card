/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * July 3rd, 2020
 */

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/'], { target: 'http://localhost:5000' }));
}
