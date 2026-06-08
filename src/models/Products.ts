import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  caffeine: {
    type: String,
  },
  weight: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    default: 5,
    required: true,
  },
  packaging: {
    type: String,
    required: true,
  },
  aroma: {
    type: String,
    required: true,
  },
  roast: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export { model };
