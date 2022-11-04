const express=require('express');
const connect=require('./config/connectDb')
require('dotenv').config({path:"./config/.env"})
const cors=require('cors')
const postRouter=require('./routes/postRouter')


const app=express()

app.use(express.json())
app.use(cors());

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${process.env.PORT}`)
}
)
connect()


app.use('/posts', postRouter)


