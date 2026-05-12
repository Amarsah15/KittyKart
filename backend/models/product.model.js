import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    bestseller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const productModel = mongoose.model("Products", productSchema);

export default productModel;
