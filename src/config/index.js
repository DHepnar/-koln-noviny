const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    hostname: process.env.HOSTNAME,
    user: process.env.ADMIN_USERNAME,
    pass: process.env.ADMIN_PASSWORD,
};