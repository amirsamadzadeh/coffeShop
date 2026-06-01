import mongoose from "mongoose";

const schema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
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
});

const model = mongoose.models.User || mongoose.model("User", schema);

export { model };
