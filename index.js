const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())


require('dotenv').config();


const MongoDB_con = require('./common/connection')
MongoDB_con();


const router = require('./routes/cricketRoutes')
app.use(router);


const newUserSchema = new mongoose.Schema({
    userName: {
        type: String
    }
})

const userDB = mongoose.model('tss', newUserSchema);

app.post('/user', async (req, res) => {
    try {
        const { userName } = req.body;
        const userData = new userDB({
            userName
        })
        await userData.save();
        res.json({
            name: userName
        })
    }
    catch (error) {
        res.json({
            message: error
        })
    }
})


app.use('/king', (req, res) => {
    res.send("I'm KING KOHLI");
})


const data = [
    {
        "name": "TSS",
        "DOB": "12-10-2001",
        "age": "22"
    }
]

app.get('/student', (req, res) => {
    try {
        res.send(data);
    }
    catch (error) {
        res.send(`Data is not available.....`)
    }
})


// app.use("/",(req,res)=>{
//     res.send("Virat Kohli");
// })

app.post('/data', (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            res.json({
                message: `Enter the name`
            })
        }

        res.json({
            data: name,
            status: 200,
            error: false,
            message: `Data recieved successfully`
        })
    }
    catch (error) {
        res.json({
            message: `Error = ${error}`
        })
    }
})


const PORT = 8000;


app.listen((process.env.PORT || PORT), () => {
    console.log("Server running on", process.env.PORT);
})