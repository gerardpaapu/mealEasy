export async function seed(knex) {
  await knex('weeks').insert([
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      monday: 5,
      tuesday: 2,
      wednesday: 4,
      thursday: 3,
      friday: 7,
      saturday: 6,
      sunday: 1,
      created_on: 1712810143,
    },
  ])
}
