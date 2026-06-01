import mongoose from "mongoose";
const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return console.log("DB was connected");
    } else {
      await mongoose.connect(process.env.MONGO_URL!);
      return console.log("DB connected Successfuly !");
    }
  } catch (err) {
    return console.log("cannot connect to DB !", err);
  }
};
export default connectDB;
