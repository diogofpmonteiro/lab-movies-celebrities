// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("./../models/Celebrity.model");

// all your routes here
// GET /celebrities page
router.get("/celebrities", (req, res) => {
  res.render("./celebrities/celebrities-view");
});

// GET /celebrities/create page
router.get("/celebrities/create", (req, res) => {
  res.render("./celebrities/new-celebrity");
});

// POST /celebrities create page
router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((createdCelebrity) => {
      //   console.log(createdCelebrity);
      res.render("./celebrities/celebrities-view", { createdCelebrity });
    })
    .catch((error) => {
      res.redirect("./celebrities/new-celebrity");
    });
});

// GET /celebrities-view
router.get("/celebrities-view", (req, res) => {
  Celebrity.find()
    .then((foundCelebrities) => {
      res.render("./celebrities/celebrities-view", { foundCelebrities });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
