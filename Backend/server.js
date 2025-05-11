require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const petRoutes = require('./routes/petRoutes');
app.use('/api/pets', petRoutes);
const adotanteRoutes = require('./routes/adotanteRoutes');
app.use('/api/adotantes', adotanteRoutes);
const tutorRoutes = require('./routes/tutorRoutes');
app.use('/api/tutores', tutorRoutes);
const rastreabilidadeRoutes = require('./routes/rastreabilidadeRoutes');
app.use('/api/rastreabilidade', rastreabilidadeRoutes);
const posAdocaoRoutes = require('./routes/posAdocaoRoutes');
app.use('/api/posadocao', posAdocaoRoutes);
const iaRoutes = require('./routes/iaRoutes');
app.use('/api/ia', iaRoutes);
const compatibilidadeEmMassaRoutes = require('./routes/compatibilidadeEmMassaRoutes');
app.use('/api/ia', compatibilidadeEmMassaRoutes);
const historicoRoutes = require('./routes/historicoRoutes');
app.use('/api', historicoRoutes);

// Conexão com o MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 Conectado ao MongoDB Atlas'))
  .catch(err => console.error('🔴 Erro de conexão:', err));

// Rota de teste
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// Definir porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
