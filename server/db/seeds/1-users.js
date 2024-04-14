export async function seed(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      email: 'barbora@example.com',
      first_name: 'Barbora',
      last_name: 'Klusackova',
      nickname: 'Barbora',
    },
    {
      auth0_id: 'auth0|648fd1c873375442becf2c60',
      email: 'katie@example.com',
      first_name: 'Katie',
      last_name: 'Davies',
      nickname: 'Katie',
    },
    {
      auth0_id: 'auth0|649024f773375442becf3102',
      email: 'sukhjeet@example.com',
      first_name: 'Sukhjeet',
      last_name: 'Chauhan',
      nickname: 'Sukh',
    },
    {
      auth0_id: 'auth0|6490255b0c2119ef3db1e4aa',
      email: 'gisele@example.com',
      first_name: 'Gisele',
      last_name: 'Chaves',
      nickname: 'Gisele',
    },
  ])
}
