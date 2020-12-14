const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskType: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rateType: String,
    rate: {
        type: String,
        value: Number
    },
    additionalInfo: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    babysitting: Object,
    petsitting: Object,
    yardwork: Object,
    dogwalking: Object,
    pickup: Object,
    tutoring: Object,
    transportation: String
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);