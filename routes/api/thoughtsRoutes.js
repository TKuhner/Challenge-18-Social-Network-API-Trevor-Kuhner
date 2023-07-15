const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);



// /api/thoughts/:userId/:thoughtId
router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;