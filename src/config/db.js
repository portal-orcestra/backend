import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro na conexão com MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;