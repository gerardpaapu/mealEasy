export async function seed(knex) {
  await knex('preferences').insert([
    {
      name: 'Balanced',
      type: 'diet',
    },
    {
      name: 'High-Protein',
      type: 'diet',
    },
    {
      name: 'Low-Carb',
      type: 'diet',
    },
    {
      name: 'Low-Fat',
      type: 'diet',
    },
    {
      name: 'Balanced',
      type: 'diet',
    },
    {
      name: 'High-Protein',
      type: 'diet',
    },
    {
      name: 'Low-Carb',
      type: 'diet',
    },
    {
      name: 'Low-Fat',
      type: 'diet',
    }, 
    {
      name: 'Vegan',
      type: 'health',
    },
    {
      name: 'Vegetarian',
      type: 'health',
    },
    {
      name: 'Low-Sugar',
      type: 'health',
    },
    {
      name: 'Mediterranean',
      type: 'health',
    },
    {
      name: 'Dairy-Free',
      type: 'health',
    },
    {
      name: 'Paleo',
      type: 'health',
    },   
    {
      name: 'Peanut-Free',
      type: 'health',
    },
    {
      name: 'American',
      type: 'cuisine type',
    },
    {
      name: 'American',
      type: 'cuisine type',
    },
    {
      name: 'Asian',
      type: 'cuisine type',
    },
    {
      name: 'Indian',
      type: 'cuisine type',
    },
    {
      name: 'Chinese',
      type: 'cuisine type',
    },
    {
      name: 'French',
      type: 'cuisine type',
    },
    {
      name: 'Italian',
      type: 'cuisine type',
    },
  ])
}