const express = require('express');
const mongoose = require('mongoose')

const app = express();



//adress url de la base de donnée créée { useNewUrlParser: true, useUnifiedTopology: true }
MONGO_URL = "mongodb+srv://bilel:bilel@cluster0-iyjao.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL ,{ useNewUrlParser: true, useUnifiedTopology: true } , (err) => {
    if (err) {
        throw err 
    }
    console.log('Database is connected ...')
})

// inti middleware to parse the body
app.use(express.json())

app.use('/api', require('./routes/person'))
app.use('/api', require('./routes/Todo'))

app.listen(3000, (err) => {
    if (err) console.log('server is not running')
    else console.log('server is running on port 3000')
})