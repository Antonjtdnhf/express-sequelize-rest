require('dotenv').config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DBNAME,
    DB_HOSTNAME,
    DB_PORT,
    DB_DIALECT,
} = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DBNAME,
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
        dialectOptions: {
            useNativeUUID: true,
        },
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DBNAME,
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DBNAME,
        host: DB_HOSTNAME,
        port: DB_PORT,
        dialect: DB_DIALECT,
    },
};
