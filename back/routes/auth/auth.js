var express = require("express");
var router = express.Router();
const connection = require("./../../helpers/db.js");

router.post("/signup", function (req, res, next) {
  /*   res.send('I am in POST signup'); */
  const formData = req.body;
  connection.query("INSERT INTO users SET ?", formData, (err, results) => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
      res.status(500).json({ flash: err.message });
    } else {
      // If everything went well, we send a status "ok".
      res.status(200).json({ flash: "User has been sign up" });
    }
  });
});
module.exports = router;
