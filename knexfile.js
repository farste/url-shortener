// Update with your config settings.
const { dbUrl } = require("./data/dbconfig");

module.exports = {

  development: {
    client: "postgresql",
    connection: dbUrl,
    migrations: {
      directory: "./migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  staging: {
    client: 'pg',
    connection: dbUrl,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: dbUrl,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
