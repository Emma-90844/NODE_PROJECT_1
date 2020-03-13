const mongoose = require('mongoose');


//Schema:Describe data looks

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//Posts---show in the DB as the name & the Schema name

module.exports = mongoose.model('Posts', PostSchema);