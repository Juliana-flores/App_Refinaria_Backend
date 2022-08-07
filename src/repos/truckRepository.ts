import type  Cursor  from '../database/cursor';
import type { Repository } from 'typeorm';

import { Truck } from '../models';

import TemplateRepository from './templateRepository';


export default class TruckRepository extends TemplateRepository<Truck>{
  repository: Repository<Truck>;
  constructor(cursor: Cursor) {
    super(cursor, Truck);
  }

  async findOneByLicensePlate(plateCarriage: string): Promise<Truck> {
    return this.repository.findOne({ plateCarriage })
  }
}