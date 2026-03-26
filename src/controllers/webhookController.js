const userModel = require('../models/userModel');
const whatsappService = require('../services/whatsappService');

exports.receberMensagem = async (req, res) => {
    const texto = msg.text?.body;
    const numero = msg.from;

    let user = await userModel.buscarOuCriar(numero);

    let resposta = "Não entendi";

    if (user.etapa === "inicio"){
        resposta = "Olá! Seja bem-vindo(a) à Clínica de Olho Olinta Dutra.
        Estamos aqui para cuidar da sua saúde visual com carinho e excelência!
        
        Para agilizar seu atendimento, selecione uma das opções abaixo:
        1 - Consultas
        2 - Exames
        3 - Cirurgias
        4 - Lentes de Contato
        5 - Outros Assuntos
        
        Basta responder com o número da opção desejada. Em instantes, respoderemos você!";

        await userModel.atualizarEtapa(numero, "menu");


    }
    await whatsappService.enviarMensagem(numero,resposta);

    res.sendStatus(200);

};



