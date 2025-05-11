const { calcularPontuacao } = require('../utils/compatibilidadeLocal');

const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const Pet = require('../models/Pet');
const Adotante = require('../models/Adotante');
const HistoricoCompatibilidade = require('../models/HistoricoCompatibilidade');

const gerarJustificativa = async (pet, adotante, pontuacao) => {
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

  try {
    const resposta = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
      max_tokens: 80
    });
    
    const texto = resposta.choices[0].message.content;

    try {
      const { justificativa } = JSON.parse(texto);
      return justificativa;
    } catch {
      return 'Justificativa indisponível no momento.';
    }
  } catch (error) {
    return 'Justificativa indisponível no momento.';
  }
};

const verificarCompatibilidadeEmMassa = async (req, res) => {
  const { adotanteId } = req.params;

  try {
    const adotante = await Adotante.findById(adotanteId);
    if (!adotante) {
      return res.status(404).json({ erro: 'Adotante não encontrado.' });
    }

    const pets = await Pet.find({ status: 'Disponível' });

    // 1. Calcula pontuações (sem IA ainda)
    const resultados = pets.map(pet => {
      const pontuacao = calcularPontuacao(pet, adotante);
      return { pet, pontuacao };
    });

    // 2. Filtra top 3 com pontuação > 0
    const top3 = resultados
      .filter(r => r.pontuacao > 0)
      .sort((a, b) => b.pontuacao - a.pontuacao)
      .slice(0, 3);

    // 3. Para os top3, gera justificativa via IA e salva no histórico
    const top3ComJustificativa = await Promise.all(
      top3.map(async ({ pet, pontuacao }) => {
        const justificativa = await gerarJustificativa(pet, adotante, pontuacao);

        await HistoricoCompatibilidade.create({
          adotante: adotante._id,
          pet: pet._id,
          pontuacao,
          justificativa
        });

        return {
          pet,
          compatibilidade: {
            pontuacao,
            justificativa
          }
        };
      })
    );

    // 4. Retorna somente os 3 com justificativa
    res.json(top3ComJustificativa);

  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = { verificarCompatibilidadeEmMassa };
