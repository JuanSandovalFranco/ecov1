import mongoose, { models, Schema } from "mongoose";
import validator from "validator";

const userSchema = new Schema({
  name: { type: String, required: [true, "the user must have a username"] },
  photo: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
  },
  address: {
    type: address,
  },
  active: {
    type: String,
    default: true,
    select: false,
  },
  email: {
    type: String,
    required: [true, "the user must have a email"],
    validate: {
      validator: [validator.isEmail, "the user must have a correct email"],
    },
  },
  phone: {
    type: Number,
    required: [true, "the user must have a number phone"],
  },
  password: {
    type: String,
    required: [true, "the user must have a password"],
    minlength: 10,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "the user have be an confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  created_at: {
    type: Date,
    default: new Date.now(),
  },
  modified_at: { type: Date },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
