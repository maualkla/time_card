/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * July 3rd, 2020
 */

const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google', '/api/current_user', '/api/logout'], { target: 'http://localhost:5000' }));
}
