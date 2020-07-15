const router = require('express').Router();

const Profile = require('../db').import('../models/profile');

//POST REQUEST
router.post('/', (req, res) => {
    
    const profileFromRequest = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        userName: req.user.userName,
        aboutMe: req.body.aboutMe,
        userPhoto: req.body.userPhoto,
        favCharacter: req.body.favCharacter,
        favEpisode: req.body.favEpisode,
        profile_id: req.user.id,
        userId: req.user.id
    }

    Profile.create(profileFromRequest)
        .then(profile => res.status(200).json({
            profile: profile
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})
  
//GET ALL (for admin use)
router.get('/', (req, res) => {
    Profile.findAll({
        where: {
            profile_id: req.user.id
        }
    })
    .then(profile => res.status(200).json({
        profile: profile
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//GET INDIVIDUAL PROFILE
router.get('/:id', (req, res) => {
    Profile.findOne({
        where: {
            profile_id: req.user.id
        },
        include: ['feed']
    })
    .then(profile => res.status(200).json({
        profile: profile
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE
router.put('/', (req, res) => {
    Profile.update(req.body, {
        where: {
            profile_id: req.user.id
        }
    })
    .then(profile => res.status(200).json({
        profile: profile
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE
router.delete('/:id', (req, res) => {
    Profile.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(profile => res.status(200).json({
        profile: profile
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})
module.exports = router;