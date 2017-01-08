
var development = require('./knexfile')['development']
var knex = require('knex')(development)

function grabResources(){
   return knex('resources')
   .select('*')
}


module.exports = {
  grabResources,
}
