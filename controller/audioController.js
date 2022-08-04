const Audio= require('../model/audio');
const BigPromise = require('../common/Promise');
const CustomerError = require('../utils/customError');
exports.createAudio = BigPromise(async(req,res,next)=>{
    try {
        const{title,singerName,movie,duration} = req.body;

        if(!(title||singerName||movie||duration))
        {
            return next(new CustomerError('All field are required......'));
        };
 
        const audio = Audio.create({
         title,
         singerName,
         movie,
         duration
        });
        res.status(200).send("Song has been added to the list");
    } catch (error) {
        console.log(error);
    }
    
});


exports.getAllSongs = BigPromise(async(req,res,next)=>{
    try {
       const List = await Audio.find();
        res.status(200).send(List)
    } catch (error) {
        console.log(error);
    }
});


exports.getSongByTitle = BigPromise(async(req,res,next)=>{
      const{title} = req.params;
      const song = await Audio.findOne({title});
      if(!song)
         return next(new CustomerError('unable to find the song'));

      res.status(200).send(song);
});


exports.deleteSongByTitle = BigPromise(async(req,res,next)=>{
    const{title} = req.params;
    const song = await Audio.deleteOne({title});
    if(!song)
       return next(new CustomerError('unable to find the song'));

    res.status(200).send(song);
});

// exports.updateSongByTitle = BigPromise(async(req,res,next)=>{
//     try {
//        const {title} =  req.params;
//       const song = this.getSongByTitle();

//       let query = {$set:{}};

//       for(let key in req.body)
//          {
//             if(song[key] && song[key]!==req.body[key])
//             {
//                 query.$set[key] = req.body[key];
//             }
//             const updateSong = await Audio.updateOne(title,query);
//          }
//         res.status(200).send(song);
//     } catch (error) {
//         console.log(error);
//     }
    
// });
