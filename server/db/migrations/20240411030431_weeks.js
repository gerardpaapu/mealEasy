export async function up(knex) {
  await knex.schema.createTable('weeks', (table) => {
    table.integer('id').primary()
    table.integer('user_id').references('users.auth0_id')
    table.integer('monday').references('recipes.id')
    table.integer('tuesday').references('recipes.id')
    table.integer('wednesday').references('recipes.id')
    table.integer('thursday').references('recipes.id')
    table.integer('friday').references('recipes.id')
    table.integer('saturday').references('recipes.id')
    table.integer('sunday').references('recipes.id')
    table.integer('created_on')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('weeks')
}
