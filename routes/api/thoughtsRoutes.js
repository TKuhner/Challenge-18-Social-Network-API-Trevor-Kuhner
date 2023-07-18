const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getSingleThought).put(updateThought);


// /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete(deleteThought);

// /api/thoughts/:id
router.route('/:id/reactions').post(createReaction);

// /api/thoughts/:id/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;