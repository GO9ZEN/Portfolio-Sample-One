import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    serviceImage: {
        type: String,
        required: true
    },

    serviceName: {
        type: String,
        required: true
    },

    serviceDescription: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Service = mongoose.model('Service', serviceSchema)

export default Service