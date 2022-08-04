const express = require('express');
const router = express.Router();
const {createSinger,getALLSinger,getSingerByName,deleteSingerByName,getAllDataByname} = require('../controller/singerController');

router.route('/createsinger').post(createSinger);
router.route('/getallSinger').get(getALLSinger);
router.route('/getSingerByName/:name').get(getSingerByName);
router.route('/deleteSingerByName/:name').delete(deleteSingerByName);
router.route('/getdatainsinger/:name').get(getAllDataByname);


module.exports = router;