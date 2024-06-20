

import { app } from "./app.js";
import connectDB from "./db/dbIndex.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})


connectDB() 
.then(()=>{

    app.on("error",(errror)=>{
        console.log("Errr:",errror);
        process.exit(0);   
    })
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is runnig at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(" mongo db connection failed !!!",err);
})















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











