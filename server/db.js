const Pool = require("pg").Pool;

const pool = new Pool({
  user: "nvs",
  password: "abhishek",
  host: "localhost",
  port: 5432,
  database: "coviddash"
});

module.exports = pool;