
// 1ST way of doing by promise --->>>>>
     
const asyncHandler=(requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}
 

export {asyncHandler}
 


///they both are need to knnow --->

{/* 
2ND way of doing by try catch --->>>>>


it is the higher order function--->> 

const asyncHandler= (fun)=> async(req,res,next)=>{
try {
    await fun(req,res,next)
    
} catch (error) {
    res.status(err.code||500).json({
        success:false,
        message:err.message
    })
}
}
*/}