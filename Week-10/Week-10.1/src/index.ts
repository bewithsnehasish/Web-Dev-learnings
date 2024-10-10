import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "root",
});

async function createUsersTable() {
  try {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`;
    const res = await pool.query(createTableQuery);
    console.log("Table creation success:", res);
  } catch (err) {
    console.error("Error during the table creation:", err);
  }
}

async function insertData(username: string, email: string, password: string) {
  try {
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await pool.query(insertQuery, values);
    console.log("Insertion success:", res);
  } catch (err) {
    console.error("Error during the insertion:", err);
  }
}

async function main() {
  // Uncomment the line below if you want to create the table first
  // await createUsersTable();

  await insertData("username5", "user5@example.com", "user_password");
}

main();
