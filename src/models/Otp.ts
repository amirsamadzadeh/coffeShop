import mongoose from "mongoose";

const schema = new mongoose.Schema({
  phone: String,
  code: String,
  expireAt: String,
});

const model = mongoose.models.Otp || mongoose.model("Otp", schema);

export { model };
