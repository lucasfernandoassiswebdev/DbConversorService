const util = require('./Utils/firebirdUtils');

exports.get = async () => {
    try {      
        return await util.getQuery('select first 1 * from rcms');
    } catch (e) {
        res.status(404).send({
            message: "Falha ao processar sua requisição"
        });
    }
};