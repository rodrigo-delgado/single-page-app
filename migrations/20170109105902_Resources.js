
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', function (table) {
  table.increments('resource_id');
  table.string('name');
  table.string('type');
  table.string('rate_per_hour');

})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resources')
};
