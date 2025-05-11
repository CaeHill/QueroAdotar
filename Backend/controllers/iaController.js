const { calcularPontuacao } = require('../utils/compatibilidadeLocal');

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Lógica principal de compatibilidade
const verificarCompatibilidade = async (req, res) => {
  const { pet, adotante } = req.body;

  try {
    const pontuacao = calcularPontuacao(pet, adotante);

    const prompt = `
      Escreva uma justificativa curta (até 20 palavras) para a seguinte pontuação de compatibilidade entre um pet e um adotante (a pontuação maxima possivel é 65).

      Pet: ${JSON.stringify(pet, null, 0)}
      Adotante: ${JSON.stringify(adotante, null, 0)}
      Pontuação: ${pontuacao}

      Responda no formato:
      {
        "justificativa": "texto"
      }
    `;

    const resposta = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
      max_tokens: 80
    });

    const texto = resposta.choices[0].message.content;

    try {
      const { justificativa } = JSON.parse(texto);
      res.json({ pontuacao, justificativa });
    } catch {
      res.json({ pontuacao, justificativa: "Justificativa gerada pela IA indisponível." });
    }

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = { verificarCompatibilidade };
