const dotenv = require("dotenv");

dotenv.config();

const knex = require('knex');
const knexConfig = require('../knexfile');
const dbUrl = process.env.DATABASE_URL;
const dbEnv = process.env.DB_ENV || 'development';
const port = process.env.PORT || 3300;

module.exports = {
    knex,
    knexConfig,
    dbUrl,
    dbEnv,
    port
}