import {
  TimeRangeRepository,
  LocationRepository,
  ScheduleRepository,
  VehicleRepository,
  TruckRepository,
  QueueRepository,
} from "../repos";
import { QueueController } from "../controllers";
import { Router } from "express";
import type Cursor from "../database/cursor";

export default (cursor: Cursor): Router => {
  const timeRangeRepository = new TimeRangeRepository(cursor);
  const locationRepository = new LocationRepository(cursor);
  const scheduleRepository = new ScheduleRepository(cursor);
  const vehicleRepository = new VehicleRepository(cursor);
  const queueRepository = new QueueRepository(cursor);

  const truckRepository = new TruckRepository(cursor);

  const controller = new QueueController({
    timeRangeRepository,
    locationRepository,
    scheduleRepository,
    queueRepository,
    truckRepository,
  });

  const router = Router();

  router.post("/schedule", controller.schedule.bind(controller));

  return router;
};
