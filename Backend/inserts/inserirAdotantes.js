require('dotenv').config();
const mongoose = require('mongoose');
const Adotante = require('../models/Adotante');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado ao MongoDB para inserção de adotantes de teste.');

    const adotantesTeste = [
      {
        nome: "Mariana Alves",
        email: "mariana.alves@email.com",
        telefone: "99911-1111",
        endereco: "Av. Brasil, 500",
        especieDesejada: "Cachorro",
        porteDesejado: "Grande",
        sexoDesejado: "Macho",
        aceitaNecessidadesEspeciais: true,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: true,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Ricardo Pereira",
        email: "ricardo.pereira@email.com",
        telefone: "99922-2222",
        endereco: "Rua Central, 789",
        especieDesejada: "Gato",
        porteDesejado: "Pequeno",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: false,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: true,
        possuiOutrosAnimais: false,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Fernanda Lima",
        email: "fernanda.lima@email.com",
        telefone: "99933-3333",
        endereco: "Av. Paulista, 1000",
        especieDesejada: "Cachorro",
        porteDesejado: "Médio",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: true,
        aceitaDoencaCronica: true,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: false,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Lucas Barbosa",
        email: "lucas.barbosa@email.com",
        telefone: "99944-4444",
        endereco: "Rua das Flores, 222",
        especieDesejada: "Gato",
        porteDesejado: "Pequeno",
        sexoDesejado: "Macho",
        aceitaNecessidadesEspeciais: false,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: true,
        possuiOutrosAnimais: true,
        disponibilidadeDeTempo: false
      },
      {
        nome: "Aline Souza",
        email: "aline.souza@email.com",
        telefone: "99955-5555",
        endereco: "Rua Nova, 150",
        especieDesejada: "Cachorro",
        porteDesejado: "Pequeno",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: true,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: true,
        disponibilidadeDeTempo: true
      },
      {
        nome: "João Henrique",
        email: "joao.henrique@email.com",
        telefone: "99966-6666",
        endereco: "Av. Principal, 987",
        especieDesejada: "Gato",
        porteDesejado: "Médio",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: false,
        aceitaDoencaCronica: true,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: false,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Camila Torres",
        email: "camila.torres@email.com",
        telefone: "99977-7777",
        endereco: "Rua do Sol, 45",
        especieDesejada: "Cachorro",
        porteDesejado: "Grande",
        sexoDesejado: "Macho",
        aceitaNecessidadesEspeciais: false,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: true,
        possuiOutrosAnimais: true,
        disponibilidadeDeTempo: false
      },
      {
        nome: "Pedro Oliveira",
        email: "pedro.oliveira@email.com",
        telefone: "99988-8888",
        endereco: "Rua dos Ipês, 321",
        especieDesejada: "Gato",
        porteDesejado: "Pequeno",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: true,
        aceitaDoencaCronica: true,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: true,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Beatriz Silva",
        email: "beatriz.silva@email.com",
        telefone: "99999-9999",
        endereco: "Rua Verde, 456",
        especieDesejada: "Cachorro",
        porteDesejado: "Médio",
        sexoDesejado: "Fêmea",
        aceitaNecessidadesEspeciais: false,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: true,
        possuiOutrosAnimais: false,
        disponibilidadeDeTempo: true
      },
      {
        nome: "Gustavo Rocha",
        email: "gustavo.rocha@email.com",
        telefone: "99910-1010",
        endereco: "Rua Azul, 789",
        especieDesejada: "Gato",
        porteDesejado: "Pequeno",
        sexoDesejado: "Macho",
        aceitaNecessidadesEspeciais: true,
        aceitaDoencaCronica: false,
        aceitaSomenteSaudavel: false,
        possuiOutrosAnimais: false,
        disponibilidadeDeTempo: true
      }
    ];

    await Adotante.insertMany(adotantesTeste);
    console.log('✅ Adotantes de teste inseridos com sucesso!');
    process.exit();
  })
  .catch(err => {
    console.error('Erro ao conectar ou inserir adotantes:', err);
    process.exit(1);
  });
