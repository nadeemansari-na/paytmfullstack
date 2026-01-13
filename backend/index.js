const express = require("express");
const app=express()
const cors=require('cors')
app.use(cors())


app.use(express.json())
// const mainRouter=require('./routes/index')
const acountRouter=require('./routes/acount')
const userRouter=require('./routes/user')


// app.use("/api/v1 " , mainRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/acount",acountRouter)

app.listen(3000, () => console.log('✅ Server running on port 3000'));