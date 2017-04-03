function up(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.uuid('id').primary();
    t.string('name');
    t.string('password');
    t.boolean('is_admin');
    t.timestamps();
  });
}

function down(knex, Promise) {
  return knex.schema.dropTable('users');
}
module.exports = {up, down};

