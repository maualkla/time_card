/*
 * Made by: mauricio.alcala (twitter: @maualkla) 
 * July 3rd, 2020
 */
if(process.env.NODE_ENV === 'production')
{
    // Production enviroment
    module.exports = require('./prod');
}
else
{
    // Development enviroment
    module.exports = require('./dev');
}