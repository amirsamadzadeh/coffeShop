import mongoose from "mongoose";

const schema = new mongoose.Schema({
  phone: Number,
  code: Number,
  expireAt: Date,
});

const model = mongoose.models.Otp || mongoose.model("Otp", schema);

export { model };
