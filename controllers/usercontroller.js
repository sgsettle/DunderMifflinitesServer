const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//SIGN UP
router.post('/signup', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userRole: 'user'
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createError = err => res.send(500, err)
    )
    .catch(err => res.status(500).json({
        error: err
    }))
})
  
//UPDATE METHOD TO HARD CODE userRole
router.put('/:id', (req, res) => {
    User.update(req.body.user, {
        where: {
            id: req.params.id
        },
    })
    .then((user) => 
    res.status(200).json({
        user: user
    }))
    .catch((err) => 
    res.status(500).json({
        error: err
    }))
})

//SIGN IN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            userName: req.body.userName
        }
    })
    .then(user => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, matches) => {
                if(matches){
                    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                    res.json({
                        user: user,
                        message: 'user successfully logged in',
                        sessionToken: token
                    })
                } else {
                    res.status(502).send({error: 'bad gateway'})
                }
            })
        } else {
            res.status(500).send({error: 'failed to authenticate'})
        }    
    }, err => res.status(501).send({error: 'failed to process'}))
})

//GET (for admin use)
router.get('/', (req, res) => {
    User.findAll({
        where: {}
    })
    .then(user => res.status(200).json({
        user: user
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE METHOD
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(user => res.status(200).json({
        user: user
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;