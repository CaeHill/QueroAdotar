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
  - [NodeJs](https://nodejs.org/en/download): Linguagem de programção Javascript adaptada para desenvolver aplicações backend. Siga o passo-a-passo do site oficial, utilizando as ferramentas que preferir e mais adequadas para o seu sistema operacional, por garantia, baixe a versão mais recente do Nodejs.
  - [MongoDB](https://www.mongodb.com/try/download/compass): Banco de dados não relacional(NoSQL) utilizado para desenvolver o projeto. Recomendo que baixe o "MongoDB Compass", seguindo o passo-a-passo do seu respectivo sistema operacioal.
  - [Git](https://git-scm.com/downloads): Ferramenta de versionamento de códigos e arquivos, vai auxiliar na hora de copiar o repositório do github em sua máquina. Siga os passos para o seu respectivo sistema operacional.
- Após a instalação, acesse o diretório onde deseja colocar o projeto, abra um terminal neste local e copie o seguinte comando, e coloque em seu terminal:
  - `git clone https://github.com/CaeHill/QueroAdotar.git`
- depois de ter copiado, ele vai copiar a pasta do projeto neste diretório, em seguida, acesse esta pasta através do terminal, e logo em seguida, a pasta "backend", e utilize o comando: -`npm install`
- Este comando instalará os pacotes e dependencias do projeto. Após a instalação, na pasta raiz do projeto(backend), siga o exemplo da arquivo ".env-example" e preencha os dados com as suas respectivas informações.
  - MONGO_URI= //URL do seu banco do seu cluster
  - PORT= //Porta que iniciará o projeto
  - OPENAI_API_KEY= //sua chave da OpenAi
    // esta chave da OpenAi é só para fazer consultas mais complexas, como comparação entre Pets e Adotantes, e ver quais são mais compativeis
