import mongoose from 'mongoose'

const skillSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    skillImage: {
        type: String,
        required: true
    },

    sklillName: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Skill = mongoose.model('Skill', skillSchema)

export default Skill