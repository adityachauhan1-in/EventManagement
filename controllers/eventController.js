import User from "../models/userModel.js";
import Event from "../models/eventModel.js";
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
    return res.status(404).json({ eventId: event.id });
    
} catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
}
}


// get the event Details 
export const getEventDetails = async(req,res) => {
try {
    const event = await Event.findByPk(req.params.id,{  include : User})

    if(!event){
return res.status(404).json( {message:"Event not found "})
    }
    res.json(event);
} catch (error) {
    return res.status(500).json( {message:"error fetching event le ja le " , error:error.message})
}
}

// upcoming events 

export const upcomingEvents = async(req,res)=>{

try {
    const now = new Date();
    const events = await Event.findAll({
      where: { dateTime: { [Op.gt]: now } },
      order: [
        ["dateTime", "ASC"],
        ["location", "ASC"],
      ],
    });
    res.json(events);
} catch (error) {
    return res.status(500).json({
        message:"error fetching Upcoming events" , error : error.message
    })
}
}