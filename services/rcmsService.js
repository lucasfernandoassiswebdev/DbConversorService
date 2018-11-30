const rcmsRepository = require('../repositories/rcmsRepository');
exports.get = async () => {
    return await doQuery(rcmsRepository.get).then(function (result) {
        // result.content.forEach(function (item, index) {
        //     item.itens = doQuery(rcmsRepository.getItens, item.ID_RCMS).then(function (result) {
        //         return result.content;
        //     }).catch(function (error) {
        //         return error;
        //     });            
        // });

        return result;
    }).catch(function (error) {
        return {
            status: 500,
            message: 'Algo deu errado'
        }
    });
}

exports.getById = async (idRcms) => {
    var rcms = rcmsRepository.getById(idRcms);
}

function doQuery(callback, parameter) {
    return new Promise(function (resolve, reject) {
        if (parameter != undefined)
            resolve(callback(parameter));
        else
            resolve(callback());
    });
}
