const express = require('express');
const router = express.Router();
const Person = require('../models/Person')


// get all persons
router.get('/allpersons', (req,res) => {
    Person.find().sort({})
        .then(contacts =>res.json(contacts))
        .catch(err =>console.error(err.message))
})

// create new person
router.post('/newPerson', (req,res) => {
    // Destructuring person object
    const { name, age, favoriteFoods } = req.body
    let newPerson = new Person({ name, age, favoriteFoods })
    console.log(newPerson) //do not works !!!
    newPerson.save()
        .then(() => res.json({msg: 'person created'}))
        .catch(err => console.error(err.message))
})
//get one person by Id
router.get('/person/:id', (req,res) => {
    Person.findById(req.params.id)
        .then((contact) => res.json({contact}))
        .catch(err => console.error(err.message))
})

//Delete person
router.delete('/deleteperson/:id', (req,res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(() => res.json({msg: 'person deleted'}))
        .catch(err => console.error(err.message))
})

//Edit person 
router.put('/editperson/:id', (req,res) => {
    Person.findByIdAndUpdate(req.params.id, { $set: {...req.body} }, (err, data) => {
        if(err){
            throw err
        }
        Person.findById(req.params.id)
            .then(contact => res.json(contact))
            .catch(err => console.error(err.message)) 
    })
})



module.exports = router
