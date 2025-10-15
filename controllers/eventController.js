import User from "../models/userModel";
import Event from "../models/eventModel";
import {Op} from "sequelize"

// create Event 

export const createEvent = async(req,res) => {
try {
    const {title , dateTime , location ,  capacity } = req.body;

    if(!title || !dateTime || !location || !capacity ){ // all fields required 
         return res.status(400).json({ message: "All fields are required" });
    }
         if(capacity < 1 || capacity > 1000){ // capacity check 
               return res.status(400).json({ message: "Capacity must be between 1 and 1000" }); 
         }
         const event = await Event.create({ title, dateTime, location, capacity });
    return res.status(201).json({ eventId: event.id });
    
} catch (error) {
    
}
}