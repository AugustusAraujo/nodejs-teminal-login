var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "erp",
  port: "3306",
});

con.connect(function (err) {
  if (err) throw err;
  //console.log("Conectado");
});

exports.query = (query) => {
  con.query(query, (err, result) => {
    if (err) throw err;
    return (JSON.stringify(result));
    con.end();
  });
};
