import mongoose from "mongoose";

const schema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },
});

const model = mongoose.models.User || mongoose.model("User", schema);

export { model };
