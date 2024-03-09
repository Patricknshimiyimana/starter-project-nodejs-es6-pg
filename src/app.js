import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import appRouter from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to PostgreSQL using Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );
  
  // Test the database connection
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to PostgreSQL database");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });

app.use(bodyParser.json());
app.use('/api', appRouter)

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
    }
);