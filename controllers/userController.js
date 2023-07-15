const {User, Thought} = require('../models');

const userController = {
    // get all users
    async getUsers(req, res) {
        try {
            const userData = await User.find({})
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .populate({
                    path: 'friends',
                    select: '-__v'
                })
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const userData = await User.findOne({_id: req.params.id})
                .populate({
                    path: 'thoughts',
                    select: '-__v'
                })
                .select('-__v');
            if (!userData) {
                res.status(404).json({message: 'No user found with this id!'});
                return;
            }
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async updateUser(req, res) {
        try{

        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },
    async deleteUser(req, res) {
        try{

        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }

};

module.exports = userController;