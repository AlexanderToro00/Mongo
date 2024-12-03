const express = require('express')
const router = express.Router()

const User = require('../models/Users.js');

router.get('/users', async (req, res) =>{
    const users = await User.find()
    res.json(users)
})

router.get('/users/:id', async (req, res) =>{
    const users = await User.findById(req.params.id)
    res.json(users)
})

router.post('/users', async (req, res) =>{ 
    let users = new User(req.body);
    await users.save();
    console.log(users)
    res.json({
        status: 'Task Saved'
    })
});

router.put('/users/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task Updated'
    })
})

router.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Task Deleted'
    })
})

module.exports = router;