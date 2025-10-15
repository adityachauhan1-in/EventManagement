import {DataTypes} from "sequelize"
import sequelize from "../config/db.js"

const User = sequelize.define("User" , {
 id: {
    type: DataTypes.INTEGER, // 
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING, // string name 
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING, // email string 
    allowNull: false,
    unique: true, // 
    validate: { isEmail: true },
  },
});

export default User;