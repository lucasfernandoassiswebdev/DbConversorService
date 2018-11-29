const util = require('./Utils/firebirdUtils');

exports.get = async (res) => {
    try {          
        util.getQuery('select first 1 * from rcms', res);
    } catch (e) {
        res.status(404).send({
            message: "Falha ao processar sua requisição"
        });
    }
};