require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xuxinha:xuxinha123@cluster0.pugm9rh.mongodb.net/test');
const modelUser = require('./models/user')
app.use(express.json())

app.post('/usuarios', async (req,res)=> {
    let user = new modelUser(req.body);
   console.log(user);
    const result = await user.save()
    res.send(result)
})

app.listen(PORT, ()=> {
 console.log(`listening on port: ${PORT}`);
})