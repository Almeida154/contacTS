import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import routes from './routes';
import { dbConnection } from './config/db';

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

dbConnection();

app.listen(PORT, HOST, () =>
  console.log(`🔥 Server is running at http://localhost:${PORT}`)
);
