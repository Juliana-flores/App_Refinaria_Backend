import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";

import Cursor from "./database/cursor";
import env from "./config/env";
import Routes from "./routes";

// create and setup express app
(async () => {
  try {
    const app = express();

    const cursor = new Cursor({ ...env.databaseCredentials });
    await cursor.connect();

    app.use(express.json());
    app.use(helmet());
    app.use(cors());

    app.use(Routes(cursor));

    app.listen(env.serverParams.port, () => {
      console.info(
        `⚡️[server]: Server is running at ${env.serverParams.port}`
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
