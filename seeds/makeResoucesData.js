
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({resource_id: 1, colName: 'rowValue1'}),
        knex('resources').insert({resource_id: 2, colName: 'rowValue2'}),
        knex('resources').insert({resource_id: 3, colName: 'rowValue3'})
      ]);
    });
};
