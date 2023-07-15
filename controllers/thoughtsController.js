const {User, Thought} = require('../models');

const thoughtController = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughtData = await Thought.find({})
                .populate({
                    path: 'reactions',
                    select: '-__v'
                })
                .select('-__v');
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // get single thought by id
    async getSingleThought(req, res) {
        try {
            const thoughtData = await Thought.findOne({_id: req.params.id})
                .populate({
                    path: 'reactions',
                    select: '-__v'
                })
                .select('-__v');
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // create a thought
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            const userData = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: thoughtData._id}},
                {new: true}
            );
            if (!userData) {
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            );
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({_id: req.params.id});
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // create a reaction
    async createReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$push: {reactions: req.body}},
                {new: true}
            );
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    // delete a reaction
    async deleteReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {new: true}
            );
            if (!thoughtData) {
                res.status(404).json({message: 'No thought found with this id!'});
                return;
            }
            res.json(thoughtData);
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};

module.exports = thoughtController;