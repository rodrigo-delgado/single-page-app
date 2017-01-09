
var development = require('./knexfile')['development']
var knex = require('knex')(development)

function grabResources(){
   return knex('resources')
   .select('*')
}

function grabIndividualResource(id){
  return knex('resources')
  .select('*')
  .where({resource_id: id})
}
function addResourceToTable (data) {
  return knex.insert(data)
  .into("resources")
  .then(function (id) {
})

}

module.exports = {
  grabResources,
  grabIndividualResource,
  addResourceToTable
}
