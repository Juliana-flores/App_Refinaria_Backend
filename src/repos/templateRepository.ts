import type { Repository, EntityTarget, Entity } from 'typeorm';
import type Cursor from '../database/cursor';

export default class TemplateRepository<T> {
  repository: Repository<any>;

  constructor(cursor: Cursor, entity: EntityTarget<typeof Entity>) {
    this.repository = cursor.getRepository(entity);
  }

  async findOne(id: number): Promise<T> {
    return this.repository.findOne(id);
  }

  async create(entity: object): Promise<T> {
    return this.repository.create(entity);
  }

  async save(entity: object): Promise<T> {
    return this.repository.save(entity);
  }
}
