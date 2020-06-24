const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')


// get all persons
router.get('/allpersons', (req,res) => {
    res.send('HELLLOOOOOOOOOOOOOO');
})

// create new person
router.post('/newTodo', (req,res) => {
    // Destructuring person object
    const { todo } = req.body
    let newTodo = new Todo({todo })
    
    newTodo.save()
        .then((data) => res.json(data))
        .catch(err => console.log(err.message))
})


module.exports = router
