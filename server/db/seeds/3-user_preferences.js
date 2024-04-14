export async function seed(knex) {
  await knex('user_preferences').del()
  await knex('user_preferences').insert([
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      preference_id: 1,
    },
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      preference_id: 3,
    },
    {
      user_id: 'auth0|649024f773375442becf3102',
      preference_id: 2,
    },
  ])
}
