import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../../../shared/interfaces/models/IUser";
import { hashPassword, comparePassword } from "../../../shared/utils/hash";

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre<IUserDocument>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);
  next();
});

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  return comparePassword(candidatePassword, this.password);
};

export default mongoose.model<IUserDocument>("User", UserSchema);
