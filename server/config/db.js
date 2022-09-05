const mysql = require("mysql");

const db = mysql.createPool({
  host: "my-pjt-db.c7cygtlxmxfn.us-west-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "qhdrndepddl0676!",
  database: "my-pjt-db",
});

module.exports = db;
