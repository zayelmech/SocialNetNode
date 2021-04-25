module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },

    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || '9cMe2DRpBh',
        password: process.env.MYSQL_PASS || '8GpLGI4ghP',
        database: process.env.MYSQL_DB || '9cMe2DRpBh',
    },
}