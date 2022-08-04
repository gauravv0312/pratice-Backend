const Movie = require('../model/movie');
const Audio = require('../model/audio');
const BigPromise = require('../common/Promise');
const CustomerError = require('../utils/customError');

exports.createMovie = BigPromise(async(req,res,next)=>{
    try {
        const{MovieName,Songs} = req.body;

    if(!(MovieName || Songs))
          return next(new CustomerError("All the field are required"));

     const movie = Movie.create({
          MovieName,
          Songs,
     });
     res.status(200).send("Movie name has been added in the list.");    

    } catch (error) {
        console.log(error);
    }
     
});

exports.getAllMovies = BigPromise(async(req,res,next)=>{
    try {
        const List = await Movie.find();
        res.status(200).send(List);
    } catch (error) {
        console.log(error);
    }
});

exports.getMovieByName = BigPromise(async(req,res,next)=>{
    try {
        const {MovieName} = req.params;
        const name = await Movie.findOne({MovieName});
        res.status(200).send({name});
    } catch (error) {
        console.log(error);
    }
});

exports.deleteSongByTitle = BigPromise(async(req,res,next)=>{
    const {MovieName} = req.params;
    const name = await Movie.deleteOne({MovieName});
    if(!name)
       return next(new CustomerError('unable to find the song'));

    res.status(200).send(name);
});

exports.getAllDataByname = BigPromise(async(req,res,next)=>{
    const {MovieName} = req.params;
    const movies =await Movie.find({MovieName});
    const title = movies[0]['Songs'][0]['songname'];
    console.log(title);
    // console.log(songId);
    const result  =await Audio.find({title});
    res.status(200).send(result);
});
