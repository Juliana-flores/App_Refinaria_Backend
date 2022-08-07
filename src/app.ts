import * as express from 'express';

import env from './config/env';
import Cursor from './database/cursor';
import * as cors from "cors"
import Routes from './routes';

// create and setup express app
(async () => {
  const app = express();
  const cursor = new Cursor();
  await cursor.connect();

  app.use(express.json());
  app.use(cors())

  app.use(Routes(cursor));

  app.listen(env.serverParams.port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${env.serverParams.port}`);
  });
})();
