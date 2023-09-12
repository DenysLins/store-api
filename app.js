require('dotenv').config();
require('express-async-errors');
const express = require('express');

const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const productsRouter = require('./routes/products');

const connectDB = require('./db/connect');

app.use(express.json());

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    const PORT = process.env.PORT || 3000;
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
