require('dotenv').config();
const mongoose = require('mongoose');
const Pet = require('../models/Pet');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado ao MongoDB para inserção de testes.');

    const petsTeste = [
      { nome: "Rex", especie: "Cachorro", porte: "Grande", sexo: "Macho", sociavel: true },
      { nome: "Luna", especie: "Gato", porte: "Pequeno", sexo: "Fêmea", sociavel: true },
      { nome: "Thor", especie: "Cachorro", porte: "Médio", sexo: "Macho", sociavel: false },
      { nome: "Mia", especie: "Gato", porte: "Pequeno", sexo: "Fêmea", tratamentoContinuo: "insulina" },
      { nome: "Bidu", especie: "Cachorro", porte: "Pequeno", sexo: "Macho", exigeCuidadosConstantes: true },
      { nome: "Nina", especie: "Gato", porte: "Pequeno", sexo: "Fêmea", doencaCronica: "renal" },
      { nome: "Spike", especie: "Cachorro", porte: "Grande", sexo: "Macho", sociavel: false },
      { nome: "Mel", especie: "Gato", porte: "Médio", sexo: "Fêmea" },
      { nome: "Bob", especie: "Cachorro", porte: "Médio", sexo: "Macho", tratamentoContinuo: "coração" },
      { nome: "Lili", especie: "Gato", porte: "Pequeno", sexo: "Fêmea", sociavel: true }
    ];

    await Pet.insertMany(petsTeste);
    console.log('✅ Pets de teste inseridos com sucesso!');
    process.exit();
  })
  .catch(err => {
    console.error('Erro ao conectar:', err);
    process.exit(1);
  });
