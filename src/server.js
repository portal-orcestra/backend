const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const app = require('./src/app');

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


process.on('unhandledRejection', (err) => {
  console.log(`Erro: ${err.message}`);
  server.close(() => process.exit(1));
});