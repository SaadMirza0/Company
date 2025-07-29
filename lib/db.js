import mysql from "mysql2/promise";

export async function getConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1122Pakistan@!!!!!",
    database: "company",
  });
  return connection;
}

//3306
