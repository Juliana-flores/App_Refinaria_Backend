import { createConnection } from 'typeorm';
import type { Connection, EntityTarget, Entity, Repository } from 'typeorm';

export default class Cursor {
  conn: Connection;

  async connect() {
    this.conn = await createConnection();
  }

  getRepository(target: EntityTarget<typeof Entity>): Repository<typeof Entity> {
    return this.conn.getRepository<typeof Entity>(target);
  }
}
