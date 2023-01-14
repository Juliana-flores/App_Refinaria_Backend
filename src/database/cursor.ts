import type { EntityTarget, Entity, Repository } from "typeorm";
import { DataSource } from "typeorm";

interface DatabaseCredenditals {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;
}
export default class Cursor {
  dataSource: DataSource;

  constructor(databaseCredentials: DatabaseCredenditals) {
    this.dataSource = new DataSource({
      username: databaseCredentials.username,
      password: databaseCredentials.password,
      database: databaseCredentials.database,
      host: databaseCredentials.host,
      port: databaseCredentials.port,
      entities: ["src/models/*.ts"],
      synchronize: true,
      type: "oracle",
      logging: true,
    });
  }

  async connect() {
    this.dataSource = await this.dataSource.initialize();
  }

  getRepository(
    target: EntityTarget<typeof Entity>
  ): Repository<typeof Entity> {
    return this.dataSource.getRepository<typeof Entity>(target);
  }
}
