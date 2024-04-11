export async function seed(knex) {
  await knex('recipes').insert([
    {
      name: 'Canned Cheese Soup',
      image: 'https://www.edamam.com/food-img/8eb/8eb8def130924a0a912d96311ffd74a3.jpg',
    },
    {
      name: 'Mushroom Soup',
      image: 'https://www.edamam.com/food-img/f34/f34a3648046faa3f35aa04429691e776.jpg',
    },
    {
      name: 'Pea Soup',
      image: 'https://www.edamam.com/food-img/1a4/1a4a10abee442c929cd0ea9c47c27268.jpg',
    },
    {
      name: 'Cold Spicy Szechuan Noodles',
      image: 'https://edamam-product-images.s3.amazonaws.com/web…f7cd4bf8f749b4c8ae68464c096f459f9957d12647b13c1d2',
    },
    {
      name: 'Longevity Noodles',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/a68/a6809afd93e5a1567b9a9d8dfd366da9.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJIMEYCIQC3JiOIUshJddi3GjEGLzQe6AARZYtymt0kDasHm4lF6wIhAMX79KAFPGqvopHGmzl8keRBBanlw9Ve7Lo%2BVIE6MVw5KrgFCDsQABoMMTg3MDE3MTUwOTg2Igwtuxysdz%2FpvbPnj%2FwqlQWJD62DdEDnytdASW%2FKfWqmcHp9ntiBPlv4UPLCUzuHgh%2BI4KxN2vQp5sNRpGlqRIk2dvxEDtlaPTuDrsRWvkcqD4HYpbObpig8J8lzHJ80UoXJcZXn%2B5nZygsP%2FZtaGYbiQHLqIN3jE3Oee%2BB0SrE%2BteOvPeRRu8iRaBChvcd9tEW85j2viQESXhyWtTUUUHki48%2Bw%2FlqiL3wN853JWXjVEVd%2FgvYa15%2B6PDWr2L8%2FTnXv5uPMunOvh30yzPk%2Fn%2BFFDpOcSo4ZbNmr%2FJoLvmUniC70QEmWjcr98I%2Fp280I7el%2FvS4arQe1y1Znn1gXN5q24T%2BEKUcbDdzzBk1aIUy3uU2%2B%2BfYkc7PSibfsGAxqRzp5QYMgiOJrdcEsQ6eyuEWnGa5PAe5UavzJkhwV19MveGAaXCs0keh8o8vWJfNGV1zv4q3gBwzvGM5a6V1w9TwWStl6RZGiCtbh10SKjbuZRFt3bz1MT%2BGFvJhuV0lVoxKnNW2Pc7SHOY5oiAShk5zh88tywUky8LJl3VIk8Ny7ddA68%2F3Tq6qUkpfZ%2BsOGvJp5yEHsSpdRO%2B1qxQCOL5u2cn5OFkZVIrKbTN4DB46WzbK61CxxqRUjSCSDKWAJ9Mxd4JL%2BbDu042kI%2BCTz7KWzmCEFZxbz5D%2B1feR7dRwTvTXHiiwH1e4TMe%2FvmuEJq4RFfe6Zd9M8K3ZJFIOG8qKQx02o9rfPmdvBLGbIR8kkoP3UA4m6M3ZLfAPtBzVj4lD7hX3Jsk4oJbnCo4R%2Fsi4AQHSJrYoXc%2FoiETiXV%2FK3WZ2h3OX4kvQix5oEXIAve0DGGtRNrjUDGh%2FzK5xoNfwiA9fDvxNsYWFaztAXNvtKmOWa22RanMgGPmgfiWQNtmIGHsiiMPiP3bAGOrABIggc7WJom8sbVksWGq7wyd4D7OrbOAKgJ0haVYe%2FqUBY7JFpvl5LGWQXl9nLhQVzlkTl0FCYd%2BAnLU9W%2BATkpFU5dyrmyE%2BkF1EcGjl6eqXdMZwopEY8orTn%2FErdHKCoFgTzhnEiXKlOfLEknIlBX6mzHEV9DJwcnucXRvh3GHbpu1H0%2FQfoIlW9uSwjoYcnHMx0e43rXE%2Fu7I3a6CtzVcUrY4McGgG53%2FEr0T1%2Bw8k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T031819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLA2PYNWO%2F20240411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=482cf1c46f671e32f7a6e664b98f5784c3f39bd5792fdded2e9567889b9383ca'
    },
    {
      name: 'Rotisserie Chicken',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/88e/88edb31264dc1e58b37c2fec3f99a244.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJIMEYCIQC3JiOIUshJddi3GjEGLzQe6AARZYtymt0kDasHm4lF6wIhAMX79KAFPGqvopHGmzl8keRBBanlw9Ve7Lo%2BVIE6MVw5KrgFCDsQABoMMTg3MDE3MTUwOTg2Igwtuxysdz%2FpvbPnj%2FwqlQWJD62DdEDnytdASW%2FKfWqmcHp9ntiBPlv4UPLCUzuHgh%2BI4KxN2vQp5sNRpGlqRIk2dvxEDtlaPTuDrsRWvkcqD4HYpbObpig8J8lzHJ80UoXJcZXn%2B5nZygsP%2FZtaGYbiQHLqIN3jE3Oee%2BB0SrE%2BteOvPeRRu8iRaBChvcd9tEW85j2viQESXhyWtTUUUHki48%2Bw%2FlqiL3wN853JWXjVEVd%2FgvYa15%2B6PDWr2L8%2FTnXv5uPMunOvh30yzPk%2Fn%2BFFDpOcSo4ZbNmr%2FJoLvmUniC70QEmWjcr98I%2Fp280I7el%2FvS4arQe1y1Znn1gXN5q24T%2BEKUcbDdzzBk1aIUy3uU2%2B%2BfYkc7PSibfsGAxqRzp5QYMgiOJrdcEsQ6eyuEWnGa5PAe5UavzJkhwV19MveGAaXCs0keh8o8vWJfNGV1zv4q3gBwzvGM5a6V1w9TwWStl6RZGiCtbh10SKjbuZRFt3bz1MT%2BGFvJhuV0lVoxKnNW2Pc7SHOY5oiAShk5zh88tywUky8LJl3VIk8Ny7ddA68%2F3Tq6qUkpfZ%2BsOGvJp5yEHsSpdRO%2B1qxQCOL5u2cn5OFkZVIrKbTN4DB46WzbK61CxxqRUjSCSDKWAJ9Mxd4JL%2BbDu042kI%2BCTz7KWzmCEFZxbz5D%2B1feR7dRwTvTXHiiwH1e4TMe%2FvmuEJq4RFfe6Zd9M8K3ZJFIOG8qKQx02o9rfPmdvBLGbIR8kkoP3UA4m6M3ZLfAPtBzVj4lD7hX3Jsk4oJbnCo4R%2Fsi4AQHSJrYoXc%2FoiETiXV%2FK3WZ2h3OX4kvQix5oEXIAve0DGGtRNrjUDGh%2FzK5xoNfwiA9fDvxNsYWFaztAXNvtKmOWa22RanMgGPmgfiWQNtmIGHsiiMPiP3bAGOrABIggc7WJom8sbVksWGq7wyd4D7OrbOAKgJ0haVYe%2FqUBY7JFpvl5LGWQXl9nLhQVzlkTl0FCYd%2BAnLU9W%2BATkpFU5dyrmyE%2BkF1EcGjl6eqXdMZwopEY8orTn%2FErdHKCoFgTzhnEiXKlOfLEknIlBX6mzHEV9DJwcnucXRvh3GHbpu1H0%2FQfoIlW9uSwjoYcnHMx0e43rXE%2Fu7I3a6CtzVcUrY4McGgG53%2FEr0T1%2Bw8k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T032008Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLA2PYNWO%2F20240411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c7999bdfed4442539974f8d89c3ba3574233a8f1a30351db049089187fbb6f32'
    },
    {
      name: 'Jamaican jerk chicken',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/05b/05b69e86d6af7eb3795d6d5d5a400fc5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLWVhc3QtMSJIMEYCIQC3JiOIUshJddi3GjEGLzQe6AARZYtymt0kDasHm4lF6wIhAMX79KAFPGqvopHGmzl8keRBBanlw9Ve7Lo%2BVIE6MVw5KrgFCDsQABoMMTg3MDE3MTUwOTg2Igwtuxysdz%2FpvbPnj%2FwqlQWJD62DdEDnytdASW%2FKfWqmcHp9ntiBPlv4UPLCUzuHgh%2BI4KxN2vQp5sNRpGlqRIk2dvxEDtlaPTuDrsRWvkcqD4HYpbObpig8J8lzHJ80UoXJcZXn%2B5nZygsP%2FZtaGYbiQHLqIN3jE3Oee%2BB0SrE%2BteOvPeRRu8iRaBChvcd9tEW85j2viQESXhyWtTUUUHki48%2Bw%2FlqiL3wN853JWXjVEVd%2FgvYa15%2B6PDWr2L8%2FTnXv5uPMunOvh30yzPk%2Fn%2BFFDpOcSo4ZbNmr%2FJoLvmUniC70QEmWjcr98I%2Fp280I7el%2FvS4arQe1y1Znn1gXN5q24T%2BEKUcbDdzzBk1aIUy3uU2%2B%2BfYkc7PSibfsGAxqRzp5QYMgiOJrdcEsQ6eyuEWnGa5PAe5UavzJkhwV19MveGAaXCs0keh8o8vWJfNGV1zv4q3gBwzvGM5a6V1w9TwWStl6RZGiCtbh10SKjbuZRFt3bz1MT%2BGFvJhuV0lVoxKnNW2Pc7SHOY5oiAShk5zh88tywUky8LJl3VIk8Ny7ddA68%2F3Tq6qUkpfZ%2BsOGvJp5yEHsSpdRO%2B1qxQCOL5u2cn5OFkZVIrKbTN4DB46WzbK61CxxqRUjSCSDKWAJ9Mxd4JL%2BbDu042kI%2BCTz7KWzmCEFZxbz5D%2B1feR7dRwTvTXHiiwH1e4TMe%2FvmuEJq4RFfe6Zd9M8K3ZJFIOG8qKQx02o9rfPmdvBLGbIR8kkoP3UA4m6M3ZLfAPtBzVj4lD7hX3Jsk4oJbnCo4R%2Fsi4AQHSJrYoXc%2FoiETiXV%2FK3WZ2h3OX4kvQix5oEXIAve0DGGtRNrjUDGh%2FzK5xoNfwiA9fDvxNsYWFaztAXNvtKmOWa22RanMgGPmgfiWQNtmIGHsiiMPiP3bAGOrABIggc7WJom8sbVksWGq7wyd4D7OrbOAKgJ0haVYe%2FqUBY7JFpvl5LGWQXl9nLhQVzlkTl0FCYd%2BAnLU9W%2BATkpFU5dyrmyE%2BkF1EcGjl6eqXdMZwopEY8orTn%2FErdHKCoFgTzhnEiXKlOfLEknIlBX6mzHEV9DJwcnucXRvh3GHbpu1H0%2FQfoIlW9uSwjoYcnHMx0e43rXE%2Fu7I3a6CtzVcUrY4McGgG53%2FEr0T1%2Bw8k%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T032008Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLA2PYNWO%2F20240411%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4a26faba7de3bab4e2d92971d57e17f71b444cc12c4cf7cb05717bac1a7fb97e'
    },

  ])
}