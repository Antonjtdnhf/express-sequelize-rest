require('dotenv').config();
const pg = require('pg');

(async () => {
    const pool = new pg.Pool({
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'postgres',
    });
    await pool.query(`drop DATABASE if exists ${process.env.DB_DBNAME};`);
    await pool.query(`create DATABASE ${process.env.DB_DBNAME};`);
    await pool.end();
})();
