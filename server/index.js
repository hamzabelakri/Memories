const express=require('express');
const connect=require('./config/connectDb')
require('dotenv').config({path:"./config/.env"})
const bodyParser = require('body-parser');

const cors=require('cors')
const postRouter=require('./routes/postRouter')

const app=express()

/* app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })) */
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
}
)
connect()


app.use('/posts', postRouter)


