const firebird = require('./databases/firebird');

exports.get = async () => {
    return await firebird.doQuery('select first 1 * from rcms where id_rcms = 24');
};

exports.getById = async (id) => {
    return await firebird.doQuery(`select * from rcms where id_rcms = ${id}`);
};

exports.getItens = async (idRcms) => {
    return await firebird.doQuery(`select * from rcms_item where id_regrcms = ${idRcms}`);
}