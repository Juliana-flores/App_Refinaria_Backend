import type Cursor from "../database/cursor";
import type Env from "../config/env";

import {
  DriverVehicleRepository,
  ProfileRepository,
  VehicleRepository,
  DriverRepository,
  TruckRepository,
} from "../repos";

import { UserService } from "../service/userService";

import { UserController } from "../controllers";

import { Router } from "express";

export default (cursor: Cursor, env: typeof Env): Router => {
  const { serverParams } = env;

  const driverVehicleRepository = new DriverVehicleRepository(cursor);
  const profileRepository = new ProfileRepository(cursor);
  const vehicleRepository = new VehicleRepository(cursor);
  const driverRepository = new DriverRepository(cursor);
  const truckRepository = new TruckRepository(cursor);

  const userService = new UserService({
    driverVehicleRepository,
    vehicleRepository,
    profileRepository,
    driverRepository,
    truckRepository,
  });

  const controller = new UserController(userService, serverParams);

  const router = Router();

  router.post("/login", controller.login.bind(controller));

  return router;
};
