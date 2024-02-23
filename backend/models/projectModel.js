import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    projectImage: {
        type: String,
        required: true
    },

    projectName: {
        type: String,
        required: true
    },

    projectLinkPage: {
        type: String,
        // unique: true,
        // default: null,
        // index:true, 
        // sparse:true
    },

    projectLinkGit: {
        type: String,
        // unique: true,
        // default: null,
        // index:true, 
        // sparse:true
    },
}, {
    timestamps: true
})

const Project = mongoose.model('Project', projectSchema)

export default Project