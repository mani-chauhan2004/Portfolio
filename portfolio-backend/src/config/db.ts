import mongoose from 'mongoose';
import configData from './config';
export const db = async () => {
    try {
        if(!configData.mongoURI) {
            console.log("No connection string found");
            return;
        }
        await mongoose.connect(configData.mongoURI);
        console.log("Connected to the database");
    }catch(error) {
        console.log(error);
    }
}