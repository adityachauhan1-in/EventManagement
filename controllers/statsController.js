import {Event} from '../models/index.js'


export const getEventStats = async(req , res) => {
    try {
        const {id} = req.params;

        const event = await Event.findByPk(id);

    if (!event) 
        return res.status(404).json({ message: "Event not found" });

const registeredCount=  await event.countUsers(); // total registed users 

const remaining = event.capacity - registeredCount;
const percentage = ((registeredCount/event.capacity) * 100).toFixed(2);
res.json({
    eventId: event.id,
    title: event.title,
    totalRegistrations: registeredCount,
    remainingCapacity: remaining,
    percentageUsed: `${percentage}%`,
  });
    } catch (error) {
        res.status(500).json({message:"error fetching stats" , error : error.message})
    }
} 



