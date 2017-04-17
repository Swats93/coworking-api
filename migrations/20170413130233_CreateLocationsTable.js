function up(knex, Promise) {
  return knex.schema.createTable('locations', (t) => {
    t.uuid('id').primary();
    t.string('name'); //title
    t.text('description');
    t.string('address');
    t.string('images');
    t.timestamps();
  });
}

function down(knex, Promise) {
  return knex.schema.dropTable('locations');
}
module.exports = {up, down};

