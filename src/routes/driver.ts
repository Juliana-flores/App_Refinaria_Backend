
import { TruckRepository, DriverRepository } from "../repos";
import { DriverController } from "../controllers";
import { Router }  from 'express';

import type Cursor from "../database/cursor";


export default (cursor: Cursor): Router => {
    const driverRepository = new DriverRepository(cursor);
    const truckRepository = new TruckRepository(cursor);

    const controller = new DriverController(driverRepository, truckRepository);

    const router = Router();

    router.put('/driver', controller.create.bind(controller))

    return router;

}