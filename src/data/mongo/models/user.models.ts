import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is requiered"],
  },

  email: {
    type: String,
    required: [true, "Email is requiered"],
  },

  emailValidated: {
    type: Boolean,
    default: false,
  },

  password: {
    type: String,
    required: [true, "Password is requiered"],
  },

  img: {
    type: String,
  },

  role: {
    type: [String],
    default: ["USER_ROLES"],
    enum: ["ADIM_ROLES", "USER_ROLES"],
  },
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, option) {
    delete ret._id;
    delete ret.password;
  },
});

export const UserModel = mongoose.model("User", userSchema);
