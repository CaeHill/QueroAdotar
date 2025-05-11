require('dotenv').config();
const mongoose = require('mongoose');
const Tutor = require('../models/Tutor');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado ao MongoDB para inserção de tutores de teste.');

    const tutoresTeste = [
      {
        nome: "Ana Souza",
        email: "ana.souza@email.com",
        telefone: "98888-1111",
        endereco: "Av. Central, 456"
      },
      {
        nome: "Felipe Martins",
        email: "felipe.martins@email.com",
        telefone: "98888-2222",
        endereco: "Rua das Palmeiras, 789"
      },
      {
        nome: "Juliana Dias",
        email: "juliana.dias@email.com",
        telefone: "98888-3333",
        endereco: "Av. Atlântica, 1010"
      },
      {
        nome: "Marcelo Castro",
        email: "marcelo.castro@email.com",
        telefone: "98888-4444",
        endereco: "Rua do Comércio, 50"
      },
      {
        nome: "Patrícia Mendes",
        email: "patricia.mendes@email.com",
        telefone: "98888-5555",
        endereco: "Rua das Rosas, 234"
      },
      {
        nome: "Thiago Almeida",
        email: "thiago.almeida@email.com",
        telefone: "98888-6666",
        endereco: "Av. Getúlio Vargas, 789"
      },
      {
        nome: "Vanessa Costa",
        email: "vanessa.costa@email.com",
        telefone: "98888-7777",
        endereco: "Rua Verde, 89"
      },
      {
        nome: "Rafael Lima",
        email: "rafael.lima@email.com",
        telefone: "98888-8888",
        endereco: "Rua do Bosque, 321"
      },
      {
        nome: "Camila Rocha",
        email: "camila.rocha@email.com",
        telefone: "98888-9999",
        endereco: "Rua Azul, 123"
      },
      {
        nome: "Bruno Fernandes",
        email: "bruno.fernandes@email.com",
        telefone: "98888-1010",
        endereco: "Av. Industrial, 555"
      }
    ];

    await Tutor.insertMany(tutoresTeste);
    console.log('✅ Tutores de teste inseridos com sucesso!');
    process.exit();
  })
  .catch(err => {
    console.error('Erro ao conectar ou inserir tutores:', err);
    process.exit(1);
  });
