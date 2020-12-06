const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
// const {checkToken} = require("./auth/token_validation")
const userRouter = require('./api/users/userRouter');
app.use(express.json());
app.use(cors());
// app.use(checkToken());

app.use('/users', userRouter);
// Another Router
// app.use('/posts', postRouter);

app.listen(3001, ()=>{
    console.log('Server is running!!!');
})