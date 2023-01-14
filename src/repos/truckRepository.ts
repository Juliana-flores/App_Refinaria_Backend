import type { Repository } from "typeorm";

import { Truck } from "../models";

import TemplateRepository from "./templateRepository";
import VehicleRepository from "./vehicleRepository";
import type Cursor from "../database/cursor";

export default class TruckRepository extends TemplateRepository<Truck> {
  repository: Repository<Truck>;

  constructor(cursor: Cursor) {
    super(cursor, Truck);
  }

  async findOneByLicensePlate(plateCarriage: string): Promise<Truck> {
    return this.repository.findOne({ where: { plateCarriage } });
  }
}
