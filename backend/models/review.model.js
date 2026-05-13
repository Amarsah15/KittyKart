import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Products",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    rating: {
      type: String,
      enum: ["1", "2", "3", "4", "5"],
      default: "0",
    },
    comment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const reviewModel = mongoose.model("Reviews", reviewSchema);
