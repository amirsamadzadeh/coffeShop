import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export { model };
