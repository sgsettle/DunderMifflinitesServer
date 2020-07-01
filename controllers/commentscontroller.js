const comments = require('../models/comments');

const router = require('express').Router();

const Comments = require('../db').import('../models/comments');

//CREATE/POST
router.post('/', (req, res) => {

    const commentsFromRequest = {
        userName: req.user.userName,
        comment: req.body.comment
    }

    Comments.create(commentsFromRequest)
        .then(comments => res.status(200).json({
            comments: comments
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//GET
router.get('/', (req, res) => {
    Comments.findAll({
        where: {
            id: req.user.id
        }
    })
    .then(comments => res.status(200).json({
        comments: comments
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//PUT/UPDATE
router.put('/:id', (req, res) => {
    Comments.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(comments => res.status(200).json({
        comments: comments
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})


//DELETE
router.delete('/:id', (req, res) => {
    Comments.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(comments => res.status(200).json({
        comments: comments
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;