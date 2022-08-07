import type  Cursor  from '../database/cursor';
import type { Repository } from 'typeorm';

import { Driver } from '../models';

import TemplateRepository from './templateRepository';

export default class DriverRepository extends TemplateRepository<Driver>{
  repository: Repository<Driver>;
  
  constructor(cursor: Cursor) {
    super(cursor, Driver);
  }

  async findByUsername(username: string): Promise<Driver> {
    try {
      const driver =  await this.repository.findOne({ username},{ relations: ["trucks"] });
      return driver;
    } catch (error) {
      return null;
    }
  }

}