const BigPromise = require('../common/Promise');

exports.home = BigPromise(async(req,res,next)=>{
    res.status(200).json({
        success: true,
        greeting: "Hello From Gaurav Side"
    });
});

exports.homeDummy = BigPromise(async(req,res)=>{
    res.status(200).json({
        success: true,
        greeting: "Dummy data"
    });
});
