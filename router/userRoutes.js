const express = require('express');
const userRouter = express.Router();
const {getAllUsers, getSingleUser, createUser, overRideUser, upDateUser, DeleteUser} = require("../controllers/usersControllers")

userRouter.get('/', getAllUsers)
.get('/:id',getSingleUser)
.post('/', createUser)
.put('/:id', overRideUser)
.patch('/:id', upDateUser )
.delete('/:id', DeleteUser)


module.exports = userRouter