const express = require('express');
const router = express.Router();

const{createMovie, getAllMovies, getMovieByName,deleteSongByTitle,getAllDataByname} = require('../controller/movieController');

router.route('/createmovie').post(createMovie);

router.route('/getallmovies').get(getAllMovies);

router.route('/getmovieByName/:MovieName').get(getMovieByName);

router.route('/deletemovieByName/:MovieName').delete(deleteSongByTitle);

router.route('/getdata/:MovieName').get(getAllDataByname);

module.exports = router;