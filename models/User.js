const { Schema, model } = require('mongoose');

// Schema for User
const userSchema = new Schema(
    {
        username: {
            type: String, 
            required: true, 
            unique: true, 
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        // use toJSON to tell schema to use virtuals
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Virtual for friendCount
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize User model
const User = model('User', userSchema);

// Export User model
module.exports = User;
