import type Cursor from "../database/cursor";
import DriverRepository from "../repos/driverRepository";
import * as express from 'express';
import TruckRepository from "../repos/truckRepository";

import type { Router } from 'express'
import UserController from "../controllers/userController";
import Env from '../config/env';

export default (cursor: Cursor, env: typeof Env): Router => {
    const { serverParams } = env;
    const driverRepository = new DriverRepository(cursor);
    const truckRepository = new TruckRepository(cursor);
    const controller = new UserController(driverRepository, truckRepository, serverParams);

    const router = express.Router();

    router.post('/login', controller.login.bind(controller))

    return router;

}