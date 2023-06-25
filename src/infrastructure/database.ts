import { Sequelize } from 'sequelize';

// Define the connection parameters for your PostgreSQL database
const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!), // Your database port
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  });
  
  // Export the sequelize object
  export default db;