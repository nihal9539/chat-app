const url = "mongodb+srv://mohammednihal691:nihal691@cluster0.ib1lt60.mongodb.net/chattApp?retryWrites=true&w=majority"

import mongoose from 'mongoose';
export const connectDB =  () => {

    try {
        const conn =  mongoose.connect(url, {
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
