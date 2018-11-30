const rcmsService = require('../services/rcmsService');

exports.get = async (req, res, next) => {
    try {
        var response = await rcmsService.get();
        return res.status(response.status).send(response.ok ? response.content : response.message);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var response = await rcmsService.getById(req.params.id);
        return res.status(response.status).send(response.ok ? response.content : response.message);
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição"
        });
    }
};