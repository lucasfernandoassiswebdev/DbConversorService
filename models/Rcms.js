const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rcms = new Schema({
    id_rcms: {
        type: Number,
        required: true
    },
    id_exercicio: {
        type: Number,
        required: true,
        default: (new Date()).getFullYear()
    },
    id_orgao: {
        type: String,
        required: true
    },
    requerente: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("RCMS", rcms);