// import mysql from 'mysql2/promise';

// export async function initializeDB() {
//   const connection = await createConnection();
//   try {
//     // Create users table if it doesn't exist
//     await connection.execute(`
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(50) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         email VARCHAR(100),
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `);

//     // Check if Admin user exists, if not insert it
//     const [rows]: any = await connection.execute('SELECT * FROM users WHERE username = ?', ['Admin']);
//     if (Array.isArray(rows) && rows.length === 0) {
//       await connection.execute(
//         'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
//         ['Admin', 'admin123', 'admin@example.com']
//       );
//       console.log('Added Admin user to database');
//     }
//   } catch (error) {
//     console.error('Database initialization error:', error);
//     throw error;
//   } finally {
//     await connection.end();
//   }
// }

// async function createConnection() {
//   // Determine if running in Docker or locally
//   const isLocal = process.env.RUNNING_LOCALLY === 'true';

//   return await mysql.createConnection({
//     host: isLocal ? 'localhost' : process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: isLocal ? 3306 : undefined, // Use default port when in Docker
//   });
// }

// export async function queryDB(sql: string, values?: any[]) {
//   const connection = await createConnection();

//   try {
//     const [rows] = await connection.execute(sql, values);
//     return rows;
//   } finally {
//     await connection.end();
//   }
// }
