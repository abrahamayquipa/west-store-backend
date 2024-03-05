import express from 'express';
import cors from 'cors';
import productsRouter from './product.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use('/api', productsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;