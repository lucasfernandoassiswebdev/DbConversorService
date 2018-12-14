const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rcms = new Schema({
    ID_RCMS: {
        type: Number,
        required: false
    },
    ID_EXERCICIO: {
        type: Number,
        required: true,
        default: (new Date()).getFullYear()
    },
    ID_ORGAO: {
        type: String,
        required: true
    },
    DATA: {
        type: Date,
        required: true,
        default: new Date()
    },
    REQUERENTE: {
        type: String,
        required: false
    },
    PRAZO: {
        type: String,
        required: false
    },
    BAIXA: {
        type: String,
        required: true
    },
    EXCLUIDA: {
        type: String,
        required: true
    },
    ID_FICHA: {
        type: Number,
        required: true
    },
    JUSTIFICATIVA: {
        type: String,
        required: true
    },
    ID_MODALIDADE: {
        type: Number,
        required: true
    },
    AUTORIZADO: {
        type: String,
        required: true
    },
    OBSERVACAO: {
        type: String,
        required: true
    },
    ID_DESTINO: {
        type: Number,
        required: true
    },
    ID_SUBELEMENTO: {
        type: Number,
        required: false
    },
    USUARIO: {
        type: String,
        required: true
    },
    ID_LICITACAO: {
        type: String,
        required: false
    },
    ID_PROCESSO: {
        type: String,
        required: false
    },
    ID_ESTOQUE: {
        type: Number,
        required: false
    },
    ID_UNIDADE: {
        type: String,
        required: true
    },
    JUSTIFICATIVA_ADM: {
        type: String,
        required: false
    },
    ID_APLICACAO: {
        type: String,
        required: false
    },
    ID_CONVENIO: {
        type: String,
        required: false
    },
    REFORCO: {
        type: String,
        required: false
    },
    TIPO_RCMS: {
        type: String,
        required: false
    },
    ID_CONTRATO: {
        type: String,
        required: false
    },
    AUTORIZADO_COMPRA: {
        type: String,
        required: false
    },
    ADIANTAMENTO: {
        type: String,
        required: false
    },
    SERVICO: {
        type: String,
        required: false
    },
    IMPRESSO: {
        type: String,
        required: false
    },
    VIROU_LICITACAO: {
        type: String,
        required: false
    },
    PLACA_VEICULO: {
        type: String,
        required: false
    },
    ATA_REGISTRO: {
        type: String,
        required: false
    },
    LOTE: {
        type: String,
        required: false
    },
    DT_LOTE: {
        type: Date,
        required: false
    },
    ID_PRAZO: {
        type: Number,
        required: false
    },
    BLOQUEADO: {
        type: String,
        required: false
    },
    DATA_AUTORIZACAO: {
        type: Date,
        required: false
    },
    PERIODO: {
        type: String,
        required: false
    },
    DT_DESBLOQUEIO: {
        type: Date,
        required: false
    },
    FINALIZADA: {
        type: String,
        required: false
    },
    COTACAO: {
        type: String,
        required: false
    },
    ID_FINALIDADE: {
        type: Number,
        required: false
    },
    ID_RESERVA_ITEM: {
        type: Number,
        required: false
    },
    ID_SIOPS: {
        type: Number,
        required: false
    },
    COMPRA_DIRETA: {
        type: String,
        required: false
    },
    PENDENTE: {
        type: String,
        required: false
    },
    MENSAGEM_PENDENTE: {
        type: String,
        required: false
    },
    BLOQUEADO_COMPRA: {
        type: String,
        required: false
    },
    DOCUMENTO: {
        type: String,
        required: false
    },
    LOCAL_ENTREGA: {
        type: String,
        required: false
    },
    VL_DESCONTO: {
        type: Number,
        required: false
    },
    HISTORICO: {
        type: String,
        required: false
    },
    AGUARDANDO_AUT_GABINETE: {
        type: String,
        required: false
    },
    JUSTIFICATIVA_COMPRA: {
        type: String,
        required: false
    },
    COTACAO_PROCESSO: {
        type: String,
        required: false
    },
    DATA_COTACAO_PROCESSO: {
        type: Date,
        required: false
    },
    BLOQUEADO_FORNECEDOR: {
        type: String,
        required: false
    },
    DATA_AUTORIZACAO_COMPRA: {
        type: Date,
        required: false
    },
    ENCAMINHADO_GABINETE: {
        type: String,
        required: false
    },
    DATA_ENCAMINHADO_GABINETE: {
        type: Date,
        required: false
    },
    DATA_AUTORIZACAO_GABINETE: {
        type: Date,
        required: false
    },
    PREVISAOPAG: {
        type: Number,
        required: false
    },
    OBRA: {
        type: String,
        required: false
    },
    SITUACAO: {
        type: String,
        required: false
    },
    TIPO_STATUS: {
        type: String,
        required: false
    },
    JUSTIFICATIVA_COTACAO: {
        type: String,
        required: false
    },
    PRAZO_FISCALIZACAO: {
        type: Date,
        required: false
    },
    JUSTIFICATIVA_FISCALIZACAO: {
        type: String,
        required: false
    },
    NOME_FISCALIZACAO: {
        type: String,
        required: false
    },
    CARGO_FISCALIZACAO: {
        type: String,
        required: false
    },
    CPF_FISCALIZACAO: {
        type: String,
        required: false
    },
    RG_FISCALIZACAO: {
        type: String,
        required: false
    },
    EMAIL_FISCALIZACAO: {
        type: String,
        required: false
    },
    MATRICULA_FISCALIZACAO: {
        type: String,
        required: false
    },
    ITENS: [{
        ID_REGRCMS: {
            type: Number,
            required: false
        },
        QUANTIDADE: {
            type: Number,
            required: false
        },
        UNIDADE: {
            type: String,
            required: false
        },
        DESCRICAO: {
            type: String,
            required: true
        },
        ID_RCMS: {
            type: Number,
            required: true
        },
        ID_EXERCICIO: {
            type: Number,
            required: true
        },
        ID_ORGAO: {
            type: String,
            required: true
        },
        ID_MATERIAL: {
            type: String,
            required: false
        },
        ID_ESTOQUE: {
            type: Number,
            required: false
        },
        ID_REFERENCIA: {
            type: Number,
            required: false
        },
        MARCA: {
            type: String,
            required: false
        },
        VL_UNITARIO: {
            type: Number,
            required: false
        },
        ID_PROCESSO_ITEM: {
            type: Number,
            required: false
        }
    }]
});

module.exports = mongoose.model("RCMS", rcms);