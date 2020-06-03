var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "insults"
});

con.connect(function(err) {
    if (err) throw err;
    let sql = "select a.string AS first, b.string AS second, c.string AS noun from short_adjective a , long_adjective b, noun c ORDER BY rand() limit 1";
    // let sql = "select a.string from short_adjective a";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});