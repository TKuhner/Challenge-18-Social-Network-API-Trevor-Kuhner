const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,

} = require('../../controllers/userController');

// /api/users
// get all users, create a user
router.route('/').get(getUsers).post(createUser);

// /api/users/:id
// get user by id, update user by id, delete user by id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;