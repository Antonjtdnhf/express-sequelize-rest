require('dotenv').config();
const pg = require('pg');

const pool = new pg.Pool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

(async () => {
    const client = await pool.connect();
    await client.query('drop database if exists sequelize_express_template;');
    await client.query('create database sequelize_express_template;');
    await client.release(true);
    await pool.end();
})();
