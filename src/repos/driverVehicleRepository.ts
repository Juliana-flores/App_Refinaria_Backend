import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { DriverVehicle } from "../models";

export default class DriverVehicleRepository extends TemplateRepository<DriverVehicle> {
  repository: Repository<DriverVehicle>;
  constructor(cursor: Cursor) {
    super(cursor, DriverVehicle);
  }
}
