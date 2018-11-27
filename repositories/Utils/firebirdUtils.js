const options = require('../../config/fireBirdConfig');
var Firebird = require('node-firebird');
exports.getQuery = async (query) => {    
    Firebird.attach(options, function (err, db) {
        if (err)
            throw err;

        db.query(query, function (err, result) {
            console.log(err);
            console.log(result);
            
            db.detach();
        });
    });    

    return 'teste';
}
