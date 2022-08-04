const mongoose = require('mongoose');
const singerSchema = mongoose.Schema({
    name:{
        type:String,
    },
    Song:[
        {
          songName:{
            type:String,
            unique:true,
          }
        }
    ]
});

module.exports = mongoose.model('singer',singerSchema);