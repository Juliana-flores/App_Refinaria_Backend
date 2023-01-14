import env from "./src/config/env";

export default {
  username: env.databaseCredentials.username,
  password: env.databaseCredentials.password,
  database: env.databaseCredentials.database,
  host: env.databaseCredentials.host,
  port: env.databaseCredentials.port,
  entities: ["src/models/*.ts"],
  synchronize: true,
  type: "oracle",
  logging: true,
};
