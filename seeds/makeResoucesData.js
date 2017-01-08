
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert(
          {
            resource_id: 1,
            name: 'Rodrigo',
            type:'expert',
            rate_per_hour:'40'
          }),
        knex('resources').insert(
          {
            resource_id: 2,
            name: 'Anna',
            type:'assistant',
            rate_per_hour:'30'
          }),
        knex('resources').insert(
          {
            resource_id: 3,
            name: 'Mix',
            type:'Executive',
            rate_per_hour:'50'
          })
      ]);
    });
};
