import { asyncHandler } from "../utils/ayncHandler.js";

 const registerUser=asyncHandler(async(req,res)=>{
      res.status(200).json({
        message:"kya hall hai vere"
    })
 })
 export {registerUser}