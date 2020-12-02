const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./api/users/userRouter');
app.use(express.json());
app.use(cors());
app.use('/users', userRouter);
// app.use('/posts', postRouter);

// app.get('/api',(req, res)=>{
//     res.send('API is working!!!');
// });

app.listen(3001, ()=>{
    console.log('Server is running!!!');
})