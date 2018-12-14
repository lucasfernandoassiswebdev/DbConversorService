const firebird = require('../databases/firebird');

exports.get = async () => {
    return await firebird.doQuery("select first 10 * from rcms where id_exercicio = ? and id_orgao = ?", [2018, '020000']);
};

exports.getById = async (parametros) => {
    return await firebird.doQuery("select * from rcms where id_rcms = ? and id_exercicio = ? and id_orgao = ?", [parametros[0], parametros[1], parametros[2]]);
};

exports.getItens = async (idRcms) => {
    return await firebird.doQuery("select * from rcms_item where id_rcms = ?", [idRcms]);
}