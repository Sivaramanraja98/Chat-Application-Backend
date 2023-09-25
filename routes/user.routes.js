const express = require('express')
const router = express.Router()
const User = require('../model/User')

//Creating user
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, picture } = req.body
    console.log(req.body)
    const user = await User.create({ name, email, password, picture })
    res.status(201).send(user)
  } catch (error) {
    let msg;
    if (error.code===11000) {
        msg = "User already exists"
    } else {
        msg = error.message
    }
    console.log(error);
    res.status(400).send(msg)
  }
})

//Login user
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findByCredentials(email, password)
      user.status ='online'
      await user.save()
      res.status(200).send(user)
    } catch (error) {
      res.status(400).send(error.message)
    }
  })

module.exports = router


