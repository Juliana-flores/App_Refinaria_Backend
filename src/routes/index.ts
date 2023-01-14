import type Cursor from "../database/cursor";
import QueueRouter from "./queue";
import UserRouter from "./user";

import env from "../config/env";
import * as express from "express";

import type { Request, Response } from "express";
import type { Router } from "express";

export default (cursor: Cursor): Router => {
  const router = express.Router();

  router.get("/", (req: Request, res: Response) => res.sendStatus(200));

  router.use("/user", UserRouter(cursor, env));
  router.use("/queue", QueueRouter(cursor));

  return router;
};
