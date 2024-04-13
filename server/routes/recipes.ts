import express from 'express'
import * as db from '../db/CRUD/recipes'

const router = express.Router()
export default router

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const recipe = await db.getRecipeById(id)
    res.json(recipe)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.get('/name/:name', async (req, res) => {
  try {
    const name = req.params.name

    const recipe = await db.getRecipesByName(name)

    res.json(recipe)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addRecipes(data)
    res.status(200).send('Recipe added')
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})
