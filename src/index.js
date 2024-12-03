const express= require('express');
const morgan=require('morgan')
const mongoose=require('mongoose')
const cors = require('cors');


const app=express()

mongoose.connect('mongodb://localhost:27017')
.then(db =>console.log('DB is connected'))
.catch(err =>console.log(err))

app.set('port',process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

app.use(require('./routes/users'))

app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
})