export async function up(knex) {
  await knex.schema.createTable('preferences', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('type').notNullable()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('preferences')
}