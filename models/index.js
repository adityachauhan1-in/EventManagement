import Event from "./eventModel.js";
import User from "./userModel.js"
import sequelize from "../config/db.js";


// Many to Many relationship through Registration 

User.belongsToMany(Event,{through:"Registration"})
Event.belongsToMany(User,{through:"Registration"})

export default {Event , User , sequelize} // they are sent to server.js