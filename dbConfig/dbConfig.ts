import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    // mongodb event
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection fail", err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong in connection to DB");
    console.log(error);
  }
}
