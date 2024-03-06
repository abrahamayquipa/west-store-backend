import express from 'express';
import cors from 'cors';
import productsRouter from './product.js';

const app = express();

app.use(cors({
  origin: 'https://west-store-web-app-project-2rbx2r5ti-abrahams-projects-a43793ae.vercel.app'
}));

app.use('/api', productsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;