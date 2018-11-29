const rcmsRepository = require("../repositories/rcmsRepository");

exports.get = async (req, res, next) => {
    try {
        rcmsRepository.get(res);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
};