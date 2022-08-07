require('dotenv').config();

const env = {
  databaseCredentials: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 1521,
    username: process.env.DATABASE_USERNAME || 'dev',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  serverParams: {
    environment: process.env.ENVIRONMENT || 'dev',
    secret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000,
  },
};

export default env;
