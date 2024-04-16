export async function seed(knex) {
  // await knex('preferences').del()
  await knex('preferences').insert([
    {
      id: 1,

      name: 'high-protein',
      type: 'diet',
    },
    {
      id: 2,
      name: 'low-carb',
      type: 'diet',
    },
    {
      id: 3,
      name: 'low-fat',
      type: 'diet',
    },

    {
      id: 4,
      name: 'vegan',
      type: 'health',
    },
    {
      id: 5,
      name: 'vegetarian',
      type: 'health',
    },
    {
      id: 6,
      name: 'low-sugar',
      type: 'health',
    },
    {
      id: 7,
      name: 'Mediterranean',
      type: 'health',
    },
    {
      id: 8,
      name: 'dairy-free',
      type: 'health',
    },
    {
      id: 9,
      name: 'paleo',
      type: 'health',
    },
    {
      id: 10,
      name: 'peanut-free',
      type: 'health',
    },
    { id: 11, name: 'American', type: 'cuisineType' },

    { id: 12, name: 'Asian', type: 'cuisineType' },
    { id: 13, name: 'Indian', type: 'cuisineType' },
    {
      id: 14,
      name: 'Chinese',
      type: 'cuisineType',
    },
    { id: 15, name: 'French', type: 'cuisineType' },
    { id: 16, name: 'Italian', type: 'cuisineType' },
  ])
}
