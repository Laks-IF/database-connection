const mysql = require("mysql");

(function () {
  const fiveMinutes = 5 * 60 * 1000;

  const connection = mysql.createConnection({
    port: 3306,
    host: "remotemysql.com",
    database: "xoMuXbAysR",
    user: "xoMuXbAysR",
    password: "L3XulXHzPC",
    timeout: fiveMinutes,
    connectTimeout: fiveMinutes
  });

  connection.connect(function (err) {
    if (err) {
      return console.log(err);
    } 

    connection.query("SELECT * FROM users WHERE id = 1", function(err, results, fields){
      if(err){
        return console.log(err);
      }

      console.log(results);
      console.log(fields)
    });
  });
})();
