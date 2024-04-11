import request from 'superagent'
import express from 'express'
import * as db from '../db/CRUD/user'

const router = express.Router()
export default router

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await db.getUserById(id)
    res.json(user)
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addUsers(data)
    res.status(200).send('user added')
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    await db.updateUserById(id, data)
    res.status(200).send('user updated')
  } catch (e) {
    res.status(500).send(`Error: API call not working, ${e}`)
  }
})
