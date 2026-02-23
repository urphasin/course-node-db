const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "yourpassword",
  database: "mydb",
});

async function run() {
  await client.connect();
  const res = await client.query("SELECT NOW()");
  console.log(res.rows);
  await client.end();
}