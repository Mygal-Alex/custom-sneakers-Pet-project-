
const express = require('express');
const userRouter = require('./routes/user.routes')
const productRouter= require('./routes/product.routes')
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', productRouter)
app.get('/',(req,res)=>{
    res.send('HELLO')
})
app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));