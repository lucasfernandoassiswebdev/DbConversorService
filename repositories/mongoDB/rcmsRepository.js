const mongoose = require("mongoose");
const RCMS = mongoose.model("RCMS");

exports.getAll = async () => {
    return await RCMS.find({});
}

exports.save = async (rcms, callback) => {
    var rcms_schema = new RCMS(rcms);
    await rcms_schema.save(function (error) {
        if (error)
            callback({
                status: 500,
                message: error.message
            });


        callback({
            status: 204,
            message: "Criado com sucesso"
        });
    });
}