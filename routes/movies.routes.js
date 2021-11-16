// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("./../models/Movie.model");

// all your routes here

// GET /movies/create
router.get("/movies/create", (req, res) => {
  res.render("./movies/new-movie");
});

// POST /movies/create
router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create();
});

module.exports = router;
