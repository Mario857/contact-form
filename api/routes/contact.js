var express = require("express");
var router = express.Router();


router.post('/contact', function(req,res) {
  const data = {
    email: req.body.email,
    message: req.body.message,
  }
  res.send(data)
})

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("API is working properly");
});


module.exports = router;
