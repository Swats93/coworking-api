function up(knex, Promise) {
  return knex.schema.createTable('news', (t) => {
    t.uuid('id').primary();
    t.string('heading'); //title
    t.text('content');
    t.string('date_time');
    t.string('images');
    t.string('videos');
    t.string('author');
    t.timestamps();
  });
}

function down(knex, Promise) {
  return knex.schema.dropTable('news');
}
module.exports = {up, down};

