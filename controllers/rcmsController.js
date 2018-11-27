const rcmsRepository = require("../repositories/rcmsRepository");

exports.get = async (req, res, next) => {
    try {
        res.status(200).send(await rcmsRepository.get());
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
};