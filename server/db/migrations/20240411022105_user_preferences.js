export async function up(knex) {
  await knex.schema.createTable('user_preferences', (table) => {
    table.integer('user_id').references('users.auth0_id')
    table.integer('preference_id').references('preferences.id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('user_preferences')
}