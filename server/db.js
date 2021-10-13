const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nvs",
  password: "nvs@1666",
  host: "localhost",
  port: 5432,
  database: "coviddash"
});

module.exports = pool;