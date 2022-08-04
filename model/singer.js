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
          },
          movieName:{
            type:String,
          },
          duration:{
            type:String,
          }
        }
    ]
});

module.exports = mongoose.model('singer',singerSchema);