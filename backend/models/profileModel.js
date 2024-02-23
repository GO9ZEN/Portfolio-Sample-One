import mongoose from 'mongoose'

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    profilePicture: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    firstLastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    mobileNumber: {
        type: Number,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true,
        unique: true
    },

    jobRole: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    linkGithub: {
        type: String,
        unique: true,
        // default: ''
    },

    linkLinkedIn: {
        type: String,
        unique: true,
        // default: ''
    },

    linkYoutube: {
        type: String,
        unique: true,
        // default: ''
    },

    resume: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export default Profile