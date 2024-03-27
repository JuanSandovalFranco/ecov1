import generateSKU from "lib/generateSKU";
import mongoose, { model, models, Schema } from "mongoose";
import slugify from "slugify";

const productSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "the product must be gretter than 6 characaters"],
    min: [6, "the product must be gretter than 6 characaters"],
    max: [80, "the product must be less than 80 charachters"],
  },
  image: {
    type: String,
    default:
      "https://www.bicifan.uy/wp-content/uploads/2016/09/producto-sin-imagen.png",
  },
  avgRatingStarts: {
    type: Number,
    default: 4.5,
    min: 1,
    max: 5,
  },
  type: {
    type: String,
    enum: ["normal", "variable"],
    default: "normal",
  },
  slug: {
    type: String,
    default: function () {
      return slugify(this.name);
    },
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  modified_at: { type: Date, required: false },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  rating: {
    publishedBy: { type: mongoose.ObjectId, ref: "User" },
    comment: { type: String },
    ratingStart: { type: Number, enum: [1, 2, 3, 4, 5] },
  },
  sales: {
    type: Number,
    required: false,
  },
  images: {
    type: [String],
    required: [true, "a product must have a images"],
  },
  sku: {
    type: String,
    default: generateSKU(),
  },
  price: {
    type: Number,
    required: [true, "the product must have a price"],
  },
  price_discount: {
    type: Number,
  },
  description: {
    type: String,
    required: [true, "the product must have to an description"],
  },
  categories: {
    type: [String],
    default: "categories",
  },
  brand: {
    type: String,
    required: [true, "must have a brand"],
    default: "without brand",
  },
  variants: {
    type: [Number],
  },
});

productSchema.pre(/^create/, function () {
  console.log(this.sku);
});

const Product = models.Product || model("Product", productSchema);

export default Product;
