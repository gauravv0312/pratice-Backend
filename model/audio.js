const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
    title:{
        type: String,
        unique : true,
    },
    singerName:{
        type: String,
    },
    movie:{
        type: String,
    },
    duration:{
        type: String,
    }
});

module.exports = mongoose.model('audio',audioSchema);