const express = require('express');
const router = express.Router();

const {createAudio, getAllSongs,getSongByTitle,deleteSongByTitle} = require('../controller/audioController');

router.route('/createaudio').post(createAudio);

router.route('/getallsongs').get(getAllSongs);

router.route('/getSongByTitle/:title').get(getSongByTitle);

router.route('/deleteSongByTitle/:title').delete(deleteSongByTitle);

// router.route('/updateSongByTitle/:title').put(updateSongByTitle);



module.exports = router;