import express from "express"
import sequelize from './config/db.js'


const app = express();
app.use(express.json());

const PORT =  process.env.PORT || 5000
 // for dataBase 
sequelize
.authenticate()
.then(() => console.log("DataBase  connected successfully with PostGreSql"))
.catch((err) => console.log("db connectin error :  ", err))

// for models 
sequelize
.sync()
.then(() => console.log("DataBase synced with Models  "))
.catch((err) => console.log("the error occured to connect with MODELS : " , err)) 

app.listen( PORT , () => console.log(`app is running on port : ${PORT}`)) 