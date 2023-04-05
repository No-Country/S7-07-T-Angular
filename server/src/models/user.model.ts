import { model, Schema } from "mongoose";

interface DocumentNode {
  _doc: any;
}

interface User extends DocumentNode {
  _id: string;
  username: string;
  email: string;
  password: string;
  picture?: string;
  state: Boolean;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "This field is required"],
      unique: true,
    },
    picture: String,
    email: {
      type: String,
      required: [true, "This field is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "This field is required"],
    },
    state: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = model<User>("User", userSchema);
export default User;
