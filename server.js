const e = require('express');
const express = require('express')
const app = express()
const morgan = require('morgan')
const userRouter = require("./router/userRoutes")
const productRoutes = require('./router/produtsRoutes')
// body-parser 
// app.use(morgan('dev'))
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(express.static('public'))

// //  MVC Pattern
// const {getAllUsers, getSingleUser, createUser, overRideUser, upDateUser, DeleteUser} = require("./controllers/usersControllers")

// // all users 
// app.get('/api/users', getAllUsers)
// // single  users 
// app.get('/api/users/:id',getSingleUser )
// // post users 
// app.post('/api/users', createUser)
// // put update users but override the existing user
// app.put('/api/users/:id', overRideUser)
// // patch update users but do not override the existing user
// app.patch('/api/users/:id', upDateUser )
// // delete users 
// app.delete('/api/users/:id', DeleteUser)

app.use("/api/users", userRouter)
app.use("/api/products", productRoutes)
app.listen(3000,()=>{
    console.log(`server listening on port http://localhost:${3000}`)
})