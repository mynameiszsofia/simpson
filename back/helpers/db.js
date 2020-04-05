const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "mynameiszsofia",
  password: "LIErsen21!",
  database: "wild_db_quest",
});
module.exports = connection;
