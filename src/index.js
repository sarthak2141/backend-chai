

import connectDB from "./db/dbIndex.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})


connectDB() 
















{/* 
 // FIRST APROCH -------------->>>>>
 import express from 'express'
 const app= express();

(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_UI}${DB_NAME}`);
       app.on("ERROR",(error)=>{
        console.log("error",error)
        throw error
        
       })
       app.listen(process.env.PORT,()=>{
        console.log(`Aplication is listing on port${process.env.PORT
        }`);
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()

*/}











