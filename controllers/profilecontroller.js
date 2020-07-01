const router = require('express').Router();

const Profile = require('../db').import('../models/profile');

//POST REQUEST
router.post('/', (req, res) => {
    
    const profileFromRequest = {
        userName: req.body.userName,
        aboutMe: req.body.aboutMe,
        userPhoto: req.body.userPhoto,
        favCharacter: req.body.favCharacter,
        favEpisode: req.body.favEpisode
    }

    Profile.create(profileFromRequest)
        .then(profile => res.status(200).json({
            profile: profile
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//GET
router.get('/', (req, res) => {
    Profile.findAll({
        where: {
            
        }
    })
})

//UPDATE

//DELETE