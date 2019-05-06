const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require ('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res)=>{
    console.log('register start')
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    }
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user => {
        if(!user){
            console.log('register end')
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                userData.password = hash
                User.create(userData)
    
            })
        }else{
            
        }
    })
})

module.exports = users