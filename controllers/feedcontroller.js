const router = require('express').Router();

const Feed = require('../db').import('../models/feed');

//POST REQUEST
router.post('/', (req, res) => {

    const feedFromRequest = {
        userName: req.body.userName,
        image: req.body.image,
        text: req.body.text,
        link: req.body.link
    }

    Feed.create(feedFromRequest)
        .then(feed => res.status(200).json({
            feed: feed
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//GET REQUEST
router.get('/', (req, res) => {
    Feed.findAll({
        where: {
            userName: req.user.id
        }
    })
    .then(feed => res.status(200).json({
        feed: feed
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE(PUT)
router.put('/:id', (req, res) => {
    Feed.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(feed => res.status(200).json({
        feed: feed
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE METHOD
router.delete('/:id', (req, res) => {
    Feed.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(feed => res.status(200).json({
        feed: feed
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;