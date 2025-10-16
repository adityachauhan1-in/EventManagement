import express from "express"
import sequelize from './config/db.js'
import registrationRoute from "./routes/registrationRoute.js";
import eventRoutes from '../event-management/routes/eventRoutes.js'
// NOTE: These user routes are only for local testing, not part of the assignment requirements.

import userRoute from '../event-management/routes/userRoute.js'
import statRoutes from '../event-management/routes/statRoutes.js'
const app = express();
app.use(express.json());
app.use("/user",userRoute)
app.use("/",registrationRoute)
const PORT =  process.env.PORT || 5000
 // for dataBase 
sequelize
.authenticate()
.then(() => console.log("DataBase  connected successfully "))
.catch((err) => console.log("db connectin error :  ", err))

// for models 
sequelize
.sync()
.then(() => console.log("DataBase synced with Models  "))
.catch((err) => console.log("the error occured to connect with MODELS : " , err)) 


// event details 
app.use("/events",eventRoutes)

// for stats 

app.use("/",statRoutes)
app.listen( PORT , () => console.log(`server is running on port : ${PORT}`)) 