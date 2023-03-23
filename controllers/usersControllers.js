// const data= require('../data.json/users')
// const { isUtf8 } = require('buffer')
const fs = require('fs')
const dataList = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const data = dataList.users;

const getAllUsers = (req, res) => {
    res.status(200).json(data)
}
const getSingleUser = (req, res) => {
    const id = Number(req.params.id);
    const singleUser = data.find(user => user.id === id);
    console.log(singleUser)
    res.status(200).send(singleUser)
}


const createUser = (req, res) => {
    // console.log(req.body)
    const addData = req.body;
    data.push(addData)
    res.status(201).json({ message: 'post'})
}

const overRideUser =  (req, res) => {
    const id = +req.params.id;
    const updateUser = data.findIndex(user => user.id === id);
    data.splice(updateUser,1,{...req.body, id:id})
    // console.log(updateUser)/
    res.status(201).json({message: 'updated user'})
}


const upDateUser = (req, res) => {
    const id = +req.params.id;
    const updateUser = data.findIndex(user => user.id === id);
    // console.log(updateUser)
    const dataID = data[updateUser]
    // console.log(dataID)
    data.splice(updateUser,1,{...data,...req.body})
    // // console.log(updateUser)/
    res.status(201).json({message: 'updated user'})
}
const DeleteUser =  (req, res) => {
    const id = +req.params.id;
    const usersLeft = data.filter((user) => user.id !== id);
    res.status(200).json(usersLeft)
}

module.exports = {getAllUsers , getSingleUser, createUser, upDateUser, overRideUser, DeleteUser}