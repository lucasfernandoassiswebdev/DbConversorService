const rcmsService = require('../services/rcmsService');

exports.get = async (req, res, next) => {
    try {
        var response = await rcmsService.get();
        return res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: error.message
        });
    }
};

exports.updateRcms = async (req, res, next) => {
    try {
        var response = await rcmsService.updateRcms(req.params.id, req.params.id_exercicio, req.params.id_orgao);        
        return res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: error.message
        });
    }
}

exports.getById = async (req, res, next) => {
    try {        
        var response = await rcmsService.getById(req.params.id, req.params.id_exercicio, req.params.id_orgao);
        return res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({
            ok: false,
            message: error.message
        });
    }
};

exports.getFromMongo = async (req, res, next) => {
    try {
        var response = await rcmsService.getFromMongo();           
        return res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({
            ok: false,                        
            message: error.message
        });
    }
};