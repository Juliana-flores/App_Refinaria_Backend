import type  Cursor  from '../database/cursor';
import type { Repository } from 'typeorm';

import { Queue } from '../models';

import TemplateRepository from './templateRepository';

export default class QueueRepository extends TemplateRepository<Queue>{
  repository: Repository<Queue>;
  constructor(cursor: Cursor) {
    super(cursor, Queue); 
  }
}