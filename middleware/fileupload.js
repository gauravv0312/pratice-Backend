const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null,'../images');
    },
    filename: (req,res,cb)=>{
        cb(null,Date.now()+"--"+fileStorageEngine.originalname);
    },
});

module.exports = fileStorageEngine