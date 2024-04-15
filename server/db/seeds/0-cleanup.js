export async function seed(knex) {
  await knex('weeks').del()
  await knex('recipes').del()
  await knex('user_preferences').del()
  await knex('preferences').del()
  await knex('users').del()
}
