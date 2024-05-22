import mongoose from "mongoose";

const DB_NAME = "authnextjs";

export async function connect() {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error, please make sure db is up and running: ",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting to DB", error);
  }
}
