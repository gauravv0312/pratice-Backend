const Singer = require('../model/singer');
const BigPromise =require('../common/Promise');
const CustomerError = require('../utils/customError');

exports.createSinger = BigPromise(async(req,res,next)=>{
    try {
        
        const {name,Song} = req.body;
        if(!(name || Song))
           return next(new CustomerError('All the fields are required'));

        const singer = Singer.create({
            name,
            Song,
        });
        res.status(200).json({
            success:true,
            message:"Data has been Added to the Database",
        });
    } catch (error) {
        console.log(error);
    }
});

exports.getALLSinger = BigPromise(async(req,res,next)=>{
     try {
        
        const List =await Singer.find();
        res.status(200).send(List);

     } catch (error) {
        console.log(error);
     }
});

exports.getSingerByName = BigPromise(async(req,res,next)=>{
    try {
        const {name} = req.params;
        const List = await Singer.find({name});
        if(!List)
       return next(new CustomerError('unable to find the song'));

        res.status(200).send({List});
    } catch (error) {
       console.log(error);
    }
});

exports.deleteSingerByName = BigPromise(async(req,res,next)=>{      

     try {
        const{name} = req.params;
        const List =await Singer.deleteOne({name});
        if(!List)
            return next(new CustomerError('unable to find the song'));
        res.status(200).json({
            success: true,
            message : "Data has been deleted from database",
        });
     } catch (error) {
        console.log(error);
     }

});