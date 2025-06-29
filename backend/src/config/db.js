import mongoose from "mongoose";


export const connectDB = async () => {

    try {
        
      await mongoose.connect(process.env.MONGO_URI);

    
    console.log("MONDODB CONNECTED SUCCESSFULLY");

} catch (error) {
        console.error("Error Connecting to MONGODB", error);
        process.exit(1); // Exit the process with failure
        
    }

};
   