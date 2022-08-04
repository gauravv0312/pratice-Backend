const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    MovieName:{
        type:String,
    },
    Songs:[
        {
            songname:{
                type:String,
            },
        } 
    ]
});

module.exports = mongoose.model('movie',movieSchema);