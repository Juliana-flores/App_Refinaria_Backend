import {
  FindManyOptions,
  FindOneOptions,
  EntityTarget,
  Repository,
  Entity,
} from "typeorm";

import type Cursor from "../database/cursor";

export default class TemplateRepository<T> {
  repository: Repository<any>;

  constructor(cursor: Cursor, entity: EntityTarget<typeof Entity>) {
    this.repository = cursor.getRepository(entity);
  }

  async findOne(options?: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(options);
  }

  async find(options: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async create(entity: T | object): Promise<T> {
    return this.repository.create(entity);
  }

  async save(entity: T | T[]): Promise<T> {
    return this.repository.save(entity);
  }

  async createAndSave(entity: T | object): Promise<T> {
    try {
      const data = await this.create(entity);

      await this.save(data);

      return data;
    } catch (error) {
      return null;
    }
  }

  async createMany(entities: T[] | object[]): Promise<T[]> {
    return this.repository.create(entities);
  }

  async createAndSaveMany(entities: T[] | object[]) {
    try {
      const data = await this.createMany(entities);

      await this.save(data);

      return data;
    } catch (error) {
      return null;
    }
  }

  async updateOne(id: number, entity) {
    return this.repository.update(id, entity);
  }
}
