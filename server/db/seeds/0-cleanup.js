export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_preferences').del()
  await knex('preferences').del()
  await knex('users').del()
}