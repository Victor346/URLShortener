exports.up = function(knex) {
    return knex.schema
    .createTable('urls', (table) => {
        table.increments('id');
        table.text('original_url').notNullable();
        table.uuid('short_uuid').notNullable();
        table.integer('visits').notNullable().defaultTo(0);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('urls');
};
