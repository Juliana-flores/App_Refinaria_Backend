import type  Cursor  from '../database/cursor';
import type { Repository } from 'typeorm';

import { Location } from '../models';

import TemplateRepository from './templateRepository';

export default class LocationRepository extends TemplateRepository<Location>{
  repository: Repository<Location>;
  constructor(cursor: Cursor) {
    super(cursor, Location); 
  }
}