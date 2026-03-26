const axios = require('axios');

exports.enviarMensagem = async (numero,texto) => {
    await axios.post(
        'https://graph.facebook.com/v18.0/id/messages',
        {
            messaging_product : "whatsapp",
            to: numero
            text: { body: texto}

        },
        {
            headers: {
                Authorization: `Bearer token`,
                'Content-Type': 'application/json'
            }
        }
    );
};