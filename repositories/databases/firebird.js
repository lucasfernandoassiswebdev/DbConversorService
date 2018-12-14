const options = require('../../config/fireBirdConfig');
const Firebird = require('node-firebird');

exports.doQuery = async (query, parameters) => {
    return doRead(query, parameters).then(function (result) {
        return result;
    }).catch(function (error) {
        return error;
    });
}

function doRead(query, parameters) {
    return new Promise(function (resolve, reject) {
        Firebird.attach(options, function (err, db) {
            if (err)
                reject({
                    ok: false,
                    status: 500,
                    message: err.message
                });
            
            db.query(query, parameters, function (error, result) {
                if (error)
                    reject({
                        ok: false,
                        status: 500,
                        message: error.message
                    });
                
                resolve({
                    ok: true,
                    status: 200,
                    length: result.length,
                    content: result
                });

                db.detach();
            });
        });
    });
}
