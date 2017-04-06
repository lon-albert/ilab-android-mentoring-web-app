var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    detail: {
        type: String,
        default: ''
    },
    done: {
        type: Boolean,
        detail: false
    }
});