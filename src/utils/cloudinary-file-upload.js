 import { v2 as cloudinary} from "cloudinary";
 import fs from 'fs' 
 import { v2 as cloudinary } from 'cloudinary';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINERY_CLOUD_NAME,
        api_key: process.env.CLOUDINERY_API_KEY, 
        api_secret: process.env.CLOUDINERY_API_SECRECT
    });
    
    const uploadOnCloudinery=async(localfilePath)=>{
        try {
            if(!localfilePath) return null
            //uploded the file on the cloudinery
           const response = await  cloudinary.uploader.upload(localfilePath,{
                resource_type:"auto"
            }) 
            // file haas been uploded successfull
            console.log("file is uploded on cloudinery", response.url);
            return response;
        }
        catch(error){
            fs.unlinkSync(localfilePath)
            return null;

        }
    }
    export {uploadOnCloudinery}