const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name must be provided'],
        trim: true,
        maxlength: [20, 'Name must be less than 20 chars']
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('Task', TaskSchema)
