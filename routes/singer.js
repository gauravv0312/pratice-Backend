const express = require('express');
const router = express.Router();
const {createSinger,getALLSinger,getSingerByName,deleteSingerByName} = require('../controller/singerController');

router.route('/createsinger').post(createSinger);
router.route('/getallSinger').get(getALLSinger);
router.route('/getSingerByName/:name').get(getSingerByName);
router.route('/deleteSingerByName/:name').delete(deleteSingerByName);


module.exports = router;