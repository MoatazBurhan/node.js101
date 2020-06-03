var mysql = require('mysql');

exports.generateInsult = function (callback) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "insults"
    });

    con.connect(function(err) {
        if (err)
            callback(err,null);
        else {
            let sql = "select a.string AS first, b.string AS second, c.string AS noun from short_adjective a , long_adjective b, noun c ORDER BY rand() limit 1";
            con.query(sql, function (err, result, fields) {
                if (err)
                    callback(err, null);
                else {
                var firstAdjective = result[0].first;
                var secondAdjective = result[0].second;
                var noun = result[0].noun;

                var vowels = "AEIOU";
                var article = "an";
                if (vowels.indexOf(firstAdjective.charAt(0)) == -1) {
                    article = "a";
                }

                var insult = "Thou art " + article + " " + firstAdjective + " " + secondAdjective + " " + noun;
                callback(null, insult);
                }
            });
        }
    });
};