import express from 'express';
import cors from 'cors';
import routes from './routes';

const PORT = process.env.PORT ?? 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(routes);

app.listen(Number(PORT), HOST, () =>
  console.log(`🔥 Server is running at ${PORT}`)
);
