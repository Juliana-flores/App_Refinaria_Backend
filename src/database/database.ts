import type { Connection, EntityTarget, Entity } from 'typeorm';
import { createConnection } from 'typeorm';

export default class Database {
  cursor: Connection;

  async connection() {
    this.cursor = await createConnection();
  }

  getRepository(target: EntityTarget<typeof Entity>) {
    return this.cursor.getRepository(target);
  }
}
