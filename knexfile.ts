import { Knex } from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const config : Knex.Config = {
    client: 'pg',
    connection: {
      host: "postgres",
      user: "dotladmin",
      password: "dotlpassword",
      database: "dotl"
    },
    migrations: {
      directory: './src/app/migrations',
    }
};

export default config;