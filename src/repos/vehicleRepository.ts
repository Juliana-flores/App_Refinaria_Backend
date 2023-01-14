import type { Repository } from "typeorm";

import TemplateRepository from "./templateRepository";
import type Cursor from "../database/cursor";

import { Vehicle } from "../models";

export default class VehicleRepository extends TemplateRepository<Vehicle> {
  repository: Repository<Vehicle>;
  constructor(cursor: Cursor) {
    super(cursor, Vehicle);
  }
}
