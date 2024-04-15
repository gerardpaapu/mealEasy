export async function seed(knex) {
  await knex('preferences').del()
  await knex('preferences').insert([
    {
      name: 'high-protein',
      type: 'diet',
    },
    {
      name: 'low-carb',
      type: 'diet',
    },
    {
      name: 'low-fat',
      type: 'diet',
    },

    {
      name: 'vegan',
      type: 'health',
    },
    {
      name: 'vegetarian',
      type: 'health',
    },
    {
      name: 'low-sugar',
      type: 'health',
    },
    {
      name: 'Mediterranean',
      type: 'health',
    },
    {
      name: 'dairy-free',
      type: 'health',
    },
    {
      name: 'paleo',
      type: 'health',
    },
    {
      name: 'peanut-free',
      type: 'health',
    },
    {
      name: 'American',
      type: 'cuisineType',
    },

    {
      name: 'Asian',
      type: 'cuisineType',
    },
    {
      name: 'Indian',
      type: 'cuisineType',
    },
    {
      name: 'Chinese',
      type: 'cuisineType',
    },
    {
      name: 'French',
      type: 'cuisineType',
    },
    {
      name: 'Italian',
      type: 'cuisineType',
    },
  ])
}
