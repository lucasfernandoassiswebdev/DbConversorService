const rcmsFirebirdRepository = require('../repositories/firebird/rcmsRepository');
const rcmsMongoRepository = require('../repositories//mongoDB/rcmsRepository');

exports.get = async () => {
    return await doQuery(rcmsFirebirdRepository.get).then(async function (result) {
        return await getItens(result).then(function (resultado) {
            return resultado;
        });
    }).catch(function (error) {
        return {
            ok: false,
            status: 500,
            message: error.message
        }
    });
}

exports.getById = async (id_rcms, id_exercicio, id_orgao) => {
    return await doQuery(rcmsFirebirdRepository.getById, id_rcms, id_exercicio, id_orgao).then(async function (result) {
        return await getItens(result).then(function (resultado) {
            return resultado;
        });
    }).catch(function (error) {
        return {
            ok: false,
            status: 500,
            message: error.message
        }
    });
}

exports.getFromMongo = async () => {
    var retorno = await rcmsMongoRepository.getAll()
    return {
        ok: true,
        status: 200,
        content: retorno
    };
}

exports.updateRcms = async (id_rcms, id_exercicio, id_orgao) => {
    return new Promise(async function (resolve, reject) {
        var rcms_original;
        await doQuery(rcmsFirebirdRepository.getById, id_rcms, id_exercicio, id_orgao).then(async function (result) {
            await getItens(result).then(function (resultado) {
                rcms_original = resultado;
            });
        }).catch(function (error) {
            reject({
                ok: false,
                status: 500,
                message: error.message
            });
        });

        rcmsMongoRepository.save(rcms_original.content[0], async function (response) {
            return resolve({
                ok: true,
                status: 201,
                message: response.message
            });
        });
    });
}

async function getItens(lista_rcms) {
    return new Promise(function (resolve, reject) {
        lista_rcms.content.forEach(function (item, index) {
            doQuery(rcmsFirebirdRepository.getItens, item.ID_RCMS).then(function (result) {
                item.ITENS = result.content;

                if ((index + 1) == lista_rcms.content.length)
                    resolve(lista_rcms);
            }).catch(function (error) {
                reject(error);
            });
        });
    });
}

function doQuery(callback, ...parameters) {
    return new Promise(function (resolve, reject) {
        try {
            if (parameters != undefined)
                resolve(callback(parameters));
            else
                resolve(callback());
        } catch (error) {
            reject(error);
        }
    });
}
