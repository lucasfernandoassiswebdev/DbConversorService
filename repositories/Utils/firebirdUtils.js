const options = require('../../config/fireBirdConfig');
const Firebird = require('node-firebird');

exports.getQuery = async (query, res) => {
    Firebird.attach(options, function (err, db) {
        if (err)
            res.status(500).send(err.message);

        db.query(query, function (error, result) {
            if (error)
                res.status(500).send(err.message);

            if (res != undefined) {
                db.query('select first 1 * from contabil_contrato_exec', function (error2, resultado) {
                    result.push(resultado[0]);
                    db.detach();

                    res.status(200).send(result);
                });
            }
        });
    });
}
