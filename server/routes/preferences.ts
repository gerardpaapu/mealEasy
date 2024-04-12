import express from 'express'
import * as db from '../db/CRUD/preferences'

const router = express.Router()
export default router

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const userPreferences = await db.getUserPreferences(userId)
    res.json(userPreferences)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.get('/', async (req, res) => {
  try {
    const preferences = await db.getPreferences()
    res.json(preferences)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addUserPreferences(data)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.patch('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const data = req.body
    await db.updateUserPreferences(userId, data)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})
