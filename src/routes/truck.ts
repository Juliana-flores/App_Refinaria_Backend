import type Cursor from "../database/cursor";
import TruckRepository from "../repos/truckRepository";
import * as express from 'express';
import TruckController from "../controllers/truckController";

import type { Router } from 'express'

export default (cursor: Cursor): Router => {
    const truckRepository = new TruckRepository(cursor);
    const controller = new TruckController(truckRepository);

    const router = express.Router();

    router.post('/truck', controller.create.bind(controller))

    return router;

}