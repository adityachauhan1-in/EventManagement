import {Event,User }from "../models/index.js"
import {Op } from 'sequelize'


// register user for the event 

export const registerUser = async(req , res) => {
    try {
        const {id , userId} = req.params;
        const event =  await Event.findByPk(id,{include:User})
        const user = await User.findByPk(userId)

        if (!event || !user) return res.status(404).json({ message: "Event or User not found" });

          // Past event check
    if (new Date(event.dateTime) < new Date())
      return res.status(400).json({ message: "Cannot register for past event" });

     const alreadyRegistered = await event.hasUser(user);
    if (alreadyRegistered) return res.status(400).json({ message: "User already registered" });

    // Capacity check
    const registrations = await event.countUsers();
    if (registrations >= event.capacity)
      return res.status(400).json({ message: "Event is full" });

    await event.addUser(user);

    res.status(200).json({message:"Registration Successfull"})
    } catch (error) {
         res.status(500).json({message:"error registering user " , error : error.message})
    }
} 


//Cancel a registration
export const cancelRegistration = async (req, res) => {
  try {
    const { id, userId } = req.params;
    const event = await Event.findByPk(id, { include: User });
    const user = await User.findByPk(userId);

    if (!event || !user) return res.status(404).json({ message: "Event or User not found" });

    const registered = await event.hasUser(user);
    if (!registered)
      return res.status(400).json({ message: "User is not registered for this event" });

    await event.removeUser(user);
    res.status(200).json({ message: "Registration cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling registration", error: error.message });
  }
};