<h1>Quero Adotar - Backend</h1>

- Está aplicação `backend` utiliza as seguintes ferramentas e bibliotecas:
  - MongoDB
  - Git
  - NodeJs
    - Express
    - Mongoose
    - OpenAi
    - dotEnv

## como utilizar?

- Você necessáriamente precisa ter tanto o MongoDB, quanto o NodeJs instalados em seu dispositivo, caso não tenha, vá até os links atrelados as respectivas ferramentas, e instale-as:
  - [NodeJs](https://nodejs.org/en/download): Linguagem de programção Javascript adaptada para desenvolver aplicações backend. Siga o passo-a-passo do site oficial, utilizando as ferramentas que preferir e mais adequadas para o seu sistema operacional, por garantia, baixe a versão mais recente do Nodejs;
  - [MongoDB](https://www.mongodb.com/try/download/compass): Banco de dados não relacional(NoSQL) utilizado para desenvolver o projeto. Recomendo que baixe o "MongoDB Compass", seguindo o passo-a-passo do seu respectivo sistema operacioal.
  - [Git](https://git-scm.com/downloads): Ferramenta de versionamento de códigos e arquivos, vai auxiliar na hora de copiar o repositório do github em sua máquina. Siga os passos para o seu respectivo sistema operacional; -[Postman](https://www.postman.com/downloads/)(recomendação, mas pode ser utilizado outra ferramenta, como o [Insomnia](https://insomnia.rest/download)): Ferramenteas para fazer requisições(GET,POST,PUT,DELETE) no sistema, para facilitar a execução dos testes da aplicação.
- Após a instalação, acesse o diretório onde deseja colocar o projeto, abra um terminal neste local e copie o seguinte comando, e coloque em seu terminal:
  - `git clone https://github.com/CaeHill/QueroAdotar.git`
- depois de ter copiado, ele vai copiar a pasta do projeto neste diretório, em seguida, acesse esta pasta através do terminal, e logo em seguida, a pasta "backend", e utilize o comando: -`npm install`
- Este comando instalará os pacotes e dependencias do projeto. Após a instalação, na pasta raiz do projeto(backend), siga o exemplo da arquivo ".env-example" e preencha os dados com as suas respectivas informações.
  ```json
   MONGO_URI= //URL do seu banco do seu cluster
   PORT= //Porta que iniciará o projeto
   OPENAI_API_KEY= //sua chave da OpenAi
  ```
  // esta chave da OpenAi é só para fazer consultas mais complexas, como comparação entre Pets e Adotantes, e ver quais são mais compativeis
- Após a configuração do `.env`, voltamos ao terminal e executamos o seguinte comando: `npm start`, e aplicação estará rodando no endereço `http://localhost:<SUAPORTA>`. e agora você pode executar este endereço, ou até mesmo abrir ele em seu navegador, e aparecerá uma mensagem "API funcionando!".
- OBS: quando a aplicação, ele monta um MOCK com dados já populados no banco de dados, os respectivos dados estão em: `Backend/inserts`.

# Requisições do Sistema

## Requisição GET:

- `http://localhost:3000/api/pets/` - Lista todos os pets já cadastrados no sistema.
- `http://localhost:3000/api/pets/:id` - Lista os dados do pet com o respecitvo id cadastrado.
- `http://localhost:3000/api/adotantes` - Lista todos os adotantes interessados do sistema.
- `http://localhost:3000/api/adotantes/:id` - lista todos os dados do respectivo adotante.
- `http://localhost:3000/api/tutores` - Lista todos os tutores cadastrados no sistema.
- `http://localhost:3000/api/tutores/:id` - Lista os dados do respectivo tutor, q possui o respectivo ID.
- `http://localhost:3000/api/rastreabilidade/` - Lista todos os pets com que foram adotados, com seus dados de rastreabilidade.
- `http://localhost:3000/api/rastreabilidade/:petId` - Busca o pet especifico com o respectivo ID e seus dados de rastreabilidade.
- `http://localhost:3000/api/posadocao` - Lista todos os estados de pós-adoção dos pets que estavam cadastrado no sistema, e foram adotados.
- `http://localhost:3000/api/posadocao/:id` - Lista somente o estado do pet com o respectivo ID.
- `http://localhost:3000/api/historico/:adotanteId` - Lista o histórico do respectivo adotante, caso há histórico.

## Requisições de POST:

- `http://localhost:3000/api/pets/` - Permite o cadastro de um pet no sistema, requer os seguintes dados:
  ```JSON
  {
    "nome": String(obrigatório),
    "especie": String;(obrigatório),
    "porte": String(obrigatório),
    "sexo": String(obrigatório),
    "necessidadesEspeciais": String,
    "tratamentoContinuo": String,
    "doencasCronicas": String,
    "sociavel": String,
    "exigeCuidadosConstantes": Boolean
  }
  ```
- `http://localhost:3000/api/adotantes/` - Permite o cadastro de um novo adotante no sistema, e requer os seguintes campos:
  ```JSON
   {
      "nome": String(obrigatório),
      "email": String,
      "telefone": String,
      "endereco": String,
      "possuiPets": [
        {
    // uma lista de schemas de pets, listado logo acima;
        }
      ],
      "especieDesejada": String,
      "porteDesejado": String,
      "sexoDesejado": String,
      "aceitaNecessidadesEspeciais": Boolean,
      "aceitaDoencaCronica": Boolean,
      "aceitaSomenteSaudavel": Boolean,
      "possuiOutrosAnimais": Boolean,
      "disponibilidadeDeTempo": Boolean
    }
  ```
- `http://localhost:3000/api/tutores/` - Permite o cadastro de tutores no sistema, requerindo os seguintes dados:

  ```JSON
  {
    "nome": String(Obrigatório),
    "email": String,
    "telefone": String,
    "endereco": String,
    "pets": [{
      // uma lista de schemas de pets, listado logo acima;
    }]
  }
  ```

- `http://localhost:3000/api/rastreabilidade/` - Cria um registro para a rastreabilidade do pet em questão, que será adotado. Requer os seguintes dados:
  ```JSON
  {
    "pet": schema de Pet(Obrigatório),
    "localizacao": String(Obrigatório),
    "data": Date(Obrigatório), // data de adoção do Pet
    "tempoDePermanencia": String (Obrigatório)
  }
  ```
- `http://localhost:3000/api/posadocao` - Cria o cadastro de pós-adoção do pet, permitindo o acompanhamento do pet e do tutor. Requer os seguintes dados:

```JSON
{
  "pet": {/*Schema de pets(Obrigatório)*/},
  "tutor": {/*Schema de Tutor(Obrigatório)*/},
  "visitas": [
    {
        "data": Date,
        "observacoes": String
    }
  ],
 "incidentesDeSaude": [
   {
     "tipo": String,
     "descricao": String,
     "data": Date
   }
 ]
}
```

- `http://localhost:3000/api/ia/compatibilidade` - Verifica o quão compativel são o pet e o adotante enviados, retornando uma pontuação mais uma justificativa, com auxilio do chatGPT. requer os seguintes dados:
  ```JSON
  {
    "pet": {/*Schema do pet(Obrigatório)*/},
    "adotante": {/*"Shema do adotante(obrigatório)"*/}
  }
  ```
- `http://localhost:3000/api/ia/compatibilidade-em-massa/:adotanteId` - Faz um teste de compatibilidade, baseada no ID do adotante, em todos os os pets cadastrados, e retorna as 3 opções com maior pontuação, mais uma justificativa, com auxilio do chatGPT. Exige os seguintes dados:

```JSON
{
  "adotante": {/*Schema do adotante(obrigatório*/}
}
```

# Utilizando Compass

- Deve-se conectar no seu banco de dados, e após isto, caso ja tenha iniciado a aplicação em algum momento, alguns dados ja estarão preenchidos. Você pode acessar cada "coleção" e criar novos dados, clicando em "Add Data", e depois em "insert document", utilizando quase as mesmas regras, aqui um exemplo de um "adotante":

```Json
{
  "_id": {
    "$oid": "6822e1bb55e6f690e525b454"
  },
  "nome": "Renato Souza",
  "email": "Renato@email.com",
  "telefone": "99999-9999",
  "endereco": "Rua das Flores, 123",
  "possuiPets": [],
  "especieDesejada": "Gato",
  "porteDesejado": "Médio",
  "sexoDesejado": "Fêmea",
  "aceitaNecessidadesEspeciais": false,
  "aceitaDoencaCronica": false,
  "aceitaSomenteSaudavel": false,
  "possuiOutrosAnimais": true,
  "disponibilidadeDeTempo": true,
  "createdAt": {
    "$date": "2025-05-11T15:07:54.195Z"
  },
  "updatedAt": {
    "$date": "2025-05-11T15:07:54.195Z"
  },
  "__v": 0
}
```
Exemplo para "Pet":
```JSON
{
  "_id": {
    "$oid": "6822e35255e6f690e525b458"
  },
  "nome": "Chica",
  "especie": "Gato",
  "porte": "Médio",
  "sexo": "Fêmea",
  "status": "Disponível",
  "necessidadesEspeciais": "",
  "tratamentoContinuo": "",
  "doencaCronica": "",
  "sociavel": true,
  "exigeCuidadosConstantes": false,
  "historicoRastreabilidade": [],
  "createdAt": {
    "$date": "2025-05-13T14:23:23.249Z"
  },
  "updatedAt": {
    "$date": "2025-05-13T14:23:23.249Z"
  },
  "__v": 0
}
```