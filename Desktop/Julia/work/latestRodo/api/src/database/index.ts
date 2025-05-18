import {connect} from "mongoose";

export default async function connectMongoDB() {
  const uri = process.env.DATABASE_URL!;

  try {
    await connect(uri).then(con=>{
        console.log('-----------------------------');
        console.log("🟢 Connected to MongoDB");
        console.log(`HOST: ${con.connection.host}`);
        console.log('-----------------------------');
    }).catch(err=>{
        console.log("----------------------------------------------------------------- ")
        console.log("Failed to connect database, please check your internet connection and restart this server.")
        console.log("ERROR: ", err)
        console.log("------------------------------------------------------------------ ")
    })
} catch (error) {
    console.error("🔴 MongoDB connection error:", error);
    process.exit(1); // Exit if DB fails
}
}
