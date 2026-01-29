require('dotenv').config();

const app = require('./src/App');
const connectDB = require('./src/config/db');

connectDB();

app.listen(process.env.PORT, () => {
  console.log('Servidor corriendo');
});