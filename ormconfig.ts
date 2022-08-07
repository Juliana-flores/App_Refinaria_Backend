import env from './src/config/env'

export default {
    type: "oracle",
    host: env.databaseCredentials.host,
    port: env.databaseCredentials.port,
    username: env.databaseCredentials.username,
    password: env.databaseCredentials.password,
    database: env.databaseCredentials.database,
    entities: ["src/models/*.ts"],
    logging: true,
    synchronize: true
}