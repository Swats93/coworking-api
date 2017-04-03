function up(knex, Promise) {
  return knex.schema.createTable('events', (t) => {
    t.uuid('id').primary();
    t.string('name');
    t.string('content');
    t.string('date_time');
    t.string('images');
    t.string('videos');
    t.string('venue');
    t.string('event_organizer_name');
    t.timestamps();
  });
}

function down(knex, Promise) {
  return knex.schema.dropTable('events');
}
module.exports = {up, down};

