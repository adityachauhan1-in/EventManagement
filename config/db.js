import { Sequelize } from "sequelize";
import dotenv from "dotenv";
 
dotenv.config();

  const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // PostGreSQL via sequelize
  dialectOptions: {

    ssl: { require: true },
  },
  logging: false,
});

export default sequelize;
