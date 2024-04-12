import express from 'express'
import * as db from '../db/CRUD/weeks'

const router = express.Router()
export default router

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const weeks = await db.getWeeksByUserId(userId)
    res.json(weeks)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const week = await db.getWeekById(id)
    res.json(week)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addWeek(data)
    res.status(200).send('week added')
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = req.body
    await db.updateWeekById(id, data)
    res.status(200).send('week updated')
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})
