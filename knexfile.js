require('dotenv').config('.env');

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
      },
      migrations: {
        directory: './src/app/migrations',
      }
    },
};