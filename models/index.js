import sequelize from "../config/db.js";
import User from "./userModel.js"   
import Event from "./eventModel.js";


// Many to Many relationship through Registration 

User.belongsToMany(Event,{through:"Registration"})
Event.belongsToMany(User,{through:"Registration"})

export  { sequelize ,User ,Event } // they are sent to server.js